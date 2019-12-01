<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FooterBlock from '@/components/FooterBlock.vue';

@Component({
  components: {
    FooterBlock,
  },
})

export default class NotFound extends Vue {}
</script>

<template>
    <main>
        <section class="container-fluid not-found-page mt-3 text-center pb-5">
            <h1 class="not-found-title">404</h1>
            <b class="not-found-subtitle">Oops!!</b>
            <p>the page you are looking for doesn’t exit</p>
            <router-link class="btn return-btn btn-warning btn-long" to="/">Back to home page</router-link>
        </section>
        <FooterBlock/>
    </main>
</template>

<style scoped>
.not-found-page {
    color: #2c465a;
    background: #edf1f3;
    font-family: 'PlayFairDisplay', sans-serif;
    font-size: 25px;
}

.not-found-title {
    color: rgb(254, 131, 0);
    font-size: 240px;
}

.not-found-subtitle {
    font-size: 72px;
}

.return-btn {
    background: #fea100;
    color: white;
    font-family: 'Sintony', sans-serif;
    font-size: 14px;
    font-weight: bold;
    height: 35px;
    position: relative;
    text-transform: uppercase;
}

.return-btn::before {
  border: 1px solid white;
  border-radius: 3px;
  content: "";
  height: 30px;
  position: absolute;
  right: 0px;
  top: 1.5px;
  width: 160px;
}

</style>