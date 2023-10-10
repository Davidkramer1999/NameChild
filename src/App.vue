<template>
  <div id="app">
    <Toast />
    <div id="navigation">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Toast from 'primevue/toast';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

export default {
  name: "App",
  components: {Toast},
};
</script>

<style>
#app {
  font-family: Book-Antiqua;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
