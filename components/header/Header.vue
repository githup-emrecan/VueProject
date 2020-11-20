<template>
  <div>
    <Topmenu></Topmenu>
    <BottomMenu></BottomMenu>
  </div>
</template>

<script>
import Topmenu from '../TopOfTheMenu';
import BottomMenu from '../Navbar';

  export default {
    name: 'VmHeader',
    components: {
      Topmenu,
      BottomMenu
    },

    computed: {
      numProductsAdded () {
        return this.$store.getters.productsAdded.length;
      }
    },

  };
</script>

<style lang="scss" scoped>
  .title {
    background: url('../../static/vuemmerce-logo.png') no-repeat;
    background-position: 50% 50%;
    background-size: 165px;
    width: 175px;
    height: 35px;
  }
  .shopping-cart {
    cursor: pointer;
  }
  a {
    color: grey;
  }
</style>
