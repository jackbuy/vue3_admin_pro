import { ipConfig } from '@/utils'

// 获取apiurl
const getApiUrl = (api, type = 'masterData') => {
    return `${ipConfig[type]}${api}`
}

export default {
    getApiUrl
}
