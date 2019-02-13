<template>
  <div class="row">
      <div class="col-xs-12">
          <footer>
              <p>All Servers are managed here</p>
              <div v-if="selectedServer.status !== 'Normal'">
                <div v-if="selectedServer.id !== 0">
                  <p>The server is in '{{ selectedServer.status }}' condition.</p>
                  <p>Maintain the server immediately!</p>
                  <button @click="maintainStatus">Maintain server</button>
                </div>
              </div>
          </footer>
      </div>
  </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: ['selectedServer'],
        methods: {
            maintainStatus() {
                this.selectedServer.status = 'Normal';
                eventBus.changeStatus(this.selectedServer);
            }
        }
    }
</script>

<style>
</style>
