<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PostsBlock extends Vue {
}
</script>

<template>
    <section class="container pb-5 mt-5">
        <div :key="index" v-for="(item, index) in 4" class="pb-5 mb-3">
        <div class="col-9">
            <img src="../assets/images/blockback.jpg" alt="post img" width="100%" height="400" style="background: black;">
            <div class="mt-3">
                <div class="d-flex align-items-center">
                    <p class="post-date d-flex flex-column text-white justify-content-center align-items-center"><span class="post-day">08</span>nov-06</p>
                    <h4 class="post-title ml-5">Aenean pharetra lectus utsto.</h4>
                </div>
                <p class="col-12 post-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived.</p>
                <div class="mt-4 pl-3 d-flex align-items-center offset-2 border-top border-bottom">
                    <router-link class="btn btn-lg btn-warning text-white btn-read-post" to="/">Read more</router-link>
                    <button class="offset-3 like"></button><span class="badge badge-pill badge-danger ml-1">65</span>
                    <button class="btn-share offset-1">Share</button>
                    <ul class="d-flex list-unstyled mt-3">
                        <li><a href="#" class="d-flex media-item ml-1 border">Facebook</a></li>
                        <li><a href="#" class="d-flex media-item item-twitter ml-1 border">Twitter</a></li>
                        <li><a href="#" class="d-flex media-item item-google ml-1 border">Google</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
    </section>
</template>

<style scoped>
.post-date {
    background: #fea100;
    font-size: 12px;
    font-weight: bold;
    height: 62px;
    line-height: 22px;
    position: relative;
    text-transform: uppercase;
    width: 86px;
}

.post-day {
    font-size: 30px;
}

.post-day::before {
  border: 1px solid white;
  border-radius: 3px;
  content: "";
  height: 54px;
  position: absolute;
  right: 3.5px;
  top: 4px;
  width: 78px;
}

.post-title {
    font-family: 'PlayFairDisplay', sans-serif;
    font-size: 35px;
    line-height: 22px;
}

.post-text {
    color: gray;
    font-size: 14px;
    line-height: 26px;
    padding-left: 135px;
}

.btn-read-post {
    background: #fea100;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
}

.media-item {
    background: url("../assets/images/icon_facebook-black.png") no-repeat center center;
    border-radius: 50%;
    color: transparent;
    font-size: 1px;
    height: 52px;
    width: 52px;
}

.item-twitter {
    background: url("../assets/images/icon_twitter-black.png") no-repeat center center;
}

.item-google {
    background: url("../assets/images/icon_google-black.png") no-repeat center center;
}

.btn-share {
    background: transparent url("../assets/images/icon_share.png") no-repeat center center;;
    border: none;
    color: transparent;
    height: 25px;
}

.pagination a {
    color: #fea100;
}

.like {
    background: transparent url("../assets/images/Like-25.png") no-repeat center center;
    border: none;
    height: 20px;
    width: 23px;
}

</style>