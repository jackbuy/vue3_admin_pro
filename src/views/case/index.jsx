import { defineComponent } from 'vue'
import { getList } from './async'

export default defineComponent({
    setup() {
        getList().then((res) => {
            console.log(res)
        })
        return () => <div>case</div>
    }
})
