<template>
 <section>
<showerSlide></showerSlide>
<nuxtproduct></nuxtproduct>
 </section>
</template>

<script>
import showerSlide from '../components/Slide';
import nuxtproduct from '../components/ProductPopuler';

export default {
  name: 'ShopProducts',
  components: {
     showerSlide,
     nuxtproduct
    }
};
</script>
<style  scoped>

</style>