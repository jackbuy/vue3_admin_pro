/**
 * ip地址
 */

// atl配置
// const ipConfig = {
//     kpi: 'http://172.23.52.19:10008', // (kpi) 24
//     message: 'http://172.23.52.19:10005', // (消息) 23
//     follow: 'http://172.23.52.19:10006', // (关注) 22
//     masterData: 'http://172.23.52.19:10004', // (三种类型，工作台，通讯录，用户，版本管理) 21
//     extend: 'http://172.23.52.19:10007', // 任务，事件，交班，评论，分享 20
//     keycloak: 'http://172.23.52.19:8004',
//     upms: 'http://172.23.52.19:10002',
//     fms: 'http://172.23.52.19:10003',
//     // fms: 'http://srv.bestbrs.com:88/fms', // 走网关暂时有问题
//     fileLoadServer: 'http://172.23.52.23/'
// }

// 本地调试 - 开发环境
// const ipConfig = {
//     kpi: 'http://192.168.2.220:10024', // (kpi) 24
//     message: 'http://192.168.2.220:10023', // (消息) 23
//     follow: 'http://192.168.2.220:10022', // (关注) 22
//     masterData: 'http://192.168.2.220:10021', // (三种类型，工作台，通讯录，用户，版本管理) 21
//     extend: 'http://192.168.2.220:10020', // 任务，事件，交班，评论，分享 20
//     keycloak: 'http://192.168.2.221:8004',
//     upms: 'http://192.168.2.220:8112',
//     fms: 'http://192.168.2.221:8120',
//     fileLoadServer: 'http://192.168.2.221/'
//     // fms: 'http://39.100.81.88:10016',
//     // fileLoadServer: 'http://119.23.10.4/'
// }

// 外网 - 阿里云测试环境
const ipConfig = {
    kpi: 'http://39.100.81.88:10024', // (kpi) 24
    message: 'http://39.100.81.88:10023', // (消息) 23
    follow: 'http://39.100.81.88:10022', // (关注) 22
    masterData: 'http://39.100.81.88:10021', // (三种类型，工作台，通讯录，用户，版本管理) 21
    extend: 'http://39.100.81.88:10020', // 任务，事件，交班，评论，分享 20
    keycloak: 'http://39.100.78.58:8004',
    upms: 'http://39.100.81.88:10008',
    fms: 'http://39.100.81.88:10016',
    // fms: 'http://srv.bestbrs.com:88/fms', // 走网关暂时有问题
    fileLoadServer: 'http://119.23.10.4/'
}

/**
 * 客户端环境
 */
const clientId = 'brs'

/**
 * 客户端租户
 */
// 最新版v1.0.0.36
const realm = 'brs'
// export const realm = 'qian'
// 最新版v1.3.1
// export const realm = 'atl'

export default {
    realm,
    clientId,
    ipConfig
}
