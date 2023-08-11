<template>
    <base-card>
        <div>
            <img :src="image">
            <h3>{{ title }}</h3>
            <section class="priceQuantity">
                <p>Price per item: <span>{{ priceDollars }}</span></p>
                <p>Quantity: <span>{{ quantity }}</span></p>
            </section>
            <section class="totalPrice">
                <h4>Total: {{ totalDollars }}</h4>
            </section>
            <base-button class="fill" @click="deleteCart(id)">Remove</base-button>
        </div> 
    </base-card>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props: ['id','image','title','price','quantity','total'],
    computed:{
        priceDollars(){
            return '$'+ this.price.toFixed(2);
        },
        totalDollars(){
            return '$'+ this.total.toFixed(2);
        }, 
    },
    methods:{
        ...mapActions(['deleteCart'])
    }
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: .5rem;
}
img{
    border-radius: 100%;
    width: 40%;
}
h4,h3, p{
    padding: 0;
    margin: 0;
}
span{
    font-weight: 700;
}
.priceQuantity{
    width:90%;
    display: flex;
    justify-content: space-between;
    padding-bottom: .2rem;
}
.totalPrice{
    padding: .1rem;
    width: 90%;
    text-align: center;
    border-top: .3px solid black;
    border-bottom: 2px solid black;
}
</style>