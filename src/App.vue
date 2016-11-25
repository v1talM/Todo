<template>
  <div id="app">

    <tobe-dones :todos="tobedones"></tobe-dones>

    <todos :todos="todos"></todos>

    <todones :todos="todones"></todones>
  </div>
</template>

<script>
import TobeDones from './components/TobeDone';
import Todos from './components/Todos';
import Todones from './components/ToDone';

export default {
  name: 'app',
  data() {
    return {
      todos: [],
      tobedones: [],
      todones: []
    }
  },
  mounted() {
    this.axios.get('http://todo-server.sparki.cn/api/todos',[],{
      withCredentials:true
    }).then((response) => {
        this.todos = response.data.todo;
        this.tobedones = response.data.undo;
        this.todones = response.data.done;
    })
  },
  components: {
    TobeDones,Todos,Todones
  }
}
</script>
