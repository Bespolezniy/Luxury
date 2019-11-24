<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
});
</script>

<template>
    <footer class="container-fluid footer-block pb-4">
        <div class="container d-flex pt-5">
            <div class="col-3 mt-3">
                <h4 class="text-white footer-title">Navigation</h4>
                <ul class="footer-nav pl-0 mt-3">
                    <li><router-link class="f-nav-item" to="/">Home</router-link></li> 
                    <li><router-link class="f-nav-item" to="/">About us</router-link></li>
                    <li><router-link class="f-nav-item" to="/menu">Menu</router-link></li>
                    <li><router-link class="f-nav-item" to="/reservation">Reservation</router-link></li>
                    <li><router-link class="f-nav-item" to="/">Recipe</router-link></li>
                    <li><router-link class="f-nav-item" to="/">Block</router-link></li>
                    <li><router-link class="f-nav-item" to="/about">Contact us</router-link></li>
                </ul>
            </div>
            <div class="col-6 mt-3">
            <form method="post" action="#">
                <h4 class="text-white footer-title">News letter</h4>
                    <label class="f-input-label mt-3" for="f-input">Enter your email address and subscribe daily newsletter</label>
                <div class="d-flex align-items-center mt-2">
                    <input id="f-input" class="f-input" type="email" placeholder="Email Address" required pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/">
                    <button class="ml-1 btn btn-long btn-warning btn-subscribe" type="submit">Subscribe</button>
                </div>
            </form>
            <ul class="footer-nav pl-0 mt-4 d-flex">
                <li><a href="#" class="d-flex media-item ml-1">Facebook</a></li>
                <li><a href="#" class="d-flex media-item item-twitter ml-1">Twitter</a></li>
                <li><a href="#" class="d-flex media-item item-google ml-1">Google</a></li>
            </ul>
            </div>
        <div class="col-3 mt-3">
            <h4 class="text-white footer-title">Our app avilable</h4>
            <ul class="footer-nav pl-0 mt-4">
                <li class="mb-2"><a class="get-app-link d-flex text-white justify-content-center align-items-center" href="#">
                        <p class="text-link pl-3">
                            <span class="text-link-small">Avilable on the</span>
                            App store
                        </p>
                    </a>
                </li>
                <li><a class="get-app-link d-flex text-white justify-content-center align-items-center get-google" href="#">
                        <p class="text-link pl-3">
                            <span class="text-link-small">Get it on</span>
                            Google play
                        </p>
                    </a>
                </li>
            </ul>
        </div>
        </div>
        <div class="text-white copyright text-center mt-5">
            <p>2016 ©  Luxury RestaurAnt, All rights reserved</p>
        </div>
    </footer>
</template>

<style scoped>
    .footer-block {
        background: #373844;
    }

    .footer-title {
        font-family: 'PlayfairDisplay', sans-serif;
        font-size: 22px;
        line-height: 24px;
    }

    .footer-nav {
        list-style: none;
    }

    .f-nav-item {
        color: #adb2b7;
        font-size: 14px;
        line-height: 30px;
    }

    .f-input-label {
        color: #adb2b7;
    }

    .f-input {
        background: transparent url("../assets/images/f-icon_email.png") no-repeat 15px center;
        border: 2px solid #adb2b7;
        border-radius: 3px;
        height: 47px;
        padding-left: 45px;
        width: 265px;
    }

    .btn-subscribe {
        background: #fea100;
        color: white;
        height: 47px;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        width: 150px;
    }

    .media-item {
        background: #3b5998 url("../assets/images/icon_facebook.png") no-repeat center center;
        border-radius: 50%;
        color: transparent;
        font-size: 1px;
        height: 52px;
        width: 52px;
    }

    .item-twitter {
        background: #55acee url("../assets/images/icon_twitter.png") no-repeat center center;
    }

    .item-google {
        background: #dd4b39 url("../assets/images/icon_google+.png") no-repeat center center;
    }

    .get-app-link {
        background: #52535e url("../assets/images/icon_apple.png") no-repeat 20px 11px;
        border-radius: 3px;
        height: 60px;
        width: 220px;
    }

    .text-link {
        font-size: 18px;
        line-height: 20px;
        padding-top: 7px;
        width: 115px;
    }

    .text-link-small {
        font-size: 11px;
    }

    .get-google {
        background: #52535e url("../assets/images/icon_google.png") no-repeat 28px 14px;
    }

</style>