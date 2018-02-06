<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>vue test</h2>
    <ul>
      <h1> {{total}} item record!</h1>
      <hello-item v-for="item in info" :title="item.title" :key="item.id">内容：{{item.desc}}</hello-item>
    </ul>
    <div>
      <button @click='getTime'>点我获取时间</button>  <input  name="time" v-model="time">
      <button @click='addItem'>添加Item</button> &nbsp;&nbsp;<button @click='delItem'>删除Item</button> 
    </div>
  </div>
</template>

<script>
import HelloItem from '@/components/HelloItem'
export default {
  name: 'HelloWorld',
  components:{'hello-item':HelloItem},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      time:'',
      info: [
         {id:1,title:'liyong',desc:'chengdu'},
         {id:2,title:'chenfeng',desc:'shenzhen'},
         {id:3,title:'liuyong',desc:'wuhan'},
         {id:4,title:'wanggang',desc:'beijing'},
      ]
    }
  },
  methods:{
    getTime : function() {
      this.time = new Date().toLocaleString();
    },
    addItem : function(){
      let idx = parseInt(this.info.length+1);
      this.info.push({
        id:idx,
        title:"rand name "+idx,
        desc:"desc:" + idx
      });
    },
   delItem: function() {
    this.info.pop()
   }
  },
  computed:{
    total: function(){
      return this.info.length;
    }
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
