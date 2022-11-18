<script setup>
  import { reactive, ref, toRefs } from 'vue'
  import { headStore } from '@/store/head'
  import { storeToRefs } from 'pinia'
  let acitve = ref('first')
  const store = headStore()
  const { title } = storeToRefs(store)
  const data = reactive({
    name: '张三',
  })
  function changeTitle() {
    store.setTiele('change Title')
  }
  const { name } = toRefs(data)
  setTimeout(() => {
    name.value = 'joker'
    console.log(data)
  }, 2000)
</script>
<template>
  <div class="editPanel">
    <el-tabs v-model="acitve">
      <el-tab-pane label="User" name="first">
        <el-button @click="changeTitle">修改标题</el-button>
        <el-input v-model="title"></el-input>
        <div>测试：{{ name }}</div>
      </el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>
