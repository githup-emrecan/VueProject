<template>
  <div class="section">
    -----deneme sayfasıdır yapmaya çalışıldı ama yapılamadı
  </div>
</template>

<script>

export default {
	name: 'user-wishlist',

	data () {
    return {
      pageTitle: 'Your Wishlist',
      noProductLabel: 'Your wishlist is empty'
    }
  },

  components: { VmProductsList },

  computed: {
    productsInWishlist () {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$store.getters.productsAddedToFavourite;
      }
    }
  },

  methods: {
    getProductByTitle () {
      let listOfProducts = this.$store.getters.productsAddedToFavourite,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>


