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
.router-link-exact-active {
  background-color: #00cc99;

}

.nav {
  background-color:grey;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
}


li {
  display:inline;
  padding: 10px;
}


.active {
  font-family:Helvetica, sans-serif;
  text-decoration: none;
  padding: 14px 16px;
  display: block;
  color: white;
  text-align: center;
  float: left;     

}

  .button {
    border-radius: 6px;
    border-style: none;
}

.button:hover {
    background-color:white;
    border: 2px solid #e7e7e7; 
}

input[type="submit"] {
    border: none;
    font-size: 16px;
    padding:8px;
    background: none; 
}
</style>
