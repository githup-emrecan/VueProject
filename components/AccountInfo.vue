<template>
<div>
    <div class="">
        <section>
    <h3>HESAP BİLGİLERİM</h3>
           <div class="profilecard" v-for="user in users" :key="user.id">
               <div class="imagecard"> <img :src="user.img" alt=""> </div>
               <div class="Infocard">
                   <ul>
                       <li><span>Kullanıcı Adı :</span></li>
                       <li><span>Kullanıcı Soyadı :</span></li>
                        <li><span>Kullanıcı Email : </span></li>
                         <li><span>Kullanıcı Phone : </span></li>
                          <li><span>Kullanıcı Doğum Tarihi : </span></li> 
                   </ul>
               </div>
                <div class="Infocard2">
                   <ul>
                       <li>{{user.name}}</li>
                       <li>{{user.surname}}</li>
                       <li>{{user.email}}</li>
                       <li>{{user.phone}}</li>
                       <li>{{user.birthdate}}</li>
                   </ul>
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
        }
  }
}
</script>

<style scoped>
.profilecard{
    width: 100%;
    height: 300px;
    background-color:#f5f5f5;
    margin-top: 1em;
}
.imagecard{
    margin-left: 40px;
    margin-top:25px;
    float: left;
}
.imagecard img{
 width: 220px;
 height: 220px;
}
.Infocard{
    float: left;
    margin-left: 3em;
    margin-top: 2.3em;
    text-align: right;
}
.Infocard2{
    float: left;
    margin-left: 1em;
    margin-top: 2.3em;
}
.Infocard2 ul li{
margin-top:10px;
font-weight: 600;
}

.Infocard ul li{
margin-top:10px;
}
.Infocard ul li span{
color:#7b232e;
font-weight: 600;
}
h3{
    color:#7b232e;
font-weight: 600;
font-size: 25px;
}
</style>