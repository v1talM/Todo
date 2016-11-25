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
      todos: [
        {id:1,title:'learn Vuelearn Vuelearn Vuelearn Vuelearn Vue',completed:false}
      ],
      tobedones: [
        {id:2,title:'sleep',completed:false}
      ],
      todones: [
        {id:3,title:'eatting',completed:true}
      ]
    }
  },

  components: {
    TobeDones,Todos,Todones
  }
}
</script>

