<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BlogFilter extends Vue {
}
</script>

<template>
    <div>
        <h3 class="filter-title mb-3">Category</h3>
        <ul class="list-unstyled nav flex-column mb-4 pb-4">
            <li><a href="#" class="filter-link">All foods</a></li>
            <li><a href="#" class="filter-link">Vegitabales</a></li>
            <li><a href="#" class="filter-link">Delicious food</a></li>
            <li><a href="#" class="filter-link">Special dishes</a></li>
            <li><a href="#" class="filter-link">Juices</a></li>
        </ul>
        <div class="mb-4 pb-4">
            <h3 class="filter-title mb-3">Recent Posts</h3>
            <div class="media mb-4">
                <img class="mt-1" src="../assets/images/icon_arrow.png" alt="media-img" width="70" height="70px">
                <div class="media-body ml-3 d-flex flex-column">
                    <span>08-nov-2016</span>
                    <b>Suspendisse eu dui libero malesuada</b>
                </div>
            </div>
            <div class="media mb-4">
                <img class="mt-1" src="../assets/images/icon_arrow.png" alt="media-img" width="70" height="70px">
                <div class="media-body ml-3 d-flex flex-column">
                    <span>08-nov-2016</span>
                    <b>Suspendisse eu dui libero malesuada</b>
                </div>
            </div>
            <div class="media mb-4">
                <img class="mt-1" src="../assets/images/icon_arrow.png" alt="media-img" width="70" height="70px">
                <div class="media-body ml-3 d-flex flex-column">
                    <span>08-nov-2016</span>
                    <b>Suspendisse eu dui libero malesuada</b>
                </div>
            </div>
        </div>
        <div class="mb-4 pb-4">
            <h3 class="filter-title mb-3">Archive</h3>
            <table class="w-100 table-archive">
                <tr>
                    <td><b class="d-flex justify-content-between mb-3">January<span>(15)</span></b></td>
                </tr>
                <tr>
                    <td><b class="d-flex justify-content-between mb-3">February<span>(08)</span></b></td>
                </tr>
                <tr>
                    <td><b class="d-flex justify-content-between mb-3">March<span>(09)</span></b></td>
                </tr>
                <tr>
                    <td><b class="d-flex justify-content-between mb-3">April<span>(55)</span></b></td>
                </tr>
                <tr>
                    <td><b class="d-flex justify-content-between mb-3">May<span>(36)</span></b></td>
                </tr>
            </table>
        </div>
        <div>
            <h3>Tags</h3>
            <span class="badge badge-primary tag mr-1">Juice</span>
            <span class="badge badge-primary tag mr-1">Vegitabales</span>
            <span class="badge badge-primary tag mr-1">Special dishes</span>
            <span class="badge badge-primary tag mr-1">Lunch</span>
        </div>
    </div>
</template>

<style scoped>
.filter-title {
    font-family: 'PlayFairDisplay', sans-serif;
    font-size: 26px;
}

.filter-link {
    color: black;
    font-size: 14px;
    font-weight: bold;
    line-height: 38px;
    padding-left: 35px;
    position: relative;
    text-transform: uppercase;
}

.filter-link::before {
    background: #ffe9f1 url('../assets/images/icon_arrow.png') no-repeat 9px center;
    border-radius: 50%;
    content: '';
    height: 25px;
    left: 0px;
    position: absolute;
    top: -3px;
    width: 25px;
}

.media b {
    font-family: 'PlayFairDisplay', sans-serif;
}

.table-archive {
    text-transform: uppercase;
}

.tag {
    background: #ffeac5;
    color: #d38a0c;
    font-size: 14px;
    text-transform: uppercase;
}
</style>