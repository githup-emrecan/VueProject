<template>
<div class="Cartdeta">
     <pre><span>Anasayfa  /  </span>{{title}}</pre>
     <h1 class="title">Sepetim</h1>
     <div class="container">
     <div class="ProductsInfo">
         <table>
           <tr>
             <td class="ımage">Resim</td>
             <td class="Pname">Ürün Adı</td>
             <td class="adet">Adet</td>
             <td class="price">Birim Fiyat</td>
             <td class="Ptplm">Toplam</td>
             <td class="close">Kaldır</td>
           </tr>
            <tr>
             <td class="Dımage"><img :src="products[3].images[0]" alt="" class="over"></td>
             <td class="Dname">{{products[3].ProductName}}<br>
             <input type="text" placeholder="Kişiselleştirme mesajınız">

             </td>
             <td class="Dadet"> <input type="number" name="urunadet_1098__" id="urunadet_1098" value="1" min="1" max="1000"></td>
             <td class="Dprice"><p>{{products[3].Price}}</p></td>
             <td class="Dtplm"><p>{{products[3].Price}}</p></td>
             <td class="Dclose">x</td>
            </tr>
        </table>
     </div>
     <div class="productPrice">
         <table>
             <tr>
                 <td id="Ttoplam">Ara Toplam</td>
                 <td id="Dttplam"><p>{{products[3].Price}}</p></td>
             </tr>
             <tr>
                 <td id="Tkdv">KDV %8</td>
                 <td id="Dkdv"><p>{{ getkdv(products[3].Price)}}</p></td>
             </tr>
              <tr>
                 <td id="Ttotal"><h1>TOPLAM</h1></td>
                 <td id="Dtotal"><p>{{(products[3].Price)+getkdv(products[3].Price)}}0</p></td>
             </tr>
         </table>
     </div>
     <div class="bntcontainer">
        <button class="cont"><p>Alışverişe Devam Et</p></button>
        <button class="del"><p>Sepeti Boşalt</p></button>
        <button class="up"><p>Sepeti Güncelle</p></button>
        <button class="end"><p>Alışverişi Tamamla</p></button>
     </div>
     </div>
</div>
   
</template>
<script>
import Store from '../data/product.js'
export default {
    name:'Cartdeta',
    data (){
        return{
            title :'Sepetim',
            products: Store.Products
        }
    },
    methods:{
        getkdv(a)
        {
            return (a*0.08)+0.0004;
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
    width: 85%;
    margin-left: 8%;
    margin-top: 1.5em;
}
.container{
    margin-top: 5em;
    width: 100%;
    height: 500px;
}
pre{
  color:#4f4f4f;
  font-size: 14px;
  font-weight: bold;
}
span{
  opacity: 0.6;
  font-size: 12px;
}
.Cartdeta .title{
 color: #7b232e;
  font-size: 28px;
  margin-top: 1.5em;
  margin-left: 0.8em;
}
.ProductsInfo table{
width: 100%;
font-size: 14px;
color: #4f4f4f;
font-weight: 700;
}
.ProductsInfo table .ımage,.Pname,.adet,.price,.Ptplm,.close{
    padding-bottom: 1em;
    background: #fffef8;
}
.productPrice{
    background: #fffef8;
    width: 100%;
    padding-top: 1.3em;
    padding-bottom: 1em;
}
.productPrice table{
width: 100%;
font-size: 14px;
}
.productPrice table #Ttoplam,#Tkdv,#Ttotal {
width: 90%;
padding-left: 10px;
}
.productPrice table #Dttplam,#Dkdv,#Dtotal{
    text-align: right;
    padding-right: 10px;
}
#Ttotal,#Dtotal{
    padding-top: 1em;
    font-size: 20px;
    color: grey; 
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
.Dprice p::after,.Dtplm p::after,#Dttplam p::after,#Dkdv p::after{
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
    margin-top: 2em;
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
</style>