<template>
  <div>
    <router-link to="/home">Products</router-link>
    <router-link to="/cart">Cart</router-link>
    <button>{{getTotalCarts}}</button>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed:{
      ...mapGetters(['getTotalCarts'])
    }
}
</script>

<style scoped>
a{
  text-decoration: none;
  font-weight: 700;
  font-size: small;
}
button{
  border: none;
  padding: .1rem .8rem;
  border-radius: 25px;
  background-color: blue;
  color: white;
}
div{
  gap: .7rem;
  display: flex;
  justify-content: start;
}
.router-link-active{
  text-decoration: underline;
}
</style>