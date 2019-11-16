<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CarouselBlock extends Vue {
  get carouselOptions(): object { return this.$store.getters.getCarouselOptions; }
  get carouselSlides(): object { return this.$store.getters.getCarouselSlides; }
}
</script>

<template id="carousel-block">
  <section class="slider-block mt-3">
    <b-carousel
      id="carousel-1"
      :interval="carouselOptions.interval"
      :background="carouselOptions.background"
      :img-width="carouselOptions.width"
      :img-height="carouselOptions.height"
      indicators
    >

      <b-carousel-slide  
        :caption="carouselSlides[0].caption"
        :text-html="carouselSlides[0].textHtml"
        img-src="../assets/images/slide1.jpg"
        class="carousel-slide"
      ></b-carousel-slide>

      <b-carousel-slide  
        :caption="carouselSlides[1].caption"
        :text-html="carouselSlides[1].textHtml"
        img-src="../assets/images/slide2.jpg"
        class="carousel-slide"
      ></b-carousel-slide>

      <b-carousel-slide  
        :caption="carouselSlides[2].caption"
        :text-html="carouselSlides[2].textHtml"
        img-src="../assets/images/slide3.webp"
        class="carousel-slide"
      ></b-carousel-slide>

    </b-carousel>
    <div class="slider-info container row d-flex justify-content-end">
      <div class="banner-menu d-flex justify-content-center align-items-center">
        <div class="menu-img d-flex justify-content-center align-items-center">
          <img src="../assets/images/icon_food.png" alt="Menu">
        </div>
        <router-link to="/about">Explore food menu</router-link>
      </div>
      <div class="d-flex justify-content-center align-items-center mr-4">
        <img src="../assets/images/icon_reviews.png" alt="Reviews">
        <p class="reviews-text m-3">Read <span>reviews</span></p>
        <a class="btn-reviews d-flex justify-content-center align-items-center" href="#Reviews">Reviews</a>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <img src="../assets/images/icon_phone1.png" alt="Phone">
        <p class="phone-text m-3">Call us now for <span>home delivery</span></p>
        <a href="#"></a>
      </div>
      <div class="d-flex justify-content-center align-items-center mb-3">
        <b class="phone-number">1-008 005 006</b>
      </div>
    </div>
  </section>
</template>

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

  .slider-block {
    background: #edf1f3;
    font-family: "PlayfairDisplay", sans-serif;
    position: relative;
  }

  .carousel-slide {
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

  .slider-info {
    border-bottom: 1px solid #dde3e7;
    font-family: "Sintony", sans-serif;
    font-weight: 700;
    margin: 0 auto 0 auto;
    height: 100px;
  }

  .phone-number {
    font-family: 'PlayfairDisplay', sans-serif;
    font-size: 32px;
    line-height: 22px;
  }

  .banner-menu {
    background: url("../assets/images/shape-line.png") no-repeat center center,
    url("../assets/images/shape.png") no-repeat center center;
    height: 200px;
    font-family: 'PlayfairDisplay', sans-serif; 
    font-weight: 700;
    left: 220px;
    position: absolute;
    top: 450px;
    width: 200px;
  }

  .banner-menu a {
    color: white;
    font-size: 22px;
    text-align: center;
    width: 110px;
  }

  .menu-img {
    background: black;
    border: 2px solid #fe4c8d;
    border-radius: 50%;
    height: 77px;
    position: absolute;
    top: -30px;
    width: 77px;
  }

  .reviews-text,
  .phone-text {
    font-size: 14px;
    text-transform: uppercase;
    width: 70px;
  }

  .phone-text {
    width: 150px;
  }

  .reviews-text span,
  .phone-text span {
    color: #fea100;
    font-size: 16px;
  }

  .btn-reviews {
    background: #fea100 url("../assets/images/arrow_menu.png") no-repeat center center;
    border-radius: 50%;
    color: transparent;
    height: 45px;
    font-size: 1px;
    position: relative;
    width: 45px;
  }

  .btn-reviews::before {
    border: 1px solid white;
    border-radius: 50%;
    content: "";
    height: 40px;
    left: 2.5px;
    position: absolute;
    top: 3px;
    width: 40px;
  }

  .btn-reviews:hover {
    color: transparent;
    opacity: .6;
  }
</style>
