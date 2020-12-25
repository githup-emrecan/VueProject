<template>
<div class="loginPage">
  <span>Anasayfa  /</span> {{title}}
  <div class="container">
    <h2>{{Bigtitle}}</h2>
    <p>{{text}}</p>
    <form >
    <table>
      <tr>  
      <td class="em">E-mail</td>
      <td>
        <input type="text" v-model="email">
     <h6 v-if="!emailisValid">{{requere}}</h6>
        </td>
      </tr>
      <tr> 
      <td class="em">Şifre</td>
      <td><input type="password" v-model="password">
      <h6 v-if="!passwordisValid">{{requere}}</h6>
      </td>
      </tr>
      <tr>
      <td></td>
      <td class="forget">Şifremi unuttum</td>
        </tr></table></form>
      <div class="buton container">
        <button class="button" type="submit" value="Submit" @click="signin()">Giriş</button>
     <button class="button button2" >Facebook ile giriş</button>
     <div class="clss" v-if="!isAuthenticated"> asdasdasdasdasda </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'loginPage',
  data () {
    return {
      title: 'Giriş',
      Bigtitle: 'Üye Girişi',
      text: 'Eğer sitemize daha önceden kayıt olmuşsanız e-mail ve şifreniz ile sisteme giriş yapabilirsiniz.',
     requere:'Bu alanın doldurulması zorunludur.',
     email: '',
     password: '',
     isrequere:false,
      
    }
  },
   methods: {
        signin() {
           
                this.$store.dispatch('userLogin', {
                    email: this.email,
                    password: this.password
                });
            
        }
    },
  computed:{
      emailisValid(){
        return !!this.email;
      },
      passwordisValid(){
        return !!this.password;
      },
      isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }

  }

}
</script>
<style scoped>
*{
  font-family: ubuntu, Helvetica, Arial, sans-serif;
}
.loginPage{
    float: left;
    margin-top: 20px;
    margin-left: 7%;
    font-size: 13px;

}
.em{
  padding-top: 16px;
}
span{
  opacity: 0.5;
  font-size: 13px;
}
.container{
  margin-left: 5%;
  width: 90%;
  margin-top: 50px;
}
.container h6{
  color: red;
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
}
h2{
  color: #7b232e;
  font-size: 30px;
}
.container p {
  font-size: 13px;
  opacity: 0.5;
  margin-top: 15px;
  margin-bottom: 35px;
}
table{
  color: gray;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
}

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
   border : #dcdcdc 1px solid;
}
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
   border : #dcdcdc 1px solid;
}
input[type=text]:focus {
 outline: 0;
   border: #f4b57aa4 1px dashed;
}
input[type=password]:focus {
 outline: 0;
   border: #f4b57aa4 1px dashed;
}
table .forget{
  text-align: right;
 font-size: 13px;
 font-weight: normal;
}
.button{
  width: 200px;
  height: 45px;
  background: #7b232e;
  margin-right: 10px;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
   cursor: pointer;
}
.button2{
  background: #375791;
}
</style>
