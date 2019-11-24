<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SpecialReservation from '@/components/SpecialReservation.vue';

@Component({
    components: {
        SpecialReservation,
    }
})
export default class BookTable extends Vue {
    get checkForm(): void {
        return;
    }
};
</script>

<template>
    <section class="container-fluid">
        <div class="container pt-5 pb-5 mt-3 d-flex flex-column align-items-center">
            <h3 class="text-center book-title">Book a Table</h3>
            <p class="text-center book-text mt-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <div class="row d-flex justify-content-between mt-3">
            <form @submit.prevent="checkForm" class="col-12 d-flex justify-content-between flex-wrap" action="#">
                <div class="col-12 d-flex justify-content-between">
                    <label class="d-none" for="name">Name</label>
                    <input class="mt-4 form-input input-name col-3 pl-5" id="name" type="text" max="30" min="2" placeholder="Name*" required/>
                    <label class="d-none" for="time">Time</label>
                    <input class="mt-4 form-input input-time col-3 pl-5" id="time" type="text" placeholder="Time*" required/>
                    <label class="d-none" for="guests">Guests</label>
                    <input id="guests" class="mt-4 form-input input-guests col-3 pl-5" type="text" placeholder="Guests*" required/>
                </div>
                <div class="col-12 d-flex justify-content-between">
                    <label class="d-none" for="#">Date</label>
                    <input class="mt-4 form-input input-date col-3 pl-5" type="text" placeholder="Date*" required>
                    <label class="d-none" for="#">Email</label>
                    <input class="mt-4 form-input input-email col-3 pl-5" type="email" placeholder="Email Address*" required>
                    <label class="d-none" for="#">Phone</label>
                    <input class="mt-4 form-input input-phone col-3 pl-5" type="text" placeholder="Phone Number*" required>
                </div>
                <div class="col-12 mt-5">
                    <textarea class="col-12 book-textarea pt-0" name="text" id="text" placeholder="Special Requirements*"></textarea>
                </div>
                <div class="col-12 d-flex align-items-center justify-content-center mt-5">
                    <button type="submit" class="btn btn-long btn-warning btn-explore">Make Reservation</button>
                </div>
            </form>
        </div>
        </div>
        <SpecialReservation/>
    </section>
</template>

<style scoped>
    .book-title {
        font-family: "PlayFairDisplay", sans-serif;
        font-size: 35px;
        line-height: 22px;
    }

    .book-text {
        font-size: 14px;
        line-height: 26px;
        width: 680px;
    }

    .form-input,
    .book-textarea {
        background: none;
        border: none;
        border-bottom: 1px solid #c7d1d6;
        height: 40px;
        font-size: 14px;
        line-height: 26px;
    }

    .book-textarea {
        background: url("../assets/images/icon_comment.png") no-repeat top left;
        padding-left: 40px;
        height: 125px;
    }

    .input-name {
        background: url("../assets/images/icon_name.png") no-repeat center left;
    }

    .input-guests {
        background: url("../assets/images/icon_guest.png") no-repeat center left;
    }

    .input-time {
        background: url("../assets/images/icon_time.png") no-repeat center left;
    }

    .input-date {
        background: url("../assets/images/icon_calander.png") no-repeat center left;
    }

    .input-email {
        background: url("../assets/images/icon_mail.png") no-repeat center left;
    }

    .input-phone {
        background: url("../assets/images/icon_smart.png") no-repeat center left;
    }

    .btn-explore {
        background: #fea100;
        color: white;
        font-size: 14px;
        font-weight: bold;
        height: 50px;
        text-transform: uppercase;
        width: 170px;
    }

</style>