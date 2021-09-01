import { clientId, realm, http, getTokenConfig } from '@/utils'

// 登录Keycloak
export const loginKeycloak = (form) => http({
    url: getTokenConfig.url(realm),
    context: getTokenConfig.context,
    method: 'POST',
    data: {
        client_id: clientId,
        grant_type: 'password',
        ...form
    },
    header: { 'content-type': 'application/x-www-form-urlencoded' }
})

// 登录upms
// export const loginUPMS = (form) => {
//     return new Promise((resolve, reject) => {
//         const params = {
//             url: this.$getApiUrl(api.getUpmsToken, 'upms'),
//             method: 'POST',
//             data: {
//                 clientId,
//                 realm,
//                 ...form
//             },
//             header: { 'content-type': 'application/json' },
//             errorMsg: '用户名密码或错误！'
//         }
//         this.$request(params).then((res) => {
//             const { userName, token } = res.data
//             const userInfo = {
//                 username: userName,
//                 token,
//             }
//             uni.setStorageSync('userInfo', JSON.stringify(userInfo))
//             resolve(res)
//         }).catch((err) => {
//             reject(err)
//         })
//     })
// }
