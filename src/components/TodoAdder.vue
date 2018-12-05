<template>
  <van-cell center>
    <van-field v-model="newTodo"
               @keyup.enter="addTodo"
               @blur="addTodo(true)"
               placeholder="在这里输入新的待办事项..."></van-field>
  </van-cell>
</template>

<script>
export default {
  data () {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo (blur) {
      if (this.newTodo) {
        this.$emit('addTodo', this.newTodo)
        this.newTodo = ''
        this.$notify({
          message: '添加成功',
          background: '#4b0'
        })
      } else if (!blur) {
        this.$toast.fail('请输入事项！')
      }
    }
  }
}
</script>
