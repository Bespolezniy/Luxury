<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SpecialityBlock extends Vue {

}
</script>

<template>
    <section class="mt-5">
        <div class="row">
            <img class="col-6" src="../assets/images/speciality-main.jpg" alt="Food image" height="572">
            <div class="col-6 speciality-info pt-5">
                <h3 class="speciality-title mt-5 ml-3">Speciality</h3>
                <div class="mt-5 ml-3">
                    <h4 class="speciality-title-2">EXCELLENT SERVICE</h4>
                    <p class="speciality-paragraph">Survived not only five centuries, but also the leap into electronic 
                    typesetting, remaining essentially unchanged. </p>
                </div>
                <div class="mt-4 ml-3">
                    <h4 class="speciality-title-2">FREE Home DELIVERY</h4>
                    <p class="speciality-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div class="mt-4 ml-3">
                    <h4 class="speciality-title-2">Cool atmosphere</h4>
                    <p class="speciality-paragraph">Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div> 
            </div>
        </div>
    </section>
</template>

<style>
@font-face {
    font-family: 'PlayfairDisplay';
    src: url('../assets/fonts/PlayfairDisplay/playfairdisplayitalic.woff2') format('woff2'), 
    url('../assets/fonts/PlayfairDisplay/playfairdisplayitalic.woff') format('woff'), 
    url('../assets/fonts/PlayfairDisplay/playfairdisplayitalic.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
    font-style: italic;
}

.speciality-info {
    background-color: #ecf1f4;
}

.speciality-title {
    font-family: "PlayFairDisplay", sans-serif;
    font-size: 35px;
    line-height: 22px;
}

.speciality-title-2 {
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
}

.speciality-paragraph {
    font-size: 14px;
    line-height: 26px;
    width: 560px;
}
</style>