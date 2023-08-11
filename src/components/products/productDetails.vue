<template>
    <div>
        <main>
            <section class="preview-image">
                <img :src="image">
            </section>
            <section class="preview-details">
                <h4>{{title}}</h4> <!--title-->
                <span>{{priceDollars}}</span> <!--price-->
                <p>{{description}}</p> <!--moreDetails-->
                <section class="spacer"></section>
            </section>
        </main>
        <base-button class="fill" @click="addToCart(id)">Add to Cart</base-button>
    </div>  
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: ['id','image','title','price','description'],
    computed:{
        priceDollars(){
            return '$'+this.price;
        }
    },
    methods:{
      ...mapActions(['addToCart'])
    }
}
</script>

<style scoped>
div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: .5rem;
}
main{
    display: flex;
}
img{
    width:100%;
    height: 100%;
}
span{
    border-radius: 25px;
    border: none;
    background-color: rgb(166, 185, 19);
    font-size: small;
    font-weight: 800;
    padding: 0 .8rem;
}
p{
    font-size: x-small;
}
.preview-image{
    max-width: 30%;
}
.preview-details{
    margin: 0 .5rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: .5rem;
}
.preview-details h4,.preview-details span, .preview-details p{
    /* border: 1px solid black; */
    margin: 0;
}
.spacer{
    height: 2rem;
}



</style>