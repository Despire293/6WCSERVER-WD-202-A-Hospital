<template>
    <div class="row justify-content-center">

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <img src="../assets/logonobg.png" class ='logoimg'>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/logged">Home 
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link  active" to="/apply-med">Apply A Staff</router-link>
          <span class="visually-hidden">(current)</span>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/medics">Staff List</router-link>
        </li>
        
        
      </ul>
      <router-link class='nav-link logout' to='/'>LOGOUT</router-link>
    </div>
  </div>
</nav>

        <div class="col-md-4">
            <br> <br> <br> <br>
            <h3 class="text-center">APPLY A STAFF</h3>
            <br>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-floating">

                    <input type="text" class="form-control" v-model="medic.name" required>
                <label for="floatingInput">Name</label>
                </div>
                <br>

                <div class="form-floating">
                    <input type="number" class="form-control" v-model="medic.phone" required>
                    <label for="floatingInput">Phone</label>
                </div>
                <br>

                <div class="form-floating">
                    <input type="text" class="form-control" v-model="medic.job" required>
                    <label for="floatingInput">Job</label>
                </div>

                <br>
                <div class="form-floating">
                    <button class="btn btn-primary btn-lg">ADD</button>
                    <br>
                </div>
            </form>
        </div>
    </div>
</template>

<style>

.logoimg {height: 100%; width: 10%;}
.logout {
    color: white;
        margin-right: 40px;
    }
.logout:hover {
    color: blanchedalmond
    }

</style>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                medic: {
                   name: '',
                   phone: '',
                   job: ''
                }
            }
        },

        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/med-create';
                
                axios.post(apiURL, this.medic).then(() => {
                  this.$router.push('/medics')
                  this.medic = {
                    name: '',
                    phone: '',
                    job: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>