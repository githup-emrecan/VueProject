<template>
<div class="Cartdeta">
     <span>Anasayfa  /</span> <p class="pa">{{title}}</p>
     <h1 class="title">Sepetim</h1>
     <div class="container" v-show="this.products.length>0" >
     <div class="titlecontainer"> 
         <div class="timg">Resim</div>
         <div class="tittlead">Ürün Adı</div>
         <div class="tadet">Adet</div>
         <div class="tprice">Birim Fiyat</div>
         <div class="ttotprice">Toplam</div>
         <div class="tclose">Kaldır</div>
     </div>
     <div class="ProductsInfo" v-for="product in products" :key="product.id" >
         <div class="pimg"><img :src="product.images" alt=""></div>
         <div class="pittlead">
         <h3>{{product.ProductName}}</h3>
         <input type="text" placeholder="Kişiselleştirme mesajınız">
         </div>
         <div class="padet">
             <input type="number" name="quantity" id="quantityvalue" value="1" min="1" v-model="selected">
         </div>
         <div class="pprice"><p>{{product.Price}}</p></div>
         <div class="ptotprice"><p>{{product.Price * product.quantity}}</p></div>
         <div class="pclose"><a href="" @click="removeFromCart(product.id)">x</a></div>
     </div>
     <div class="productPrice">
         <table>
             <tr>
                 <td id="Ttoplam">Ara Toplam</td>
                 <td id="Dttplam"><p>{{calculatePrice}}</p></td>
             </tr>
             <tr>
                 <td id="Tkdv">KDV %8</td>
                 <td id="Dkdv"><p>{{calculateKdv}}</p></td>
             </tr>
              <tr>
                 <td id="Ttotal"><h1>TOPLAM</h1></td>
                 <td id="Dtotal"><p>{{ calculateToplamPrice }}</p></td>
             </tr>
         </table>
     </div>
     <div class="bntcontainer">
        <button class="cont"><p>Alışverişe Devam Et</p></button>
        <button class="del"><p>Sepeti Boşalt</p></button>
        <button class="up"><p>Sepeti Güncelle</p></button>
       <nuxt-link :to="{ name: 'Payment' }"> <button class="end"><p>Alışverişi Tamamla</p></button></nuxt-link>
     </div>
     </div>
     <div class="ifzero" v-show="this.products.length===0">
         <p>Sepetinizde ürün bulunmamaktadır.</p>
         <p>Ürünlerimizi inceleyin, beğendiklerinizi sepetinize ekleyin.</p>
         <p>Sepetinizdeki ürünler, siz ürünü satın alana ya da sepetinizden kaldırana kadar sepetinizde tutulacaktır.</p>
        <nuxt-link :to="{ name: 'ShopProducts' }"> <button>Alışverişe Devam Et</button></nuxt-link>
     </div>
