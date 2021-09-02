import { defineComponent, inject } from 'vue'
import { ElScrollbar } from 'element-plus'

export default defineComponent({
    setup() {
        const menus = inject('breadnavs')
        return () => <div class="breadnav">
            <ElScrollbar>
                <div class="breadnav__content" style={{ width: `${120 * menus.length}px` }}>
                    {
                        menus.map(item => (
                            <div class={ item.active === 'active' ? 'active' : '' }>{ item.name }</div>
                        ))
                    }
                </div>
            </ElScrollbar>
        </div>
    }
})
