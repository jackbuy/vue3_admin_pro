import {
    ElMessage
} from 'element-plus'

export const message = (message, type = 'warning') => {
    ElMessage.warning({
        message,
        type
    })
}
