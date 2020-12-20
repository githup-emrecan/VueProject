<template>
 <section>
<showerSlide></showerSlide>
<nuxtproduct></nuxtproduct>
 </section>
</template>

<script>
import showerSlide from '../components/Slide';
import nuxtproduct from '../components/ProductPopuler';
import {mapActions} from "vuex";
export default {
  name: 'ShopProducts',
  components: {
     showerSlide,
     nuxtproduct
    },
     created(){
     this.fetchProducts()
  },
  methods :{
    ...mapActions({
          fetchProducts : 'fetchProducts'
    })

  }
};
</script>
<style  scoped>

</style>