<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f8f8f8;
  background: url(https://lostphp.com/wp-content/themes/Kratos/images/background.jpg) no-repeat;
  background-size:100% 100% ;
  background-attachment: fixed;
}
</style>
