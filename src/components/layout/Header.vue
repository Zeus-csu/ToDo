<template>
 <header class="header">
<img src="../../assets/logo.png" >
<h1>Todo List</h1>
 </header>
</template>

<script>
    export default {
     name:"Header",    
    }
</script>

<style  scoped>
h1{
    margin: 10px 0;
}
.header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
}
header img {
    height: 40px;
}
.header a {
    color: #fff;
    padding-right: 5px;
}

</style>