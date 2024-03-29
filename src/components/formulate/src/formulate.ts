import { defineComponent } from "vue"
import { formulateProps } from "./formulateProps"
import { useFormulate } from "./useFormulate"

export default defineComponent({
  name: 'EFormulate',
  props: formulateProps,
  inheritAttrs: false,
  setup(props, context) {
    const { expose, render } = useFormulate(props, context)
    context.expose(expose)
    return render
  }
})
