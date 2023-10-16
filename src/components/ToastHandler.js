import { app } from '../main.js';
import { ToastSeverity } from 'primevue/api';

const lifeTime = 3000;

export function infoToast(title = 'I am title', body = 'I am body') {
  app.config.globalProperties.$toast.add({ severity: ToastSeverity.INFO, summary: title, detail: body, life: lifeTime });
}


export function errorToast(title = 'I am title', body = 'I am body') {
  app.config.globalProperties.$toast.add({ severity: ToastSeverity.ERROR, summary: title, detail: body, life: lifeTime });
};