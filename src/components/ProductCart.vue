<template>
    <div class="Pcart">
            <div class="PieceInfo">Sepetinizde {{count+1}} adet ürün bulunmaktadır.</div>
            <div class="productsInfo">
                <div class="PLeft">
                    <img :src="products[3].images[0]" alt="" class="over">
                </div>
                <div class="Pcenter">
                   <h1>{{products[3].ProductName}} x1</h1>
                    <p>{{products[3].Price}}TL</p>
                </div>
                <div class="Pright">x</div>
            </div>
            <div class="PriceContainer">
                <table>
                    <tr>
                        <td class="big">Ara Toplam</td>
                        <td class="lira"><p>{{products[3].Price}}</p></td>
                    </tr>
                    <tr>
                        <td class="big">KDV %8</td>
                        <td class="lira"><p>{{ getkdv(products[3].Price)}}</p></td>
                    </tr>
                </table>
                <div class="totalPrice">
                    <table>
                         <tr>
                        <td class="bigtwo">Toplam</td>
                        <td class="biglira"><p>{{ getkdv(products[3].Price) + products[3].Price }}0</p></td>
                    </tr>
                    </table>
                </div>
            </div>
            <div class="butoncontainer">
                  <div class="btn1"><button class="show"><p>Sepeti Görüntüle</p></button></div>
                  <div class="btn2"><button class="end"><p>Alışverişi Tamamla</p></button></div>
            </div>
    </div>
</template>
<script>
import Store from '../data/product.js'
export default {
    name:'Pcart',
    data(){
        return{
             products: Store.Products,
             count:0
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
<style  scoped>
*{
     font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
.Pcart{
    width: 22%;
    float: left;
    margin-left: 10%;
    margin-top: 3em;
}
.PieceInfo{
    width: 100%;
    height: 35px;
    text-align: center;
    padding-top: 15px;
    color: #4f4f4f;
    border-top:#7b232e solid 1px ;
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
    width: 83%;
}
.totalPrice{
width: 100%;
height: 50px;
background: #fffef8;
padding-top: 15px;
}
.totalPrice table{
    font-size: 23px;
  color: #4f4f4f;
  padding-left: 15px;
  font-weight: 700;
}
.bigtwo {
    width: 75%;
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

