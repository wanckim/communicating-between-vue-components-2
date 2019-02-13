<template>
    <div class="container">
      <app-server-header></app-server-header>
      <hr>
        <app-server-main
            :servers = 'servers'
            :selectedServer="server"
            @serverIsSelected="server = $event"
            >
        </app-server-main>
        <hr>
        <app-server-footer></app-server-footer>
    </div>
</template>

<script>
  import Main from './Server/ServerMain.vue';
  import Footer from './Shared/ServerFooter.vue';

  export default {
    data: function() {
      return {
        server: { id: 0, status: "Select a server to view the details" },
        servers: [
          { id: 1, status: 'Normal'},
          { id: 2, status: 'Critical'},
          { id: 3, status: 'Unknown'},
          { id: 4, status: 'Normal'},
        ],
      }
    },
    components: {
      'app-server-main': Main,
      'app-server-footer': Footer
    }
  }
</script>

<style>

</style>
