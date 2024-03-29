# ConfigProvider

配置组件默认值，根据嵌套组件层级划分作用域

## 基本用法

全局化配置设置内部组件的属性默认值（只支持当前库重写的组件）

::: demo

config-provider/base

:::

## 模块化

ConfigProvider 可以模块化使用，根据最近的 ConfigProvider 组件配置默认值

::: demo

config-provider/inherit

:::

## ConfigProvider Attributes

以下是组件支持全局配置的属性列表

### RadioGroup 单选框组

| 参数       | 说明                                                       | 类型    | 可选值                | 默认值  |
| :--------- | :--------------------------------------------------------- | :------ | :-------------------- | :------ |
| size       | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效 | string  | medium / small / mini | —       |
| text-color | 按钮形式的 Radio 激活时的文本颜色                          | string  | —                     | #ffffff |
| fill       | 按钮形式的 Radio 激活时的填充色和边框色                    | string  | —                     | #409EFF |
| withBorder | radio 是否以按钮形式渲染                                   | boolean | —                     | false   |
| withButton | 是否显示边框                                               | boolean | —                     | false   |

### CheckboxGroup 多选框组

| 参数       | 说明                                                         | 类型    | 可选值                | 默认值  |
| :--------- | :----------------------------------------------------------- | :------ | :-------------------- | :------ |
| size       | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效 | string  | medium / small / mini | —       |
| min        | 可被勾选的 checkbox 的最小数量                               | number  | —                     | —       |
| max        | 可被勾选的 checkbox 的最大数量                               | number  | —                     | —       |
| text-color | 按钮形式的 Checkbox 激活时的文本颜色                         | string  | —                     | #ffffff |
| fill       | 按钮形式的 Checkbox 激活时的填充色和边框色                   | string  | —                     | #409EFF |
| withBorder | radio 是否以按钮形式渲染                                     | boolean | —                     | false   |
| withButton | 是否显示边框                                                 | boolean | —                     | false   |

### Input 输入框

| 参数            | 说明                                                         | 类型             | 可选值                                                       | 默认值 |
| :-------------- | :----------------------------------------------------------- | :--------------- | :----------------------------------------------------------- | :----- |
| type            | 类型                                                         | string           | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form__types) | text   |
| maxlength       | 原生属性，最大输入长度                                       | number           | —                                                            | —      |
| minlength       | 原生属性，最小输入长度                                       | number           | —                                                            | —      |
| show-word-limit | 是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效 | boolean          | —                                                            | false  |
| clearable       | 是否可清空                                                   | boolean          | —                                                            | false  |
| show-password   | 是否显示切换密码图标                                         | boolean          | —                                                            | false  |
| size            | 输入框尺寸，只在 `type!="textarea"` 时有效                   | string           | medium / small / mini                                        | —      |
| prefix-icon     | 输入框头部图标                                               | string           | —                                                            | —      |
| suffix-icon     | 输入框尾部图标                                               | string           | —                                                            | —      |
| rows            | 输入框行数，只对 `type="textarea"` 有效                      | number           | —                                                            | 2      |
| autosize        | 自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 } | boolean / object | —                                                            | false  |
| autocomplete    | 原生属性，自动补全                                           | string           | on, off                                                      | off    |
| name            | 原生属性                                                     | string           | —                                                            | —      |
| max             | 原生属性，设置最大值                                         | —                | —                                                            | —      |
| min             | 原生属性，设置最小值                                         | —                | —                                                            | —      |
| step            | 原生属性，设置输入字段的合法数字间隔                         | —                | —                                                            | —      |
| resize          | 控制是否能被用户缩放                                         | string           | none, both, horizontal, vertical                             | —      |
| autofocus       | 原生属性，自动获取焦点                                       | boolean          | true, false                                                  | false  |
| form            | 原生属性                                                     | string           | —                                                            | —      |
| label           | 输入框关联的label文字                                        | string           | —                                                            | —      |
| tabindex        | 输入框的tabindex                                             | string           | -                                                            | -      |
| validate-event  | 输入时是否触发表单的校验                                     | boolean          | -                                                            | true   |

