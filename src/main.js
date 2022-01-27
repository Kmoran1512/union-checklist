import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";

import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";

import "./registerServiceWorker";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);
app.use(PrimeVue);
app
  .component("Accordion", Accordion)
  .component("AccordionTab", AccordionTab)
  .component("Button", Button)
  .component("Calendar", Calendar)
  .component("Dropdown", Dropdown)
  .component("InputNumber", InputNumber)
  .component("InputSwitch", InputSwitch)
  .component("InputText", InputText);

app.mount("#app");
