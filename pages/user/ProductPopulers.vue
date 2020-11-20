<template>
    <div class="container">
        <section><h4 style="font-weight:700;">POPÜLER ÜRÜNLER</h4></section>
        <div class="productcontainer">
            <div class="product" v-for="product in products" :key="product.id">
                <nuxt-link
      class="details"
      :to="{
        name: 'product_detail-id',
        params: {
          id: product.id
        }
      }"
    >
                <div class="image">
                    <img :src="product.images" :alt="product.ProductName">
                     <h4 style="font-weight:600;">{{product.ProductName}}</h4>
                </div>
                </nuxt-link>
                <p>KDV Dahil</p>
                <h3>{{product.kdvPrice}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'producPopuler',
    data(){
        return{
           id: '' 
        }
    },
     computed: {
    products () {
        return this.$store.state.products;
    }
  }
    
};
</script>

<style scoped>
.container{
    float: left;
    width: 85%;
    margin-left: 8%;
    margin-top: 3em;
    margin-bottom: 4em;
    color: gray;
     font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    
    
}
.container section{
    border-bottom: gray solid 1px;
    padding-bottom: 10px;
    font-size: 13px;
}
.productcontainer{
    padding-top: 2em;
    padding-left:2em ;
    
}
.product{
    float: left;
    margin-left: 9px;
    text-align: center;
    width: 210px;
}
.product a{
    color: gray;
    text-decoration: none;
    font-size: 15px;
    
}
.product p{
    color: #7b232e;
    font-size: 12px;
    margin-top: 1.1em;
}
.product img{
  height: 150px;
   width: 120px;
    margin-bottom: 1.7em;
    margin-left: 40px;
}
.product h3{
    width: 90px;
    margin-left: 30%;
   font-weight:bold;
}
.product h3::after{
     content: url(img\tl-icon.fw.png);
     margin-left: 8px;

}
</style>