</div>
</template>
<script>
export default {
    name:'Cartdeta',
    data (){
        return{
            title :'Sepetim',
            selected: 1
        }
    },
    computed: {
			products () {
				return this.$store.getters.productsAdded;
			},
             calculateToplamPrice (){
						 let productsAdded = this.$store.getters.productsAdded,
						pricesArray = [],
                        finalPrice = '',
                        kdvPrice = 0,
                        Toplamprice =0,
                        quantity = 1;
                        
                        productsAdded.forEach(product => {

					if (product.quantity >= 1) {
						quantity = product.quantity;
					}

					pricesArray.push((product.Price * quantity)); // get the price of every product added and multiply quantity
				});

                Toplamprice = pricesArray.reduce((a, b) => a + b, 0); // sum the prices
                kdvPrice=pricesArray.reduce((a, b) => a + b, 0) * 0.08;
                finalPrice=Toplamprice+kdvPrice;
                 return finalPrice.toFixed(2);

            },
            calculateKdv (){
						 let productsAdded = this.$store.getters.productsAdded,
						pricesArray = [],
                        finalPrice = '',
                        kdvPrice = 0,
                        quantity = 1;
                        
                        productsAdded.forEach(product => {

					if (product.quantity >= 1) {
						quantity = product.quantity;
					}

					pricesArray.push((product.Price * quantity)); // get the price of every product added and multiply quantity
				});

               finalPrice = pricesArray.reduce((a, b) => a + b, 0) * 0.08;
                // sum the prices
                 return finalPrice.toFixed(3);

            },
            calculatePrice (){
						 let productsAdded = this.$store.getters.productsAdded,
						pricesArray = [],
						finalPrice = '',
                        quantity = 1;
                        
                        productsAdded.forEach(product => {

					if (product.quantity >= 1) {
						quantity = product.quantity;
					}

					pricesArray.push((product.Price * quantity)); // get the price of every product added and multiply quantity
				});

				finalPrice = pricesArray.reduce((a, b) => a + b, 0); // sum the prices
                 return finalPrice.toFixed(2);

            },

			buyLabel () {
				let totalProducts = this.products.length,
						productsAdded = this.$store.getters.productsAdded;
				
				return totalProducts;
		}
	},

	methods: {
		removeFromCart (id) {
			let data = {
					id: id,
					status: false
			}
			this.$store.commit('removeFromCart', id);
			this.$store.commit('setAddedBtn', data);
		}
	}   
    
}
</script>
<style scoped>
*{
     font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
.Cartdeta{
    float: left;
    width: 82%;
    margin-left: 10%;
    margin-top: 1.5em;
}
span{
  opacity: 0.5;
  font-size: 13px;
  float: left;
}
.Cartdeta .pa{
    float: left;
    margin-left: 5px;
    font-size: 14px;
    font-weight: 600;
    color:#4f4f4f;
}
.container{
    margin-top: 5em;
    width: 100%;
    height: 500px;
}
.Cartdeta .title{
 color: #7b232e;
  font-size: 28px;
  margin-top: 3em;
  margin-left: 0.8em;
}
.titlecontainer{
  width: 100%;
background: #fffef8;
color: #4f4f4f;
font-weight: 600;
font-size: 15px;
}
.titlecontainer .timg{
    width: 12%;
    height: 30px;
    float: left;
}
.titlecontainer .tittlead{
    width: 35%;
    height: 30px;
    float: left;
}
.titlecontainer .tadet{
    width: 10%;
    height: 30px;
    float: left;
}
.titlecontainer .tprice{
    width: 10%;
    height: 30px;
    float: left;
}
.titlecontainer .ttotprice{
    width: 25%;
    height: 30px;
    float: left;
}
.titlecontainer .tclose{
    width: 8%;
    height: 30px;
    float:right;
    text-align: right;
}
.ProductsInfo{
    color: #4f4f4f;
    font-weight: 600;
    background: #fff;
}
.ProductsInfo .pimg{
    width: 12%;
    height: 70px;
    float: left;
    
}
.ProductsInfo .pimg img{
    max-width: 45%;
    margin-left: 25%;
}
.ProductsInfo .pittlead{
    width: 35%;
    height: 70px;
    float: left;
    padding-top: 10px;
}
.ProductsInfo .pittlead h3{
    font-size: 14px;
    color: #4f4f4f;
    font-weight: bold;
}
.ProductsInfo .padet{
    width: 10%;
    height: 70px;
    float: left;
     padding-top: 15px;
}
.ProductsInfo .pprice{
    width: 10%;
    height: 70px;
    float: left;
     padding-top: 20px;
}
.ProductsInfo .ptotprice{
    width: 25%;
    height: 70px;
     padding-top: 20px;
    float: left;
}
.ProductsInfo .pclose{
    width: 8%;
    height: 70px;
    float:right;
     padding-top: 20px;
    text-align: right;
    padding-right: 20px;
}
.ProductsInfo .pclose a{
   color: #4f4f4f;
   font-size: 17px;
   font-weight: 800;
}
.productPrice{
    background: #fffef8;
    width: 100%;
    padding-top: 1.3em;
   
    padding-bottom: 2em;
}
.productPrice table{
width: 100%;
font-size: 14px;
 margin-top: 40px;
 float: left;
}
.productPrice table #Ttoplam,#Tkdv {
width: 80%;
padding-left: 10px;
}
.productPrice table #Dttplam,#Dkdv,#Dtotal{
    text-align: right;
    padding-right: 10px;
}
#Ttotal,#Dtotal{
    padding-top: 1em;
    font-size: 30px;
    color: grey; 
}
#Ttotal h1{
    font-weight: 700;
}
#Dtotal{
    font-size: 30px;
    font-weight: bold;
}

