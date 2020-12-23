<template>
<div>
    <div class="">
        <section>
    <h3>ADRES BİLGİLERİM</h3>
           
           <div class="adressCard" v-for="user in users" :key="user.id">
               <div class="con" v-for="adres in user.Adress" :key="adres.id">
               <div class="titler"> <span> Adres Başlığı :</span>  {{adres.title}} </div>
               <div class="icontainer">
                   <div class="il"><span> İl :</span>  {{adres.il}}</div>
                   <div class="ilce"><span> İlçe :</span>  {{adres.ilce}}</div>
                   <div class="kod"><span> Posta Kodu :</span>  {{adres.PostaKod}}</div>
               </div>
               <div class="icontainer"><span> Adres :</span>  {{adres.adresText}}</div>
                 <div class="icontainer"><span> Adres Tarifi :</span>  {{adres.adresDescription}} </div>
           </div>
           </div>
        </section>
    </div>
</div>
   
    
</template>

<script>
export default {
name:'accountInfo',
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
        },
        AddToCart(pid,ProductName,Price,images,selected){
    let data ={
        pid:pid,
        ProductName:ProductName,
        Price:Price,
        images:images,
        piece: selected
    }
     this.$store.dispatch('AddToCart',data)
    },
  }
}
</script>

<style scoped>
h3{
    color:#7b232e;
font-weight: 600;
font-size: 25px;
}
.adressCard{
    margin-top: 1em;
    width: 100%;
    height: 220px;
    margin-top: 1em;
    margin-left: 1em;
    
}
.titler{
     width: 100%;
    height: 50px;
    border-bottom:#7b232e 2px solid;
    font-size: 19px;
    font-weight: 500;
    padding: 10px;
}
.titler span{
    color: #7b232e;
    font-weight: 700;
    font-size: 20px;
}
.icontainer{
     width: 100%;
     height: 40px;
     margin-top: 5px;
}
.icontainer .il{
    float: left;
    width: 31%;
    margin-left: 5px;
    height: 40px;
}
span{
    color: #7b232e;
    font-size: 19px;
    font-weight: 500;
    margin-right: 10px;
}
.icontainer .ilce{
    float: left;
    width: 31%;
    margin-left: 5px;
    height: 40px;
}
.icontainer .kod{
    float: left;
    width: 31%;
    margin-left: 5px;
    height: 40px;
}
</style>