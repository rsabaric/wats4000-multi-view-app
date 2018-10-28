<template>
  <div id="app">
        <h1 @usernamein="msg = $event">{{msg}}</h1>
        <ul class="nav">
        <li><router-link to=/ active class="active" exact>Step 1: Login</router-link></li>
        <li><router-link to=/survey active class="active" exact>Step 2: Survey</router-link></li>
        <li><router-link to=/secret active class="active" exact>Step 3: Complete</router-link></li>
        <li><router-link to=/puppypage active class="active" exact>Step 4: Puppy!</router-link></li>
        </ul>
    <router-view/>
  </div>
</template>

<script>

import Home from './components/Home.vue'

export default {
  name: 'app',
  data() {
    return {
      msg: ''
    }
  }
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
  background-color: #00cc99;
}
.nav {
  background-color:grey;
  display: block;
  padding: 3px;
}
li {
  display:inline;
  padding: 10px;
}
.active {
  font-family:cursive;
  text-decoration:none;
}
</style>
