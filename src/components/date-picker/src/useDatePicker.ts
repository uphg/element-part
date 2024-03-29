import { h, ref, SetupContext } from "vue"
import { VNodeData } from "vue/types/umd"
import { DatePicker as _DatePicker, TimeSelect, TimePicker } from "element-ui"
import { ElDatePicker } from "element-ui/types/date-picker"
import { ElTimePicker } from "element-ui/types/time-picker"
import { ElTimeSelect } from "element-ui/types/time-select"
import { dateBaseProps, globalDateProps, GlobalDateProps, PublicDateProps } from "./dateProps"
import { HandleRef, useComponentProps } from "../../../composables/useComponentProps"
import { globalDatePropNames } from "../../../shared/configPropertyMap"
import { createNames, keys, renderSlot } from "../../../utils"
import { ObjectLike } from "../../../../types/_common"

type UseDatePickerOptions<Props> = {
  type: 1 | 2 | 3; // 1: DatePicker; 2: TimePicker; 3: TimeSelect;
  status?: 0 | 1; // 1: has value; 0: default;
  handleRef?: HandleRef;
  on?: VNodeData['on'];
  handleProps?: (props: Props, globalProps: GlobalDateProps | undefined, _options: { propNames: string[], globalPropNames: string[] }) => () => Props;
}

type DatePickerValue = Date | string | number | (string | number)[]

const componentMap = {
  1: ['datePicker', _DatePicker, 'elDatePicker', ['type', 'timeArrowControl']],
  2: ['timePicker', TimePicker, 'elTimePicker', ['isRange', 'arrowControl']],
  3: ['timeSelect', TimeSelect, 'elTimeSelect', ['type']],
} as {
  1: ['datePicker', typeof _DatePicker, 'elDatePicker', ['type', 'timeArrowControl']];
  2: ['timePicker', typeof TimePicker, 'elTimePicker', ['isRange', 'arrowControl']];
  3: ['timeSelect', typeof TimeSelect, 'elTimeSelect', ['type']];
}

export function useDatePicker<T extends ObjectLike>(
  props: PublicDateProps | T,
  context: SetupContext<{}> | undefined,
  options: UseDatePickerOptions<T | ObjectLike>
) {
  const { handleProps, handleRef: _handleRef } = options || {} 
  const DatePicker = componentMap[options.type][1]
  const elDatePicker = ref<ElDatePicker | ElTimePicker | ElTimeSelect | null>(null)
  const publicPropNames = createNames(dateBaseProps, options.status) 
  const propNames = [...componentMap[options.type][3], ...publicPropNames]
  const globalPropNames = keys(globalDateProps)
  const { createProps } = useComponentProps(props, componentMap[options.type][0], { propNames, globalPropNames, handleProps })
  const on = context?.emit ? {
    input(value: DatePickerValue) {
      context.emit('input', value)
    },
    change(value: DatePickerValue) {
      context.emit('change', value)
    },
    blur(event: MouseEvent) {
      context.emit('blur', event)
    },
    focus(event: FocusEvent) {
      context.emit('focus', event)
    }
  } : options?.on

  const handleRef = (_handleRef || ((el: ElDatePicker | ElTimePicker | ElTimeSelect) => elDatePicker.value = el)) as unknown as string
  const renderChildren = context?.slots && (() => renderSlot(context, 'range-separator'))

  return {
    expose: {
      focus() {
        elDatePicker.value
      },
      get [componentMap[options.type][2]]() {
        return elDatePicker.value
      }
    },
    render: () => h(DatePicker!, { ref: handleRef, props: createProps(), on }, renderChildren && [renderChildren()])
  }
}