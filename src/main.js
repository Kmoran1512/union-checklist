import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Calendar from "primevue/calendar";
import InputSwitch from "primevue/inputswitch";
import "./registerServiceWorker";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);
app.use(PrimeVue);
app
  .component("InputNumber", InputNumber)
  .component("InputText", InputText)
  .component("Accordion", Accordion)
  .component("AccordionTab", AccordionTab)
  .component("Calendar", Calendar)
  .component("InputSwitch", InputSwitch);

app.mount("#app");
