import { http, getApiUrl } from '@/utils'

const apis = {
    getIds: '/v1/follow/pageList',
    getList: '/v1/task-event/query'
}

// 获取列表
export const getList = (form) => {
    return new Promise((resolve, reject) => {
        const params = {
            url: getApiUrl(apis.getIds, 'follow'),
            method: 'POST',
            data: {
                currentPage: 1,
                pageSize: 10
            }
        }
        http(params).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err)
        })
    })
}
