<template>
  <div class="row">
      <div class="col-xs-12 col-sm-6">
          <ul class="list-group">
              <li
                  class="list-group-item"
                  v-for="server in servers"
                  @click="viewStatus(server)">
                      Server #{{ server.id }}
              </li>
          </ul>
      </div>
      <app-server-desc :selectedServer="selectedServer"></app-server-desc>
  </div>
</template>

<script>
  import Desc from './ServerDesc.vue';

  export default {
    props: ['servers','selectedServer'],
    methods: {
      viewStatus(server) {
        this.$emit('serverIsSelected', server);
      }
    },
    components: {
      'app-server-desc': Desc
    }
  }
</script>

<style>
</style>
