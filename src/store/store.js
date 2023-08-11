import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            products: [
                {
                    id: 'p1',
                    image:
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
                    title: 'Book Collection',
                    description:
                      'A collection of must-read books. All-time classics included!',
                    price: 99.99,
                  },
                  {
                    id: 'p2',
                    image:
                      'https://st.depositphotos.com/1400069/2216/i/950/depositphotos_22163033-stock-photo-old-tent-in-the-autumn.jpg',
                    title: 'Mountain Tent',
                    description: 'A tent for the ambitious outdoor tourist.',
                    price: 129.99,
                  },
                  {
                    id: 'p3',
                    image:
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
                    title: 'Food Box',
                    description:
                      'May be partially expired when it arrives but at least it is cheap!',
                    price: 6.99,
                  },     
            ],
            myCart: [],
            isLoggedIn: false,
        }
    },
    mutations:{
      addToCart(state,id){
        if(state.myCart.length === 0){
          const item = state.products.find(item => item.id === id);
          const obj = {
            id: item.id,
            image: item.image,
            title: item.title,
            price: item.price,
            quantity: 1,
            total: item.price
          }
          state.myCart.push(obj)
          console.log('first create!')
        }else{
          const matchItem = state.myCart.find(item=> item.id === id)
          if(matchItem){
            matchItem.quantity++;
            matchItem.total = matchItem.quantity * matchItem.price
            console.log('match!');
          }else{
            const newItem = state.products.find(items => items.id === id);
            const newObj = {
              id: newItem.id,
              image: newItem.image,
              title: newItem.title,
              price: newItem.price,
              quantity: 1,
              total: newItem.price
            }
            state.myCart.push(newObj)
            console.log('new item Created!')
          }
        }
      },
      logIn(state){
        state.isLoggedIn = true
      },
      logOut(state){
        state.isLoggedIn = false
      },
      deleteCart(state,id){
        const filtered = state.myCart.filter(item=> item.id !== id);
        state.myCart = filtered;
        console.log('delete');
        console.log(state.myCart)
      }
    },
    actions:{
      deleteCart(context,id){
        context.commit('deleteCart',id);
      },
      addToCart(context,id){
        context.commit('addToCart',id);
      },
      logIn(context){
        context.commit('logIn')       
      },
      logOut(context){
        context.commit('logOut')   
      }
    },
    getters:{
      products(state){
        return state.products;
      },
      carts(state){
        return state.myCart;
      },
      getTotalPrice(state){
        let total = 0;
        for(let item of state.myCart){
          total = total+item.total
        }
        return '$'+total.toFixed(2);
      },
      getTotalCarts(state){
        let total = 0;
        for(let item of state.myCart){
          total = total+item.quantity
        }
        return total;
      }
    }
})

export default store;