import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/bootstrap.css';
import './assets/css/main.css'

Vue.use(VueAxios, axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
