<template>
  <div id="app">
    <!-- <cover></cover> -->
    <router-view/>
  </div>
</template>

<script>

import Cover from '@/page/cover'
export default {
  name: 'App',
  components: {
    Cover
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body, ul{
  margin: 0;
  padding: 0;
}

</style>
