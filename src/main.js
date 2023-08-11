import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js'
import route from './route/route.js'
import baseButton from './components/base/baseButton.vue';
import baseCard from './components/base/baseCard.vue';


const app = createApp(App);
app.component('base-card',baseCard);
app.component('base-button',baseButton);

app.use(store);
app.use(route);
app.mount('#app');
