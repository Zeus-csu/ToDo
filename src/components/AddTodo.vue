<template>
    <div>
        <form @submit="addTodo">
            <input type="text" name="title" placeholder="Add todo..." >
            <input type="submit" value="SUBMIT" class="btn" />
        </form>
    </div>
</template>

<script>
  import uuid from 'uuid';
    export default {
        name: "AddTodo",
        data(){
            return{
                title:''
            }
        },
        methods:{
            addTodo(e){
                e.preventDefault();
                const newTodo = {
                    id: uuid.v4(),
                    title: this.title,
                    completed: false,
                }
            this.$emit('add-todo', newTodo);
            this.title = '';
            }

        }
          
    }
</script>

<style  scoped>
form{
    display:flex;
}
input[type="text"]{
    flex: 10;
    padding:7px;
}
.btn{
    background: #459b85;
    color: #FFF;

}
</style>