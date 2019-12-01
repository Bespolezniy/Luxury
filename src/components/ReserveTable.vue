<script lang="ts">
import Vue from 'vue';
export default class ReserveTable extends Vue {
}
</script>

<template>
    <section class="container-fluid reserve-block">
        <div class="container pt-5 pb-5">
            <h3 class="text-center reserve-title">Reserve your table</h3>
            <div class="row d-flex justify-content-between mt-5">
            <img class="col-6" src="../assets/images/restaurant.jpg" alt="Restaurant" width="560" height="335">
            <form class="col-6 d-flex justify-content-between flex-wrap" action="#" method="post">
                <div class="d-flex flex-column col-6">
                    <label class="d-none" for="name">Name</label>
                    <input class="pl-0 mt-4 form-input input-name" id="name" type="text" placeholder="Name*" required/>
                    <label class="d-none" for="time">Time</label>
                    <input class="pl-0 mt-4 form-input input-time" id="time" type="text" placeholder="Time*" required/>
                    <label class="d-none" for="guests">Guests</label>
                    <input id="guests" class="pl-0 mt-4 form-input input-guests" type="text" placeholder="Guests*" required pattern="/^\d+$/"/>
                </div>
                <div class="d-flex flex-column col-6">
                    <label class="d-none" for="#">Date</label>
                    <input class="mt-4 pl-0 form-input input-date" type="text" placeholder="Date*" required>
                    <label class="d-none" for="#">Email</label>
                    <input class="mt-4 pl-0 form-input input-email" type="email" placeholder="Email Address*" required pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/">
                    <label class="d-none" for="#">Phone</label>
                    <input class="mt-4 pl-0 form-input input-phone" type="text" placeholder="Phone Number*" required pattern="7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}">
                </div>
                <div class="pl-3 d-flex align-items-center justify-content-between btn-wrapper">
                    <button type="submit" class="btn btn-long btn-warning btn-explore">Make Reservation</button>
                    <p class="reservation-text mt-3">You can also call <span class="text-pink">for a reservation</span></p>
                    <b class="phone-number d-flex align-items-center pl-3 pb-2">1-007 000 005</b>
                </div>
            </form>
        </div>
        </div>
    </section>
</template>

<style scoped>
    .reserve-block {
        background: #edf1f3;
    }

    .reserve-title {
        font-size: 35px;
    }

    .reservation-text {
        font-size: 13px;
        font-weight: bold;
        line-height: 17px;
        text-transform: uppercase;
        width: 130px;
    }

    .form-input {
        background: none;
        border: none;
        border-bottom: 1px solid #c7d1d6;
        height: 40px;
        font-size: 14px;
        line-height: 26px;
    }

    .input-name {
        background: url("../assets/images/icon_name.png") no-repeat center right;
    }

    .input-guests {
        background: url("../assets/images/icon_guest.png") no-repeat center right;
    }

    .input-time {
        background: url("../assets/images/icon_time.png") no-repeat center right;
    }

    .input-date {
        background: url("../assets/images/icon_calander.png") no-repeat center right;
    }

    .input-email {
        background: url("../assets/images/icon_mail.png") no-repeat center right;
    }

    .input-phone {
        background: url("../assets/images/icon_smart.png") no-repeat center right;
    }

    .text-pink {
        color: #fe4c8d;
    }

    .phone-number {
        border-left: 1px solid gray;
        font-size: 24px;
        font-weight: bold;
    }

    .btn-explore {
        width: 170px;
    }

    .btn-wrapper {
        width: 600px;
    }

</style>