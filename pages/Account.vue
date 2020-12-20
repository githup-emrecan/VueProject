<template>
  <div>
      <accountInfo></accountInfo>
  </div>
</template>

<script>

import accountInfo from '../components/Account';
import {mapActions} from "vuex";
export default {
  name: 'account',
  components: {
     accountInfo
    },
     created(){
     this.fetchUsers()
  },
  methods :{
    ...mapActions({
           fetchUsers: 'fetchUsers'
    })

  }
};
</script>