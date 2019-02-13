import Vue from 'vue'
import App from './App.vue'
import Header from './Shared/ServerHeader.vue'

Vue.component('app-server-header', Header);

new Vue({
  el: '#app',
  render: h => h(App)
})
