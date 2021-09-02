import { defineComponent, provide, reactive } from 'vue'
import Side from './side'
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
                active: 'active',
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
                url: ''
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
                url: '',
                active: 'active'
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
        provide('systems', systems)
        provide('menus', menus)
        return () => <>
            <Side></Side>
            <BreadNav></BreadNav>
        </>
    }
})
