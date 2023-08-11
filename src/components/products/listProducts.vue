<template>
  <ul>
    <li v-for="items in aw" :key="items.id">
        <base-card>
          <product-details
          :id="items.id"
          :image="items.image"
          :title="items.title"
          :price="items.price"
          :description="items.description"></product-details>
        </base-card>
    </li>
  </ul>
</template>

<script>
import productDetails from './productDetails.vue'
export default {
    components:{productDetails},
    data(){
      return{
        products: this.$store.state.products,
      }
    },
    computed:{
      aw(){
        return this.$store.getters.products;
      }
    }
}
</script>

<style scoped>
li,ul{
    list-style: none;
    margin:0;
    padding: 0;
}
</style>