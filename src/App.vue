<template>
  <div class="container-fluid pt-3" id="app">
    <header class="container row d-flex justify-content-between header__block">
      <router-link to="/"><img alt="Vue logo" src="./assets/images/logo.png"></router-link>
      <nav id="nav" class="mt-2 ml-3 mr-0">
        <router-link class="nav__item ml-4" to="/">Home</router-link> 
        <router-link class="nav__item ml-4" to="/">Menu</router-link>
        <router-link class="nav__item ml-4" to="/">Reservation</router-link>
        <router-link class="nav__item ml-4" to="/">Recipe</router-link>
        <router-link class="nav__item ml-4" to="/">Blog</router-link>
        <router-link class="nav__item ml-4" to="/">Pages</router-link>
        <router-link class="nav__item ml-4" to="/about">Contact</router-link>
      </nav>
      <router-link class="cart-link__item mt-2 mr-1" to="/about">Cart</router-link>
      <router-link class="btn btn-long btn-warning btn__book" to="/about">Book your table</router-link>
    </header>
    <router-view/>
  </div>
</template>

<style>
@font-face {
    font-family: 'Sintony';
    src: url('./assets/fonts/Sintony/sintonybold.woff2') format('woff2'), 
    url('./assets/fonts/Sintony/sintonybold.woff') format('woff'), 
    url('./assets/fonts/Sintony/sintonybold.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
}

@font-face {
    font-family: 'Sintony';
    src: url('./assets/fonts/Sintony/sintonybold.woff2') format('woff2'), 
    url('./assets/fonts/Sintony/sintonybold.woff') format('woff'), 
    url('./assets/fonts/Sintony/sintonybold.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
}

body {
  background: url("./assets/images/torte.jpg") no-repeat left 2550px;
}

.header__block {
  margin: 0 auto 0 auto;
}

.nav__item {
  color: #2c465a;
  font-family: "Sintony", sans-serif;
  line-height: 30px;
  text-transform: uppercase;
}

.cart-link__item {
  background: url("./assets/images/icon_cart.png") no-repeat center center,
  url("./assets/images/arrow.png") no-repeat center right;
  color: transparent;
  display: flex;
  font-size: 1px;
  height: 30px;
  position: relative;
  width: 55px;
}

.cart-link__item:hover {
  color: transparent;
}

.cart-link__item::before {
  background: #fe4c8d;
  border-radius: 50%;
  color: white;
  content: "3";
  display: flex;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  height: 16px;
  left: 30px;
  position: absolute;
  width: 16px;
}

.cart-link__item:hover {
  opacity: .6;
}

.btn__book {
  align-items: center;
  background: #fea100 url("./assets/images/icon_plate.png") no-repeat 20px center;
  color: white;
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

.btn__book::before {
  border: 1px solid white;
  border-radius: 3px;
  content: "";
  height: 35px;
  position: absolute;
  right: 3.5px;
  width: 180px;
}

</style>

