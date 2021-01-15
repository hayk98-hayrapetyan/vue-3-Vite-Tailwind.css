import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import store from './store'


store.commit('contact/GET_AND_SET_CONTACTS');
store.commit('card/GET_AND_SET_CARD_AND_BANKS');

const app = createApp(App);

app.use(router);
app.use(store);
router.isReady().then(() => {
    app.mount('#app');
})
