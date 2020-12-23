<template>
  <div class="container">
      <h1>SİPARİŞLERİM</h1>
      <div class="after">
          <div class="ordernow">
          <Noworder></Noworder>
          </div>
      </div>
      <div class="beforeorder">
          <div class="order">
               <BeforeOrder></BeforeOrder>
          </div>
      </div>
      
  </div>
</template>

<script> 
import BeforeOrder from '../components/beforeOrderss'
import Noworder from '../components/NowOrders'
export default {
   name: 'order',
  components: {
    BeforeOrder,
    Noworder
    }
};

</script>
<style  scoped>
.container{
    float: left;
    width: 90%;
    height: 500px;
    margin-top: 2em;
    margin-left: 8%;
    font-family: ubuntu, Helvetica, Arial, sans-serif;
}
.container h1 {
    font-size: 35px;
    color:#7b232e;
    font-weight: 600;
    text-align: center;
}
.beforeorder{
    margin-top: 1em;
}

</style>