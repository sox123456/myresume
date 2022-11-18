import { defineStore } from 'pinia'

export const headStore = defineStore('headStore', {
  state: () => {
    return {
      title: '测试',
    }
  },
  actions: {
    setTiele(title) {
      this.title = title
    },
  },
})
