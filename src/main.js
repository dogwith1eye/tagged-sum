import "@/assets/main.css";
import Vue from 'vue'
import App from "./app4/App.vue";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
