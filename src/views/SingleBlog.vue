<template>
  <body class="holy-grail">
    
    <header>
        <Navbar/>
        <img src="https://i.postimg.cc/fyzQhPpQ/lake-1681485-1920.jpg" id="bgimg">
    </header>
    
    <div class="holy-grail-body">
        
        <section class="holy-grail-content">
            <div class="circle">
                
            </div>




<div id="polina">
<h1>Polina</h1>
<p>by <a href="">Author</a></p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta dictum turpis, eu mollis justo gravida ac. Proin non eros blandit, rutrum est a, cursus quam. Nam ultricies, velit ac suscipit vehicula, turpis eros sollicitudin lacus, at convallis mauris magna non justo. Etiam et suscipit elit. Morbi eu ornare nulla, sit amet ornare est. Sed vehicula ipsum a mattis dapibus. Etiam volutpat vel enim at auctor.</p>
<p>Aenean pharetra convallis pellentesque. Vestibulum et metus lectus. Nunc consectetur, ipsum in viverra eleifend, erat erat ultricies felis, at ultricies mi massa eu ligula. Suspendisse in justo dapibus metus sollicitudin ultrices id sed nisl.</p>
</div>

        </section>

        <!-- <div class="holy-grail-sidebar-1 hg-sidebar">
            <p>Sidebar 1</p>
        </div> -->

        <div class="holy-grail-sidebar-2 hg-sidebar">
            <div class="detailBox">
                <div class="titleBox">
<label>Comment Box</label>
    <div class="commentBox">
        
        <p class="taskDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div class="actionBox">
        <ul class="commentList">
            <li>
                <div class="commenterImage">
                  <img src="http://placekitten.com/50/50" />
                </div>
                <div class="commentText">
                    <p class="">Hello this is a test comment.</p> <span class="date sub-text">on March 5th, 2014</span>

                </div>
            </li>
            <li>
                <div class="commenterImage">
                  <img src="http://placekitten.com/45/45" />
                </div>
                <div class="commentText">
                    <p class="">Hello this is a test comment and this comment is particularly very long and it goes on and on and on.</p> <span class="date sub-text">on March 5th, 2014</span>
                    
                </div>
            </li>
            <li>
                <div class="commenterImage">
                    <img src="http://placekitten.com/40/40" />
                </div>
                <div class="commentText">
                    <p class="">Hello this is a test comment.</p> <span class="date sub-text">on March 5th, 2014</span>
                    
                </div>
            </li>
        </ul>
        <form class="form-inline" role="form">
            <input id="comment" type="text">
            <button id="Rsend">Post</button>
        </form>
    </div>
    <div class="socialw fadeInDown">  
    
    <!-- Dribbble !-->
    <a href="http://dribbble.com/ryanbishop" target="_blank">		
    <div class="social first"> <img src="https://i.imgur.com/64r2jAv.png"/></div>
    </a>
    <!-- Dribbble !-->
    
    <!-- Behance !-->
    <a href="http://behance.com/ryanbishop" target="_blank">		
    <div class="social"> <img src="https://i.imgur.com/fkuhUov.png"/></div>
    </a>
    <!-- Behance !-->
    
    <!-- Facebook !-->
    <a href="https://facebook.com/abletroner" target="_blank">		
    <div class="social"><img src="https://i.imgur.com/PY2EPRW.png"/></div>
    </a>
    <!-- Facebook !-->
    
    <!-- Twitter !-->
    <a href="https://twitter.com/abletroner" target="_blank">		
    <div class="social"> <img src="https://i.imgur.com/ny0pyqt.png"/> </div>
    </a>
    <!-- Twitter !-->
    
    <!-- Intagram !-->
    <a href="http://instagram.com/abletroner" target="_blank">		
    <div class="social"> <img src="https://i.imgur.com/tZZG2zQ.png"/></div>
    </a>
    <!-- Instagram !-->
    
    </div>
    <!-- <button type="button" class="close" aria-hidden="true">&times;</button> -->
    </div>
</div>
</div>

</div>

<footer>
    

