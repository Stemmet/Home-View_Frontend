<template>
  <body class="holy-grail">
    
    <header>
        <Navbar/>
        <img src="https://i.postimg.cc/mrZFnZ2b/pexels-tirachard-kumtanom-347141.jpg" alt="">
        <div class="circle">
            
        </div>
        <div class="head">
            <span><h1>L</h1></span>
            <span><h1>O</h1></span>
            <span><h1>G</h1></span>
            <span><h1> </h1></span>
            <span><h1>I</h1></span>
            <span><h1>N</h1></span>
            <span><h1>:</h1></span>
        </div>
    </header>

    <div class="holy-grail-body">

        <section class="holy-grail-content">
            <div class="module form-module">
        <div class="toggle">
            <i class="bi bi-x bi-pencil"></i>
        </div>
        <div class="form">
            <h2>Login to your account</h2>
            <form>
                <input type="text" placeholder="Username">
                <input type="password" placeholder="Password">
                <button>Login</button>
            </form>
        </div>
        </div>
        </section>

        <div class="holy-grail-sidebar-1 hg-sidebar">
            <p>Sidebar 1</p>
        </div>

        <div class="holy-grail-sidebar-2 hg-sidebar">
            <p>Sidebar 2</p>
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

    span:nth-child(4){
        padding: 20px;
    }
    .form-module {
    position: relative;
    background: #fff;
    max-width: 320px;
    width: 100%;
    border-top: 5px solid #33b5e5;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
}
.form-module .toggle {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    background: #33b5e5;
    width: 30px;
    height: 30px;
    margin: -5px 0 0;
    color: #fff;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
}
.form-module .form-module{
    display: none;
    padding: 40px;
}
.form-module .form:nth-child(2) {display: block;}
.form-module h2 {
    margin: 0 0 20px;
    color: #33b5e5;
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
}
.form-module input{
    outline: none;
    display: block;
    width: 100%;
    border: 1px solid #d9d9d9;
    margin: 0 0 20px;
    padding: 10px 15px;
    box-sizing: border-box;
    transition: 0.3 ease;
}
.form-module input:focus{
    border: 1px solid #33b5e5;
    color: #333;
}
.form-module button {
    cursor: pointer;
    background: #33b5e5;
    width: 100%;
    border: 0;
    padding: 10px 15px;
    color: #fff;
    transition: 0.3s;
}
.form-module button:hover{
    background: #178ab4;
}
.form-module .cta {
    background: #f2f2f2;
    width: 100%;
    padding: 15px 40px;
    box-sizing: border-box;
    color: #777;
    font-size: 12px;
    text-align: center;
}
.form-module .cta a {
    color: #333;
    text-decoration: none;
}
</style>