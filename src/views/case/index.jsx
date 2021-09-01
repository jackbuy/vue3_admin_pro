import { defineComponent, ref } from 'vue'
import { getList } from './async'

export default defineComponent({
    setup() {
        const s = ref([])
        getList().then((res) => {
            s.value = res.data
        })
        return () => <div>
            <div>事件</div>
            {
                s.value.map(item => <div>{ item.name }</div>)
            }
        </div>
    }
})
