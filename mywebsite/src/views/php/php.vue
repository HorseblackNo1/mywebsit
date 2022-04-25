<template>
    <div>
         <h2 class="title">PHP</h2>
        <p class="note">
           PHP 是服务器端脚本语言。
        </p>
    </div>
</template>
<script>
export default {
    name:'php',
    data(){
        return{
            msg:"php"
        }
    }
}
</script>
<style scoped>
 .title{
        padding-top: 20px;
        text-align: center;
    }
    .note{
        padding: 20px;
        font-size: 16px;
    }
</style>