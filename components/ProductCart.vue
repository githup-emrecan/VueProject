<template>
    <div class="Pcart">
            <div class="PieceInfo">Sepetinizde {{buyLabel}} adet ürün bulunmaktadır.</div>
            <div class="productsInfo" v-for="product in products" :key="product.id" >
                <div class="PLeft">
                    <img :src="product.images" alt="" class="over">
                </div>
                <div class="Pcenter">
                   <h1>{{product.ProductName}} x {{product.piece}}</h1>
                    <p>{{product.Price * product.piece}}  TL</p>
                </div>
                <div class="Pright" @click="removeFromCart(product.id)">x</div>
            </div>
            <div class="PriceContainer">
                <table>
                    <tr>
                        <td class="big">Ara Toplam</td>
                        <td class="lira"><p>{{calculatePrice}}</p></td>
                    </tr>
                    <tr>
                        <td class="big">KDV %8</td>
                        <td class="lira"><p>{{calculateKdv}}</p></td>
                    </tr>
                </table>
                <div class="totalPrice">
                    <table>
                         <tr>
                        <td class="bigtwo">Toplam</td>
                        <td class="biglira"><p>{{ calculateToplamPrice }}</p></td>
                    </tr>
                    </table>
                </div>
            </div>
            <div class="butoncontainer">
                  <div class="btn1"><nuxt-link :to="{ name: 'DetailCart' }"><button class="show"><p>Sepeti Görüntüle</p></button></nuxt-link></div>
                  <div class="btn2" v-if="isAuthenticated"><nuxt-link :to="{ name: 'Payment' }"><button class="end"><p>Alışverişi Tamamla</p></button></nuxt-link></div>
                  <div class="btn2" v-if="!isAuthenticated"><button class="end"><p>Alışverişi Tamamla</p></button></div>
            </div>
    </div>
</template>


