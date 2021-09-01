import { ipConfig } from '@/utils'

// 获取apiurl
export const getApiUrl = (api, type = 'masterData') => {
    return `${ipConfig[type]}${api}`
}
