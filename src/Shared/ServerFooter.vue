<template>
  <div class="row">
      <div class="col-xs-12">
          <footer>
              <p>All Servers are managed here</p>
              <button @click="maintainStatus">Maintain status
              </button>
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
