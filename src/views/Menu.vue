<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FoodMenu from '@/components/FoodMenu.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import SpecialityBlock from '@/components/SpecialityBlock.vue';
import OpeningHours from '@/components/OpeningHours.vue';

@Component({
  components: {
    FoodMenu,
    SpecialityBlock,
    OpeningHours,
    FooterBlock,
  },
})

export default class Menu extends Vue {}
</script>

<template>
  <main class="menu mt-3">
    <div class="menu-title-block container-fluid d-flex justify-content-center align-items-center">
      <h1 class="text-center text-white block-title">Menu</h1>
    </div>
    <FoodMenu class="mt-5"/>
    <SpecialityBlock/>
    <OpeningHours/>
    <FooterBlock/>
  </main>
</template>

<style>
.menu-title-block {
  background: black url('../assets/images/backmenu.png') no-repeat center center;
  font-family: 'PlayFairDisplay', sans-serif;
  min-height: 250px;
}

.block-title {
  position: relative;
}

.block-title::after {
  background: url('../assets/images/right_leaf.png') no-repeat center center;
  content: "";
  height: 25px;
  position: absolute;
  top: 15px;
  width: 45px;
}

.block-title::before {
  background: url('../assets/images/left_leaf.png') no-repeat center center;
  content: "";
  left: -45px;
  height: 25px;
  position: absolute;
  top: 15px;
  width: 45px;
}

</style>
