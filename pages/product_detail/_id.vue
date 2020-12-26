<template>
<div>
<div class="loading" v-if="!this.$store.getters.getProductById(this.$route.params.id)"> ürün id gelirken bir sorunla karşılaşıldı </div>
<div class="top" v-else >
<section>
<div class="imgcontainer" v-show="product.isSlide === 0"><img :src="product.images" alt=""> </div>
<div class="imgcontainer" v-show="product.isSlide === 1">
  <div class="bigimage" > 
        <a @click="next" class="left"></a>
        <img :src="img" alt="" class="bigcenter">
         <a @click="prev" class="right"></a>
        </div>
    <div class="littleimage"> 
        <a @click="prev" class="right"> <img :src="product.images2" alt=""></a>
        <a @click="next" class="left">  <img :src="product.images" alt=""></a>
  </div> 
  </div>
<div class="Propcontainer">
     <h1>{{product.ProductName}}</h1>
      <h3>Coffeemania</h3>
    </div>
<div class="Addtocart">
    <div class="price"> 
        <h3>{{product.kdvPrice}}</h3> <p> KDV Dahil </p>
    </div>
<section class="btn"> 
<div class="adet">
    <input type="number" name="quantity" id="quantityvalue" value="1" min="1" v-model="selected">Adet</div>
   <div class="btn"> <button class="add" @click="AddToCart(product.id,product.ProductName,product.Price,product.images,selected)">SEPETE EKLE</button></div>
</section>
<div class="social">
    <img src="https://www.coffeemania.com/assets/images/facebook.jpg" alt="">
    <img src="https://www.coffeemania.com/assets/images/twitter.jpg" alt="">
    <img src="https://www.coffeemania.com/assets/images/pinterest.jpg" alt="">
</div>
</div>

</section>
<div class="showpopler">
 <showpopproduct></showpopproduct>
</div>
</div>
</div>
</template>

<script>
import showpopproduct from '../user/ProductPopulers';
export default {
  name: 'product_detail-id',

  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  components:{
    showpopproduct
  },
  data () {
    return {
      addToCartLabel: 'Add to cart',
      removeFromCartLabel: 'Remove from cart',
      addToFavouriteLabel: 'Add to favourite',
      removeFromFavouriteLabel: 'Remove from favourite',
      product: {},
      selected: 1,
      img:''
    };
  },
computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
  mounted () {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
    this.img=this.product.images;
  },

  methods: {

    next(){
      this.img=this.product.images;
    },
    prev(){
      this.img=this.product.images2;
    },
    AddToCart(pid,ProductName,Price,images,selected){
    let data ={
        pid:pid,
        ProductName:ProductName,
        Price:Price,
        images:images,
        piece: selected
    }

         if (this.isAuthenticated) {
            this.$store.dispatch('AddToSpecialCart',data)

            } 
            else {
        this.$store.dispatch('AddToCart',data)
            }

    
    },
    onSelectQuantity (id) {
      let data = {
        id: id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
    }
  }
};
</script>

<style scoped>
.loading{
  margin: auto;
  font-size: 40px;
  text-align: center;
  color: #7b232e;
}
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
.imgslide{
    width: 26%;
    margin-left: 6%;
    margin-top: 1em;
    float: left;
}
.bigcenter{
margin-left: 1em;
}

.bigimage .left {
     z-index: 100;
    position: absolute;
    float: left;
    width: 20px;
    height: 500px;
    background:url(../user/img/leftSlide.png) left no-repeat ;
}

.bigimage .right {
     z-index: 100;
    position: absolute;
    float: right;
    width: 23px;
    height: 500px;
  background:url(../user/img/rightSlide.png) left no-repeat ;
}
.imgslide img{
    width: 90%;
    height: 80%;
}

.imgcontainer img{
    width: 95%;
    height: 90%;
}
.littleimage{
    margin-top: 3em;
    width: 85%;
}
.littleimage img{
    width: 30%;
    float:right;
}
.Propcontainer{
    width: 27%;
    float: left;
    margin-top: 2em;
    margin-left: 3%;
    
}
.Propcontainer h1 {
    font-size: 37px;
    font-weight:550;
    color: black;
}
.Propcontainer h3 {
 
    font-size: 30px;
    color: #4f4f4f;
    font-weight: 400;
    font-family: ubuntu;

}
.Addtocart{
    float: left;
    margin-top: 2em;
    width: 31%;
    margin-left: 3%;
}
.price{
    border-bottom: #dcdcdc solid 1px;
    height: 70px;
    margin-bottom: 15px;
    }
.price h3{
    font-size: 48px;
     width: 165px;
     float: left;
     color: black;
     font-weight: 600;
}
.price h3::after{
  content: url(../user/img/bigtlicon.png);
  margin-left: 10px;
}
.price p{
margin-top:2em ;
float: left;
margin-left: 18px;
font-size: 16px;
color: gray;
font-weight: 600;
}
 .adet{
     margin-left: 7px;
    width: 82px;
    background: #efede4;
    border-radius: 5px;
    font-weight: 700;
    color: #444;
    text-align: center;
    font-size: 12px;
    float: left;
    margin-right: 5px;

}
 .adet input[type="number"] {
  width: 80px;
  border:none;
  height: 20px;
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
    width: 276px;
    background: linear-gradient(#02984a,#8bc63f);
    height: 35px;
    border-radius: 5px;
    border:none;
    color: #fff;
    text-align: center;
    font-size: 17px;
    font-weight: 300;
    cursor: pointer;
}
button:focus{outline: 0;}
.social img{
    width: 32%;
    height: 28px;
    border-radius: 5px;
}
section {
  float: left;
}
.showpopler{
  width: 100%;
  float: left;
  margin-top: 4em;
}
</style>
