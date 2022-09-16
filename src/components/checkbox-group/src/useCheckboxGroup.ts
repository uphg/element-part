import { h, ref, SetupContext } from "vue";
import { Checkbox as _Checkbox, CheckboxButton, CheckboxGroup } from "element-ui";
import { ElCheckboxGroup } from "element-ui/types/checkbox-group";
import { CheckboxGroupProps, GlobalCheckboxGroupProps } from "./checkboxGroupProps";
import { useComponentProps, UseComponentParamsOptions } from "../../../composables/useComponentProps";

const propNames = ['value', 'disabled']
const globalPropNames = ['min', 'max', 'size', 'fill', 'textColor']

export function useCheckboxGroup(
  props: CheckboxGroupProps,
  context: SetupContext<{}>,
  options?: UseComponentParamsOptions<CheckboxGroupProps, GlobalCheckboxGroupProps>
) {
  const { handleProps } = options || {}
  const elCheckboxGroup = ref<ElCheckboxGroup | null>(null)
  const { createProps, globalProps } = useComponentProps(props, 'form', { propNames, globalPropNames, handleProps })
  const setRef = ((el: ElCheckboxGroup) => elCheckboxGroup.value = el) as unknown as string

  const input = (value: string | number | boolean) => {
    context.emit('input', value)
  }
  const change = (value: string | number | boolean) => {
    context.emit('change', value)
  }

  const Checkbox = (props.withButton || globalProps?.withButton) ? CheckboxButton : _Checkbox
  const withBorder = (props.withBorder || globalProps?.withBorder)

  return {
    render: () => h(CheckboxGroup, {
      ref: setRef,
      props: createProps(),
      on: { input, change }
    }, props.options.map((item) => h(Checkbox, {
      props: {
        label: item.value,
        name: item.name,
        disabled: item.disabled,
        border: item.border || withBorder
      }
    }, [item.label as string])))
  }
}