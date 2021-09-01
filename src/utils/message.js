import {
    ElMessage
} from 'element-plus'

const message = (message, type = 'warning') => {
    ElMessage.warning({
        message,
        type
    })
}

export default {
    message
}
