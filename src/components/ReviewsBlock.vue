<template>
    <section class="reviews-block mt-5 p-5 d-flex align-items-center flex-column">
        <h5 class="text-center text-white pt-3 mb-4 review-title">Happy Clients</h5>
        <p class="text-white text-review text-center">Many desktop publishing packages and web page editors now use Lorem Ipsum as 
            their default model text, and a search for 'lorem ipsum' will uncover many 
            web sites still in their infancy. Various versions have evolved over the years, 
            sometimes by accident, sometimes on purpose. </p>
        <img src="../assets/images/author1.png" alt="Author">
        <b class="text-white review-author">Dr. Prabakaran John</b>
        <ul class="review-stars pl-0">
            <li><img src="../assets/images/icon_star.png" alt="Star"></li>
        </ul>
        <button class="btn-slider btn-next">Next</button>
        <button class="btn-slider">Preview</button>
    </section>
</template>
<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ReviewsBlock extends Vue {
}
</script>
<style scoped>
    .reviews-block {
        background: url("../assets/images/background.png") no-repeat center center;
        position: relative;
    }

    .review-title {
        font-family: 'PlayfairDisplay', sans-serif;
        font-size: 35px;
    }
    
    .text-review {
        position: relative;
        width: 745px;
    }

    .text-review::before,
    .text-review::after {
        background: url("../assets/images/quote_icon.png") no-repeat center center;
        content: "";
        height: 20px;
        left: -40px;
        position: absolute;
        top: -30px;
        width: 20px;
    }

    .text-review::after {
        left: 740px;
        top: 80px;
        transform: rotate(180deg);
    }

    .review-author {
        text-transform: uppercase;
    }

    .review-stars {
        list-style: none;
    }

    .btn-slider {
        background: url("../assets/images/left_arrow.png");
        border: none;
        color: transparent;
        font-size: 1px;
        height: 45px;
        left: 18%;
        position: absolute;
        top: 35%;
        width: 25px;
    }

    .btn-next {
        left: 80%;
        transform: rotate(180deg);
    }
</style>