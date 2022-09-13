import { VueConstructor } from 'vue/types/vue'
import { RadioGroup, radioGroupProps, useRadioGroup } from './radio-group'
import { CheckboxGroup, checkboxGroupProps, useCheckboxGroup } from './checkbox-group'
import { Input, inputProps, useInput } from './input'
import { InputNumber, inputNumberProps, useInputNumber } from './input-number'
import { Select, selectProps, useSelect } from './select'
import { Switch, switchProps, useSwitch } from './switch'
import { Form, formProps, useForm } from './form'
import { FormItem, formItemProps, useFormItem } from './form-item'
import { Formulate, formulateProps, useFormulate } from './formulate'
import { Table, tableProps, useTable } from './table'
import { TableColumn, tableColumnProps, useTableColumn } from './table-column'
import { Pagination, paginationProps, usePagination } from './pagination'
import { StaggeredTransitionGroup } from './staggered-transition-group/index'
import { Upload, uploadProps, useUpload } from './upload'
import { ConfigProvider, configProviderProps, useConfigProvider } from './config-provider'

const components = [RadioGroup, CheckboxGroup, Input, InputNumber, Select, Switch, Form, FormItem, Formulate, Table, TableColumn, Pagination, StaggeredTransitionGroup, Upload, ConfigProvider]

function install(Vue: VueConstructor) {
  components.forEach((item) => {
    Vue.use(item as any)
  })
}

export {
  install,
  RadioGroup,
  CheckboxGroup,
  Input,
  InputNumber,
  Select,
  Switch,
  Form,
  FormItem,
  Formulate,
  Table,
  TableColumn,
  Pagination,
  StaggeredTransitionGroup,
  Upload,
  ConfigProvider,

  useRadioGroup,
  useCheckboxGroup,
  useInput,
  useInputNumber,
  useSelect,
  useSwitch,
  useForm,
  useFormItem,
  useFormulate,
  useTable,
  useTableColumn,
  usePagination,
  useUpload,
  useConfigProvider,

  radioGroupProps,
  checkboxGroupProps,  
  inputProps,
  inputNumberProps,
  selectProps,
  switchProps,
  formProps,
  formItemProps,
  formulateProps,
  tableProps,
  tableColumnProps,
  paginationProps,
  uploadProps,
  configProviderProps,
}
