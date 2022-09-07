<template>
    <div class="container">
<div class="navigation">
  <div class="menu-toggle"></div>
  <ul class="list">
    <li class="list-item active" style="--color:#1BC23E"><router-link to="/">
      <span class="icon">
        <i class="bi bi-house-door"></i>
      </span>
      <span class="text">Home</span>
      </router-link></li>
      <li class="list-item" style="--color:#1BC23E"><router-link to="/products">
        <span class="icon">
          <i class="bi bi-tree"></i>
        </span>
        <span class="text">Products</span>
        </router-link></li>
    <li class="list-item" style="--color:#1BC23E"><router-link to="/About">
      <span class="icon">
        <i class="bi bi-info-circle"></i>
      </span>
      <span class="text">About</span>
      </router-link></li>
    <li class="list-item" style="--color:#1BC23E"><router-link to="/contact">
      <span class="icon">
        <i class="bi bi-ui-checks"></i>
      </span>
      <span class="text">Contact</span>
      </router-link></li>
        <li class="list-item" style="--color:#1BC23E"><router-link to="/admin">
        <span class="icon">
          <i class="bi bi-archive"></i>
        </span>
        <span class="text">Admin</span>
        </router-link></li>
      <li class="list-item" style="--color:#1BC23E"><router-link to="/login">
        <span class="icon">
          <i class="bi bi-door-open"></i>
        </span>
        <span class="text">Login/Sign Up</span>
        </router-link></li>
    </ul>
  </div>
</div>
</template>


<script>
    export default {
      data() {
        return {
    
        }
      },
      mounted() {
         const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.onclick = () => {
      navigation.classList.toggle('open');
    }
    
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
      item.onclick = () => {
        listItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
      }
    })
      }
    }
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.navigation {
  position: fixed;
  inset: 20px 0 20px 20px;
  width: 75px;
  min-height: 500px;
  background: #fff;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation.open {
  width: 250px;
  z-index: 100;
}

.navigation .menu-toggle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
}

.navigation .menu-toggle::before {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background: #333;
  transform: translateY(-8px);
  transition: 0.5s;
}

.navigation.open .menu-toggle::before {
  transform: translateY(0) rotate(45deg);
}

.navigation .menu-toggle::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background: #333;
  transform: translateY(8px);
  transition: 0.5s;
  box-shadow: 0 -8px 0 #333;
}

.navigation.open .menu-toggle::after {
  transform: translateY(0) rotate(-45deg);
  box-shadow: none;
}

.navigation ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}


.navigation ul li {
  list-style: none;
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  transition: 0.5s;
}

.navigation ul li.active {
  transform: translateX(30px);
}

.navigation.open ul li.active {
  transform: translateX(10px);
}


</style>

