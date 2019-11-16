<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import foodMenu from '../modules/foodMenu';

@Component
export default class FoodMenu extends Vue {
    get keyWord(): string { return this.$store.getters.getFilterKeyWord; }
    get foodMenu(): [] { return this.$store.getters.getFoodMenu; }
    private changeKeyWord(word: string) { return this.$store.dispatch('changeFilter', word); }
    get sortedList() {
        let keyWord = this.keyWord;
        let arr: any = [];
        this.foodMenu.forEach((element: []) => {
            arr.push(element.filter((item: any) => {

               if (item.type.includes(keyWord) || keyWord == 'all') {
                    return true;
               } else {
                   return false;
               }

            }));
            });

        return arr;
    }
} 
</script>

<template>
    <section class="container pb-5" v-if="foodMenu">
        <h2 class="text-center title-food mb-4">FoodMenu</h2>

        <div class="row w-700 d-flex justify-content-center">
            <ul class="list-unstyled d-flex justify-content-between">
                <li><button v-on:click="changeKeyWord('all')" class="menu-btn d-flex flex-column justify-content-end align-items-center">All</button></li>
                <li><button v-on:click="changeKeyWord('breakfast')" class="menu-btn d-flex flex-column justify-content-end align-items-center btn-breakfast">Breakfast</button></li>
                <li><button v-on:click="changeKeyWord('lunch')" class="menu-btn d-flex flex-column justify-content-end align-items-center btn-lunch">Lunch</button></li>
                <li><button v-on:click="changeKeyWord('snacks')" class="menu-btn d-flex flex-column justify-content-end align-items-center btn-snacks">Snacks</button></li>
                <li><button v-on:click="changeKeyWord('pizza')" class="menu-btn d-flex flex-column justify-content-end align-items-center btn-pizza">Pizza</button></li>
                <li><button v-on:click="changeKeyWord('soups')" class="menu-btn d-flex flex-column justify-content-end align-items-center btn-soups">Soups</button></li>
                <li><button v-on:click="changeKeyWord('dinner')" class="menu-btn d-flex flex-column justify-content-end align-items-center btn-dinner">Dinner</button></li>
            </ul>
        </div>

        <table class="row col-12 table-block pt-5">

            <tr class="d-flex col-12" :key="index" v-for="(pair, index) in sortedList">
                    <td class="d-flex justify-content-between align-items-center col-6 pl-0 mr-4" :key="item.id" v-for="item in pair" >       
                    <div class="cell d-flex flex-column justify-content-end">
                        <b class="cell-title">{{item.title}}</b>
                        <p class="cell-text">{{item.description}}</p>
                    </div>
                    <span class="cell-price mr-3"><sup>$</sup>{{item.price}}</span>
                </td>
            </tr>

        </table>
        <div class="d-flex justify-content-center align-items-center pt-5">
            <router-link class="btn btn-long btn-warning btn-explore" to="/about">Explore food menu</router-link>
        </div>
    </section>
</template>

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
        position: absolute;
        left: 80%;
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