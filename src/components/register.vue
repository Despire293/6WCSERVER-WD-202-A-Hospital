<template>

    <div class="row">
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <img src="../assets/logonobg.png" class ='logoimg'>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home 
          </router-link>
        </li>
    
        <li class="nav-item">
          <router-link class="nav-link active" to="/register">Create An Admin</router-link>
          <span class="visually-hidden">(current)</span>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>


    <div class="col-sm-4">
        <br><br><br>
        <h2 align="center">{{ msg }}</h2>
        <br>
        <form @submit.prevent="saveData">
        
            <div class="form-floating" align="left">
                
                <input type ='text' v-model="user.firstname" class="form-control" placeholder='Your First Name' required>
                <label for="floatingInput">First Name</label>
                


            </div>
            <br>
            <div class="form-floating" align="left">
                <input type ='text' v-model="user.lastname" class="form-control" placeholder='Your Last Name' required>
                <label for="floatingInput">Last Name</label>
                
                

            </div>
            <br>
            <div class="form-floating" align="left">

                <input type ='email' v-model="user.email" class="form-control" placeholder='Your Personal Email' required>
                <label for="floatingInput">Email</label>
                
                

            </div>
            <br>
            <div class="form-floating" align="left">
                <input type ='password' v-model="user.password" class="form-control" placeholder='Desired Password' required>
                <label for="floatingPassword">Password</label>
                
                

            </div>
            <br>
            <button type="submit" class="btn btn-primary btn-lg">REGISTER</button>\
            <br>
            <br>


        </form>

    </div>


    </div>
    
    
        </template>
<style>

.logoimg {height: 100%; width: 10%;}
.row {display: flex; justify-content: center; }
#logoed { width: 100%; height: 30%;}
</style>


<script>
import Vue from 'vue';
import axios from 'axios';

Vue.use(axios);
export default{
    name: "Register",
        data () {
            return {
                msg: "CREATE ADMIN ACCOUNT",
                result: {},
                user: {
                    id: '',
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: ''
                }
            }
        },
        created() {
        },
        mounted(){
            console.log("Called");
        },
        methods: {
        saveData()
        {               
            axios.post('http://localhost:4000/user/create', this.user)
            .then( 
                ({data}) => {

                    alert("Account Registered");
                    this.$router.push('/login')
                }
                )
        }
    }
}
</script>