import { defineComponent, inject, reactive, ref } from 'vue'
import { ElPopover } from 'element-plus'

export default defineComponent({
    setup() {
        const userInfo = inject('userInfo')
        const limit = ref(4)
        let menus = reactive([])
        let lastMenus = reactive([])
        if (userInfo.menus && userInfo.menus.length) {
            menus = userInfo.menus.filter((item, index) => index < limit.value)
            if (userInfo.menus.length > 3) {
                lastMenus = userInfo.menus.filter((item, index) => index >= limit.value)
            }
        }
        const slots = {
            default: () => lastMenus.map(item => (
                <div class="user-card-menu-more-item">
                    <div class="user-card-menu-more-item__icon"><i class={ item.icon }></i></div>
                    <div class="user-card-menu-more-item__title">{ item.title }</div>
                </div>
            )),
            reference: () => <div class="user-card__content-menu-item">
                <i class="icon-more"></i>
            </div>
        }
        return () => <div class="user-card">
            <div class="user-card__side">
                <div class="user-card__side-icon">OM</div>
            </div>
            <div class="user-card__content">
                <div class="user-card__content-user">上午好，{ userInfo.username }</div>
                <div class="user-card__content-org">{ userInfo.org }</div>
                <div class="user-card__content-menu">
                    {
                        menus.map(item => (
                            <div
                                class="user-card__content-menu-item"
                                title={ item.title }
                                onClick={ () => item.handler() }>
                                <i class={ item.icon }></i>
                            </div>
                        ))
                    }
                    {
                        menus.length >= limit.value &&
                        <ElPopover
                            v-slots={slots}
                            placement="bottom-start"
                            trigger="hover">
                        </ElPopover>
                    }
                </div>
            </div>
        </div>
    }
})
