import { createApp } from 'vue';
import App from './App.vue';
import Routes from './Router/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import moment from 'moment';


import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Column from 'primevue/column';
import Toast from 'primevue/toast';
import Row from 'primevue/row';
import InputText from 'primevue/inputtext';


export const app = createApp(App);

app.config.globalProperties.moment = moment;

app.use(PrimeVue);
app.use(ToastService);

app.component('Column', Column);
app.component('Toast', Toast);
app.component('Row', Row);
app.component('InputText', InputText);


app.use(Routes);


app.mount('#app').$nextTick(() => {
  AOS.init();
});
