import { h, SetupContext } from "vue"
import { ElForm } from "element-ui/types/form"
import { formBaseProps, FormProps, globalFormProps, GlobalFormProps } from "./formProps"
import { useElForm } from "../../../composables/useElForm"
import { Form } from "element-ui"
import { UseComponentParamsOptions, useComponentProps } from "../../../composables/useComponentProps"
import { ObjectLike } from "../../../../types/_common"
import { keys } from "../../../utils"

export function useForm(
  props: FormProps,
  context: SetupContext<{}> | undefined,
  options?: UseComponentParamsOptions<FormProps | ObjectLike, GlobalFormProps>
) {
  const { handleProps, handleRef: _handleRef, handleScopedSlots, renderChildren: _renderChildren } = options || {}
  const propNames = keys(formBaseProps)
  const globalPropNames = keys(globalFormProps)
  const { createProps } = useComponentProps(props, 'form', { propNames, globalPropNames, handleProps })
  const { elForm, validate, validateField, clearValidate } = useElForm()
  const handleRef = (_handleRef || ((el: ElForm) => elForm.value = el)) as unknown as string
  const scopedSlots = handleScopedSlots?.(context?.slots)

  const on = options?.on ? options.on : context?.emit ? {
    validate(prop: string, errors: boolean, validateMessage: string | null) {
      context.emit('validate', prop, errors, validateMessage)
    }
  } : {}

  const renderChildren = _renderChildren ? _renderChildren : (!scopedSlots && context?.slots?.default && (() => context.slots.default?.()))

  return {
    expose: {
      validate,
      validateField,
      clearValidate,
      get elForm() { return elForm.value }
    },
    render() {
      return h(Form, { ref: handleRef, props: createProps(), on, scopedSlots }, renderChildren && [renderChildren()])
    }
  }
}