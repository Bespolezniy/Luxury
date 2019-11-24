<script lang="ts">
import Vue from 'vue';
export default class SpecialReservation extends Vue {
};
</script>

<template>
    <div class="special-reservation-block pt-5">
        <h2 class="text-center">Special Reservation</h2>
        <div class="container d-flex pt-4 pb-5">
            <div class="col-4">
                <img src="../assets/images/reservation.jpeg" alt="reservation img" width="100%" height="210">
                <div class="reservation-info p-4">
                    <h5 class="reservation-info-title mt-3">Private Dinning</h5>
                    <p class="reservation-info-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a</p>
                </div>
            </div>
            <div class="col-4 special-card d-flex flex-column align-items-center justify-content-center">
                <div class="d-flex flex-column align-items-center mb-3">
                    <img class="mb-3" src="../assets/images/icon_phone.png" alt="phone">
                    <b class="special-reservation-phone">1-007 000 005</b>
                    <p class="special-reservation-text">Call us for a Special reservation</p>
                </div>
                <div class="d-flex flex-column align-items-center mt-3">
                    <img class="mb-3" src="../assets/images/icon_email.png" alt="email">
                    <b class="special-reservation-phone">info@luxury.com</b>
                    <p class="special-reservation-text">mail us for a Special reservation</p>
                </div>
            </div>
            <div class="col-4">
                <img src="../assets/images/reservation.jpeg" alt="reservation img" width="100%" height="210">
                <div class="reservation-info p-4">
                    <h5 class="reservation-info-title mt-3">Couple Dinning</h5>
                    <p class="reservation-info-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.special-reservation-block {
    background: #edf1f3;
}

.reservation-info {
    background: white;
    min-height: 210px;
}

.reservation-info-title {
    font-family: "PlayFairDisplay", sans-serif;
    font-size: 25px;
    font-weight: bold;
}

.reservation-info-text {
    font-size: 14px;
    line-height: 26px;
}

.special-card {
    background: #fe4c8d url('../assets/images/dotted_border.png') no-repeat center center;
    color: white;
}

.special-reservation-phone {
    font-family: "PlayFairDisplay", sans-serif;
    font-size: 24px;
    line-height: 22px;
    text-transform: uppercase;
}

.special-reservation-text {
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
}
</style>