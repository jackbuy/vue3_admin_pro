import { defineComponent, ref } from 'vue'
import { getList } from './async'

export default defineComponent({
    setup() {
        const s = ref('')
        getList().then((res) => {
            console.log('then', res)
            s.value = res.data
        }).catch((err) => {
            console.log('catch', err)
        })
        return () => <div>case {s.value}</div>
    }
})
