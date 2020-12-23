<template>
<div>
    <div class="account">
        <section>
    <h3>Hesabım</h3>
        <ul>
            <li><a  @click="isOpen =!isOpen">Hesap Bilgilerim</a></li>
            <li><a @click="isCOpen =!isCOpen">Teslimat Adreslerim</a></li>
            <li><a>Fatura Bilgilerim</a></li>
            <li><a>Yardım</a></li>
            <li><a>Bize Ulaşın</a></li>
            <li><a>Güvenli Çıkış</a></li>
        </ul>
      </section>
      <section>
  <h3>Listelerim</h3>  
        <ul>
            <li><a>Alışveriş Listem</a></li>
            <li><a>Fiyat Bildirim Listem</a></li>
        </ul>
      </section>
    </div>
   <div class="bilgi">
         <div class="bilgicontainer1" v-if="isOpen" >
             <AccountInfo> </AccountInfo>
         </div>
         <div class="bilgicontainer2" v-if="isCOpen">
             <AccountAdress></AccountAdress>
         </div>
   </div>

</div>
   
    
</template>

<script>

import AccountInfo from '../components/AccountInfo'
import AccountAdress from '../components/AccountAdress'
export default {
name:'account',
data(){
    return{
     isOpen: false,
     isCOpen: false
    }
  },
components:{
    AccountInfo,
    AccountAdress
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

.bilgi{
    width: 60%;
    height: 350px;
    float: left;
    margin-left: 50px;
    margin-top: 4em;
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