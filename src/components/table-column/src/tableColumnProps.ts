import { ExtractPropTypes, PropType } from "vue";
import { empty, stringProp } from "../../../shared/commonProps";

export type GlobalTableColumnProps = ExtractPropTypes<typeof globalTableColumnProps>
export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>

export type TableColumnExtendsType = keyof (typeof defaultFormats)

export const defaultFormats = {
  date: 'yyyy-MM-dd',
  time: 'HH:mm:ss',
  datetime: 'yyyy-MM-dd HH:mm:ss',
  month: 'yyyy-MM',
  year: 'yyyy'
}

export const elTableColumnTypes = ['selection','index','expand']
export const extendColumnTypes = ['date', 'time', 'datetime', 'month', 'year']

export const globalTableColumnProps = {
  className: {
    type: stringProp,
    default: empty
  },
  resizable: {
    type: Boolean as PropType<boolean>,
    default: empty
  },
  showOverflowTooltip: {
    type: Boolean as PropType<boolean>,
    default: empty
  }
}

export const tableColumnBaseProps = {
  type: {
    type: String as PropType<'selection' | 'index' | 'expand' | TableColumnExtendsType>,
    default: 'default'
  },
  label: stringProp,
  labelClassName: stringProp,
  property: stringProp,
  prop: stringProp,
  width: {} as PropType<object>,
  minWidth: {} as PropType<object>,
  renderHeader: Function as PropType<Function>,
  sortable: {
    type: [Boolean, String] as PropType<boolean | string>,
    default: false
  },
  sortMethod: Function as PropType<Function>,
  sortBy: [String, Function, Array] as PropType<string | Function | string[]>,
  columnKey: stringProp,
  align: stringProp,
  headerAlign: stringProp,
  showTooltipWhenOverflow: Boolean as PropType<boolean>,
  fixed: [Boolean, String] as PropType<boolean | string>,
  formatter: Function as PropType<Function>,
  selectable: Function as PropType<Function>,
  reserveSelection: Boolean as PropType<boolean>,
  filterMethod: Function as PropType<Function>,
  filteredValue: Array as PropType<unknown[]>,
  filters: Array as PropType<unknown[]>,
  filterPlacement: stringProp,
  filterMultiple: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  index: [Number, Function] as PropType<number | Function>,
  sortOrders: {
    type: Array as PropType<Array<'ascending' | 'descending' | null>>,
    default() {
      return ['ascending', 'descending', null];
    },
    validator(val: any) {
      return val.every((order: string) => ['ascending', 'descending', null].indexOf(order) > -1);
    }
  }
}

export const tableColumnProps = {
  ...tableColumnBaseProps,
  ...globalTableColumnProps,

  // 自定义属性
  emptyText: {
    type: stringProp,
    default: ''
  }
}
