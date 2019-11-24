<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ReviewsBlock extends Vue {
    get reviews(): [] {
       return this.$store.getters.getReviews;
    }
    get currentReviewIndex(): number {
        return this.$store.getters.getCurrentReviewsIndex;
    }
    private changeReview(action: string) {
        if (action === 'next' && this.reviews.length - 1 === this.currentReviewIndex) {
            return;
        }
        if (action === 'preview' && 0 === this.currentReviewIndex) {
            return;
        }
        return this.$store.dispatch('changeReview', action);
    }
}
</script>

<template>
    <section id="Reviews" class="reviews-block mt-5 p-5 d-flex align-items-center flex-column">
        <h5 class="text-center text-white pt-3 mb-4 review-title">Happy Clients</h5>
        <p class="text-white text-review text-center">{{reviews[currentReviewIndex].text}}</p>
        <img class="author-img" v-if="currentReviewIndex === 0" src="../assets/images/author1.png" alt="Author" width="75" height="75">
        <img class="author-img" v-if="currentReviewIndex === 1" src="../assets/images/person-2.jpg" alt="Author" width="75" height="75">
        <img class="author-img" v-if="currentReviewIndex === 2" src="../assets/images/person-3.jpg" alt="Author" width="75" height="75">
        <b class="text-white review-author">{{reviews[currentReviewIndex].name}}</b>
        <ul class="review-stars pl-0">
            <li><img :key="index" v-for="(star, index) in reviews[currentReviewIndex].stars" src="../assets/images/icon_star.png" alt="Star" width="23" height="13"></li>
        </ul>
        <button @click="changeReview('next')" class="btn-slider btn-next">Next</button>
        <button @click="changeReview('preview')" class="btn-slider">Preview</button>
    </section>
</template>

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

    .author-img {
        border-radius: 50%;
    }
</style>