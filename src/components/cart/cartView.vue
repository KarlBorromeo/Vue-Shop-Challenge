<template>
  <div>
    <header>
        <h3>Your Cart</h3>
    </header>
    <section>
        <h4>Total Amount:</h4>
        <button>{{ getTotalPrice }}</button>
    </section>
    <list-cart v-for="item in carts" :key="item.id"
        :id="item.id"
        :image="item.image"
        :title="item.title"
        :price="item.price"
        :quantity="item.quantity"
        :total="item.total"
    ></list-cart>
  </div>
</template>

<script>
import listCart from './listCart.vue'
import { mapGetters } from 'vuex';
export default {
  components: { listCart },
    computed:{
        ...mapGetters(['getTotalPrice','carts'])
    }
}
</script>

<style scoped>
div{
    width:90%;
    margin: auto;
}
header{
    text-align: center;
    border-bottom: 1px solid blueviolet;
}
section{
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    margin-left: .5rem;
    padding: .1rem .5rem;
    border-radius: 25px;
    border: none;
    background: blue;
    color: white;
    font-weight: 600;
}
li{
    list-style: none;
}
</style>