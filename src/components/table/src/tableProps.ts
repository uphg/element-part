import { ExtractPropTypes, PropType } from "vue";
import { ScopedSlot } from "vue/types/vnode";
import { ButtonType } from "element-ui/types/button";
import { ElementUIComponentSize } from "element-ui/types/component";
import { empty } from "../../../shared/commonProps";
import { VNode } from "vue/types/umd";
import { RowCallbackParams } from "../../../../types/_element-ui";
import { TableColumnProps } from "../../../components/table-column/src/tableColumnProps";
import { TableColumn } from "element-ui";

export type GlobalTableProps = ExtractPropTypes<typeof globalTableProps>
export type TableProps = ExtractPropTypes<typeof tableProps>

export type TableColumnChildrenProps = {
  type: 'button' | 'link';
  text: string;
  hue: ButtonType;
  size: ElementUIComponentSize;
  onClick: (scope: RowCallbackParams) => void
}

export type TableObjectColumnProps = {
  children?: TableColumnChildrenProps[] | ((scope: { row: RowCallbackParams['row'], column: TableColumn, $index: number }) => VNode);
  scopedSlots?: { [key: string]: ScopedSlot | undefined };
} & TableColumnProps

export const globalTableProps = {
  // global props
  size: {
    type: [String, undefined] as PropType<ElementUIComponentSize | undefined>,
    default: empty
  },
  maxHeight: {
    type: [String, Number] as PropType<string | number | undefined>
  },
  stripe: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: empty
  },
  border: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: empty
  },
  fit: {
    type: Boolean,
    default: true
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  highlightCurrentRow: Boolean
}

export const tableProps = {
  data: {
    type: Array,
    default: function() {
      return [];
    }
  },
  width: [String, Number],
  height: [String, Number],
  rowKey: [String, Function],
  context: {},
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default() {
      return {
        hasChildren: 'hasChildren',
        children: 'children'
      };
    }
  },
  lazy: Boolean,
  load: Function,
  ...globalTableProps,

  // custom props
  columns: {
    type: Array as PropType<Array<TableObjectColumnProps>>,
    default: () => []
  }
}
