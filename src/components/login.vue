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
          <router-link class="nav-link" to="/register">Create An Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/login">Login</router-link>
          <span class="visually-hidden">(current)</span>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>



    <div class="col-sm-4">

        <br><br><br><br>
<h1 align="center">{{ msg }}</h1>
    
    <form @submit.prevent="loginData">
    
    <br>
    <div class="form-floating" align="left">
        <input type="email" v-model="user.email" class="form-control" placeholder="Email" required>
        <label for="floatingInput">Email</label>
        
    </div>
    <br>
    <div class="form-floating" align="left">
        <input type="password" v-model="user.password" class="form-control" placeholder="Password" required>
        <label for="floatingPassword">Password</label>
       
    </div>
    <br>
    <button type="submit" class="btn btn-primary btn-lg">Login</button>

    </form>
    </div>
</div>


    </template>
<style>

.row {display: flex; justify-content: center; }
.logoimg {height: 100%; width: 10%;}
#logoed { width: 100%; height: 30%;}
.navbar {display: flex; justify-content: left; }
</style>


<script>
import Vue from 'vue';
import axios from 'axios';

Vue.use(axios);
export default{
    name: "Register",
        data () {
            return {
                msg: "WELCOME ADMIN!",
                result: {},
                user: {
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
        loginData()
        {               
            axios.post('http://localhost:4000/user/login', this.user)
            .then( 
                ({data}) => 
                {
                    console.log(data.status);
                    try{
                        if(data.status === true)
                         {
                            alert("Successful Log-In");
                            this.$router.push('/logged')

                        } 
                        else 

                        {
                            alert("Login Failed!");
                        }

                    } catch (err) {
                        console.log(err);
                    }
                }

                )
        }
    }
}
</script>