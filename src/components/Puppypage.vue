<template>
  <div class="secret">
    <h1>{{message}}</h1>
    <img src="@/assets/lab puppy.jpg" alt="Trulli" width="500" height="333">
  </div>
  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      message: 'Puppy!'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  border: 1px solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

img {
    max-width: 100%;
    height: auto;
}
a {
  color: #42b983;
}
.router-link-active {
  background-color: #00cc99;
}
</style>
