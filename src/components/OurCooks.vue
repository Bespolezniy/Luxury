<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})
export default class OurCooks extends Vue {
}
</script>

<template>
<section class="container-fluid cooks-block pt-5 pb-5 mt-5">

    <h3 class="text-center speciality-title">Our Cooks</h3>

    <b-carousel
      id="carousel-3"
      :interval="0"
      background="transparent"
      indicators
      class="container mt-5 mb-5"
    >

      <b-carousel-slide  
        :text-html="`<section class='our-cooks d-flex justify-content-between'>
          <div class='cook-info d-flex align-items-center justify-content-center'><b>Cheff. John cliff</b></div>
          <div class='cook-info d-flex align-items-center justify-content-center'><b>Cheff. peter vasko</b></div>
          <div class='cook-info d-flex align-items-center justify-content-center'><b>Cheff. Mariya thomas</b></div>
          <div class='cook-info d-flex align-items-center justify-content-center'><b>Cheff. james dico</b></div>
          </section>`"
        class="slide-cooks"
      >
      <template v-slot:img>
          <img
             class="col-3"
             height="263"
             src="../assets/images/chef1.png"
             alt="slide image1"
           >
          <img
             class="col-3"
             height="263"
             src="../assets/images/chef2.png"
             alt="slide image2"
           >
           <img
             class="col-3"
             height="263"
             src="../assets/images/chef4.png"
             alt="slide image2"
           >
           <img
             class="col-3"
             height="263"
             src="../assets/images/chef3.png"
             alt="slide image2"
           >
        </template>
      </b-carousel-slide>

      <b-carousel-slide  
        :text-html="`<section class='our-cooks d-flex justify-content-between'>
          <div class='cook-info d-flex align-items-center justify-content-center'><b>Cheff. John cliff</b></div>
          <div class='cook-info d-flex align-items-center justify-content-center'><b>Cheff. peter vasko</b></div>
          <div class='cook-info d-flex align-items-center justify-content-center'><b>Cheff. Mariya thomas</b></div>
          <div class='cook-info d-flex align-items-center justify-content-center'><b>Cheff. james dico</b></div>
          </section>`"
        class="slide-cooks"
      >
      <template v-slot:img>
          <img
             class="col-3"
             height="263"
             src="../assets/images/chef1.png"
             alt="slide image1"
           >
          <img
             class="col-3"
             height="263"
             src="../assets/images/chef2.png"
             alt="slide image2"
           >
           <img
             class="col-3"
             height="263"
             src="../assets/images/chef4.png"
             alt="slide image2"
           >
           <img
             class="col-3"
             height="263"
             src="../assets/images/chef3.png"
             alt="slide image2"
           >
        </template>
      </b-carousel-slide>

      <b-carousel-slide  
        :text-html="`<section class='our-cooks d-flex justify-content-between'>
          <div class='cook-info d-flex align-items-center justify-content-center'><b>Cheff. John cliff</b></div>
          <div class='cook-info d-flex align-items-center justify-content-center'><b>Cheff. peter vasko</b></div>
          <div class='cook-info d-flex align-items-center justify-content-center'><b>Cheff. Mariya thomas</b></div>
          <div class='cook-info d-flex align-items-center justify-content-center'><b>Cheff. james dico</b></div>
          </section>`"
        class="slide-cooks"
      >
      <template v-slot:img>
          <img
             class="col-3"
             height="263"
             src="../assets/images/chef1.png"
             alt="slide image1"
           >
          <img
             class="col-3"
             height="263"
             src="../assets/images/chef2.png"
             alt="slide image2"
           >
           <img
             class="col-3"
             height="263"
             src="../assets/images/chef4.png"
             alt="slide image2"
           >
           <img
             class="col-3"
             height="263"
             src="../assets/images/chef3.png"
             alt="slide image2"
           >
        </template>
      </b-carousel-slide>

    </b-carousel>
  </section>
</template>

<style>
.cooks-block {
  background: #edf1f3 url('../assets/images/background-pattern.png') no-repeat center center;
}

.cook-info {
  background: white;
  color: black;
  font-size: 15px;
  text-transform: uppercase;
  padding: 0;
  min-height: 60px;
  width: 248px;
}

#carousel-3 .carousel-caption {
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
  width: 100%;
}

#carousel-3 .carousel-caption p {
  display: flex;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  width: 100%;
}

.our-cooks {
  position: relative;
  top: 53px;
  width: 100%;
  z-index: 10;
}

.slide-cooks {
  padding-bottom: 60px;
}

#carousel-3 .carousel-indicators {
    display: flex;
    flex-direction: row;
    left: 350px;
    position: absolute;
    top: 350px;
    width: 80px;
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

</style>