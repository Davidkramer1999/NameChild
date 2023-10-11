<template>
  <div id="app">
    <div id="navigation">
      <Toast />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {},
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
