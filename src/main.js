import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';
import router from "./router";
import "ayoflex/dist/ayoflex.min.css";
import './assets/css/example.css';

const eventBus = mitt()

const app = createApp(App);
app.use(router);

app.config.globalProperties.$eventBus =  eventBus;

app.mount('#app');

