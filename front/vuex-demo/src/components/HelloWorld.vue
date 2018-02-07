<template>
  <div class="hello">
   <h3>vuex demo /</h3>
     <div>
              <div class="result">count: {{ count }}  double: {{double}} </div>
              <button @click="add">+ADD</button>
              <button @click="dec">-DECR</button>
               <router-view></router-view>
     </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  computed:{
    ...mapState({
      count: state => state.count
    }),
    ...mapGetters({
             double: 'double'
        })
  },
   methods: {
    ...mapActions({
      add: 'add',
      dec: 'decr'
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.result{margin-bottom: 2em;}
</style>
