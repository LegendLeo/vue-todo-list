<template>
  <van-cell-group>
    <todo-adder @addTodo="unshiftTodo" />
    <todo-item v-for="todo in filteredTodos"
               :key="todo.id"
               @toggleStatus="toggleTodoStatus"
               @changeTodo="changeTodoDetail"
               @deleteTodo="deleteTodoItem"
               :todo="todo"></todo-item>
    <todo-filter @changeFilter="toggleTodoList"></todo-filter>
  </van-cell-group>
</template>

<script>
import TodoItem from '@/components/TodoItem'
import TodoAdder from '@/components/TodoAdder'
import TodoFilter from '@/components/TodoFilter'

export default {
  data () {
    return {
      todoList: localStorage.todolist ? JSON.parse(localStorage.todolist) : [],
      status: 'all'
    }
  },
  computed: {
    filteredTodos () {
      if (this.status === 'completed') {
        return this.todoList.filter(item => item.completed === true)
      } else if (this.status === 'ongoing') {
        return this.todoList.filter(item => item.completed === false)
      } else {
        return this.todoList
      }
    }
  },
  watch: {
    todoList (val) {
      let data = JSON.stringify(val)
      localStorage.setItem('todolist', data)
    }
  },
  methods: {
    unshiftTodo (todo) {
      this.todoList.unshift({
        id: this.todoList[0] ? this.todoList[0].id + 1 : 1,
        time: new Date().getTime(),
        detail: todo,
        completed: false
      })
    },
    toggleTodoStatus (id) {
      let target = this.todoList.find(item => item.id === id)
      target.completed = !target.completed
    },
    changeTodoDetail (todo) {
      let target = this.todoList.find(item => item.id === todo.id)
      target.detail = todo.detail
    },
    deleteTodoItem (id) {
      this.todoList = this.todoList.filter(item => item.id !== id)
    },
    toggleTodoList (status) {
      this.status = status
    }
  },
  components: {
    TodoItem,
    TodoAdder,
    TodoFilter
  }
}
</script>
