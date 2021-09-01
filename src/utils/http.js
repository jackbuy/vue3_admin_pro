import axios from 'axios'
import qs from 'qs'
import { storage, message, getApiUrl, http as _http, toLogin } from '@/utils'

// apis
const apis = {
    getToken: (company) => `/auth/realms/${company}/protocol/openid-connect/token`
}

// 是否正在刷新的标记
let isRefreshing = false
// 重试队列，每一项将是一个待执行的函数形式
let requests = []

// 刷新token
const refreshToken = () => {
    return new Promise((resolve, reject) => {
        const userInfo = storage.get('userInfo')
        if (!userInfo) return reject(new Error())
        const { refreshToken, username, company } = JSON.parse(userInfo)
        const params = {
            url: apis.getToken(company),
            context: 'keycloak',
            method: 'POST',
            data: {
                client_id: 'brs',
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }
        _http(params)
            .then((res) => {
                const userInfo = {
                    company,
                    username,
                    token: res.access_token,
                    refreshToken: res.refresh_token
                }
                storage.set('userInfo', JSON.stringify(userInfo))
                resolve(res.access_token)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

// 请求拦截器
axios.interceptors.request.use(function(config) {
    // config.method 会自动转换成小写 如： POST 转成 post
    if (config.method === 'post' || config.method === 'put') {
        config.data = qs.stringify(config.data) // formData
        // config.data = qs.parse(config.data) // 对象(json)
    }
    return config
}, function(error) {
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function(response) {
    const { code, messageI18nCode } = response.data
    if (code === 600) {
        const config = response.config
        if (!isRefreshing) {
            isRefreshing = true
            return refreshToken().then((token) => {
                config.headers.Authorization = `Bearer ${token}`
                // 已经刷新了token，将所有队列中的请求进行重试
                requests.forEach(cb => cb(token))
                requests = []
                return axios(config)
            }).catch(res => {
                // 刷新token失败，跳转到登录页
                toLogin()
            }).finally(() => {
                isRefreshing = false
            })
        } else {
            // 正在刷新token，将返回一个未执行resolve的promise
            return new Promise((resolve) => {
                // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
                requests.push((token) => {
                    config.headers.Authorization = `Bearer ${token}`
                    resolve(axios(config))
                })
            })
        }
    } else {
        if (code !== 200 && !response.data.access_token) {
            message(messageI18nCode, 'warning')
            return Promise.reject(new Error(messageI18nCode))
        } else {
            return Promise.resolve(response.data)
        }
    }
}, function(error) {
    return Promise.reject(error)
})

/**
 * http
 * @author zhaozj
 * @description http请求封装
 * @param {Objet}     context    IP                  必须
 * @param {String}    url        api地址             必须
 * @param {Objet}     data       请求参数
 * @param {String}    method     支持 GET、POST、PUT
 * @param {Objet}     header     自定义header
 */
const http = ({
    context,
    url,
    data,
    method = 'get',
    header = {}
}) => {
    return new Promise((resolve, reject) => {
        const params = {
            method,
            url: getApiUrl(url, context),
            data
        }
        if (Object.keys(header).length) {
            params.headers = header // 自定义header
        } else {
            // 设置token
            const userInfo = storage.get('userInfo') || ''
            if (userInfo) {
                const token = JSON.parse(userInfo).token
                params.headers = {
                    Authorization: `Bearer ${token}`
                }
            } else {
                // 没有token, 跳转到登录
                toLogin()
            }
        }
        axios(params).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

export default http
