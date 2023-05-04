<link rel="stylesheet" href="src/css/all.min.css"></link>
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
          <router-link class="nav-link active" to="/logged">Home 
          </router-link>
          <span class="visually-hidden">(current)</span>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/apply-med">Apply A Staff</router-link>
         
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/medics">Staff List</router-link>
          <span class="visually-hidden">(current)</span>
        </li>
        
        
      </ul>
      <router-link class='nav-link logout' to='/'>LOGOUT</router-link>
      
    </div>
  </div>
  

</nav>
<div id="container">
<div class="about">
        <div class="main-about">
            <div class="inner-about">
                <div class="about-content">
                    <h1>Welcome to A-Hospital</h1>
                <p>At A-Hospital, our mission is to provide compassionate care and exceptional medical services to our patients. 
                  For over 50 years, we have been dedicated to serving our community and ensuring the well-being of our patients.</p>
                </div>
                
            </div>
            <div class="inner-about">
                <div class="inner-about-image">
                    <img src="../assets/chiness.jpg" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="our-services">
        <div class="service-content">
            <div class="left-service-content">
                <h1>Special Services at A-Hospital</h1>
                <p>In A-Hospital, we offer a variety of specialized services to meet the unique needs of our patients. 
                  Our team of expert medical professionals is committed to providing personalized care and support to help patients achieve their best possible outcomes.</p>
            </div>

            
        </div>

        <div class="main-services">
            <div class="inner-services-content">
              <img src="../assets/gal1.jpg" alt="Emergency room services">
                <div class="service-icon">
                    <i class="fas fa-notes-medical"></i>
                </div>
                <h2>Cancer Center</h2>
                <p>Our state-of-the-art Cancer Center provides comprehensive cancer care, 
                  including advanced diagnostic and treatment options, radiation therapy and support.
                  Our state-of-the-art Cancer Center offers the latest in diagnostic and treatment options, including radiation therapy, chemotherapy, immunotherapy, and targeted therapy. 
                  Our team also provides supportive care services, including nutritional counseling, pain management, and emotional support. Our multidisciplinary team includes oncologists, radiation oncologists, surgical oncologists, nurse navigators, and support staff, all working together to provide seamless, coordinated care. 
                  We are committed to helping our patients and their families throughout their cancer journey, from diagnosis to survivorship.</p>

            </div>

            <div class="inner-services-content">
              <img src="../assets/gal5.jpg" alt="Emergency room services">
                <div class="service-icon">
                    <i class="fas fa-hospital-user"></i>
                </div>
                <h2>Heart and Vascular Center</h2>
                <p>Our Heart and Vascular Center provides advanced cardiac and vascular care, including diagnostic testing, 
                  minimally invasive procedures, and surgical interventions. The Heart and Vascular Center at A-Hospital is dedicated to providing advanced cardiac and vascular care to our patients. 
                  Our team of expert medical professionals is committed to delivering personalized care tailored to each patient's unique needs. Our state-of-the-art Heart and Vascular Center offers a comprehensive range of diagnostic and treatment options, including cardiac catheterization, echocardiography, angioplasty, and minimally invasive surgery. 
                  Our team also provides preventive and wellness services, including heart disease risk assessment, nutrition counseling, and exercise programs.</p>
                
            </div>

            <div class="inner-services-content">
              <img src="../assets/cute.jpg" alt="Emergency room services">
                <div class="service-icon">
                    <i class="fas fa-user-md"></i>
                </div>
                <h2>Orthopedics</h2>
                <p>We offer a comprehensive range of orthopedic services, including joint replacement surgery, sports medicine, and rehabilitation programs. 
                  Our Orthopedics Center offers a wide range of services, including joint replacement surgery, sports medicine, trauma care, and rehabilitation programs. 
                  We utilize the latest in diagnostic and treatment options, including minimally invasive surgery, arthroscopy, and regenerative medicine. 
                  At the Orthopedics Center at A-Hospital, we understand the impact musculoskeletal conditions can have on a patient's quality of life. 
                  That's why we are dedicated to providing not only exceptional medical care but also rehabilitation and support services to help our patients return to their active lifestyles.</p>
                
            </div>
        </div>
    </div>
</div>
</div>

        </template>

        
<style>
#container {width: 100%; height: 20vh;}
.logoimg {height: 40%; width: 10%;}

#container img {display: flex; width: 100%;}
.about{
    padding: 6rem 7%;
    background: var(--third);
}
.main-about{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}
.inner-about{
    flex: 1 1 45rem;
}

.inner-about .inner-about-image img{
    width: 100%;
}
.about-content{
    width: 80%;
}
.about-content h1{
    font-size: 40px;
    margin-bottom: 15px;
}
.about-content p{
    font-size: 1.5rem;
    margin-bottom: 30px;
}
.about-content a{
    background: var(--secclr);
    padding: 1rem 3rem;
    font-size: 1.5rem;
    color: white;
    transition: .5s;
}
.about-content a:hover{
    background: transparent;
    border: 1px solid var(--secclr);
    color: black;
}
.our-services{
    padding: 4rem 7%;
}
.service-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
}
.left-service-content{
    flex: 1 1 45rem;
}
.right-service-content{
    flex: 1 1 45rem;
    display: flex;
    justify-content: flex-end;

}
.left-service-content h1{
    font-size: 40px;
    margin-bottom: 15px;
}
.left-service-content p{
    font-size: 1.5rem;
}
.right-service-content .right-btn a{
    padding: 1.5rem 3rem;
    font-size: 2rem;
    color: white;
    background: var(--secclr);
}
.right-service-content .right-btn a:hover{
    border: 1px solid var(--secclr);
    background: transparent;
    color: black;
}
.main-services{
    padding-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}
.inner-services-content{
    flex: 1 1 300px;
    padding: 1rem 3rem;
    text-align: center;
}
.inner-services-content h2{
    font-size: 25px;
    margin-bottom: 10px;
}
.inner-services-content p{
    font-size: 1.5rem;
    line-height: 2;
}
.service-icon i{
    font-size: 4rem;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    text-align: center;
    line-height: 8rem;
    background: var(--mainafterclr);
    color: var(--mainclr);
    margin-bottom: 15px;
    cursor: pointer;
    transition: .3s;
}
.service-icon i:hover{
    color: white;
    background: var(--mainclr);
}
</style>
    
    <script>
    export default{
        name: "Home",
        data () {
            return {
                msg: "LOGGED PAGE"
            }
        }
    }
    </script>