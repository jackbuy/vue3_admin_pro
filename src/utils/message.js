import {
    ElMessage,
    ElMessageBox
} from 'element-plus'

/**
 * message
 * @author zhaozj
 * @param {String} message 提示内容
 * @param {String} type 支持4种类型 success | warning | error | 空
 */
export const message = ({
    message,
    type = 'warning'
}) => {
    if (type) {
        ElMessage[type]({ message })
    } else {
        ElMessage(message)
    }
}

/**
 * messageBox
 * @author zhaozj
 * @param {String} messageTitle 提示标题
 * @param {String} message 提示内容
 * @param {String} type 提示类型 支持4种类型 success | warning | error | 空
 * @param {String} confirmButtonText 确认按钮文字
 * @param {String} cancelButtonText 取消按钮文字
 * @return Promise
 */
export const messageBox = ({
    messageTitle = '提示',
    message,
    type = 'warning',
    confirmButtonText = '确定',
    cancelButtonText = '取消'
}) => {
    return ElMessageBox.confirm(message, messageTitle, {
        confirmButtonText,
        cancelButtonText,
        type
    })
}
