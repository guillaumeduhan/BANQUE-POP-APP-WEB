import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import App from "../App.vue"
import Navigation from "../components/Navigation.vue"
import Comptes from "../components/Comptes.vue"

// Routes
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Comptes
  }
]
export default new VueRouter({ routes });
