<template>
<div>
    <div class="">
        <section>
    <h3>HESAP BİLGİLERİM</h3>
           <div class="profilecard" v-for="user in users" :key="user.id">
               <div class="imagecard"> <img :src="user.image" alt=""> </div>
               <div class="Infocard">
                   <ul>
                       <li><span>Kullanıcı Adı :</span>  {{user.Username}}</li>
                        <li><span>Kullanıcı Email : </span>  {{user.UserEmail}}</li>
                         <li><span>Kullanıcı Phone : </span>  {{user.PhoneNumber}} </li>
                          <li><span>Kullanıcı Doğum Tarihi : </span>   {{user.BirthDay}}</li> 
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
        return this.$store.getters.SetUsers;
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
.imagecard{
    margin-left: 25px;
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
    margin-top: 4em;
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