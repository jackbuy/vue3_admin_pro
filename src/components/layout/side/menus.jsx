import { defineComponent, inject } from 'vue'
import { ElScrollbar } from 'element-plus'

export default defineComponent({
    setup() {
        const menus = inject('menus')
        return () => <div class="menus">
            <ElScrollbar>
                {
                    menus.map(item => (
                        <div
                            class="menus__item"
                            class={item.active}>
                            <div class="menus__item-title">{ item.name }</div>
                        </div>
                    ))
                }
            </ElScrollbar>
        </div>
    }
})
