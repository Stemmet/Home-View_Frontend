<template>
  <body class="holy-grail">
    
    <header>
      <Navbar/>
        <img src="https://i.postimg.cc/VN87TC23/pexels-ilse-olive-733291.jpg" alt="">
        <div class="circle">
            
        </div>
        <div class="head">
            <span><h1>B</h1></span>
            <span><h1>L</h1></span>
            <span><h1>O</h1></span>
            <span><h1 class="cut">G</h1></span>
            <span><h1> </h1></span>
            <span><h1>P</h1></span>
            <span><h1>O</h1></span>
            <span><h1>S</h1></span>
            <span><h1>T</h1></span>
            <span><h1>S</h1></span>
          </div>
        </header>
        
        <div class="filter-box">
          <div class="filter-button">
            <span><button>Alphabetical</button></span>
            <span><button>Date Added</button></span>
            <span><button>Author</button></span>
          </div>
          <div class="filter-search">
            <input type="text" placeholder="search for...">
            <button><i class="bi bi-search"></i></button>
          </div>
        </div>
        <div class="holy-grail-body">

        <section class="holy-grail-content">
            <div class="image_container">
      <img src="https://i.postimg.cc/fyzQhPpQ/lake-1681485-1920.jpg" />
      <span class="title span">Humming Bird</span>
      <span class="description span"
        >They are the only birds that can fly backwards and are capable of
        hovering for a period of time during flight <a href="/singleBlog" class="link">Read More...</a> </span
      >
      
      <span class="line top span"></span>
      <span class="line left span"></span>
    </div>
    <div class="image_container">
      <img src="https://i.postimg.cc/MTFRVkwz/pexels-riccardo-789380.jpg" />
      <span class="title span">Humming Bird</span>
      <span class="description span"
        >They are the only birds that can fly backwards and are capable of
        hovering for a period of time during flight <a href="/singleBlog" class="link">Read More...</a></span
      >
      <span class="line top span"></span>
      <span class="line left span"></span>
    </div>
        </section>

        <div class="holy-grail-sidebar-2 hg-sidebar">
            <div class="container">
        <ul class="social_icons">
            <li><a href="#"><i class="bi bi-facebook" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="bi bi-instagram" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="bi bi-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="bi bi-google" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="bi bi-linkedin" aria-hidden="true"></i></a></li>
        </ul>
    </div>
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
    span:nth-child(9),
    span:nth-child(10){
        color: #fff;
    }

    .cut{
        background: -webkit-linear-gradient(200deg, #fff 11%, #38A3A5 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    span:nth-child(5){
        padding: 20px;
    }
    .image_container {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 95%;
        max-width: 60em;
        height: min(70vw, 300px);
        cursor: pointer;
        margin-bottom: 2em;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .image_container:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #38A3A5;
        transform: scale(0);
        transition: all 800ms linear;
        transform-origin: 0 50%;
        z-index: 2;
        opacity: 0.3;
      }

      .image_container:hover:before {
        transform: scale(1);
      }

      .span {
        position: absolute;
        color: #fff;
        opacity: 0;
        transition: all 800ms linear;
        z-index: 3;
      }

      .title {
        font-size: 2rem;
        left: 25%;
        top: 50%;
      }

      .description {
        font-size: 1rem;
        left: 25%;
        top: 65%;
        width: 50%;
      }

      .image_container:hover span {
        opacity: 1;
      }

      .line {
        left: 0;
        top: 0;
        position: absolute;
        background: #fff;
        transition: all 800ms linear;
      }

      .top {
        width: 3px;
        height: 0;
        left: 20%;
      }

      .image_container:hover .top {
        height: 100%;
      }

      .left {
        width: 0;
        height: 3px;
        top: 95%;
      }

      .image_container:hover .left {
        width: 100%;
      }
      
      .link{
        color: #57CC99;
      }

      @media (max-width: 424px) {
        .title {
          font-size: 1.5rem;
          left: 25%;
          top: 50%;
        }

        .description {
          font-size: 0.8rem;
          left: 25%;
          top: 65%;
          width: 50%;
        }
      }

      .social_icons li a{
    position: relative;
    display: block;
    width: 80px;
    height: 80px;
    color: #555;
    background: #fff;
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    box-shadow: -20px 20px 10px rgb(0, 0, 0 / 50%);
    transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0);
}
.social_icons li a::before {
    content: '';
    position: absolute;
    top: 10px;
    left: -20px;
    height: 100%;
    width: 20px;
    background: #e5e5e5;
    transition: 0.5s;
    transform: rotate(0deg);
}
.social_icons li a:hover{
    transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(20px, -20px);
    box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5s);
}
.social_icons li:hover .bi{
    color: #fff;
}
.social_icons li:hover:nth-child(1) a{
    background-color: #3b5999;
}
.social_icons li:hover:nth-child(1) a::before{
    background-color: #2f477a;
}
.social_icons li:hover:nth-child(1) a::after{
    background-color: #4e69a3;
}
.social_icons li:hover:nth-child(2) a{
    background-color: #3b5999;
}
.social_icons li:hover:nth-child(2) a::before{
    background-color: #2f477a;
}
.social_icons li:hover:nth-child(2) a::after{
    background-color: #4e69a3;
}
.social_icons li:hover:nth-child(3) a{
    background-color: #3b5999;
}
.social_icons li:hover:nth-child(3) a::before{
    background-color: #2f477a;
}
.social_icons li:hover:nth-child(3) a::after{
    background-color: #4e69a3;
}
.social_icons li:hover:nth-child(4) a{
    background-color: #3b5999;
}
.social_icons li:hover:nth-child(4) a::before{
    background-color: #2f477a;
}
.social_icons li:hover:nth-child(4) a::after{
    background-color: #4e69a3;
}
.social_icons li:hover:nth-child(5) a{
    background-color: #3b5999;
}
.social_icons li:hover:nth-child(5) a::before{
    background-color: #2f477a;
}
.social_icons li:hover:nth-child(5) a::after{
    background-color: #4e69a3;
}
.filter-box{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #bbb;
  height: 3em;
  width: 40em;
  padding: 1em 0em 3em 0em;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.496);
}
.filter-button span button{
  padding: 5px 10px;
  margin-left: 10px;
}
</style>