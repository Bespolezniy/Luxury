<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CarouselBlock from '@/components/CarouselBlock.vue'; // @ is an alias to /src
import InfoBlock from '@/components/InfoBlock.vue';
import SpecialOffer from '@/components/SpecialOffer.vue';
import FoodMenu from '@/components/FoodMenu.vue';
import ReviewsBlock from '@/components/ReviewsBlock.vue';
import ReserveTable from '@/components/ReserveTable.vue';
import FooterBlock from '@/components/FooterBlock.vue';

@Component({
  components: {
    CarouselBlock,
    InfoBlock,
    SpecialOffer,
    FoodMenu,
    ReviewsBlock,
    ReserveTable,
    FooterBlock,
  },
})

export default class Home extends Vue {}
</script>

<template>
  <main class="home">
    <CarouselBlock/>
    <InfoBlock/>
    <SpecialOffer/>
    <FoodMenu/>
    <ReviewsBlock/>
    <ReserveTable/>
    <FooterBlock/>
  </main>
</template>
