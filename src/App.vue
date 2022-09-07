<template>
  <profileLink/>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component">
      </component>
    </transition>
  </router-view>

<footerCom/>
</template>

<script>
import footerCom from './components/footerCom.vue'
import profileLink from './components/profileLink.vue'

export default {
  name: 'HomeView',
  components: {
    footerCom,
    profileLink
}
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Oswald:300,400,700);
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,200italic,300italic,400italic,600italic,700italic,900italic);

::-webkit-scrollbar{
  display: none;
}
* {
    box-sizing: border-box;
}

html, body {
    background: linear-gradient(#C7F9CC,#fff);
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    font-family: 'Oswald', serif;
    font-size: 1.1em;
    /* text-align: center; */
    color: #57CC99;
}

.holy-grail header,
.holy-grail footer,
.hg-sidebar,
.holy-grail-content {
    padding: 20px;
}

/* .holy-grail header,
.holy-grail footer{
    
}

.hg-sidebar{
    
} */

/* .holy-grail-content {
    margin-bottom: 100vh;
}  */

.holy-grail {
    min-height: 100vh;
}

.holy-grail,
.holy-grail-body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
}

.holy-grail-content {
    flex: 1 1 auto;
}

@media (min-width: 786px) {
    .holy-grail-sidebar-1{
        order: -1;
    }

    .holy-grail-body {
        flex-direction: row;
    }

    .hg-sidebar {
        flex: 0 0 260px;
    }
}

.route-enter-from {
  opacity: 0;
  transform: translateY(100px)
}
.route-enter-active {
  transition: all 1s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-100px)
}
.route-leave-active {
  transition: all 1s ease-in;
}

</style>
