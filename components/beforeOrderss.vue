<template>
<div>
    <div class="">
        <section>
    <h3>ÖNCEKİ SİPARİŞLER</h3>
           <div class="ordersCard" v-for="user in users" :key="user.id">
                  <div class="con" v-for="order in user.BeforeOrders" :key="order.id">
                <div class="BorderContainer">
                    <div class="container">
                        <div class="datec"><span>Sipariş Tarihi : </span>{{order.OrderDate}}</div>
                    </div>
                    <div class="container">
                        <div class="imgaa">
                               <img :src="order.imga" alt="">
                        </div>
                        <div class="infop">
                            <div class="top">
                            <div class="name">
                                 <span> Ürün Adı :</span> {{order.ProductName}} <br>
                                 <span> Birim Fiyat :</span> {{order.Price}}
                            </div>
                            <div class="tot">
                                 <span class="piece">{{order.piece}} </span>  X <span>Adet</span><br>
                                  <span>Total : </span> <span class="totalp">{{order.Total}}</span> 
                            </div>
                        </div>
                         <div class="bottom">
                             <div class="sdate"> <span>Kargo Tarihi :</span>{{order.ShipDate}}</div>
                             <div class="ddate"> <span>Teslim Tarihi :</span>{{order.DeliveryDate}}</div>
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
    users () {
        return this.$store.getters.getusers;
    }
  },
  mounted(){
      this.getuser();
  },
  methods:{
      getuser() {
            this.$store.dispatch('fetchUsers');
        }
  }
}
</script>

<style scoped>
h3{
    color:#7b232e;
font-weight: 600;
font-size: 23px;
}
.ordersCard{
    margin-left: 12%;
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
}
</style>