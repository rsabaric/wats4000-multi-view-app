<template>
  <div class="secret">
    <h1>{{message}}</h1>
    <h2>Would you like to continue?  Choose yes to see a photo of a puppy:</h2>
     <form v-on:submit.prevent="validateForm">
        <p class="privacy"><label>
          <input type="radio" id="yes" value="yes" v-model="checked">
          <label for="yes">Yes</label>
          <input type="radio" id="no" value="no" v-model="checked">
          <label for="no">No</label>
          </label></p>
          <button class="button"><input type="submit" value="I have made my choice"></button>
          <p class="error" v-if="showError"> You chose not to see a puppy.  I'm sorry. If you change your mind, select yes and resubmit your choice. </p>
    </form>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      message: 'Thank you for completing the survey.  You may now have a cookie!',
      checked: '',
      showError: false
    }
  },
    methods: {
    validateForm: function () {
      if (this.checked==="yes"){
        this.$router.push('Puppypage');
      }
      else{
        this.showError=true;
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

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
