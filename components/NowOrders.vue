<template>
<div>
    <div class="nowww">
        <section>
    <h3>BEKLENEN SİPARİŞLER</h3>
                   <div class="ordersCard">
                  <div class="con" v-for="orde in noworders " :key="orde.id">
                <div class="BorderContainer">
                    <div class="container">
                        <div class="datec"><span>Sipariş Tarihi : </span>{{orde.OrderDate}}</div>
                    </div>
                    <div class="containera">
                        <div class="imgaa">
                               <img :src="orde.imga" alt="">
                        </div>
                        <div class="infop">
                            <div class="top">
                            <div class="name">
                                 <span> Ürün Adı :</span> {{orde.ProductName}} <br>
                                 <span> Birim Fiyat :</span> {{orde.Price}}
                            </div>
                            <div class="tot">
                                 <span class="piece">{{orde.piece}} </span>  X <span>Adet</span><br>
                                  <span>Total : </span> <span class="totalp">{{orde.Total}}</span> 
                            </div>
                        </div>
                         <div class="bottom">
                             <div class="sdate"> <span>Kargo Tarihi :</span>{{orde.ShipDate}}</div>
                             <div class="ddate"> <span>Teslim Tarihi :</span>{{orde.DeliveryDate}}</div>
                         </div>
                        </div>
                        </div>
                        
                        <div class="container">
                            
                           <div class="alıcı">
                             <span class="orta">Alıcı Bilgileri</span>
                             <div class="ınfokullanici">
                                  <ul>
                                      <li><span>Ad - Soyad :</span>{{orde.name}} {{orde.surname}}</li>
                                      <li><span>TC :</span> {{orde.tc}}</li>
                                      <li><span>E-mail :</span> {{orde.email}}</li>
                                      <li><span>Telefon :</span> {{orde.tel}}</li>
                                  </ul>
                             </div>
                           </div>
                           <div class="adresalıcı">
                              <span class="orta">Adres Bilgileri</span>
                             <div class="ınfokullanici">
                                  <ul>
                                      <li><span>Sehir :</span> {{orde.il}}</li>
                                      <li><span>İlçe :</span> {{orde.ilce}}</li>
                                      <li><span>Adress :</span> {{orde.adres}}</li>
                                      <li><span>Posta kodu :</span> {{orde.pkod}}</li>
                                  </ul>
                             </div>
                           </div>
                        </div>
                    </div>
                </div>

           </div>
           
        </section>
    </div>
</div>
   
    
</template>

<script>
export default {
name:'orderBefore',
computed: {
    noworders () {
        return this.$store.getters.Getorders;
    }
  },
  mounted(){
      this.getorders();
  },
  methods:{
      getorders() {
            this.$store.dispatch('fetchOrders');
        }
  }
}
</script>

<style scoped>
.nowww{
    margin-top: 2em;
    margin-bottom: 17em;
}
.bosluk{
    height: 10px;
    width: 100%;
    background:green;
}
h3{
    color:#7b232e;
font-weight: 600;
font-size: 23px;
}
.ordersCard{
    margin-left: 15%;
}
.con{
    width: 80%;
    height: 250px;
    margin-top: 2em;
}
.datec{
    height: 40px;
    border-bottom: #7b232e 2px solid;
    width: 810px;
    text-align: right;
    padding-top: 5px;
    padding-right: 20px;
    font-weight: 600;

}
.datec span{
    color: #7b232e;
    margin-right: 10px;
}
.container{
    float: left;
    width: 100%;
}
.containera{
    float: left;
    width: 100%;
    height: 230px;
    border-bottom: #7b232e 2px solid;
}
.imgaa{
    width: 30%;
    height: 210px;
    float: left;
}
 img{
    width: 190px;
    height: 210px;
    margin-left: 1em;
}
.infop{
    float: left;
    width: 65%;
    height: 210px;
    margin-left: 2em;

}
.top{
    float: left;
    width: 100%;
    height: 160px;
}
.top .name{
    padding-top: 20px;
    float: left;
    height: 150px;
    width: 50%;
    font-weight: 600;
}
.top .name span {
    color: #7b232e;
}
.top .tot{
    padding-top: 5px;
    float: left;
    height: 200px;
    width: 50%;
    font-weight: 600;
    padding-left: 20px;
}
.top .tot span{
    font-size: 40px;
    margin-left: 7px;
}
.piece{
    color: #7b232e;
    font-size: 30px;
    padding-left: 20px;
}
.totalp{
    color: #7b232e;
}
.totalp::after{
    content: url(../assets\bigtlicon.png);
    color: #7b232e;
    margin-left: 5px;
}
.bottom{
    float: left;
    width: 100%;
    height: 60px;
    font-weight: 600;
    
}
.bottom span {
    color: #7b232e;
    text-align: left;
    font-weight: 600;
}
.sdate{
    width: 100%;
    height: 30px;
    border-top: #7b232e 2px solid;
    
}
.ddate{
    width: 100%;
    height: 30px;
    border-top: #7b232e 2px solid;
    padding-bottom: 5px;
}
.alıcı{
    width: 50%;
    height: 200px;
    float: left;
    font-size: 18px;
    font-weight: bold;
}
.alıcı span{
    color: #7b232e;
    font-weight: 600;
    font-size: 19px;
    margin-right: 10px;
    
}
.alıcı .orta{
    font-size: 27px;
 
}
.infokullanıcı{
    width: 50%;
    height: 20px;
    float: left;
    border-top:#7b232e 2px solid;
}
.adresalıcı{
    width: 50%;
    height: 200px;
    float: left;
    font-size: 18px;
    font-weight: bold;
}
.adresalıcı span{
    color: #7b232e;
    font-weight: 600;
    font-size: 19px;
    margin-right: 10px;
    
}
.adresalıcı .orta{
    font-size: 27px;
 
}
</style>