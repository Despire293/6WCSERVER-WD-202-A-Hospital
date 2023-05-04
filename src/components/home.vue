<template>
    <div>
      
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <img src="../assets/logonobg.png" class ='logoimg'>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home 
            <span class="visually-hidden">(current)</span>
          </router-link>
        </li>
    
        <li class="nav-item">
            <router-link class="nav-link" to="/register">Create An Admin</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<section class="home-section" id="home">
			<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="../assets/1st-slider.jpg" class="d-block w-100" alt="First Slider">
				 	</div>
				 	
				</div>
			</div>
        </section>

        <section class="services-section" id="services">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-6">
						<div class="service-column">
							<div class="service-icon">
								<img src="../assets/icon-1.png" alt="Short-term hospitalization">
							</div>
							<div class="service-text">
								<h5>
									<span>
										Short-term hospitalization
									</span>
								</h5>
								<p>
									Short-term inpatient hospitalization may be the right choice to help your loved one in an emergency. Short-term inpatient hospitalization is best for clients who are at immediate risk of harming themselves or others or who are experiencing severe psychosis.
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-6">
						<div class="service-column">
							<div class="service-icon">
								<img src="../assets/icon-2.png" alt="Emergency room services">
							</div>
							<div class="service-text">
								<h5>
									<span>
										Emergency room services
									</span>
								</h5>
								<p>
									The emergency Department is the first point of contact for any critically ill patient, needing immediate medical attention. Modern Emergency Departments are managed by qualified Emergency Physicians and nurses, trained specifically for providing emergent care to save a life or limb.
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-6">
						<div class="service-column">
							<div class="service-icon">
								<img src="../assets/icon-3.png" alt="General and specialty surgical services">
							</div>
							<div class="service-text">
								<h5>
									<span>
										General and specialty surgical services
									</span>
								</h5>
								<p>
									A specialty of healthcare in which interventions constitute a significant component of patient management. 
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-6">
						<div class="service-column">
							<div class="service-icon">
								<img src="../assets/icon-4.png" alt="x ray/radiology services">
							</div>
							<div class="service-text">
								<h5>
									<span>
										X ray/radiology services
									</span>
								</h5>
								<p>
									X-rays are a form of electromagnetic radiation, similar to visible light. Unlike light, however, x-rays have higher energy and can pass through most objects, including the body. Medical x-rays are used to generate images of tissues and structures inside the body.
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-6">
						<div class="service-column">
							<div class="service-icon">
								<img src="../assets/icon-5.png" alt="Laboratory services">
							</div>
							<div class="service-text">
								<h5>
									<span>
										Laboratory services
									</span>
								</h5>
								<p>
									Laboratory services are used by outside laboratories that do not have the means to test certain specimens.
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-6">
						<div class="service-column">
							<div class="service-icon">
								<img src="../assets/icon-6.png" alt="Blood services">
							</div>
							<div class="service-text">
								<h5>
									<span>
										Blood services
									</span>
								</h5>
								<p>
                  Safe and quality blood supply to the most vulnerable.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>


    <!-- Footer Bottom -->

		<footer class="footer">
			<div class="container">
				<div class="columns">
					<div class="column">
						<p>Copyright © 2023 'A-hospital'. All Rights Reserved.</p>
					</div>
					<div class="column has-text-right">
						<a class="icon" href="#"><i class="fa fa-facebook"></i></a>
            <a class="icon" href="#"><i class="fa fa-twitter"></i></a>
					</div>
				</div>
			</div>
		</footer>




    </div>
    
    
        </template>
<style>


.logoimg {height: 100%; width: 10%;}

footer {background-color:blue; color: #fff; height: 10vh; display: flex; padding: 3%;}


  

</style>
    <script>
    export default{
        name: "Home",
        data () {
            return {
                msg: "HOME PAGE"
            }
        }
    }
   </script>
    