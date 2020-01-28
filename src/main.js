import Vue from 'vue';
import VueAsyncProperties from 'vue-async-properties';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

import router from './router/index';
import store from './store/index';

Vue.use(VueAsyncProperties);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
