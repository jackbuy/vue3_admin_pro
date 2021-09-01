import { http } from '@/utils'

const apis = {
    // getIds: '/v1/follow/pageList',
    bookList: '/bookList'
}

// 获取列表
export const getList = () => http({
    url: apis.bookList,
    context: 'ibook',
    method: 'POST',
    data: {
        currentPage: 1,
        pageSize: 10
    }
})
