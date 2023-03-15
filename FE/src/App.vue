<template>
  <div id="navigation">
      <!-- <ul>
        <li><router-link to="/" class="nav-link" >
          <div>Domov </div>
        </router-link>
        </li>
        <li> <router-link to="/Pictures" class="nav-link">
            <div>Pictures </div>
          </router-link>
        </li>
        <li><router-link to="/BabyPictures" class="nav-link" >
          <div>BabyPictures</div>
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
      </ul> -->
      <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
}
</style>
