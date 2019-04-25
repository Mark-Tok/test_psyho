<template>
  <div class="page">
      <Test/>
  </div>
</template>

<script>
import Test from './components/Test.vue'

export default {
  components: {
    Test
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Roboto:400,900');

body {
margin: 0;
padding: 0;
overflow-x: hidden;
font-family: 'Roboto', sans-serif;

 .page {
   display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
 }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: inherit;
}
</style>
