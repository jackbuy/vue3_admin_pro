import { ipConfig } from '@/utils'
const getApiUrl = (api, type = 'masterData') => {
    return `${ipConfig[type]}${api}`
}

export default {
    getApiUrl
}
