import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/router.js'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VModal from 'vue-js-modal'
import draggable from 'vuedraggable'
import Datetime from 'vue-datetime'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VModal);
Vue.use(Datetime);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
