import { http } from '@/utils'

const apis = {
    getIds: '/v1/follow/pageList'
}

// 获取列表
export const getList = () => http({
    url: apis.getIds,
    context: 'follow',
    method: 'POST',
    data: {
        currentPage: 1,
        pageSize: 10
    }
})
