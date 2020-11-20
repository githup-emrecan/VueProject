<template>
    <div class="AdresandPrice">
         <div class="container">
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <table>
      
      <tr>
<td>{{name}}</td>
      <td><input type="text"></td>
      </tr>
      <tr>
        <td>{{surname}}</td>
      <td><input type="text"></td>
      </tr>
      <tr>
        <td>{{tc}}</td>
      <td><input type="text"></td>
      </tr>
      <tr>
        <td>{{email}}</td>
      <td><input type="text"></td>
      </tr>
      <tr>
        <td>{{tel}}</td>
      <td><input type="text"></td>
      </tr>
          <tr>
            <td>il</td>
      <td><select name="" id="" class="select-box">
          <option value="" v-for="city in citys" :key="city.value">{{city.ctname}}</option>
          </select></td>
          </tr>
          <tr>
            <td>ilçe</td>
      <td><select name="" id="" class="select-box">
          <option value="" v-for="town in towns" :key="town.value">{{town.tname}}</option>
          </select></td>
          </tr>
      <tr>
        <td class="top">{{adres}}</td>
      <td><textarea name="" id="" cols="30" rows="5" style="margin-top:5px; margin-left: 10px;"></textarea></td>
      </tr>
     <tr>
        <td>{{pkod}}</td>
      <td><input type="text"></td>
     </tr>
        </table>
        <div class="using"> <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">fatura adresim olarak kullan</label></div>

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
      name: 'Ad',
      surname: 'Soyad',
      tc: 'TC kimlik No',
      email: 'E-mail',
      tel: 'Telefon',
      adres: 'Adres',
      pkod: 'Posta kodu',
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
  }
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
</style>
