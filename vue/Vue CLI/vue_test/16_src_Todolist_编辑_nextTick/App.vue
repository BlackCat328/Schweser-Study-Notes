<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"></MyHeader>
        <List :todos="todos"></List>
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import List from './components/List'


export default {
  name: "app",
  components: {
    MyHeader,
    MyFooter,
    List
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    //勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach(todo => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    //删除
    deleteTodo(_, id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    //全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach(todo => todo.done = done)
    },
    //清楚所有已完成todo
    clearAllTodo() {
      this.todos = this.todos.filter(todo => !todo.done)
    },
    //修改
    updateTodo(id,title) {
      this.todos.forEach(todo => {
        if (todo.id === id) todo.title = title
      })
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(val) {
        localStorage.setItem('todos', JSON.stringify(val))
      }
    }
  },
  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('updateTodo', this.updateTodo)
    this.pubid = pubsub.subscribe('deleteTodo', this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    this.$bus.$off('updateTodo')
    pubsub.unsubscribe(this.pubid)
  }
}
</script>

<style>
body {
  background: #fff;
}

.btn {
  dispLay: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middLe;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px soLid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
  border: 1px soLid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px soLid #73afc7;
  margin-right: 5px;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>