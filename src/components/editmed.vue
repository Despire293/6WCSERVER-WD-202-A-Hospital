<template>
    <div class="row justify-content-center">

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/medics"> &nbsp; &nbsp; BACK
            <span class="visually-hidden">(current)</span>
          </router-link>
        </li>
    
        
      </ul>
      <router-link class='nav-link logout' to='/'>LOGOUT</router-link>
    </div>
  </div>
</nav>




        <div class="col-sm-4">
            <br> <br><br> <br>
            <h3 class="text-center">STAFF INFO UPDATE</h3>
            <form @submit.prevent="handleUpdateForm">
                <br>




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


                <div>
                    <button class="btn btn-danger btn-block btn-lg">Update</button>
                </div>


            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            medic: { }
    } },
    created() {
        let apiURL = `http://localhost:4000/med/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.medic = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/med-update/${this.$route.params.id}`;
            console.log(`http://localhost:4000/med-update/${this.$route.params.id}`);
            axios.put(apiURL, this.medic).then((res) => {
                console.log(res)
                this.$router.push('/medics')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>