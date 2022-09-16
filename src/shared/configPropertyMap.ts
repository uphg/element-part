export type ConfigPropertyMap = typeof configPropertyMap
export type ConfigPropertyName = keyof (typeof configPropertyMap)

export const globalInputKey = Symbol('config-input')
export const globalFormKey = Symbol('config-form')
export const globalTableKey = Symbol('config-table')
export const globalTableColumnKey = Symbol('config-table-column')
export const globalPaginationKey = Symbol('config-pagination')
export const globalUploadKey = Symbol('config-upload')
export const globalRadioGroupKey = Symbol('config-radio-group')
export const globalCheckboxGroupKey = Symbol('config-checkbox-group')
export const globalInputNumberKey = Symbol('config-input-number')
export const globalSwitchKey = Symbol('config-switch')

export const configPropertyMap = {
  radioGroup: {
    key: globalRadioGroupKey,
    propNames: ['size', 'textColor', 'fill', 'withBorder', 'withButton']
  },
  checkboxGroup: {
    key: globalCheckboxGroupKey,
    propNames: ['min', 'max', 'size', 'textColor', 'fill', 'withBorder', 'withButton']
  },
  input: {
    key: globalInputKey,
    propNames: ['clearable', 'showWordLimit', 'autosize', 'size', 'maxlength']
  },
  inputNumber: {
    key: globalInputNumberKey,
    propNames: ['min', 'max', 'step', 'stepStrictly', 'precision', 'size', 'controls', 'controlsPosition']
  },
  switch: {
    key: globalSwitchKey,
    propNames: ['width', 'activeIconClass', 'inactiveIconClass', 'activeText', 'inactiveText', 'activeValue', 'inactiveValue', 'activeColor', 'inactiveColor', 'validateEvent']
  },
  upload: {
    key: globalUploadKey,
    propNames: ['action', 'headers', 'multiple', 'data', 'showFileList', 'drag', 'accept', 'listType', 'autoUpload', 'httpRequest']
  },
  form: {
    key: globalFormKey,
    propNames: ['inline', 'labelPosition', 'labelWidth', 'inlineMessage', 'size']
  },
  table: {
    key: globalTableKey,
    propNames: ['maxHeight', 'stripe', 'border', 'size', 'fit', 'showHeader', 'highlightCurrentRow']
  },
  tableColumn: {
    key: globalTableColumnKey,
    propNames: ['className', 'resizable', 'showOverflowTooltip']
  },
  pagination: {
    key: globalPaginationKey,
    propNames: ['small', 'background', 'pagerCount', 'layout', 'pageSizes', 'popperClass', 'prevText', 'nextText', 'hideOnSinglePage']
  }
}