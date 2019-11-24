<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class OpeningHours extends Vue {
}
</script>

<template>
    <div class="time-block container d-flex align-items-center">
            <h3 class="speciality-title col-3">Opening hours</h3>
            <div class="d-flex flex-column col-3 offset-1 time-info">
                <i class="speciality-days">Monday to Friday</i>
                <b class="speciality-time">10am -10pm</b>
            </div>
            <div class="d-flex flex-column col-3 time-info">
                <i class="speciality-days">Saturday to Sunday</i>
                <b class="speciality-time">09am -11pm</b>
            </div>
            <img class="image-secondary" src="../assets/images/speciality-secondary.png" alt="Image food" width="210" height="210">
        </div>
</template>

<style scoped>
.time-block {
    min-height: 242px;
}

.time-info {
    font-family: "PlayFairDisplay", sans-serif;
}

.speciality-days {
    font-size: 20px;
}

.speciality-time {
    color: #fea100;
    font-size: 30px;
}

.image-secondary {
    position: relative;
    top: -100px;
}
</style>