<template>
  <e-select
    v-model="select"
    placeholder="请选择地区"
    :option-groups="optionGroups"
  >
    <template v-slot:options="slotProps">
      <span style="float: left">{{ slotProps.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ slotProps.value }}</span>
    </template>
  </e-select>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const select = ref('')
const optionGroups = ref([{
  label: '热门城市',
  options: [
    { value: 'Shanghai', label: '上海' },
    { value: 'Beijing', label: '北京' }
  ]
}, {
  label: '城市名',
  options: [
    { value: 'Chengdu', label: '成都' },
    { value: 'Shenzhen', label: '深圳' },
    { value: 'Guangzhou', label: '广州' },
    { value: 'Dalian', label: '大连' }
  ]
}])
</script>