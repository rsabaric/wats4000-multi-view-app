<template>
  <div class="home">
    <div v-show="showForm" class="form-container">
      <h1>Join the Web Developers Club!</h1>
      <p>Sign up to access our special, secret page. Just create an account and answer a brief survey.</p>
      <p v-show="showError" class="error"> Errors in the form  </p>
      <form v-on:submit.prevent="validateForm">
        <p><label>
          <input type="text" id="username" v-model="username" placeholder="Enter username here.">
        </label></p>
        <p><label>
          <input type="email" id="email" v-model="email" placeholder="yours@example.com">
        </label></p>
        <p><label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password">
        </label></p>
        <p><label>
          <input type="password" id="passwordVerify" v-model="passwordVerify" placeholder="Verify your password">
        </label></p>
        <p class="privacy"><label>I agree to share all of the data I submit...as soon as I can figure out how to save it across pages!
           <input type="radio" id="yes" value="yes" v-model="checked">
          <label for="yes">Yes</label>
          <input type="radio" id="no" value="no" v-model="checked">
          <label for="no">No</label>
        </label></p>
        <p><button class="button"><input type="submit" value="Submit"></button></p>
      </form>
    </div>
    <div v-show="!showForm" class="success-message">
      <h1>Thank you for signing up {{ username }}!</h1>
      <p>Please take our new member survey. <router-link to="Survey">Click here</router-link></p>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      passwordVerify: '',
      showForm: true,
      showError: false,
      checked: false
    }
  },
  methods: {
    validateForm: function () {
      if((this.username !='') && (this.email !='') && (this.password===this.passwordVerify)&&(this.checked==="yes")){
        console.log('form is valid');
        this.showForm = false;
        this.$emit('usernamein',this.username);
        console.log(this.username);
      } else {
        console.log('form is not valid');
        this.showError = true;
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
.privacy {
  border: 1px solid black;
  padding: .5rem;
  display: inline-block;

}
</style>
