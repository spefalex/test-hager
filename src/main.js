import Vue from "vue";
import App from "./App.vue";
// Import the styles directly. (Or you could add them via script tags.)
//import "bootstrap/dist/css/bootstrap.css";

//Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
