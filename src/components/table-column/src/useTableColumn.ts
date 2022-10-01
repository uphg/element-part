import { h, SetupContext } from "vue"
import { TableColumn } from "element-ui";
import { VNodeData } from "vue/types/umd";
import { createDateFormat } from "./createDateFormat";
import { handleColumnType } from "./handleColumnType";
import { extendColumnTypes, TableColumnProps, GlobalTableColumnProps } from "./tableColumnProps";
import { UseComponentParamsOptions, useComponentProps } from "../../../composables/useComponentProps";
import { globalTableColumnPropNames } from '../../../shared/configPropertyMap'
import { ObjectLike } from "../../../../types/_common";

const propNames = ['label', 'labelClassName', 'property', 'prop', 'width', 'minWidth', 'renderHeader', 'sortable', 'sortMethod', 'sortBy', 'columnKey', 'align', 'headerAlign', 'showTooltipWhenOverflow', 'fixed', 'formatter', 'selectable', 'reserveSelection', 'filterMethod', 'filteredValue', 'filters', 'filterPlacement', 'filterMultiple', 'index', 'sortOrders']

export function useTableColumn(
  props: TableColumnProps,
  context?: SetupContext<{}>,
  options?: UseComponentParamsOptions<TableColumnProps | ObjectLike, GlobalTableColumnProps>
) {
  const { handleProps } = options || {}
  const { createProps } = useComponentProps(props, 'table', { propNames, globalPropNames: globalTableColumnPropNames, handleProps })
  const type = handleColumnType(props.type)
  let formatter = props.formatter
  if (props.prop && extendColumnTypes.includes(props.type)) {
    formatter = createDateFormat(props)
  }

  return {
    render() {
      const scopedSlots: VNodeData['scopedSlots'] | undefined = context?.slots && {
        default: (scope) => context.slots.default?.(scope),
        header: (scope) => context.slots.header?.(scope),
      }
      return h(TableColumn, {
        props: {
          ...createProps(),
          formatter: formatter,
          type
        },
        scopedSlots
      })
    }
  }
}