<template>
    <div class="container">
      <app-server-header></app-server-header>
      <hr>
        <app-server-main></app-server-main>
        <hr>
        <app-server-footer></app-server-footer>
    </div>
</template>

<script>
  import Main from './ServerMain.vue';
  import Footer from './ServerFooter.vue';

  export default {
    components: {
      'app-server-main': Main,
      'app-server-footer': Footer
    }
  }
</script>

<style>

</style>
