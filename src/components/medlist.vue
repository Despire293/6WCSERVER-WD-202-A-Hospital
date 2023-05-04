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
          <router-link class="nav-link" to="/logged">Home 
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/apply-med">Apply A Staff</router-link>
         
        </li>

        <li class="nav-item">
          <router-link class="nav-link active" to="/medics">Staff List</router-link>
          <span class="visually-hidden">(current)</span>
        </li>
        
        
      </ul>
      <router-link class='nav-link logout' to='/'>LOGOUT</router-link>
      
    </div>
  </div>
  

</nav>


        <div class="col-md-12">
            <img src="../assets/logonobg.png" class="heading-img">
            
            <h1 align="left">&nbsp; Staff List</h1>
            <table class="table table-hover">
                <thead class="table-primary">
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Job</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="table-light">
                    <tr v-for="medic in medics" :key="medic._id">
                        <td>{{ medic.name }}</td>
                        <td>{{ medic.phone }}</td>
                        <td>{{ medic.job }}</td>
                        <td>
                            <router-link :to="{name: 'Edit', params: { id: medic._id }}" class="btn btn-success">UPDATE
                            </router-link>
                            <button @click.prevent="deleteStudent(medic._id)" class="btn btn-danger">REMOVE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
.heading-img { width: 90%; height: 40%;margin-top: 10px;}
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
                medics: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/med';
            axios.get(apiURL).then(res => {
                this.medics = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteStudent(id){
                let apiURL = `http://localhost:4000/med-delete/${id}`;
                let indexOfArrayItem = this.medics.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.medics.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
    
</script>
