<template>
<section id="productt">
<div class="imgcontainer"><img :src="productt.Prtdimage" alt=""></div>
<div class="Propcontainer">
     <h1>{{productt.ProductName}}</h1>
      <h3>Coffeemania</h3>
    </div>
<div class="Addtocart">
    <div class="price"> 
        <h3>{{productt.kdvPrice}}</h3> <p> KDV Dahil </p>
    </div>
<section class="btn"> 
<div class="adet">
    <input type="number" name="quantity" id="quantityvalue" value="1">Adet</div>
   <div class="btn"> <button class="add">SEPETE EKLE</button></div>
</section>
<div class="social">
    <img src="https://www.coffeemania.com/assets/images/facebook.jpg" alt="">
    <img src="https://www.coffeemania.com/assets/images/twitter.jpg" alt="">
    <img src="https://www.coffeemania.com/assets/images/pinterest.jpg" alt="">
</div>
</div>

</section>

</template>
<script>
import Store from '../data/product.js'
export default {
    data(){
        return{
            prdtID:this.$route.params.id
        }
    },
    computed:{
        productt(){
            return Store.Products.find(
                productt => productt.ProductID === this.prdtID
            )
        }
        
    }
}
</script>

<style scoped>
*{
    font-family: ubuntu, Helvetica, Arial, sans-serif;
}
.Infoproduct{
    float: left;
    margin-top: 100px;
}
.imgcontainer{
    width: 28%;
    margin-left: 7%;
    margin-top: 1em;
    float: left;
}
.imgcontainer img{
    width: 95%;
    height: 90%;
}
.Propcontainer{
    width: 28%;
    float: left;
    margin-top: 2em;
    margin-left: 1%;
}
.Propcontainer h1 {
    font-size: 38px;
    font-weight:550;
}
.Propcontainer h3 {
    margin-top: 5px;
    font-size: 30px;
    color: #4f4f4f;
    font-weight: 300;
}
.Addtocart{
    float: left;
    margin-top: 2em;
    width: 26%;
    margin-left: 1%;
}
.price{
    border-bottom: grey solid 1px;
    height: 70px;
    margin-bottom: 15px;
    }
.price h3{
    font-size: 48px;
     background: url("../assets/bigtlicon.png")  right no-repeat;
     width: 165px;
     float: left;
}
.price p{
margin-top:1.6em ;
float: left;
margin-left: 15px;
font-size: 18px;
color: #444;
font-weight: 700;
}
 .adet{
    width: 87px;
    background: #efede4;
    border-radius: 5px;
    font-weight: 700;
    color: #444;
    text-align: center;
    font-size: 12px;
    float: left;

}
 .adet input[type="number"] {
  width: 70px;
  border:none;
  height: 16px;
  font-size: 15px;
  color: #444;
  text-align: center;
   font-weight: 700;
   padding-left: 12px;
}
 .adet input[type="number"]:focus{
  outline:0;
 
}
.btn{
    float: left;
    margin-bottom: 10px;
}
 button{
    width: 265px;
    background: linear-gradient(#02984a,#8bc63f);
    height: 35px;
    border-radius: 5px;
    border:none;
    color: #fff;
    text-align: center;
    font-size: 17px;
    font-weight: 300;
}
button:focus{outline: 0;}
.social img{
    width: 31%;
    margin-left: 6px;
    height: 23px;
    border-radius: 5px;
}
</style>