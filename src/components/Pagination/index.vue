<template>
  <el-pagination
    v-model:currentPage="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[10, 20, 40, 60, 80, 100]"
    background
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    layout="total, sizes, prev, pager, next, jumper"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  page: number
  limit: number
  total: number
}>()

const emit = defineEmits<{
  (e: 'update:page', value: number): void
  (e: 'update:limit', value: number): void
  (e: 'pagination'): void
}>()

const currentPage = computed({
  get() {
    return props.page
  },
  set(val: number) {
    emit('update:page', val)
  }
})

const pageSize = computed({
  get() {
    return props.limit
  },
  set(val: number) {
    emit('update:limit', val)
  }
})

const handleSizeChange = () => {
  emit('pagination')
}
const handleCurrentChange = () => {
  emit('pagination')
}
</script>

<style lang="scss" scoped></style>
