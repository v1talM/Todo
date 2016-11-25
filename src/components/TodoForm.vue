<template>
    <div>
        <a class="new-todo" @click="toggleForm">+ 添加任务</a>
        <div v-show="showForm">
            <form @submit.prevent="addTodo(newTodo)" role="form" accept-charset="utf-8">
                <div class="form-group">
                    <input v-model="newTodo.title"
                           type="text"
                           class="form-control"
                           placeholder="Text input">
                </div>
                <div class="form-group">
                    <button @click="addTodo(newTodo)"
                            type="button"
                            class="btn btn-primary btn-block">Add Todo</button>
                </div>

            </form>
        </div>

    </div>
</template>
<script>
    export default{
        props: ['todos','cid'],
        data(){
            return{
                showForm: false,
                newTodo: {title:'',completed:this.cid}
            }
        },
        methods: {
            addTodo(newTodo){
                if(newTodo.title == ''){
                    return false;
                }
                this.axios.post('http://todos.dev/api/todos', {
                    title: this.newTodo.title,
                    completed: this.newTodo.completed
                }).then(response => {
                    this.todos.push(response.data);
                });
                this.showForm = false;
                this.newTodo = {id:null,title:'',completed:this.cid};
            },
            toggleForm(){
                this.showForm = !this.showForm;
            }
        }

    }
</script>
