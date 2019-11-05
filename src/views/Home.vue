<template>
  <main class="home">
    <CarouselBlock/>
    <InfoBlock/>
    <SpecialOffer/>
    <FoodMenu/>
    <ReviewsBlock/>
    <ReserveTable/>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CarouselBlock from '@/components/CarouselBlock.vue'; // @ is an alias to /src
import InfoBlock from '@/components/InfoBlock.vue';
import SpecialOffer from '@/components/SpecialOffer.vue';
import FoodMenu from '@/components/FoodMenu.vue';
import ReviewsBlock from '@/components/ReviewsBlock.vue';
import ReserveTable from '@/components/ReserveTable.vue';

@Component({
  components: {
    CarouselBlock,
    InfoBlock,
    SpecialOffer,
    FoodMenu,
    ReviewsBlock,
    ReserveTable,
  },
})
export default class Home extends Vue {}
</script>
