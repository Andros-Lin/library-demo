import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/plugins/element-ui";
import i18n from "@/plugins/i18n";
import "@/plugins/axios";

Vue.config.productionTip = false;

const createApp = () => {
  return new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  }).$mount("#app");
};

export default createApp();