.ProductsInfo table .Dımage,.Dname,.Dadet,.Dprice,.Dtplm,.Dclose{
    padding-top: 2em;
    padding-bottom: 2em;
}
.ProductsInfo table .Dprice{
    padding-right: 30px;
}
.Dprice,.Dtplm{
    font-size: 17px;

}
.over{
width: 60%;
margin-left: 10px;
}
.Dclose,.close{
    text-align: right;
}
.Dclose{
    padding-right: 15px;
    font-size: 16px;
    font-weight: bold;
}
.ProductsInfo table .ımage{
    width: 12%;
}
.ProductsInfo table .Pname{
width: 40%;
}
.ProductsInfo table .Ptplm{
    width: 20%;
}
input[type="number"]::-webkit-inner-spin-button{
    opacity: 0.8;
    height: 40px;
    border: 1px solid black;
}
input[type="number"]:focus{
    outline: 0;
}
input[type="text"]{
padding: 5px 10px;
    margin-top: 7px ;
    font-size: 11px;
    color: #696969;
    max-width: 200px;
    width: 40%;
    border: 1px solid  #cfcfcf;
    border-radius: 3px;
}
input[type="text"]:focus
{ 
outline: 0;
border: dashed 1px #cfcfcf;
}
 input[type="number"]{
    text-align: center;
    width: 80px;
    color: #000;
    font-weight: bold;
    border: 1px solid #cccccc;
    height: 30px;
    border-radius: 4px 0px 0px 4px;
    border: 0.1px solid grey;
}
.pprice p::after,.ptotprice p::after,#Dttplam p::after,#Dkdv p::after{
     content: url(../assets/tl-icon.fw.png);
    margin-left: 9px;
}
#Dtotal p::after{
    content: url(../assets/bigtlicon2.fw.png);
   margin-left: 9px;
}
.bntcontainer{
    width: 100%;
    text-align: right;
    margin-top: 2.3em;
    float: left;
}
.bntcontainer button{
    width: 160px;
    height: 42px;
    margin-left: 5px;
    background: #ddd;
    color: #676767;
    border: solid 1px #ddd;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
}
.bntcontainer button:focus{
    outline: 0;
}
.bntcontainer .end{
     background: #7b232e;
     color: #fff;
}
.bntcontainer .del{
    width: 140px;
}
.bntcontainer .end p::before{
  content: url(../assets/confirm2.fw.png);
  margin-right: 5px;
}
.bntcontainer .up p::before{
  content: url(../assets/refresh.png);
  margin-right: 10px;
}
.bntcontainer .del p::before{
  content: url(../assets/trash.png);
  margin-right: 10px;
}
.bntcontainer .cont p::before{
  content: url(../assets/arrow.png);
  margin-right: 5px;
}
.ifzero {
    margin-left: 15px;
}
.ifzero p{
 color: #4f4f4f;
 font-size: 15px;
 font-weight: 500;
}
.ifzero  button {
    border: none;
    margin-top: 30px;
    width: 230px;
    height: 45px;
    background: #7b232e;
    color: white;
    cursor: pointer;
}
.ifzero  button:focus{
    outline: 0;
}
</style>