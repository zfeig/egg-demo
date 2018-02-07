<template>
  <div class="helloList">
   <h3>vuex demo /list</h3>
     <div>
             <ul class="article">
               <li v-for="item in list" :key="item.id"> 
                <router-link :to="{'name':'HelloDetail','params':{'id':item.id}}">{{item.title}}</router-link>
              </li>
             </ul>
     </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HelloList',
  computed:{
    ...mapState({
      list:state => state.list
    })
  }
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
.article {
  display: block;
  padding: 5px;
}

.article li {
  display: block;
  margin: 10px;
}
a {
  color: #42b983;
}
.result{margin-bottom: 2em;}
</style>
