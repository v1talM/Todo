<template>
    <div class="todo-container">
        <div class="panel panel-default completed">
            <div class="panel-heading">已完成 ● {{ todoCount }}  <i class="fa fa-chevron-circle-down pull-right" aria-hidden="true"></i></div>
            <div class="panel-body">
                <ul class="list-group">
                    <li class="list-group-item"
                        v-for="(todo,index) in todos">
                        <a href="" >{{ todo.title }}</a>
                        <button @click="deleteTodo(index,todo.id)" class="btn btn-danger btn-xs pull-right">删 除</button>
                    </li>
                </ul>
                <todo-form :todos="todos" :cid="cid"></todo-form>
            </div>
        </div>
    </div>
</template>

<script>
    import TodoForm from './TodoForm';

    export default{
        props: ["todos"],
        data() {
            return {
                cid:'2'
            }
        },
        methods: {
            deleteTodo(index,id){
              this.axios.delete('http://todos.dev/api/todo/' + id).then(response => {
                  this.todos.splice(index,1);
              }).catch(error => {
                  alert('系统出错了,删除失败')
              });
            },
            toggleCompletion(todo){
                todo.completed = ! todo.completed;
            }
        },
        computed: {
            todoCount(){
                return this.todos.length;
            }
        },
        components: {
            TodoForm
        }
    }
</script>
