import { defineComponent } from 'vue'
import { ElButton, ElRow } from 'element-plus'

export default defineComponent({
    setup() {
        return () => <div>
            this is case page
            <ElRow>
                <ElButton type="primary">新增</ElButton>
                <ElButton>批量删除</ElButton>
                <ElButton>批量启用</ElButton>
            </ElRow>
        </div>
    }
})
