import { defineComponent, inject } from 'vue'
import { ElScrollbar } from 'element-plus'

export default defineComponent({
    setup() {
        const systems = inject('systems')
        return () => <div class="systems">
            <ElScrollbar>
                {
                    systems.map(item => (
                        <div
                            class="systems__item"
                            class={ item.active }>
                            <div class="systems__item-icon"><i class={ item.icon }></i></div>
                            <div class="systems__item-title">{ item.name }</div>
                        </div>
                    ))
                }
            </ElScrollbar>
        </div>
    }
})
