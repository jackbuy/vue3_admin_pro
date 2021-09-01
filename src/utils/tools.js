import { ipConfig, storage } from '@/utils'

// 获取apiurl
export const getApiUrl = (api, type = 'masterData') => {
    return `${ipConfig[type]}${api}`
}

// 跳转到登录页面
export const toLogin = () => {
    storage.remove('userInfo')
    window.location.href = '/'
}
