import { h, ref, SetupContext } from "vue"
import { RadioGroup, RadioButton, Radio as _Radio } from "element-ui"
import { ElRadioGroup } from "element-ui/types/radio-group"
import { RadioGroupProps, GlobalRadioGroupProps } from "./radioGroupProps"
import { useComponentProps, UseComponentParamsOptions } from "../../../composables/useComponentProps"

const propNames = ['value', 'disabled', 'options']
const globalPropNames = ['size', 'textColor', 'fill']

export function useRadioGroup(
  props: RadioGroupProps,
  context: SetupContext<{}>,
  options?: UseComponentParamsOptions<RadioGroupProps, GlobalRadioGroupProps>
) {
  const { handleProps } = options || {}
  const elRadioGroup = ref<ElRadioGroup | null>(null)
  const { createProps, globalProps } = useComponentProps(props, 'form', { propNames, globalPropNames, handleProps })
  const setRef = ((el: ElRadioGroup) => elRadioGroup.value = el) as unknown as string

  const input = (value: string | number | boolean) => {
    context.emit('input', value)
  }
  const change = (value: string | number | boolean) => {
    context.emit('change', value)
  }
  const on = { input, change }

  const Radio = (props.withButton || globalProps?.withButton) ? RadioButton : _Radio
  const withBorder = (props.withBorder || globalProps?.withBorder)

  return {
    render: () => h(RadioGroup, {
      ref: setRef,
      props: createProps(),
      on
    }, props.options.map((item) => h(Radio, {
      props: {
        label: item.value,
        name: item.name,
        disabled: item.disabled,
        border: item.border || withBorder
      }
    }, [item.label as string])))
  }
}