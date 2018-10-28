<template>
  <div class="secret">
    <h1>{{message}}</h1>
    <h2>Would you like to continue?  Choose yes to see a photo of a puppy:</h2>
     <form v-on:submit.prevent="validateForm">
        <p class="privacy"><label>
          <input type="checkbox" id="checkprivacy" v-model="checked">
          <label for="checkprivacy" v-if="checked">Yes</label>
          <label for="checkprivacy" v-else>No</label>
          </label></p>
          <p><input type="submit" value="I have made my choise"></p>
    </form>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      message: 'Thank you for completing the survey.  You may now have a cookie!',
      checked: false
    }
  },
    methods: {
    validateForm: function () {
      if (this.checked){
        this.$router.push('Puppypage');
      } 
    }
  }
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

a {
  color: #42b983;
}
</style>
