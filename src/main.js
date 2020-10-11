import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import store from './state/store';
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
Vue.config.productionTip = false;

Vue.use(VueCompositionAPI)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
