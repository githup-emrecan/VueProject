<template>
<div class="container">
    <div class="AdresandPrice">
         <div class="container">
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <table>
      
      <tr>
<td>Ad</td>
      <td><input type="text" v-model="name" ></td>
      </tr>
      <tr>
        <td>Soyad</td>
      <td><input type="text" v-model="surname"></td>
      </tr>
      <tr>
        <td>TC kimlik No</td>
      <td><input type="text" v-model="tc"></td>
      </tr>
      <tr>
        <td>E-mail</td>
      <td><input type="text" v-model="email"></td>
      </tr>
      <tr>
        <td>Telefon</td>
      <td><input type="text" v-model="tel" ></td>
      </tr>
          <tr>
            <td>il</td>
      <td><select name="" id="" class="select-box" v-model="il">
          <option v-for="city in citys" :key="city.value" >{{city.ctname}}</option>
          </select></td>
          </tr>
          <tr>
            <td>ilçe</td>
      <td><select name="" id="" class="select-box"  v-model="ilce">
          <option v-for="town in towns" :key="town.value" >{{town.tname}}</option>
          </select></td>
          </tr>
      <tr>
        <td class="top">Adres</td>
      <td><textarea name="" id="" cols="30" rows="5" style="margin-top:5px; margin-left: 10px;" v-model="adres"></textarea></td>
      </tr>
     <tr>
        <td>Posta kodu</td>
      <td><input type="text" v-model="pkod"></td>
     </tr>
        </table>
        <div class="using"> <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">fatura adresim olarak kullan</label></div>
  
         </div>
    </div>
    <div class="listeleme">
      <span>Sepet Bilgileri</span>
      <div class="uruncontainer" v-for="product in products" :key="product.id" >
      <div class="top">
        <img :src="product.images" alt="" class="over">
        <span>{{product.ProductName}}</span>
      </div>
 </div>
      <div class="center"  v-show="this.products.length>0">
        <table>
          <tr>
            <td class="font">Ara Toplam </td>
            <td class="fonta">{{calculatePrice}}</td>
          </tr>
          <tr>
            <td class="font">KDV %8 </td>
            <td class="fonta">{{calculateKdv}} </td>
          </tr>
        </table>
      </div>

    <div class="bottom"  v-show="this.products.length>0">
      <h1>TOPLAM</h1>
      <h1>{{ calculateToplamPrice }}</h1>
    </div>
     <a @click=" AddTheOrder(name,surname,tc,email,tel,adres,il,ilce,pkod,calculateToplamPrice)">
     <div class="btne"  v-show="this.products.length>0">
       DEVAM ET
     </div>
     </a>
   <div class="ifzero" v-show="this.products.length===0">
         <p>Sepetinizde ürün bulunmamaktadır.</p>
         <p>Ürünlerimizi inceleyin, beğendiklerinizi sepetinize ekleyin.</p>
         <p>Sepetinizdeki ürünler, siz ürünü satın alana ya da sepetinizden kaldırana kadar sepetinizde tutulacaktır.</p>
        <nuxt-link :to="{ name: 'ShopProducts' }"> <div class="btne">Alışverişe Devam Et</div></nuxt-link>
     </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'AdresandPrice',
  data () {
    return {
      title: 'Adres & Ödeme',
      text: 'Teslimat Bilgeri',
      name: '',
      surname: '',
      tc: '',
      email: '',
      tel: '',
      adres: '',
      pkod: '',
      il:'',
      ilce:'',
      citys: [
        { ctname: '', value: 'il0' },
        { ctname: 'İlAdı1', value: 'il1' },
        { ctname: 'İlAdı2', value: 'il2' },
        { ctname: 'İlAdı3', value: 'il3' },
        { ctname: 'İlAdı4', value: 'il4' },
        { ctname: 'İlAdı5', value: 'il5' },
        { ctname: 'İlAdı6', value: 'il6' }
      ],
      towns: [
        { tname: '', value: 'ilce0' },
        { tname: 'İlçeAdı1', value: 'ilce1' },
        { tname: 'İlçeAdı2', value: 'ilce2' },
        { tname: 'İlçeAdı3', value: 'ilce3' },
        { tname: 'İlçeAdı4', value: 'ilce4' },
        { tname: 'İlçeAdı5', value: 'ilce5' },
        { tname: 'İlçeAdı6', value: 'ilce6' }
      ]
    }
  },
   methods:{
     
         AddTheOrder(name,surname,tc,email,tel,adres,il,ilce,pkod,calculateToplamPrice){
 
    let data ={
      name:this.name,
      surname:this.surname,
      tc:this.tc,
      email:this.tc,
      tel:this.tel,
      adres:this.adres,
      il:this.il,
      ilce:this.ilce,
      pkod:this.pkod,
      calculateToplamPrice:this.calculateToplamPrice,
       
    }
     this.$store.dispatch('AddTheOrder',data)
    },
  },
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
}
</script>

<style scoped>
*{
  font-family: ubuntu, Helvetica, Arial, sans-serif;
}
.AdresandPrice{
    float: left;
    margin-top: 20px;
    margin-left: 7%;
    font-size: 10px;
    margin-bottom: 50px;
}
.container{
  margin-left: 5%;
  width: auto;

}

h2{
  color: #7b232e;
  font-size: 30px;
  margin-bottom: 20px;
}
table{
  color: gray;
  font-weight: bold;
  width: 110%;
  font-size: 11px;
}
.container p {
    color: gray;
  font-size: 17px;
  font-weight: bolder;
  margin-top: 25px;
  margin-bottom: 20px;
}
input[type=text] {
  width: 100%;
  padding: 6px 14px;
  margin: 2px 0;
  box-sizing: border-box;
  margin-left: 10px;
}
.select-box {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
  font-size: 18px;
  color: #60666d;
  margin-top: 5px;
   margin-left: 10px;}
  .top{
      padding: 0;
      text-align:start;
  }
  .using{
      margin-top: 30px;
      margin-left: 15px;
   color: gray;
  font-weight: bold;
  width: 110%;
  font-size: 11px;
  }
  .using:checked{
     background: blue;
  }
  .using label{
  margin-left: 15px;
  }
  .listeleme {
    width: 19%;
    float: right;

    margin-top: 4em;
  }
  .listeleme span {
    font-size: 25px;
    font-weight: 500;
    opacity: 0.9;
  }
 
 .listeleme .top {
   margin-top: 10px;
   border-bottom: #60666d 1px solid;
   height: 280px;
 }
  .listeleme .top img {
    width: 200px;
    height: 230px;
    margin-left: 20px;
    float: left;
    margin-bottom: 10px;
  }
  .listeleme .top span{
    float: left;
    font-size: 13px;
    font-weight: 600;
    margin-left: 30px;
    margin-bottom: 30px;
   
  }
  .listeleme .center table span{
    font-size: 19px;
  }
  .font{
  font-size: 15px;
  font-weight: 500;
  color: black;
}
.fonta{
  font-size: 15px;
  font-weight: 500;
  color: black;
}
.fonta::after{
   content: url(../assets/tl-icon.fw.png);
  margin-left: 8px;
}
.listeleme .bottom {
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  
}
.listeleme .btne {
  width: 90%;
  height: 40px;
  background: #7b232e;
  color: white;
  border-radius: 5%;
  margin-left: 10px;
  margin-top: 15px;
  text-align: center;
  padding: 8px;
}
.ifzero p{
  font-size: 12px;
  color: black;
}
</style>
