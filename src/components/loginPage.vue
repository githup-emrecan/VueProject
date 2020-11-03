<template>
<div class="loginPage"> 
  <pre><span>Anasayfa  /  </span>{{title}}</pre>
  <div class="container">
    <h2>{{Bigtitle}}</h2>
    <p>{{text}}</p>
    <table>
      <td>{{email}}</td>
      <td><input type="text"></td>
      <tr></tr>
      <td>{{password}}</td>
      <td><input type="password"></td>
      <tr></tr>
      <td></td>
      <td class="forget">Şifremi unuttum</td>
      <tr></tr></table>
      <div class="buton container">
        <button class="button">Giriş</button>
     <button class="button button2">Facebook ile giriş</button>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name:'loginPage',
  data()
  {
    return{
      title:'Giriş',
      Bigtitle:'Üye Girişi',
      text:'Eğer sitemize daha önceden kayıt olmuşsanız e-mail ve şifreniz ile sisteme giriş yapabilirsiniz.',
      email:'E-mail',
      password:'Şifre',
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
pre{
  color:black;
  font-size: 15px;
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
}
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
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