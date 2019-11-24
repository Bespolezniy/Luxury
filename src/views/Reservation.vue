<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BookTable from '@/components/BookTable.vue';
import OpeningHours from '@/components/OpeningHours.vue';
import FooterBlock from '@/components/FooterBlock.vue';

@Component({
  components: {
    BookTable,
    OpeningHours,
    FooterBlock,
  },
})

export default class Reservation extends Vue {}
</script>

<template>
    <main class="reservation mt-3">
        <div class="reservation-title-block container-fluid d-flex justify-content-center align-items-center">
            <h1 class="text-center text-white block-title">Reservation</h1>
        </div>
        <BookTable/>
        <OpeningHours/>
        <FooterBlock/>
    </main>
</template>

<style>
.reservation-title-block {
    background: black url('../assets/images/reservation.jpeg') no-repeat center center;
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