### InputNumber 计数器

| 参数              | 说明                     | 类型    | 可选值       | 默认值    |
| :---------------- | :----------------------- | :------ | :----------- | :-------- |
| min               | 设置计数器允许的最小值   | number  | —            | -Infinity |
| max               | 设置计数器允许的最大值   | number  | —            | Infinity  |
| step              | 计数器步长               | number  | —            | 1         |
| step-strictly     | 是否只能输入 step 的倍数 | boolean | —            | false     |
| precision         | 数值精度                 | number  | —            | —         |
| size              | 计数器尺寸               | string  | large, small | —         |
| controls          | 是否使用控制按钮         | boolean | —            | true      |
| controls-position | 控制按钮位置             | string  | right        | -         |
| name              | 原生属性                 | string  | —            | —         |
| label             | 输入框关联的label文字    | string  | —            | —         |

### Select 选择器

| 参数                  | 说明                                                         | 类型     | 可选值            | 默认值     |
| :-------------------- | :----------------------------------------------------------- | :------- | :---------------- | :--------- |
| multiple              | 是否多选                                                     | boolean  | —                 | false      |
| value-key             | 作为 value 唯一标识的键名，绑定值为对象类型时必填            | string   | —                 | value      |
| size                  | 输入框尺寸                                                   | string   | medium/small/mini | —          |
| clearable             | 是否可以清空选项                                             | boolean  | —                 | false      |
| collapse-tags         | 多选时是否将选中值按文字的形式展示                           | boolean  | —                 | false      |
| multiple-limit        | 多选时用户最多可以选择的项目数，为 0 则不限制                | number   | —                 | 0          |
| name                  | select input 的 name 属性                                    | string   | —                 | —          |
| autocomplete          | select input 的 autocomplete 属性                            | string   | —                 | off        |
| auto-complete         | 下个主版本弃用                                               | string   | —                 | off        |
| filterable            | 是否可搜索                                                   | boolean  | —                 | false      |
| allow-create          | 是否允许用户创建新条目，需配合 `filterable` 使用             | boolean  | —                 | false      |
| filter-method         | 自定义搜索方法                                               | function | —                 | —          |
| remote                | 是否为远程搜索                                               | boolean  | —                 | false      |
| remote-method         | 远程搜索方法                                                 | function | —                 | —          |
| loading-text          | 远程加载时显示的文字                                         | string   | —                 | 加载中     |
| no-match-text         | 搜索条件无匹配时显示的文字，也可以使用`slot="empty"`设置     | string   | —                 | 无匹配数据 |
| no-data-text          | 选项为空时显示的文字，也可以使用`slot="empty"`设置           | string   | —                 | 无数据     |
| popper-class          | Select 下拉框的类名                                          | string   | —                 | —          |
| reserve-keyword       | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词     | boolean  | —                 | false      |
| default-first-option  | 在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用 | boolean  | -                 | false      |
| popper-append-to-body | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false | boolean  | -                 | true       |
| automatic-dropdown    | 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单 | boolean  | -                 | false      |

###  Cascader 级联选择器

| 参数            | 说明                                      | 类型    | 可选值                | 默认值    |
| :-------------- | :---------------------------------------- | :------ | :-------------------- | :-------- |
| options         | 可选项数据源，键名可通过 `Props` 属性配置 | array   | —                     | —         |
| props           | 配置选项，具体见下表                      | object  | —                     | —         |
| size            | 尺寸                                      | string  | medium / small / mini | —         |
| clearable       | 是否支持清空选项                          | boolean | —                     | false     |
| show-all-levels | 输入框中是否显示选中值的完整路径          | boolean | —                     | true      |
| collapse-tags   | 多选模式下是否折叠Tag                     | boolean | -                     | false     |
| separator       | 选项分隔符                                | string  | —                     | 斜杠' / ' |
| debounce        | 搜索关键词输入的去抖延迟，毫秒            | number  | —                     | 300       |
| popper-class    | 自定义浮层类名                            | string  | —                     | —         |

