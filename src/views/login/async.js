import { clientId, realm, http } from '@/utils'

const apis = {
    getToken: `/auth/realms/${realm}/protocol/openid-connect/token`,
    getUpmsToken: '/user/login'
}

// 登录Keycloak
export const loginKeycloak = (form) => http({
    url: apis.getToken,
    context: 'keycloak',
    method: 'POST',
    data: {
        client_id: clientId,
        grant_type: 'password',
        ...form
    },
    header: { 'content-type': 'application/x-www-form-urlencoded' },
    errorMsg: '用户名密码或错误！'
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
