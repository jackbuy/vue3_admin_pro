import { defineComponent, provide, reactive } from 'vue'
import Side from './side'
import UserCard from './userCard'
import Copyright from './copyright'
import BreadNav from './breadNav'
import './scss/index.scss'

export default defineComponent({
    setup() {
        const systems = reactive([
            {
                name: '首页',
                url: '',
                icon: 'icon-shouye2-01'
            },
            {
                name: '关账系统',
                url: '',
                icon: 'icon-cangku1'
            },
            {
                name: '作业管理',
                url: '',
                icon: 'icon-baobiao'
            },
            {
                name: '表单管理',
                url: '',
                icon: 'icon-renwu'
            },
            {
                name: '流程管理',
                url: '',
                icon: 'icon-liucheng'
            },
            {
                name: '总账报表',
                url: '',
                active: 'active',
                icon: 'icon-baobiao1'
            },
            {
                name: '权限管理',
                url: '',
                icon: 'icon-quanxianguanli2'
            },
            {
                name: '作业管理',
                url: '',
                icon: 'icon-baobiao'
            },
            {
                name: '表单管理',
                url: '',
                icon: 'icon-renwu'
            },
            {
                name: '流程管理',
                url: '',
                icon: 'icon-liucheng'
            },
            {
                name: '总账报表',
                url: '',
                icon: 'icon-baobiao1'
            },
            {
                name: '作业管理',
                url: '',
                icon: 'icon-baobiao'
            },
            {
                name: '表单管理',
                url: '',
                icon: 'icon-renwu'
            },
            {
                name: '流程管理',
                url: '',
                icon: 'icon-liucheng'
            },
            {
                name: '总账报表',
                url: '',
                icon: 'icon-baobiao1'
            },
            {
                name: '作业管理',
                url: '',
                icon: 'icon-baobiao'
            },
            {
                name: '表单管理',
                url: '',
                icon: 'icon-renwu'
            },
            {
                name: '流程管理',
                url: '',
                icon: 'icon-liucheng'
            },
            {
                name: '总账报表',
                url: '',
                icon: 'icon-baobiao1'
            },
            {
                name: '权限管理',
                url: '',
                icon: 'icon-quanxianguanli2'
            }
        ])
        const menus = reactive([
            {
                name: '任务管理',
                url: '',
                active: 'active'
            },
            {
                name: '工单管理',
                url: ''
            },
            {
                name: 'sla配置',
                url: ''
            },
            {
                name: '任务名称管理',
                url: ''
            },
            {
                name: '流程提交',
                url: ''
            },
            {
                name: 'SPT配置',
                url: ''
            }
        ])
        const userInfo = reactive({
            username: 'brs_admin',
            org: '万科财务共享中心',
            menus: [
                {
                    title: '通知',
                    icon: 'icon-youjian1',
                    handler: () => { alert('a') }
                },
                {
                    title: '导出队列',
                    icon: 'icon-duilie-cloudfog',
                    handler: () => { alert('a') }
                },
                {
                    title: '任务借调',
                    icon: 'icon-youjian1',
                    handler: () => { alert('a') }
                },
                {
                    title: '全屏显示',
                    icon: 'icon-quanping2',
                    handler: () => { alert('a') }
                },
                {
                    title: '主题',
                    icon: 'icon-quanping2',
                    handler: () => { alert('a') }
                },
                {
                    title: '锁屏',
                    icon: 'icon-quanping2',
                    handler: () => { alert('a') }
                },
                {
                    title: '语言',
                    icon: 'icon-baobiao',
                    handler: () => { alert('a') }
                },
                {
                    title: '修改密码',
                    icon: 'icon-quanping2',
                    handler: () => { alert('a') }
                },
                {
                    title: '退出',
                    icon: 'icon-duilie-cloudfog',
                    handler: () => { alert('a') }
                }
            ]
        })
        const breadnavs = reactive([
            {
                name: '工单管理'
            },
            {
                name: '任务管理',
                active: 'active'
            }
        ])
        provide('systems', systems)
        provide('menus', menus)
        provide('userInfo', userInfo)
        provide('breadnavs', breadnavs)
        return () => <>
            <Side></Side>
            <UserCard></UserCard>
            <Copyright></Copyright>
            <BreadNav></BreadNav>
        </>
    }
})
