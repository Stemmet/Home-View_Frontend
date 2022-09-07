<template>
<div class="box">
    <div class="content">
      <img src="https://i.postimg.cc/7Yjt3c9P/pexels-evgeny-tchebotarev-2187605.jpg" alt="">
      <h2>User <br><span>Go to</span></h2>
      <a href="/profile">Profile</a>
    </div>
  </div>
</template>

<style scoped>
  .box{
  position: fixed;
  width: 9em;
  height: 9em;
  background: #d9d6d6;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 181vh;
  z-index: 100;
  top: 1%;
}
.box::before{
  content: '';
  position: absolute;
  inset: -10px 100px;
  background: linear-gradient(-45deg , #C7F9CC, #57CC99);
  transition: 0.5s;
  animation: animate 4s linear infinite;
}
.box:hover::before{
  inset: -20px 0px;
  cursor: pointer;
}
@keyframes animate {
  0%{transform: rotate(0deg);}
  0%{transform: rotate(360deg);}
}
.box::after{
  content: '';
  position: absolute;
  inset: 5px;
  background-color: #57CC99;
  border-radius: 50%;
  z-index: 1;
}
.content{
  position: absolute;
  inset: 30px;
  background-color: #C7F9CC;
  z-index: 3;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.content img{
  position: absolute;
  top: 0;
  left: 0;
  min-width: 8.6em;
  height: 100%;
  object-fit: contain;
  transition: 0.5s;
  pointer-events: none;
  z-index: 3;
  transform: 0.5s;
}
.box:hover .content img{
  opacity: 0;
  transform: rotate(10deg);
}
.content h2{
  position: relative;
  font-size: 0.8em;
  color: #57CC99;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: center;
}
.content h2 span{
  font-size: 0.7em;
  font-weight: 300;
}
.content a{
  position: relative;
  padding: 5px 6px;
  background-color: #57CC99;
  color: #C7F9CC;
  font-size: 0.75em;
  font-weight: 800;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  text-transform: uppercase;
}
</style>