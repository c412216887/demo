import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import Router from "./router/index";

const pinia = createPinia();
createApp(App).use(Router).use(pinia).mount("#app");
