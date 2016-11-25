<template>
    <div class="todo-container">
        <div class="panel panel-default">
            <div class="panel-heading">进行中 ● {{ todoCount }} <i class="fa fa-chevron-circle-down pull-right" aria-hidden="true"></i></div>
            <div class="panel-body">
                <ul class="list-group">
                    <li class="list-group-item"
                        v-for="(todo,index) in todos">
                        <a href="" >{{ todo.title }}</a>
                        <button @click="deleteTodo(index)" class="btn btn-danger btn-xs pull-right">删 除</button>
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
                cid:1
            }
        },
        methods: {
            deleteTodo(index){
                this.todos.splice(index,1);
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
