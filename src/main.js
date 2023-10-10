import { createApp } from 'vue';
import App from './App.vue';
import Routes from './Router/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import moment from 'moment';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

app.config.globalProperties.moment = moment;

app.use(PrimeVue, { unstyled: true });
app.use(ToastService);

app.use(Routes);


app.mount('#app').$nextTick(() => {
  AOS.init();
});
