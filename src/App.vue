<template>
  <div id="app">
    <Todo />
  </div>
</template>

<script>
import Todo from './views/Todo/Todo'

export default {
  name: 'app',
  components: {
    Todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 32px auto 0;
  max-width: 960px;
}
</style>
