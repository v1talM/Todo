<template>
    <div class="todo-container">
        <div class="panel panel-default">
            <div class="panel-heading">待办 ● {{ todoCount }} <i class="fa fa-chevron-circle-down pull-right" aria-hidden="true"></i></div>
            <div class="panel-body">
                <ul class="list-group">
                    <li class="list-group-item"
                        v-for="(todo,index) in todos">
                        <a href="" >{{ todo.title }}</a>
                        <button @click="deleteTodo(index,todo.id)" class="btn btn-danger btn-xs pull-right">删 除</button>
                        <button @click="todoing(index,todo.id)" class="btn btn-warning btn-xs pull-right">进行中</button>
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
        props: ['todos'],
        data() {
            return {
                cid:'0'
            }
        },
        methods: {
            deleteTodo(index,id){
                this.axios.delete('http://todo-server.sparki.cn/api/todo/' + id).then(response => {
                    this.todos.splice(index,1);
                }).catch(error => {
                    alert('系统出错了,删除失败')
                });
            },
            todoing(index,id){
                this.axios.patch('http://todo-server.sparki.cn/api/todo/' + id).then(response => {

                    this.todos.splice(index,1);
                    this.$parent.$data.todos.push(response.data);

                }).catch(error => {
                    alert('系统出错了,切换失败')
                })
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
