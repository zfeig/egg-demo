<template>
  <div class="helloDetail">
   <h3>vuex demo /cate</h3>
     <div>
            <p>this is cate page</p>
            <div>
              <li>
               <router-link :to="{name:'CateSports'}">sports</router-link> |  
               <router-link :to="{name:'CateNews'}">news</router-link> |
               <router-link :to="{name:'CateMoive'}"> moive</router-link> |
               <router-link :to="{name:'CateEconomics'}"> economics</router-link>
            </li>
            </div>
            <div>
              <router-view></router-view>
            </div>
     </div>
  </div>
</template>
<script>
export default {
  name: 'HelloCate'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.result{margin-bottom: 2em;}
</style>
