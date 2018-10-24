<template>
  <div id="app">
    <router-view/>
        <ul class="nav">
        <li><router-link v-bind:to="{ name: 'Home'}" active class="active" exact>Home</router-link></li>
        <li><router-link to=/survey active class="active" exact>Survey</router-link></li>
        <li><router-link v-bind:to="{ name: 'Secret'}" active class="active" exact>Secret</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 75%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
}
body, html {
  background: #666;
  margin: 0;
  padding: 0;
}
.router-link-active {
  font-size: larger;
  background-color: green;
}
.nav {
  background-color:grey;
  width: 175px;
}
li {
  display:inline;
}
</style>