### Switch 开关

| 参数                | 说明                                                         | 类型                      | 可选值 | 默认值  |
| :------------------ | :----------------------------------------------------------- | :------------------------ | :----- | :------ |
| width               | switch 的宽度（像素）                                        | number                    | —      | 40      |
| active-icon-class   | switch 打开时所显示图标的类名，设置此项会忽略 `active-text`  | string                    | —      | —       |
| inactive-icon-class | switch 关闭时所显示图标的类名，设置此项会忽略 `inactive-text` | string                    | —      | —       |
| active-text         | switch 打开时的文字描述                                      | string                    | —      | —       |
| inactive-text       | switch 关闭时的文字描述                                      | string                    | —      | —       |
| active-value        | switch 打开时的值                                            | boolean / string / number | —      | true    |
| inactive-value      | switch 关闭时的值                                            | boolean / string / number | —      | false   |
| active-color        | switch 打开时的背景色                                        | string                    | —      | #409EFF |
| inactive-color      | switch 关闭时的背景色                                        | string                    | —      | #C0CCDA |
| name                | switch 对应的 name 属性                                      | string                    | —      | —       |
| validate-event      | 改变 switch 状态时是否触发表单的校验                         | boolean                   | -      | true    |

### Slider 滑块

| 参数                | 说明                                                         | 类型            | 可选值                        | 默认值 |
| :------------------ | :----------------------------------------------------------- | :-------------- | :---------------------------- | :----- |
| min                 | 最小值                                                       | number          | —                             | 0      |
| max                 | 最大值                                                       | number          | —                             | 100    |
| step                | 步长                                                         | number          | —                             | 1      |
| show-input          | 是否显示输入框，仅在非范围选择时有效                         | boolean         | —                             | false  |
| show-input-controls | 在显示输入框的情况下，是否显示输入框的控制按钮               | boolean         | —                             | true   |
| input-size          | 输入框的尺寸                                                 | string          | large / medium / small / mini | small  |
| show-stops          | 是否显示间断点                                               | boolean         | —                             | false  |
| show-tooltip        | 是否显示 tooltip                                             | boolean         | —                             | true   |
| format-tooltip      | 格式化 tooltip message                                       | function(value) | —                             | —      |
| range               | 是否为范围选择                                               | boolean         | —                             | false  |
| vertical            | 是否竖向模式                                                 | boolean         | —                             | false  |
| height              | Slider 高度，竖向模式时必填                                  | string          | —                             | —      |
| label               | 屏幕阅读器标签                                               | string          | —                             | —      |
| debounce            | 输入时的去抖延迟，毫秒，仅在`show-input`等于true时有效       | number          | —                             | 300    |
| tooltip-class       | tooltip 的自定义类名                                         | string          | —                             | —      |
| marks               | 标记， key 的类型必须为 number 且取值在闭区间 `[min, max]` 内，每个标记可以单独设置样式 | object          | —                             | —      |

### TimePicker 时间选择器 & DatePicker 日期选择器 &  DateTimePicker 日期时间选择器

