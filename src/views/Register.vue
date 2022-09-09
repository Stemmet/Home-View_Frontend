<template>
  <body class="holy-grail">
    
    <header>
        <Navbar/>
        <img src="https://i.postimg.cc/mrZFnZ2b/pexels-tirachard-kumtanom-347141.jpg" alt="">
        <div class="circle">
            
        </div>
        <div class="head">
            <span><h1>R</h1></span>
            <span><h1>E</h1></span>
            <span><h1>G</h1></span>
            <span><h1 class="cut">I</h1></span>
            <span><h1>S</h1></span>
            <span><h1>T</h1></span>
            <span><h1>E</h1></span>
            <span><h1>R</h1></span>
        </div>
    </header>
    
    <h2>SIGN UP TO BE A PART OF OUT PROJECT</h2>
    <div class="holy-grail-body">
        
<section class="holy-grail-content">
    <form>
        <div class="input-box">
    <input type="password" required="required">
    <span>name</span>
</div>

<div class="input-box">
    <input type="password" required="required">
    <span> surname</span>
</div>
        
   <div class="input-box">
       <input type="text" required="required">
    <span>e-mail</span>
   </div>

   <div class="input-box">
       <input type="password" required="required">
    <span>password</span>
   </div>

   <div class="input-box">
            <input type="text" required="required">
            <span>Username</span>
   </div>

   <div class="input-box">
    <input type="password" required="required">
    <span>confirm password</span>
</div>
<button>Register</button>
</form>
</section>

<div class="holy-grail-sidebar-1 hg-sidebar">
    <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/oneonly-capetown-penthouse.gif" alt="" class="reg-img">
    
        </div>
        
    </div>
    
    <footer>
        <p>Footer</p>
    </footer>
    
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
        font-size: 5em;
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

    span:nth-child(5),
    span:nth-child(6),
    span:nth-child(7),
    span:nth-child(8),
    span:nth-child(9){
        color: #fff;
    }

    .cut{
        background: -webkit-linear-gradient(200deg, #fff 11%, #38A3A5 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .input-box{
    position: relative;
    width: 30em;
}
.input-box input{
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #38A3A5;
    background-color: #57cc99;
    border-radius: 5px;
    outline: none;
    color: #f9f9f9;
    font-size: 1em;
    transition: 0.5s;
}
.input-box span{
    position: absolute;
    left: 0;
    padding: 10px;
    pointer-events: none;
    font-size: 1em;
    color: #38A3A5;
    text-transform: uppercase;
    transition: 0.5s;
}
.input-box input:valid ~ span,
.input-box input:focus ~ span{
    color:#38A3A5;
    transform: translateX(10px) translateY(-7px);
    font-size: 0.65em;
    padding: 0 10px;
    background-color: #57cc99;
    border: 1px solid #38A3A5;
    border-width: 0 1px;
    letter-spacing: 0.2em;
    color: #2f363e;
    background-color: #57cc99;
    border-radius: 2px;
}
.input-box input:valid,
.input-box input:focus{
    border: 1px solid #57cc99;
}

.reg-img{
    max-width: 40em;
    max-height: 40em;
    object-fit: contain;
}
h2 {
    text-align: center;
}
.holy-grail-content{
    position: absolute;
    padding-left: 47rem;
}
form{
    padding-top: 4rem;
}
</style>