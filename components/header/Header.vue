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
         

  };
</script>
