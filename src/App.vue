<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
   <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
     
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

export default {
  name: 'app',
  components: {
    Header,
    Todos,
    AddTodo,
  },
  data() { 
    return { 
      todos: [
        {
          id: 1,
          title:"Learn code",
          completed: false
        },
        {
          id: 2,
          title:"Do practice",
          completed: false
        },
        {
          id: 3,
          title:"Make something awesome",
          completed: false
        }
      ]
    }    
  },
methods:{
  deleteTodo(id){
    this.todos = this.todos.filter(todo=> todo.id !== id);
  },
  addTodo(newTodo){
  this.todos = [...this.todos, newTodo];
}
}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
 
}
</style>
 