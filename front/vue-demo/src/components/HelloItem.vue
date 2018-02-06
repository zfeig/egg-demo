<template>
  <div class="hello">
    <li>
      <span>标题：{{title}}</span>
      <slot>这里插入内容</slot>
    </li>
  </div>
</template>

<script>
export default {
  name: 'HelloItem',
  props:['title']
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
