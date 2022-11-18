<script setup>
  const props = defineProps({
    title: String,
  })
  console.log(props)
</script>
<template>
  <div class="head">
    <div class="title">{{ title }}</div>
    <div class=""></div>
  </div>
</template>

<style lang="scss" scoped></style>
