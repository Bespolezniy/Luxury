<template>
  <section class="slider__block mt-3">
    <b-carousel
      id="carousel-1"
      :interval="2500"
      indicators
      background="#ababab"
      img-width="1024"
      img-height="570"
    >

      <b-carousel-slide
        caption="Teast your fav dish"
        text-html="from <span>luxury restaurent</span>"
        img-src="../assets/images/slide1.jpg"
        class="carousel__slide"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Teast your fav dish"
        text-html="from <span>luxury restaurent</span>"
        img-src="../assets/images/slide2.jpg"
        class="carousel__slide"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Teast your fav dish"
        text-html="from <span>luxury restaurent</span>"
        img-src="../assets/images/slide3.webp"
        class="carousel__slide"
      ></b-carousel-slide>
    </b-carousel>
    <div class="slider__info container row d-flex justify-content-end">
      <div class="banner__menu d-flex justify-content-center align-items-center">
        <div class="menu__img d-flex justify-content-center align-items-center">
          <img src="../assets/images/icon_food.png" alt="Menu">
        </div>
        <a class="" href="#">Explore food menu</a>
      </div>
      <div class="d-flex justify-content-center align-items-center mr-4">
        <img src="../assets/images/icon_reviews.png" alt="Reviews">
        <p class="reviews__text m-3">Read <span>reviews</span></p>
        <a class="btn__reviews d-flex justify-content-center align-items-center" href="#">Reviews</a>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <img src="../assets/images/icon_phone.png" alt="Phone">
        <p class="phone__text m-3">Call us now for <span>home delivery</span></p>
        <a href="#"></a>
      </div>
      <div class="d-flex justify-content-center align-items-center mb-3">
        <b class="phone-number">1-008 005 006</b>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Carousel extends Vue {
}
</script>

<style>
  @font-face {
    font-family: 'PlayfairDisplay';
    src: url('../assets/fonts/PlayfairDisplay/playfairdisplaybold.woff2') format('woff2'), 
    url('../assets/fonts/PlayfairDisplay/playfairdisplaybold.woff') format('woff'), 
    url('../assets/fonts/PlayfairDisplay/playfairdisplaybold.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
}

  .slider__block {
    background: #edf1f3;
    font-family: "PlayfairDisplay", sans-serif;
    position: relative;
  }

  .carousel__slide {
    height: 570px;
    line-height: 30px;
  }

  .carousel-caption {
    font-size: 40px;
    margin-bottom: 203px;
    text-align: left;
    width: 480px;
  }

  .carousel-caption span {
    color: #fea100;
  }

  .carousel-caption h3 {
    font-size: 56px;
  }

  .carousel-indicators {
    display: flex;
    flex-direction: column;
    left: -150px;
    position: absolute;
    top: 20px;
  }

  .carousel-indicators li {
    background: transparent;
    border: 2px solid white;
    border-radius: 50%;
    height: 12px;
    margin-bottom: 5px;
    opacity: 1;
    width: 12px;
  }

  li[aria-current="true"] {
    border: 2px solid #fea100;
    position: relative;
  } 

  li[aria-current="true"]::before {
    content: "";
    background: #fea100;
    border-radius: 50%;
    height: 4px;
    left: 4px;
    position: absolute;
    top: 4.5px;
    width: 4px;
  }

  .slider__info {
    border-bottom: 1px solid #dde3e7;
    font-family: "Sintony", sans-serif;
    font-weight: 700;
    margin: 0 auto 0 auto;
    height: 100px;
  }

  .phone-number {
    font-family: 'PlayfairDisplay';
    font-size: 32px;
    line-height: 22px;
  }

  .banner__menu {
    background: url("../assets/images/shape-line.png") no-repeat center center,
    url("../assets/images/shape.png") no-repeat center center;
    height: 200px;
    font-family: 'PlayfairDisplay'; 
    font-weight: 700;
    left: 220px;
    position: absolute;
    top: 450px;
    width: 200px;
  }

  .banner__menu a {
    color: white;
    font-size: 22px;
    text-align: center;
    width: 110px;
  }

  .menu__img {
    background: black;
    border: 2px solid #fe4c8d;
    border-radius: 50%;
    height: 77px;
    position: absolute;
    top: -30px;
    width: 77px;
  }

  .reviews__text,
  .phone__text {
    font-size: 14px;
    text-transform: uppercase;
    width: 70px;
  }

  .phone__text {
    width: 150px;
  }

  .reviews__text span,
  .phone__text span {
    color: #fea100;
    font-size: 16px;
  }

  .btn__reviews {
    background: #fea100 url("../assets/images/arrow_menu.png") no-repeat center center;
    border-radius: 50%;
    color: transparent;
    height: 45px;
    font-size: 1px;
    position: relative;
    width: 45px;
  }

  .btn__reviews::before {
    border: 1px solid white;
    border-radius: 50%;
    content: "";
    height: 40px;
    left: 2.5px;
    position: absolute;
    top: 3px;
    width: 40px;
  }

  .btn__reviews:hover {
    color: transparent;
    opacity: .6;
  }
</style>
