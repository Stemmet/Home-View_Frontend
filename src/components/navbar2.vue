<template>
  <div class="hamburger-menu">
  <input id="menu__toggle" type="checkbox" />
  <label class="menu__btn" for="menu__toggle">
    <span></span>
  </label>

  <ul class="menu__box">
      <li style="--clr:#38A3A5">
          <a href="/" data-text="Home" class="menu__item">Home</a>
      </li>
      <li style="--clr:#38A3A5">
          <a href="/about" data-text="About" class="menu__item">About&nbsp;</a>
      </li>
      <li style="--clr:#38A3A5">
          <a href="/Blogs" data-text="Blogs" class="menu__item">Blogs&nbsp;</a>
      </li>
      <li style="--clr:#38A3A5">
          <a href="/Contact" data-text="Contact" class="menu__item">Contact&nbsp;</a>
      </li>
      <li style="--clr:#38A3A5">
          <a href="/Login" data-text="Login" class="menu__item">Login&nbsp;</a>
      </li>
      <li style="--clr:#38A3A5">
          <a href="/Register" data-text="Register" class="menu__item">Register&nbsp;</a>
      </li>
      <li style="--clr:#38A3A5">
          <a href="/SingleBlog" data-text="Single" class="menu__item">Single&nbsp;</a>
      </li>
  </ul>

</div>
</template>

<script>

</script>

<style scoped>
  #menu__toggle {
opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
top: 0;
transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
top: 0;
transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
left: 0 !important;
}
.menu__btn {
position: fixed;
top: 20px;
left: 20px;
width: 26px;
height: 26px;
cursor: pointer;
z-index: 9999999;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
display: block;
position: absolute;
width: 100%;
height: 2px;
background-color: #38A3A5;
transition-duration: .25s;
z-index: 999999;
}
.menu__btn > span::before {
content: '';
top: -8px;
}
.menu__btn > span::after {
content: '';
top: 8px;
}
.menu__box {
display: block;
position: fixed;
top: 0;
left: -100%;
max-width: 20rem;
height: 100%;
margin: 0;
padding: 80px 0;
list-style: none;
background-color: #57CC99;
box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
transition-duration: .25s;
z-index: 999999;
}

ul{
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
ul li{
  position: relative;
  list-style: none;
}
ul li a{
  font-size: 1.5em;
  text-decoration: none;
  letter-spacing: 2px;
  line-height: 1.5em;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
  padding: 0 2em 0 2em;
}
ul li a::before {
  content: attr(data-text);
  position: absolute;
  color: var(--clr);
  width: 0;
  overflow: hidden;
  transition: 0.75s;
  left: 0;
  border-right: 7px solid var(--clr);
  -webkit-text-stroke: 1px var(--clr);
}
ul li a:hover::before {
  padding-left: 2em;
  width: 75%;
  filter: drop-shadow(0 0 25px var(--clr));
}
</style>