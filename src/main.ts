/* eslint-disable import/order */
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Toast, { PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import router from "./router/router";

const app = createApp(App);
const pinia = createPinia();

const toastOptions: PluginOptions = {
    position: POSITION.TOP_CENTER,
    maxToasts: 3,
    hideProgressBar: true,
    draggable: false,
    toastClassName: "custom",
};

pinia.use(piniaPluginPersistedstate);

app.use(pinia)
    .use(router)
    .use(Toast, toastOptions);

app.mount("#app");
