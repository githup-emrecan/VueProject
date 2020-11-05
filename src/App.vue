<template>
<section>
<top-menu></top-menu>
<bottom-menu></bottom-menu>
<router-view></router-view>
</section>
</template>

<script>
import TopOfTheMenu from './components/TopOfTheMenu.vue'
import Navbar from './components/Navbar'
export default {
  components: {
    'top-menu': TopOfTheMenu,
    'bottom-menu': Navbar

  }
}

</script>
<style>
*{
 margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
