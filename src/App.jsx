import { defineComponent } from 'vue'
import Layout from './components/layout'

export default defineComponent({
    setup() {
        return () => <Layout/>
        // return () => <router-view/>
    }
})
