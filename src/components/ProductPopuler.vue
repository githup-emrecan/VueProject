<template>
    <div class="container">
        <section><h4>POPÜLER ÜRÜNLER</h4></section>
        <div class="productcontainer">
            <div class="product" v-for="product in products" :key="product.ProductID">
                <router-link :to="{name:'productdetails' ,params:{id:product.ProductID}}" tag="a"> 
                <div class="image">
                    <img :src="product.Prtdimage" :alt="product.ProductName">
                     <h4>{{product.ProductName}}</h4>
                </div>
                </router-link>
                <p>KDV Dahil</p>
                <h3>{{product.kdvPrice}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import Store from '../data/product.js'
export default {
    name:'producPopuler',
    data(){
        return{
             products: Store.Products
        }
    }
    
}
</script>

<style scoped>
.container{
    float: left;
    width: 85%;
    margin-left: 8%;
    margin-top: 2em;
    color: gray;
    font-family:Arial, Helvetica, sans-serif;
}
.container section{
    border-bottom: gray solid 1px;
    padding-bottom: 10px;
    font-size: 15px;
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
    font-size: 16px;
    font-weight:100;
}
.product p{
    color: #7b232e;
    font-size: 12px;
    margin-top: 1.3em;
}
.product img{
    max-height: 150px;
    margin-bottom: 1.7em;
}
.product h3{
    margin-top:0.5em ;
    background: url("../assets/tl-icon.fw.png")  right no-repeat;
    width: 90px;
    margin-left: 25%;
}
</style>