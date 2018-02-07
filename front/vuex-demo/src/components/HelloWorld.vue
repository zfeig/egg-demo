<template>
  <div class="hello">
   <h3>vuex</h3>
     <div>
              count: {{ count }}
              <button @click="add">+ADD</button>
              <button @click="dec">-DECR</button>
     </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  computed:{
    ...mapState({
      count: state => state.count
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
</style>
