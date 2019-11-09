<template>
  <section class="offer__block">
    <div class="special__block">
      <div class="title__block"> 
        <h2 class="text-center offer__title">Today Special</h2>
      </div>
    </div>
      <b-carousel
        id="carousel-2"
        :interval="2500"
        indicators
        background="transparent"
        class="container"
      >

        <b-carousel-slide
          class="slide"
          text-html="<section>
            <div>
              <h4>Food Name One</h4>
              <p>printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took 
              a galley of type and scrambled.</p>
              <div>
                <p>Home <span>delivary</span></p>
                <b>1-008 005 006</b>
                <p><sup>$</sup>89.00</p>
              </div>
            </div>
            <div>
              <h4>Food Name Two</h4>
              <p>printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took 
              a galley of type and scrambled.</p>
              <div>
                <p>Home <span>delivary</span></p>
                <b>1-008 005 006</b>
                <p><sup>$</sup>99.00</p>
              </div>
            </div>
            </section>"
         ><template v-slot:img>
            <img
              class="col-6"
              width="570"
              height="420"
              src="../assets/images/food-1.jpg"
              alt="image slot"
            >
            <img
              class="col-6"
              width="570"
              height="420"
              src="../assets/images/food-2.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide
          class="slide"
          text-html="<section>
            <div>
              <h4>Food Name One</h4>
              <p>printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took 
              a galley of type and scrambled.</p>
              <div>
                <p>Home <span>delivary</span></p>
                <b>1-008 005 006</b>
                <p><sup>$</sup>89.00</p>
              </div>
            </div>
            <div>
              <h4>Food Name Two</h4>
              <p>printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took 
              a galley of type and scrambled.</p>
              <div>
                <p>Home <span>delivary</span></p>
                <b>1-008 005 006</b>
                <p><sup>$</sup>99.00</p>
              </div>
            </div>
            </section>"
         ><template v-slot:img>
            <img
              class="col-6"
              width="570"
              height="420"
              src="../assets/images/food-1.jpg"
              alt="image slot"
            >
            <img
              class="col-6"
              width="570"
              height="420"
              src="../assets/images/food-2.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide
          class="slide"
          text-html="<section>
            <div>
              <h4>Food Name One</h4>
              <p>printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took 
              a galley of type and scrambled.</p>
              <div>
                <p>Home <span>delivary</span></p>
                <b>1-008 005 006</b>
                <p><sup>$</sup>89.00</p>
              </div>
            </div>
            <div>
              <h4>Food Name Two</h4>
              <p>printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took 
              a galley of type and scrambled.</p>
              <div>
                <p>Home <span>delivary</span></p>
                <b>1-008 005 006</b>
                <p><sup>$</sup>99.00</p>
              </div>
            </div>
            </section>"
         ><template v-slot:img>
            <img
              class="col-6"
              width="570"
              height="420"
              src="../assets/images/food-1.jpg"
              alt="image slot"
            >
            <img
              class="col-6"
              width="570"
              height="420"
              src="../assets/images/food-2.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
    </b-carousel>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SpecialOffer extends Vue {

}
</script>

<style>
.offer__block {
    background: white url("../assets/images/pizza-back.jpg") no-repeat bottom right;
}


.special__block {
    background: grey url("../assets/images/pizza.jpg") no-repeat center center;
    background-size: 100%;
    height: 440px;
}

.offer__title {
    color: white;
    font-family: 'PlayfairDisplay', sans-serif;
    font-size: 35px;
    font-weight: bold;
    line-height: 25px;
}

.title__block {
    background: rgba(0, 0, 0, .6);
    height: 100%;
    padding-top: 150px;
    width: 100%;
}

#carousel-2 {
    margin-top: -230px;
    position: relative;
}

#carousel-2 img {
    margin-bottom: 400px;
}

#carousel-2 .carousel-indicators {
    display: flex;
    flex-direction: row;
    left: 900px;
    position: absolute;
    top: -40px;
    width: 80px;
  }

.carousel-caption section {
    display: flex;
    justify-content: space-between;
    height: 800px;
    margin: 0 0 0 -151px;
    padding-top: 150px;
    position: relative;
}

.carousel-caption div {
    align-items: center;
    background: white;
    box-shadow: 4px 0px 13px gray;
    color: black;
    display: flex;
    font-size: 14px;
    flex-direction: column;
    line-height: 26px;
    padding-top: 50px;
    position: absolute;
    top: 658px;
    width: 525px;
}

.carousel-caption div div {
    align-items: center;
    border-top: 1px solid gray;
    box-shadow: none;
    flex-direction: row;
    justify-content: space-between;
    position: static;
    padding: 0;
    width: 440px;
}

.carousel-caption div div p:nth-child(3) {
    color: #fea100;
    font-size: 30px;
    position: relative;
    right: 10px;
}

.carousel-caption div div p {
    border-right: 1px solid grey;
    font-size: 13px;
    font-weight: bold;
    line-height: 17px;
    margin-top: 20px;
    text-align: left;
    text-transform: uppercase;
    width: 80px;
}

.carousel-caption div div span {
    color: #fe4c8d;
}

.carousel-caption div div b {
    font-family: 'PlayfairDisplay', sans-serif;
    font-size: 26px;
    line-height: 27px;
    margin-left: -70px;
}

.carousel-caption div + div {
    left: 554px;
}

.carousel-caption h4 {
    font-family: 'PlayfairDisplay', sans-serif;
    font-size: 26px;
    line-height: 22px;
    margin-bottom: 20px;
    text-align: center;
}

.carousel-caption p {
    text-align: center;
    width: 430px;
}

</style>