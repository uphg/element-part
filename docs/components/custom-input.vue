<script lang="ts">
import { inputProps, useInput } from 'src/index'
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'CustomInput',
  props: inputProps,
  inheritAttrs: false,
  setup(props, context) {
    const { expose, render: renderInput } = useInput(props, context)
    context.expose(expose)
    return () => h('div', { class: 'custom-input' }, [
      renderInput(),
      h('i', { class: 'el-icon-search' })
    ])
  }
})
</script>

<style lang="scss">
.custom-input {
  max-width: 180px;
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  .el-input__inner {
    border: none;
    padding: 0;
    border-radius: 0;
    padding-right: 4px;
  }
}
</style>