<script>
export default {
    name:'Pcart',
         computed: {
			products () {
            if (this.isAuthenticated) {
              return this.$store.getters.productsSpeacialCart;

            } 
            else {
        return this.$store.getters.productsInCart;
            }
				
            },
             
            calculateToplamPrice (){
						let productsAdded=null,
						pricesArray = [],
                        finalPrice = '',
                        kdvPrice = 0,
                        Toplamprice =0,
                        quantity = 1;

             if (this.isAuthenticated) {
               productsAdded = this.$store.getters.productsSpeacialCart;
            } 
              else{
                  productsAdded = this.$store.getters.productsInCart;
              }
                        
                        productsAdded.forEach(product => {

					if (product.piece >= 1) {
						quantity = product.piece;
					}

					pricesArray.push((product.Price * quantity)); // get the price of every product added and multiply quantity
				});

                Toplamprice = pricesArray.reduce((a, b) => a + b, 0); // sum the prices
                kdvPrice=pricesArray.reduce((a, b) => a + b, 0) * 0.08;
                finalPrice=Toplamprice+kdvPrice;
                 return finalPrice.toFixed(2);

            },
            calculateKdv (){
						 let productsAdded=null,
						pricesArray = [],
                        finalPrice = '',
                        kdvPrice = 0,
                        quantity = 1;
                        

                         if (this.isAuthenticated) {
               productsAdded = this.$store.getters.productsSpeacialCart;
            } 
              else{
                  productsAdded = this.$store.getters.productsInCart;
              }
                        productsAdded.forEach(product => {

					if (product.piece >= 1) {
						quantity = product.piece;
					}

					pricesArray.push((product.Price * quantity)); // get the price of every product added and multiply quantity
				});

               finalPrice = pricesArray.reduce((a, b) => a + b, 0) * 0.08;
                // sum the prices
                 return finalPrice.toFixed(3);

            },
             isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },

            calculatePrice (){
						 let productsAdded=null,
						pricesArray = [],
						finalPrice = '',
                        quantity = 1;

                         if (this.isAuthenticated) {
               productsAdded = this.$store.getters.productsSpeacialCart;
            } 
              else{
                  productsAdded = this.$store.getters.productsInCart;
              }
                        
                        productsAdded.forEach(product => {

					if (product.piece >= 1) {
						quantity = product.piece;
					}

					pricesArray.push((product.Price * quantity)); // get the price of every product added and multiply quantity
				});

				finalPrice = pricesArray.reduce((a, b) => a + b, 0); // sum the prices
                 return finalPrice.toFixed(2);

            },

			buyLabel () {
				let totalProducts = this.products.length,
						productsAdded = this.$store.getters.productsInCart;
				
				return totalProducts;
		}
	},

	methods: {
		removeFromCart (id) {

         if (this.isAuthenticated) {
            this.$store.dispatch('deletespeacialCart',id)  

            } 
            else {
        this.$store.dispatch('deleteCart',id)
            }

		
		}
	}   
    
}
</script>
<style  scoped>
*{
     font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
.Pcart{
    width: 45%;
    float: left;
    background: white;
    cursor: pointer;
    padding-left:15px;
    padding-right:15px;
}
.PieceInfo{
    width: 100%;
    height: 45px;
    text-align: center;
    padding-top: 8px;
    color: #4f4f4f;
    background: #fffef8;
    font-size: 13px;
    font-weight: 300;
}
.productsInfo{
width: 100%;
height: 65px;
}
.PLeft{
    height: 76.5%;
    width: 20%;
    float: left;
    padding-left: 10px;

}
.PLeft img{
    width: 80%;
}
.Pcenter{
    float: left;
    width: 68%;
    height: 100%;
}
.Pcenter h1{
   color: #4d4f4f;
   font-size: 14px;
}
.Pcenter p{
   color: #4d4f4f;
   font-size: 12px;
   margin-top: 4px;
}
.Pright{
    float: right;
    padding-right: 10px;
    color: #4f4f4f;
    font-size: 15px;
    font-weight: 900;
}
.PriceContainer table{
    font-size: 13px;
  color: #4f4f4f;
  padding-left: 15px;
  font-weight: 500;
}
.PriceContainer table .big {
    width: 80.7%;
    padding-left: 12px;
}
.totalPrice{
width: 100%;
height: 80px;
background: #fffef8;
padding-top: 25px;
margin-bottom: 20px;
}
.totalPrice table{
    font-size: 23px;
  color: #4f4f4f;
  padding-left: 15px;
  font-weight: 700;
}
.bigtwo {
    width: 71%;
}
.lira{
    text-align: right;
}

.btn1{
    width: 100%;
    height: 50px;
}

.btn2{
    width: 100%;
    height: 50px;
    margin-top: 5px;
}
.butoncontainer button{
    border: none;
    height:  43px;
    width: 88%;
    margin-left: 19px;
    margin-top: 5px;
    cursor: pointer;
}
.butoncontainer button:focus{
    outline: 0;
}
.butoncontainer .show{
    background: #ffffff;
    border: 1px #7b232e solid ;
    color: #7b232e;
     font-size: 13px;
     transition: background 0.3s;
}
.lira p::after{
  content: url(../assets/tl-icon.fw.png);
  margin-left: 5px;
}
 .biglira{
     text-align: right;
 }
 .biglira p::after{
     content: url(../assets/bigtlicon2.fw.png);
    margin-left: 5px;
}
.butoncontainer .show:hover{
   background: #7b232e;
    color: #fff;
}
.butoncontainer .end{
     background: #7b232e;
     color: #fff;
}
.butoncontainer .show p::before{
  content: url(../assets/cart.png);
  margin-right: 5px;
}
.butoncontainer .show:hover p::before{
  content: url(../assets/carthover.png);
}
.butoncontainer .end p::before{
  content: url(../assets/confirm.png);
  margin-right: 5px;
}
</style>

