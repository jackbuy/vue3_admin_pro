import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import {
    ElInput,
    ElButton
} from 'element-plus'
import './login.scss'

import { message, storage } from '@/utils'
import { loginKeycloak } from './async'

export default defineComponent({
    setup() {
        const router = useRouter()
        const state = reactive({
            form: {}
        })

        const isChineseChar = (str) => {
            const reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/
            return reg.test(str)
        }

        const handleSubmit = () => {
            const { username, password } = state.form
            if (!username) return message('请输入账号')
            if (!password) return message('请输入密码')
            if (isChineseChar(username)) return message('账号不能包含中文')
            if (isChineseChar(password)) return message('密码不能包含中文')
            const params = {
                username: username.toLowerCase(),
                password
            }
            loginKeycloak(params).then((res) => {
                const userInfo = {
                    username: params.username,
                    token: res.access_token,
                    refreshToken: res.refresh_token
                }
                storage.set('userInfo', JSON.stringify(userInfo))
                router.push({
                    path: '/case'
                })
            })
        }
        return () => {
            const { form } = state
            return <div class="login">
                <div>
                    <ElInput v-model={form.username}></ElInput>
                </div>
                <div>
                    <ElInput v-model={form.password}></ElInput>
                </div>
                <div>
                    <ElButton onClick={handleSubmit}>登录</ElButton>
                </div>
            </div>
        }
    }
})
