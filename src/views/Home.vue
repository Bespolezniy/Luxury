<template>
  <main class="home">
    <CarouselBlock/>
    <InfoBlock/>
    <SpecialOffer/>
    <FoodMenu/>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CarouselBlock from '@/components/CarouselBlock.vue'; // @ is an alias to /src
import InfoBlock from '@/components/InfoBlock.vue';
import SpecialOffer from '@/components/SpecialOffer.vue';
import FoodMenu from '@/components/FoodMenu.vue';

@Component({
  components: {
    CarouselBlock,
    InfoBlock,
    SpecialOffer,
    FoodMenu,
  },
})
export default class Home extends Vue {}
</script>
