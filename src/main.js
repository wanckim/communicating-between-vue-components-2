import Vue from 'vue'
import App from './App.vue'
import Header from './Shared/ServerHeader.vue'

Vue.component('app-server-header', Header);

export const eventBus = new Vue({
  methods: {
    changeStatus(server) {
      this.$emit('serverWasMaintained', server);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
