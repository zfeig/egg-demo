<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div class="result">
                <br>
                 <router-link to="/">Home</router-link>
                 <router-link to="/list">Go to List</router-link>
                 <router-link to="/about">Go to about</router-link>
                 <router-link to="/cate">Go to Cate</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
