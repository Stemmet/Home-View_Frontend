<template>
  <body class="holy-grail">
    
    <header>
      <Navbar/>
        <img src="https://i.postimg.cc/d08wGGK3/pexels-pixabay-417351.jpg" alt="">
        <div class="circle">
            
        </div>
        <div class="head">
            <span><h1>C</h1></span>
            <span><h1>O</h1></span>
            <span><h1 class="cut">N</h1></span>
            <span><h1>T</h1></span>
            <span><h1>A</h1></span>
            <span><h1>C</h1></span>
            <span><h1>T</h1></span>
        </div>
    </header>

    <div class="holy-grail-body">

        <section class="holy-grail-content">
            <div id="contact">
  
  
  <div class="contact-wrapper">
  
  <!-- Left contact page --> 
    
    <form id="contact-form" class="form-horizontal" role="form">
       
      <div class="input-box">
    <input type="text" required="required">
    <span>Username</span>
   </div>
   <div class="input-box">
    <input type="text" required="required">
    <span>e-mail</span>
   </div>
   <div class="input-box">
    <input type="text" required="required" class="msg">
    <span>message</span>
   </div>
   
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="bi bi-send"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
  <!-- Left contact page --> 
    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="bi bi-geo-alt fa-2x"><span class="contact-text place">City, State</span></i></li>
          
          <li class="list-item"><i class="bi bi-phone fa-2x"><span class="contact-text phone"><router-link to="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</router-link></span></i></li>
          
          <li class="list-item"><i class="bi bi-envelope fa-2x"><span class="contact-text gmail"><router-link to="mailto:#" title="Send me an email">hitmeup@gmail.com</router-link></span></i></li>
          
        </ul>

        <hr>
        <ul class="social-media-list">
          <li><router-link to="#" target="_blank" class="contact-icon">
            <i class="bi bi-github" aria-hidden="true"></i></router-link>
          </li>
          <li><router-link to="#" target="_blank" class="contact-icon">
            <i class="bi bi-facebook" aria-hidden="true"></i></router-link>
          </li>
          <li><router-link to="#" target="_blank" class="contact-icon">
            <i class="bi bi-twitter" aria-hidden="true"></i></router-link>
          </li>
          <li><router-link to="#" target="_blank" class="contact-icon">
            <i class="bi bi-instagram" aria-hidden="true"></i></router-link>
          </li>       
        </ul>
        <hr>

        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  </div>
        </section>

        <div class="holy-grail-sidebar-1 hg-sidebar">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.293421526154!2d18.490473615137198!3d-33.984996280624266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bfcf832a1%3A0x3b4439b8cc517802!2s314%20Imam%20Haron%20Rd%2C%20Lansdowne%2C%20Cape%20Town%2C%207780!5e0!3m2!1sen!2sza!4v1662016935244!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- <div class="holy-grail-sidebar-2 hg-sidebar">
            
        </div> -->

    </div>
    
</body>
</template>

<script>
import Navbar from '../components/navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
}
}
</script>

<style scoped>

    header img{
        /* background-repeat: no-repeat; */
        background-position: contain;
        height: 30em;
        width: 59.7em;
        position: absolute;
    }

    .head{
        font-size: 5.7em;
        color: #38A3A5;
        display: flex;
        justify-content: flex-end;
        margin-top: 2.6em;
        position: relative;
        /* -webkit-text-stroke: 3px black; */
    }
    
    .circle{
        position: absolute;
        width: 40em;
        height: 40em;
        background-color: #57cc999a;
        border-radius: 50%;
        right: 0;
    }

    span:nth-child(4),
    span:nth-child(5),
    span:nth-child(6),
    span:nth-child(7){
        color: #fff;
    }

    .cut{
        background: -webkit-linear-gradient(200deg, #fff 11%, #38A3A5 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    #contact {
  width: 100%;
  height: 100%;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 300 60px 'Oswald', sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 6px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
}

/* Left contact page */
.form-horizontal {
  max-width: 400px;
  font-weight: 400;
}

.msg{
    height: 13em;
}

.input-box{
    position: relative;
    width: 19em;
}
.input-box input{
    width: 100%;
    margin-top: 0.5em;
    padding: 10px;
    border: 1px solid #57CC99;
    background-color: transparent;
    border-radius: 5px;
    outline: none;
    color: #57CC99;
    font-size: 1em;
    transition: 0.5s;
    gap: 10px;
}
.input-box span{
    position: absolute;
    left: 0;
    padding: 20px;
    pointer-events: none;
    font-size: 1em;
    color: #57CC99;
    text-transform: uppercase;
    transition: 0.5s;
}
.input-box input:valid ~ span,
.input-box input:focus ~ span{
    color:#fff;
    transform: translateX(1em) translateY(0.3em);
    font-size: 0.65em;
    padding: 0 1em;
    background-color: #57CC99;
    border: 1px solid #57CC99;
    border-width: 0 1px;
    letter-spacing: 0.2em;
}

.input-box input:valid,
.input-box input:focus{
    border: 1px solid #00dfc4;
}

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 30em;
  overflow: hidden;
  transition: all .2s ease-in-out;
  background-color: #57CC99;
}

.alt-send-button {
  width: 400px;
  height: 34px;
  transition: all .2s ease-in-out;
  background-color: #57CC99;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 700 12px 'Oswald', sans-serif;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: #57CC99;
}

.contact-text {
  font: 300 18px 'Oswald', sans-serif;
  letter-spacing: 1.9px;
  color: #57CC99;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: #57CC99;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #555;
  text-decoration: none;
}


/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative; 
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: #57CC99;
  cursor: pointer; 
  transition: all .5s ease-in-out;
}

.social-media-list li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all .5s ease-in-out;
}

.social-media-list li:hover {
  background-color: #fff; 
}

.social-media-list li:hover:after {
  opacity: 1;  
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
}

.social-media-list li:hover a {
  color: #000;
}

.copyright {
  font: 200 14px 'Oswald', sans-serif;
  color: #57CC99;
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255,255,255,.6);
}

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container, .form-horizontal {
    margin: 0 auto;
  }  
  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }    
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {

  .direct-contact-container, .form-wrapper {
    float: none;
    margin: 0 auto;
  }  
  .form-control, textarea {
    
    margin: 0 auto;
  }
 
  
  .name, .email, textarea {
    width: 280px;
  } 
  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }  
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
  
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
</style>