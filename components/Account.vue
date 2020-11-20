<template>
    <div class="account">
        <section>
    <h3>Hesabım</h3>
        <ul>
            <li v-for="hsp in hesap" :key="hsp.heID"><a :href="hsp.Url">{{hsp.hsName}}</a></li>
        </ul>
      </section>
      <section>
  <h3>Listelerim</h3>  
        <ul>
            <li v-for="lst in liste" :key="lst.lstId"><a :href="lst.Url">{{lst.lstName}}</a></li>
        </ul>
      </section>
    </div>
</template>

<script>
export default {
name:'account',
data(){
    return{
       hesap:[
           {hsName:'Hesap Bilgilerim', heId:1 , Url:'#' },
           {hsName:'Teslimat Adreslerim', heId:2 , Url:'#' },
           {hsName:'Fatura Bilgilerim', heId:3 , Url:'#' },
           {hsName:'Yardım', heId:4 , Url:'#' },
           {hsName:'Bize Ulaşın', heId:5 , Url:'#' },
           {hsName:'Güvenli Çıkış', heId:6 , Url:'#' },
       ],
       liste:[
           {lstName:'Alışveriş Listem', lstId:1 , Url:'#' },
           {lstName:'Fiyat Bildirim Listem', lstId:2 , Url:'#' }
       ]
    }
}    
}
</script>

<style scoped>
.account{
    float:left;
    margin-top: 2em;
    margin-left: 5%;
    font-family: ubuntu, Helvetica, Arial, sans-serif;
    width: 20%;
     color:gray;
}
h3{
    margin-left: 3em;
}
section{
    margin-top: 2em;
}
section ul {
    list-style: none;
    margin-top: 2em;
    text-align: left;
}
section ul li{
    margin-left: 5px;
    margin-top: 3px;
    font-size: 12px;
    background:url(../assets/list-icon.fw.png) left center no-repeat ;
      padding-left: 15px;
}
section ul li a{
    text-decoration: none;
    color: gray;
}
</style>