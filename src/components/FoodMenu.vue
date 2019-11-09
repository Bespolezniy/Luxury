<template>
    <section class="container pb-5">
        <h2 class="text-center title-food mb-4">FoodMenu</h2>

        <div class="row w-700 d-flex justify-content-center">
            <ul class="list-unstyled d-flex justify-content-between">
                <li><button class="menu-btn d-flex flex-column justify-content-end align-items-center">All</button></li>
                <li><button class="menu-btn d-flex flex-column justify-content-end align-items-center btn-breakfast">Breakfast</button></li>
                <li><button class="menu-btn d-flex flex-column justify-content-end align-items-center btn-lunch">Lunch</button></li>
                <li><button class="menu-btn d-flex flex-column justify-content-end align-items-center btn-snacks">Snacks</button></li>
                <li><button class="menu-btn d-flex flex-column justify-content-end align-items-center btn-pizza">Pizza</button></li>
                <li><button class="menu-btn d-flex flex-column justify-content-end align-items-center btn-soups">Soups</button></li>
                <li><button class="menu-btn d-flex flex-column justify-content-end align-items-center btn-dinner">Dinner</button></li>
            </ul>
        </div>

        <table class="row col-12 table-block pt-5">

            <tr class="d-flex col-12">
                <td class="d-flex justify-content-between align-items-center col-6 pl-0 mr-4">
                    <div class="cell d-flex flex-column justify-content-end">
                        <b class="cell-title">Ultimate organic fruit salad</b>
                        <p class="cell-text">survived not only five centuries but the leap</p>
                    </div>
                    <span class="cell-price mr-3"><sup>$</sup>50.00</span>
                </td>
                <td class="d-flex justify-content-between align-items-center col-6 pl-0">
                    <div class="cell d-flex flex-column justify-content-end">
                        <b class="cell-title">Ultimate organic fruit salad</b>
                        <p class="cell-text">survived not only five centuries but the leap</p>
                    </div>
                    <span class="cell-price mr-3"><sup>$</sup>50.00</span>
                </td>
            </tr>
            <tr class="d-flex col-12">
                <td class="d-flex justify-content-between align-items-center col-6 pl-0 mr-4">
                    <div class="cell d-flex flex-column justify-content-end">
                        <b class="cell-title">Plain pancakes</b>
                        <p class="cell-text">Donec eget augue at diam euismod viverra</p>
                    </div>
                    <span class="cell-price mr-3"><sup>$</sup>68.00</span>
                </td>
                <td class="d-flex justify-content-between align-items-center col-6 pl-0">
                    <div class="cell d-flex flex-column justify-content-end">
                        <b class="cell-title">Plain pancakes</b>
                        <p class="cell-text">Donec eget augue at diam euismod viverra</p>
                    </div>
                    <span class="cell-price mr-3"><sup>$</sup>68.00</span>
                </td>
            </tr>
            <tr class="d-flex col-12">
                <td class="d-flex justify-content-between align-items-center col-6 pl-0 mr-4">
                    <div class="cell d-flex flex-column justify-content-end">
                        <b class="cell-title">Toasted jam</b>
                        <p class="cell-text">Phasellus a ex accumsan, sollicitudin</p>
                    </div>
                    <span class="cell-price mr-3"><sup>$</sup>22.00</span>
                </td>
                <td class="d-flex justify-content-between align-items-center col-6 pl-0">
                    <div class="cell d-flex flex-column justify-content-end">
                        <b class="cell-title">Toasted jam</b>
                        <p class="cell-text">Phasellus a ex accumsan, sollicitudin</p>
                    </div>
                    <span class="cell-price mr-3"><sup>$</sup>22.00</span>
                </td>
            </tr>
            <tr class="d-flex col-12">
                <td class="d-flex justify-content-between align-items-center col-6 pl-0 mr-4 last-item">
                    <div class="cell d-flex flex-column justify-content-end">
                        <b class="cell-title">Toasted jam</b>
                        <p class="cell-text">Phasellus a ex accumsan, sollicitudin</p>
                    </div>
                    <span class="cell-price mr-3"><sup>$</sup>39.00</span>
                </td>
                <td class="d-flex justify-content-between align-items-center col-6 pl-0 last-item">
                    <div class="cell d-flex flex-column justify-content-end">
                        <b class="cell-title">Toasted jam</b>
                        <p class="cell-text">Phasellus a ex accumsan, sollicitudin</p>
                    </div>
                    <span class="cell-price mr-3"><sup>$</sup>39.00</span>
                </td>
            </tr>

        </table>
        <div class="d-flex justify-content-center align-items-center pt-5">
            <router-link class="btn btn-long btn-warning btn-explore" to="/about">Explore food menu</router-link>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FoodMenu extends Vue {

}
</script>

<style>
    .title-food {
        font-family: 'PlayfairDisplay';
    }

    .menu-btn {
        background: white url("../assets/images/icon_all.png") no-repeat center top;
        border: none;
        box-shadow: none;
        font-family: 'PlayfairDisplay';
        font-size: 14px;
        font-weight: bold;
        height: 45px;
        line-height: 14px;
        width: 90px;
    }

    .btn-breakfast {
        background: white url("../assets/images/icon_breakfast.png") no-repeat center top;
    }

    .btn-lunch {
        background: white url("../assets/images/icon_lunch.png") no-repeat center top;
    }

    .btn-snacks {
        background: white url("../assets/images/icon_snacks.png") no-repeat center top;
    }

    .btn-pizza {
        background: white url("../assets/images/icon_pizza.png") no-repeat center top;
    }

    .btn-soups {
        background: white url("../assets/images/icon_soups.png") no-repeat center top;
    }

    .btn-dinner {
        background: white url("../assets/images/icon_binner.png") no-repeat center top;
    }

    .cell {
        min-height: 82px;
    }

    .table-block td {
        border-bottom: 1px solid #eeeeee;
    }

    .table-block .last-item {
        border-bottom: none;
    }

    .cell-title {
        font-size: 16px;
        line-height: 17px;
        text-transform: uppercase;
    }

    .cell-text {
        color: grey;
        font-size: 14px;
        line-height: 26px;
    }

    .cell-price {
        color: #fea100;
        font-size: 26px;
        font-weight: bold;
    }

    .btn-explore {
        color: white;
        background: #fea100;
        font-size: 14px;
        font-weight: bold;
        line-height: 30px;
        text-transform: uppercase;
        width: 200px;
    }
</style>