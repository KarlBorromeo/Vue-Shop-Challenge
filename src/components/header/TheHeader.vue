<template>
  <div class="container">
    <h2>VueShop</h2>
    <nav-header></nav-header>
    <base-button v-if="!this.$store.state.isLoggedIn" @click="logIn">Login</base-button>
    <base-button v-if="this.$store.state.isLoggedIn" @click="logOut">Logout</base-button>
  </div>
  <span v-if="this.$store.state.isLoggedIn">
    <router-view></router-view>
  </span>
  
</template>

<script>
import navHeader from '../nav/navHeader.vue'
import { mapActions } from 'vuex';
export default {
    components:{
        navHeader,
    },
    methods:{
      ...mapActions(['logOut']),
      logIn(){
        this.$router.push('/home')
        this.$store.dispatch('logIn')
      }
    }
}
</script>

<style scoped>
.container{
    margin: auto;
    width: 90%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid black; */
}
</style>