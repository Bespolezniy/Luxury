<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import OpeningHours from '@/components/OpeningHours.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import SpecialityBlock from '@/components/SpecialityBlock.vue';
import OurHistory from '@/components/OurHistory.vue';
import OurCooks from '@/components/OurCooks.vue';

@Component({
  components: {
    OurHistory,
    OurCooks,
    SpecialityBlock,
    OpeningHours,
    FooterBlock,
  },
})

export default class AboutUs extends Vue {}
</script>

<template>
    <main class="about mt-3">
        <div class="about-title-block container-fluid d-flex justify-content-center align-items-center">
            <h1 class="text-center text-white about-title">About Us</h1>
        </div>
        <OurHistory/>
        <OurCooks/>
        <SpecialityBlock/>
        <OpeningHours/>
        <FooterBlock/>
    </main>
</template>

<style scoped>
.about-title-block {
  background: black url('../assets/images/about.png') no-repeat center -130px;
  background-size: 100%;
  font-family: 'PlayFairDisplay', sans-serif;
  min-height: 250px;
}

.about-title {
  position: relative;
}

.about-title::after {
  background: url('../assets/images/right_leaf.png') no-repeat center center;
  content: "";
  height: 25px;
  position: absolute;
  top: 15px;
  width: 45px;
}

.about-title::before {
  background: url('../assets/images/left_leaf.png') no-repeat center center;
  content: "";
  left: -45px;
  height: 25px;
  position: absolute;
  top: 15px;
  width: 45px;
}
</style>