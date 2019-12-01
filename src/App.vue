<script lang="ts">
import Vue from 'vue';
import {store} from './store';
import {mapGetters} from 'vuex';

export default Vue.component('main-component', {
  template: '#app',
  store,
  computed: {
    ...mapGetters({
      cartItems: 'getCartItems',
    }),
  },
});
</script>

<template id="main">
  <div class="container-fluid pt-3" id="app">
    <header class="container row d-flex justify-content-between align-items-center header-block">
      <router-link class="header-logo" to="/"><img alt="Vue logo" src="./assets/images/logo.png"></router-link>
      <nav id="nav" class="nav mt-2 ml-2 mr-0">
        <router-link class="nav-link" to="/">Home</router-link> 
        <router-link class="nav-link" to="/menu">Menu</router-link>
        <router-link class="nav-link" to="/reservation">Reservation</router-link>
        <router-link class="nav-link" to="/">Recipe</router-link>
        <router-link class="nav-link" to="/blog">Blog</router-link>
        <router-link class="nav-link" to="/">Pages</router-link>
        <router-link class="nav-link" to="/about">Contact</router-link>
      </nav>
      <router-link :items="cartItems" class="cart-link-item mt-2 mr-2" to="/about">Cart</router-link>
      <router-link class="btn btn-long btn-warning btn-book" to="/reservation">Book your table</router-link>
    </header>
    <router-view/>
  </div>
</template>

<style>
@font-face {
    font-family: 'PlayfairDisplay';
    src: url('./assets/fonts/PlayfairDisplay/playfairdisplaybold.woff2') format('woff2'), 
    url('./assets/fonts/PlayfairDisplay/playfairdisplaybold.woff') format('woff'), 
    url('./assets/fonts/PlayfairDisplay/playfairdisplaybold.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
}

@font-face {
    font-family: 'Sintony';
    src: url('./assets/fonts/Sintony/sintonybold.woff2') format('woff2'), 
    url('./assets/fonts/Sintony/sintonybold.woff') format('woff'), 
    url('./assets/fonts/Sintony/sintonybold.ttf') format('truetype');
    font-display: swap;
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Sintony';
    src: url('./assets/fonts/Sintony/sintonybold.woff2') format('woff2'), 
    url('./assets/fonts/Sintony/sintonybold.woff') format('woff'), 
    url('./assets/fonts/Sintony/sintonybold.ttf') format('truetype');
    font-display: swap;
    font-weight: 700;
    font-style: normal;
}

body {
  background: url("./assets/images/torte.jpg") no-repeat left 2550px;
}

.header-block {
  margin: 0 auto 0 auto;
}

.header-logo {
  transition-delay: .15s;
}

.header-logo:hover {
  opacity: 0.6;
}

.header-logo:active {
  opacity: 0.3;
}

.nav-link {
  color: #2c465a;
  font-family: "Sintony", sans-serif;
  line-height: 30px;
  text-transform: uppercase;
}

.cart-link-item {
  background: url("./assets/images/icon_cart.png") no-repeat center center,
  url("./assets/images/arrow.png") no-repeat center right;
  color: transparent;
  display: flex;
  font-size: 1px;
  height: 30px;
  position: relative;
  width: 55px;
}

.cart-link-item:hover {
  color: transparent;
}

.cart-link-item::before {
  background: #fe4c8d;
  border-radius: 50%;
  color: white;
  content: attr(items);
  display: flex;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  height: 16px;
  left: 30px;
  position: absolute;
  width: 16px;
}

.cart-link-item:hover {
  opacity: .6;
}

.btn-book {
  align-items: center;
  color: white;
  background: #fea100 url("./assets/images/icon_plate.png") no-repeat 20px center;
  display: flex;
  justify-content: center;
  font-family: "Sintony", sans-serif;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  padding-left: 50px;
  position: relative;
  text-transform: uppercase;
  width: 190px;
}

.btn-book::before {
  border: 1px solid white;
  border-radius: 3px;
  content: "";
  height: 35px;
  position: absolute;
  right: 3px;
  width: 180px;
}

</style>

