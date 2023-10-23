/** Vueアプリの生成 */
function createApp(){
  new Vue({
    el: "#wrapper",
    data: {
      filter: "inbox",
      todos: [
        {
          id: 1,
          text: "出かける準備する",
          createdAt: 1567940003455,
          done: false
        },
        {
          id: 2,
          text: "着替える",
          createdAt: 1567940009999,
          done: false
        },
        {
          id: 3,
          text: "ルンバ起動する",
          createdAt: 1567940099999,
          done: true
        },
      ],
      text:""
    },
    computed: {
      todoLength: function(){
        return this.todos.length
      },
      filterTodos: function(){
        const filter = this.filter
        return this.todos.filter(function(todo){
          return filter === "completed" ? todo.done : !todo.done
        })
      },
      disabled: function(){
        return this.text === ""
      }
    },
    methods: {
      formatDate: function(timestamp){
        const date = new Date(timestamp)

        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()

        return year + "." + month + "." + day
      },
      setFilter: function(filter){
        this.filter = filter
      },
      toggleTodo: function(id){
        this.todos = this.todos.map(function(todo){
          if(todo.id === id){
            todo.done = !todo.done
          }
          return todo
        })
      },
      handleSubmit: function(event){
        this.addTodo(this.text)
        this.text=""
      },
      addTodo: function(text){
        this.todos.push({
          id: this.todosLength + 1,
          text: text,
          createdAt: Date.now(),
          done: false
        })
      }
    }
  })
}

/** 初期化 */
function initialize(){
  createApp()
}

document.addEventListener("DOMContentLoaded", initialize.bind(this))