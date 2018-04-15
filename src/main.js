import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/router.js'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VModal from 'vue-js-modal'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VModal);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
