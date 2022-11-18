<script setup>
  import { headStore } from '@/store/head'
  import { storeToRefs } from 'pinia'
  const store = headStore()
  const { title } = storeToRefs(store)
</script>
<template>
  <div class="head">
    <div class="title">{{ title }}</div>
    <div class=""></div>
  </div>
</template>

<style lang="scss" scoped></style>
