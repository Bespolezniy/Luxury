<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InfoBlock extends Vue {

}
</script>

<template>
    <section class="container pb-3 pt-5">
        <div class="d-flex justify-content-between row pb-5 pt-5">
            <div class="col-5 ml-4">
                <h3 class="info-title">About Restaurent</h3>
                <p class="mt-5 info-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                <div class="d-flex justify-content-between align-items-center mt-4">
                    <router-link to="/about" class="btn btn-long btn-warning btn-more">Read more</router-link>
                    <img src="../assets/images/award.jpg" alt="Award" width="240px">  
                </div>
            </div>
            <div class="col-6 row mr-2">
                <div class="col-6 left-images">
                    <img class="m-1" src="../assets/images/1.jpg" alt="image1" width="270px" height="150px">
                    <img class="m-1" src="../assets/images/2.jpg" alt="image2" width="270px" height="150px">
                </div>
                <div class="col-6 top-images">
                    <img class="m-1" src="../assets/images/3.jpg" alt="image3" width="270px" height="150px">
                    <img class="m-1" src="../assets/images/4.jpg" alt="image4" width="270px" height="150px">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.info-title {
    font-family: 'PlayfairDisplay', sans-serif;
    font-size: 35px;
    font-weight: bold;
    line-height: 25px;
}

.info-text {
    font-size: 14px;
    line-height: 26px;
    width: 505px;
}

.btn-more {
    align-items: center;
    background: #fea100;
    color: white;
    display: flex;
    justify-content: center;
    font-family: "Sintony", sans-serif;
    font-size: 14px;
    font-weight: bold;
    height: 50px;
    text-transform: uppercase;
    width: 150px;
}

.top-images {
    bottom: 50px;
    position: relative;
}

.left-images {
    right: 10px;
}
</style>