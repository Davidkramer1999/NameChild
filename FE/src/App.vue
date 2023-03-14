<template>
  <div id="navigation">
      <ul>
        <li><router-link to="/" class="nav-link" >
          <div>Domov </div>
        </router-link>
        </li>
        <li> <router-link to="/Pictures" class="nav-link">
            <div>Pictures </div>
          </router-link>
        </li>
        <li><router-link to="/MyServices#MyServices" class="nav-link" >
          <div>Storitve</div>
        </router-link>
        </li>
        <li><router-link to="/Pricing#Pricing" class="nav-link" >
          <div>Cenik</div>
        </router-link>
        </li>
        <li><router-link to="/Contact#Contact" class="nav-link">
          <div>Kontakt</div>
        </router-link>
        </li>
      </ul>
      <Home></Home>
      <router-view></router-view>
    </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