<!-- Social Icons End !-->
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
.circle{
    position: absolute;
    width: 40em;
    height: 40em;
    background-color: #57cc995e;
    border-radius: 50%;
    right: 0;
}

.detailBox {
    width: 13em;
    border:1px solid #bbb;
    margin:50px;
    position: relative;
}
.titleBox {
    background-color:#fdfdfd;
    padding:10px;
}
.titleBox label{
  color:#444;
  margin:0;
  display:inline-block;
}

.commentBox {
    padding:10px;
    border-top:1px dotted #bbb;
    color: #000;
}
.commentBox .form-group:first-child, .actionBox .form-group:first-child {
    width:80%;
}
.commentBox .form-group:nth-child(2), .actionBox .form-group:nth-child(2) {
    width:18%;
}
.actionBox .form-group * {
    width:100%;
}
.taskDescription {
    margin-top:10px 0;
}
.commentList {
    padding:0;
    list-style:none;
    max-height:200px;
    overflow:auto;
    color: #000;
}
.commentList li {
    margin:0;
    margin-top:10px;
}
.commentList li > div {
    display:table-cell;
}
.commenterImage {
    width:30px;
    margin-right:5px;
    height:100%;
    float:left;
}
.commenterImage img {
    width:100%;
    border-radius:50%;
}
.commentText p {
    margin:0;
}
.sub-text {
    color:#444;
    font-family:"Oswald", sans-serif;
    font-size:11px;
}
.actionBox {
    border-top:1px dotted #bbb;
    padding:10px;
}
#comment{
    /* margin-left: 80px; */
    width: 18.8em;
    height: 3em;
    background-color:#bbb;
    border: 1px;
    /* width: 100%; */
}
#Rsend{
    height: 3em;

}
.socialw {
    margin: 10px;
	width: 235px;
	overflow: auto;
	height: 100%;
}

.social{
  position:relative;
	border: 1px solid #57cc999a;
	width: 37px;
	height: 62px;
	float: left;
	margin-left: 5px;
	overflow: hidden;
}

.first {
	margin-left: 0px;
}

/*    ANIMATIONS   */

/* Fade In Down */
@-webkit-keyframes fadeInDown {
	0% {  opacity: 0;  -webkit-transform: translateY(-100px);  }	
	100% {  opacity: 1;  -webkit-transform: translateY(0);	}
}

@-moz-keyframes fadeInDown {
	0% {  opacity: 0;  -moz-transform: translateY(-100px);	}	
	100% {  opacity: 1;  -moz-transform: translateY(0);  }
}

@-o-keyframes fadeInDown {
	0% {  opacity: 0;  -o-transform: translateY(-100px);	}	
	100% {  opacity: 1;  -o-transform: translateY(0);  }
}

@keyframes fadeInDown {
	0% {  opacity: 0;  transform: translateY(-100px);	}	
	100% {  opacity: 1;  transform: translateY(0);	}
}

.fadeInDown {
	-webkit-animation: fadeInDown 1s both 0.5s;
	-moz-animation: fadeInDown 1s both 0.5s;
	-o-animation: fadeInDown 1s both 0.5s;
	animation: fadeInDown 1s both 0.5s;
}
/* Fade In Down */

/* Social Transition */

.social img{
position:absolute;
left:0;
top:0;
-webkit-transition: margin-top 250ms ease-in;
-moz-transition: margin-top 250ms ease-in;
-o-transition:  margin-top 250ms ease-in;
transition:  margin-top 250ms ease-in;
}
.social:hover img{
margin-top:-62px;
}
#bgimg { 
    position: absolute;
    background-position: contain;
    width: 59.7em;
    height: 30em;
    z-index: 0;
    background-size: contain;
}

#polina { 
  font-family: "Oswald", sans-serif; 
  background: rgba(0,0,0,0.3);
  color: white;
  padding: 2rem;
  width: 70%;
  margin:2.8rem;
  float: right;
  font-size: 1.2rem;
  position: absolute;
}
h1 {
  font-size: 3rem;
  text-transform: uppercase;
  margin-top: 0;
  letter-spacing: .3rem;
}

@media screen and (max-width: 500px) { 
  div{width:70%;} 
}

</style>