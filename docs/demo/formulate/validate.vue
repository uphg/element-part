<template>
  <div class="formulate">
    <e-formulate ref="formulateRef" :data="data" />
    <div class="formulate-footer">
      <button @click="onSubmit">立刻创建</button>
      <button @click="onReset">重置</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';

const formulateRef = ref<any>(null)

const data = ref({
  labelWidth: "100px",
  fields: {
    name: {
      label: '活动名称',
      placeholder: '请输入活动名称',
      rules: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
    },
    region: {
      label: '活动区域',
      type: 'select',
      options: [
        { label: '区域一', value: 0 },
        { label: '区域二', value: 1 },
        { label: '区域三', value: 2 },
      ],
      placeholder: '请选择活动区域',
      rules: [{ required: true, message: '请选择活动区域', trigger: 'blur' }]
    },
    date1: {
      label: '活动日期',
      type: 'date',
      placeholder: '选择日期',
      rules: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }]
    },
    date2: {
      label: '活动时间',
      type: 'time',
      placeholder: '请选择时间',
      rules: [{ required: true, message: '请选择时间', trigger: 'change' }]
    },
    delivery: {
      label: '即时配送',
      type: 'switch'
    },
    deliveryAddress: {
      vIf: (formData: { [key: string]: any }) => formData.delivery, 
      label: '配送地址'
    },
    type: {
      label: '活动性质',
      type: 'checkbox',
      options: [
        { label: '美食/餐厅线上活动', value: 0, name: 'type' },
        { label: '地推活动', value: 1, name: 'type' },
        { label: '线下主题活动', value: 2, name: 'type' },
        { label: '单纯品牌曝光', value: 3, name: 'type' },
      ],
      rules: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }]
    },
    resource: {
      label: '特殊资源',
      type: 'radio',
      options: [
        { label: '线上品牌商赞助', value: 0 },
        { label: '线下场地免费', value: 1 },
      ],
      rules: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
      itemSuffix: () => h('div', 'hi'),
    },
    desc: {
      label: '活动形式',
      type: 'textarea',
      rules: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
    }
  }
})

function onSubmit() {
  formulateRef.value?.submit((formData: any, options: { valid: boolean, errors: object }) => {
    console.log(formData, options)
  })
}

function onReset() {
  formulateRef.value?.clearValidate()
}
</script>

<style>
.formulate-footer {
  max-width: 460px;
  margin-top: 22px;
  text-align: center;
}
.formulate-footer button:first-child {
  margin-right: 16px;
}
</style>