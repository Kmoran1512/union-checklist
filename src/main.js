import { createApp } from "vue";
import App from "./App.vue";
import Equal from "equal-vue";
import "equal-vue/dist/style.css";
import "./registerServiceWorker";

createApp(App).use(Equal);
createApp(App).mount("#app");
