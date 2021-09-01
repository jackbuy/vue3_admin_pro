import axios from 'axios'
import qs from 'qs'
import { storage, message } from '@/utils'

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
    if (response.data.err_code === 3) {
        message(response.data.err_msg, 'warning')
        return Promise.reject(new Error(response.data.err_msg))
    } else {
        return Promise.resolve(response.data)
    }
}, function(error) {
    return Promise.reject(error)
})

/**
 * request
 * @author zhaozj
 * @description http请求封装
 * @param {String}    url        api地址             必须
 * @param {String}    method     支持 GET、POST、PUT
 * @param {Objet}     data       请求参数
 * @param {Objet}     header     自定义header
 * @param {String}    errorMsg   自定义错误提示
 */
const http = ({
    method,
    url,
    data,
    header = {}
}) => {
    return new Promise((resolve, reject) => {
        const params = {
            method,
            url,
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
