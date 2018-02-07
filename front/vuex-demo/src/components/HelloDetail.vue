<template>
  <div class="helloDetail">
   <h3>vuex demo /detail/{{this.$route.params.id}}</h3>
     <div v-if="item">
            <p>{{item.title}} &nbsp; {{item.time}}</p>
            <p>{{item.desc}}</p>
     </div>
     <div class="item">
        {{detail(this.$route.params.id)}}
     </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'HelloDetail',
   computed:{
      ...mapGetters({
        detail: 'getById'
      }),
       //origin method
      item() {
        return this.$store.getters.getById(this.$route.params.id);
      }
  }
}
</script>
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