| 参数              | 说明                                           | 类型     | 可选值                                                       | 默认值               |
| :---------------- | :--------------------------------------------- | :------- | :----------------------------------------------------------- | :------------------- |
| editable          | 文本框可输入                                   | boolean  | —                                                            | true                 |
| clearable         | 是否显示清除按钮                               | boolean  | —                                                            | true                 |
| size              | 输入框尺寸                                     | string   | large, small, mini                                           | —                    |
| placeholder       | 非范围选择时的占位内容                         | string   | —                                                            | —                    |
| start-placeholder | 范围选择时开始日期的占位内容                   | string   | —                                                            | —                    |
| end-placeholder   | 范围选择时结束日期的占位内容                   | string   | —                                                            | —                    |
| format            | 显示在输入框中的格式                           | string   | 见[日期格式](https://element.eleme.cn/#/zh-CN/component/date-picker#ri-qi-ge-shi) | yyyy-MM-dd           |
| align             | 对齐方式                                       | string   | left, center, right                                          | left                 |
| popper-class      | DatePicker 下拉框的类名                        | string   | —                                                            | —                    |
| picker-options    | 当前时间日期选择器特有的选项参考下表           | object   | —                                                            | {}                   |
| range-separator   | 选择范围时的分隔符                             | string   | —                                                            | '-'                  |
| default-value     | 可选，选择器打开时默认显示的时间               | Date     | 可被`new Date()`解析                                         | —                    |
| default-time      | 范围选择时选中日期所使用的当日内具体时刻       | string[] | 数组，长度为 2，每项值为字符串，形如`12:00:00`，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 `00:00:00` | —                    |
| value-format      | 可选，绑定值的格式。不指定则绑定值为 Date 对象 | string   | 见[日期格式](https://element.eleme.cn/#/zh-CN/component/date-picker#ri-qi-ge-shi) | —                    |
| name              | 原生属性                                       | string   | —                                                            | —                    |
| unlink-panels     | 在范围选择器里取消两个日期面板之间的联动       | boolean  | —                                                            | false                |
| prefix-icon       | 自定义头部图标的类名                           | string   | —                                                            | el-icon-date         |
| clear-icon        | 自定义清空图标的类名                           | string   | —                                                            | el-icon-circle-close |
| validate-event    | 输入时是否触发表单的校验                       | boolean  | -                                                            | true                 |
| append-to-body    | DetePicker 自身是否插入至 body 元素上。        | boolean  | —                                                            | true                 |

### Upload 上传

| 参数             | 说明                                                         | 类型                               | 可选值                    | 默认值 |
| :--------------- | :----------------------------------------------------------- | :--------------------------------- | :------------------------ | :----- |
| action           | 必选参数，上传的地址                                         | string                             | —                         | —      |
| headers          | 设置上传的请求头部                                           | object                             | —                         | —      |
| multiple         | 是否支持多选文件                                             | boolean                            | —                         | —      |
| data             | 上传时附带的额外参数                                         | object                             | —                         | —      |
| name             | 上传的文件字段名                                             | string                             | —                         | file   |
| with-credentials | 支持发送 cookie 凭证信息                                     | boolean                            | —                         | false  |
| show-file-list   | 是否显示已上传文件列表                                       | boolean                            | —                         | true   |
| drag             | 是否启用拖拽上传                                             | boolean                            | —                         | false  |
| accept           | 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)（thumbnail-mode 模式下此参数无效） | string                             | —                         | —      |
| on-preview       | 点击文件列表中已上传的文件时的钩子                           | function(file)                     | —                         | —      |
| on-remove        | 文件列表移除文件时的钩子                                     | function(file, fileList)           | —                         | —      |
| on-success       | 文件上传成功时的钩子                                         | function(response, file, fileList) | —                         | —      |
| on-error         | 文件上传失败时的钩子                                         | function(err, file, fileList)      | —                         | —      |
| on-progress      | 文件上传时的钩子                                             | function(event, file, fileList)    | —                         | —      |
| on-change        | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 | function(file, fileList)           | —                         | —      |
| before-upload    | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。 | function(file)                     | —                         | —      |
| before-remove    | 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。 | function(file, fileList)           | —                         | —      |
| list-type        | 文件列表的类型                                               | string                             | text/picture/picture-card | text   |
| auto-upload      | 是否在选取文件后立即进行上传                                 | boolean                            | —                         | true   |
| http-request     | 覆盖默认的上传行为，可以自定义上传的实现                     | function                           | —                         | —      |
| limit            | 最大允许上传个数                                             | number                             | —                         | —      |
| on-exceed        | 文件超出个数限制时的钩子                                     | function(files, fileList)          | —                         | -      |

### Form 表单

| 参数                    | 说明                                                         | 类型    | 可选值                | 默认值 |
| :---------------------- | :----------------------------------------------------------- | :------ | :-------------------- | :----- |
| inline                  | 行内表单模式                                                 | boolean | —                     | false  |
| label-position          | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width` | string  | right/left/top        | right  |
| label-width             | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 `auto`。 | string  | —                     | —      |
| hide-required-asterisk  | 是否隐藏必填字段的标签旁边的红色星号                         | boolean | —                     | false  |
| show-message            | 是否显示校验错误信息                                         | boolean | —                     | true   |
| inline-message          | 是否以行内形式展示校验信息                                   | boolean | —                     | false  |
| validate-on-rule-change | 是否在 `rules` 属性改变后立即触发一次验证                    | boolean | —                     | true   |
| size                    | 用于控制该表单内组件的尺寸                                   | string  | medium / small / mini | —      |

### FormItem 表单项

| 参数 | 说明     | 类型   | 可选值                                                       | 默认值 |
| :--- | :------- | :----- | :----------------------------------------------------------- | :----- |
| type | 组件类型 | string | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form__types) | text   |

### Table 表格

| 参数                    | 说明                                                         | 类型                                                  | 可选值                         | 默认值                                                     |
| :---------------------- | :----------------------------------------------------------- | :---------------------------------------------------- | :----------------------------- | :--------------------------------------------------------- |
| height                  | Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。 | string/number                                         | —                              | —                                                          |
| max-height              | Table 的最大高度。合法的值为数字或者单位为 px 的高度。       | string/number                                         | —                              | —                                                          |
| stripe                  | 是否为斑马纹 table                                           | boolean                                               | —                              | false                                                      |
| border                  | 是否带有纵向边框                                             | boolean                                               | —                              | false                                                      |
| size                    | Table 的尺寸                                                 | string                                                | medium / small / mini          | —                                                          |
| fit                     | 列的宽度是否自撑开                                           | boolean                                               | —                              | true                                                       |
| show-header             | 是否显示表头                                                 | boolean                                               | —                              | true                                                       |
| highlight-current-row   | 是否要高亮当前行                                             | boolean                                               | —                              | false                                                      |
| current-row-key         | 当前行的 key，只写属性                                       | String,Number                                         | —                              | —                                                          |
| row-class-name          | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | Function({row, rowIndex})/String                      | —                              | —                                                          |
| row-style               | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 | Function({row, rowIndex})/Object                      | —                              | —                                                          |
| cell-class-name         | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | —                              | —                                                          |
| cell-style              | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | —                              | —                                                          |
| header-row-class-name   | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。 | Function({row, rowIndex})/String                      | —                              | —                                                          |
| header-row-style        | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。 | Function({row, rowIndex})/Object                      | —                              | —                                                          |
| header-cell-class-name  | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | —                              | —                                                          |
| header-cell-style       | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | —                              | —                                                          |
| row-key                 | 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：`user.info.id`，但不支持 `user.info[0].id`，此种情况请使用 `Function`。 | Function(row)/String                                  | —                              | —                                                          |
| empty-text              | 空数据时显示的文本内容，也可以通过 `slot="empty"` 设置       | String                                                | —                              | 暂无数据                                                   |
| default-expand-all      | 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 | Boolean                                               | —                              | false                                                      |
| expand-row-keys         | 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。 | Array                                                 | —                              |                                                            |
| default-sort            | 默认的排序列的 prop 和顺序。它的`prop`属性指定默认的排序的列，`order`指定默认排序的顺序 | Object                                                | `order`: ascending, descending | 如果只指定了`prop`, 没有指定`order`, 则默认顺序是ascending |
| tooltip-effect          | tooltip `effect` 属性                                        | String                                                | dark/light                     |                                                            |
| show-summary            | 是否在表尾显示合计行                                         | Boolean                                               | —                              | false                                                      |
| sum-text                | 合计行第一列的文本                                           | String                                                | —                              | 合计                                                       |
| summary-method          | 自定义的合计计算方法                                         | Function({ columns, data })                           | —                              | —                                                          |
| span-method             | 合并行或列的计算方法                                         | Function({ row, column, rowIndex, columnIndex })      | —                              | —                                                          |
| select-on-indeterminate | 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行 | Boolean                                               | —                              | true                                                       |
| indent                  | 展示树形数据时，树节点的缩进                                 | Number                                                | —                              | 16                                                         |
| lazy                    | 是否懒加载子节点数据                                         | Boolean                                               | —                              | —                                                          |
| load                    | 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息 | Function(row, treeNode, resolve)                      | —                              | —                                                          |
| tree-props              | 渲染嵌套数据的配置选项                                       | Object                                                | —                              | { hasChildren: 'hasChildren', children: 'children' }       |

### TableColumn 表格列

| 参数                  | 说明                                                         | 类型    | 可选值 | 默认值 |
| :-------------------- | :----------------------------------------------------------- | :------ | :----- | :----- |
| class-name            | 列的 className                                               | string  | —      | —      |
| resizable             | 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真） | boolean | —      | true   |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip                               | Boolean | —      | false  |

### Pagination 分页

| 参数                | 说明                                     | 类型     | 可选值                                                       | 默认值                                 |
| :------------------ | :--------------------------------------- | :------- | :----------------------------------------------------------- | :------------------------------------- |
| small               | 是否使用小型分页样式                     | boolean  | —                                                            | false                                  |
| background          | 是否为分页按钮添加背景色                 | boolean  | —                                                            | false                                  |
| pager-count         | 页码按钮的数量，当总页数超过该值时会折叠 | number   | 大于等于 5 且小于等于 21 的奇数                              | 7                                      |
| layout              | 组件布局，子组件名用逗号分隔             | String   | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot` | 'prev, pager, next, jumper, ->, total' |
| page-sizes          | 每页显示个数选择器的选项设置             | number[] | —                                                            | [10, 20, 30, 40, 50, 100]              |
| popper-class        | 每页显示个数选择器的下拉框类名           | string   | —                                                            | —                                      |
| prev-text           | 替代图标显示的上一页文字                 | string   | —                                                            | —                                      |
| next-text           | 替代图标显示的下一页文字                 | string   | —                                                            | —                                      |
| hide-on-single-page | 只有一页时是否隐藏                       | boolean  | —                                                            | -                                      |

### Link 链接

| 参数      | 说明           | 类型    | 可选值                                      | 默认值  |
| :-------- | :------------- | :------ | :------------------------------------------ | :------ |
| type      | 类型           | string  | primary / success / warning / danger / info | default |
| underline | 是否下划线     | boolean | —                                           | true    |
| href      | 原生 href 属性 | string  | —                                           | -       |
| icon      | 图标类名       | string  | —                                           | -       |

### Tag 标签

| 参数                | 说明             | 类型    | 可选值                      | 默认值 |
| :------------------ | :--------------- | :------ | :-------------------------- | :----- |
| type                | 类型             | string  | success/info/warning/danger | —      |
| closable            | 是否可关闭       | boolean | —                           | false  |
| disable-transitions | 是否禁用渐变动画 | boolean | —                           | false  |
| hit                 | 是否有边框描边   | boolean | —                           | false  |
| color               | 背景色           | string  | —                           | —      |
| size                | 尺寸             | string  | medium / small / mini       | —      |
| effect              | 主题             | string  | dark / light / plain        | light  |

<script setup lang="ts">
import ConfigProviderBase from 'docs/demo/config-provider/base.vue'
import ConfigProviderInherit from 'docs/demo/config-provider/inherit.vue'
</script>

<style>
.demo-config-provider .el-input {
  max-width: 220px;
}
</style>