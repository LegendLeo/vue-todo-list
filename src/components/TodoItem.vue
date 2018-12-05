<template>
  <van-cell center
            class="todo">
    <template slot="icon">
      <van-icon :name="todo.completed ? 'certificate' : 'check'"
                @click="toggleStatus(todo.id)"></van-icon>
    </template>
    <van-field slot="title"
               v-model="todoDetail"
               :ref="'todo' + todo.id"
               :key="todo.id"
               :class="['todo-input', todo.completed ? 'todo-input__completed' : 'todo-input__ongoing']"
               :disabled="todo.completed"
               @keyup.enter="changeTodo"
               @blur="changeTodo"></van-field>
    <span class="todo-text__time">{{ todo.time | formatTime }}</span>
    <van-icon slot="right-icon"
              @click="deleteTodo(todo.id)"
              name="delete"></van-icon>
  </van-cell>
</template>

<script>
export default {
  data () {
    return {
      todoDetail: this.todo.detail
    }
  },
  props: {
    todo: Object
  },
  methods: {
    toggleStatus (id) {
      this.$emit('toggleStatus', id)
    },
    changeTodo () {
      if (this.todoDetail === this.todo.detail) {
        return
      }
      this.$emit('changeTodo', {
        id: this.todo.id,
        detail: this.todoDetail
      })
      this.$refs['todo' + this.todo.id].blur()
      this.$notify({
        message: '更改成功',
        background: '#4b0'
      })
    },
    deleteTodo (id) {
      this.$dialog.confirm({
        message: '确认删除此项待办事项？'
      })
        .then(() => {
          this.$emit('deleteTodo', id)
        })
        .catch(() => { })
    }
  },
  filters: {
    formatTime (time) {
      function get2Str (str) {
        let newStr = '0' + str
        return newStr.substr(newStr.length - 2, 2)
      }
      time = new Date(time)
      let m = time.getMonth() + 1
      let d = time.getDate()
      let hh = time.getHours()
      let mm = time.getMinutes()
      return `${get2Str(m)}-${get2Str(d)} ${get2Str(hh)}:${get2Str(mm)}`
    }
  }
}
</script>

<style lang="less">
.todo {
  .van-cell__title {
    flex: 3;
  }
  .van-icon {
    font-size: 1.2em;
    &-delete {
      color: #f44;
    }
  }
}
</style>

<style lang="less" scoped>
.todo {
  &-input {
    margin-left: 2px;
    &__completed {
      text-decoration: line-through;
    }
  }
  &-text {
    &__time {
      // color: @gray;
      font-size: 12px;
      margin-right: 0.5em;
    }
  }
}
</style>
