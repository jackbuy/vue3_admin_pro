import { defineComponent } from 'vue'
import Systems from './systems'
import Menus from './menus'

export default defineComponent({
    setup() {
        return () => <>
            <Systems></Systems>
            <Menus></Menus>
        </>
    }
})
