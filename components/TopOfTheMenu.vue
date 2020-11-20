<template>
    <header>
 <div class="container">
       <div id="search-box">
            <table class="elementscontainer">
                <tr>
                    <td>
                        <input type="text"  class="search">
                    </td>
                    <td>
                        <a href="#"><img src="@/assets/search.png" alt="" class="material-icons"></a>
                    </td>
                </tr>
            </table>
         </div>
 </div>
        <div class="header-logo">
            <a href="#"><img src="@/assets/coffeemania-logo.png" alt="" ></a>
        </div>
        <div id="right-box">
            <section>
                <nav>
                    <ul>
                        <li><a href="#"><img src="@/assets/tr.png" alt=""><img src="@/assets/down-arrow.png" alt="" class="down"></a>
                        <ul>
                            <li ><a href=""><img src="@/assets/tr.png" alt=""></a></li>
                             <li><a href=""><img src="@/assets/en.png" alt="" ></a></li>
                        </ul></li>
                    </ul>
                </nav>
            </section>
            <section>
              <nuxt-link :to="{ name: 'user' }"> <img src="@/assets/user.png" alt="" class="over"></nuxt-link>
           </section>
           <section v-show="this.products.length>0">
               <div class="accoMenu" @click="isOpen =!isOpen">
   <img src="@/assets\accodrown.png" alt="" class="over">
    <transition name="fade" appear>
    <div class="sub-menu" v-if="isOpen">
       <ul>
         <li><nuxt-link :to="{ name: 'Account' }">Hesabım</nuxt-link></li>
         <li>Siparişlerim</li>
         <li>Güvenli Çıkış</li>
       </ul>               
    </div>
    </transition>
  </div>
            </section>
            <section v-show="this.products.length===0">
                <img src="@/assets/ecommerce.png" alt="" class="over">
            </section>
           <section v-show="this.products.length>0">
               <div class="pcartMenu" @click="isCOpen =!isCOpen">
    <img src="@/assets/ecommerce.png" alt="" class="over"><span v-show="this.products.length>0">{{this.products.length}}</span>
    <transition name="fade" appear>
    <div class="sub-menu" v-if="isCOpen">
           <cartProductInfo></cartProductInfo>   
    </div>
    </transition>
  </div>
          </section>
       </div>
    </header>
</template>
<script>
import cartProductInfo from './ProductCart';
export default {
  data(){
    return{
      isOpen: false,
     isCOpen: false
    }
  },
   components:{
    cartProductInfo
  },
  computed: {
			products () {
				return this.$store.getters.productsAdded;
            }
            }

};
</script>
<style scoped>
header{
    width: 100%;
    height: 87px;
    background-color:#fff;
    margin-top: 0;
}
.container{
    width:25%;
    height: 100%;
    float: left;
}
#search-box{
    position: relative;
    width: 180px;
    height: 38px;
    border: 1px solid #363636;
    padding: 0px 10px;
    border-radius: 50px;
    top: 15px;
    margin-left: 23%;
}
.elementscontainer{
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
.search{
    border:none;
    height: 100%;
    width: 100%;
    padding: 0 5px;
    border-radius: 50px;
    font-size: 14px;
    color: black;
    font-weight: 100;
}
.search:focus{
    outline: none;
}
.material-icons{
    width: 22px;
    height: 20px;
    margin-top: 6px;
}
.header-logo{
    width: 57%;
    height: 100%;
    float: left;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
#right-box{
    width: 18%;
    height: 100%;
    float: right;
}
section{
    margin-top: 20px;
    float: left;
    margin-left: 10px;
}
.over:hover{
    opacity: 0.8;
}
nav ul{
    list-style: none;
    margin: 0;
  padding: 0;

}
nav li{
    position:relative;
    width: 58px;
    background-color: #fff;
    z-index: 1;
}
.down{
    width: 12px;
    height:13px;
    margin-top: 9px;
    float: right;
}
nav ul li ul{
  position: absolute;
  left:-900em;
}
nav ul li:hover ul{
  left: 0;
}
nav ul li a{
  text-decoration: none;
  display: block;
  text-align: center;
}
nav ul li ul li a{

  padding-top: 2px;
  font-size: .8em;
}
nav  li ul  li a:hover{
  background:#7b232e;
}
.accoMenu{
  position: relative;
  display: flex;
  margin-top: 10px;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
}
.accoMenu img{
   opacity: 0.6;
   width: 11px;
}
.accoMenu .sub-menu{
 position: absolute;
  background-color: #fff;
  top: 55px;
  transform: translateX(-50%);
  left: 100%;
  width: max-content;
  margin-left: 30px;;
  padding: 0;
  padding-bottom: 15px;
}
.accoMenu ul{
    list-style-type: none;
}
.accoMenu ul li{
  width:140px;
  padding-left: 10px;
  font-size: 13px;
  margin-top: 15px;
  font-family:Arial, Helvetica, sans-serif;
  font-weight: 520;
  color: #4f4f4f;
}
.accoMenu ul li a{
    color: #4f4f4f;
}
.pcartMenu{
  position: relative;
  display: flex;
}
.pcartMenu .sub-menu{
 position: absolute;
  top: 4.2em;
  transform: translateX(-40%);
  left: 50%;
  width: max-content;
  z-index: 1;
}
.pcartMenu span{
    margin-left: 5px;
    margin-top: 7px;
    font-size: 16px;
    font-weight: 700;
}
</style>
