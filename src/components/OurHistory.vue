<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class OurHistory extends Vue {
}
</script>

<template>
    <section class="container pt-5">
        <h3 class="text-center speciality-title">Our History</h3>
        <p class="text-center col-8 offset-2 mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.</p>
        <iframe class="col-10 offset-1 mt-5 p-0" width="100%" height="446" src="https://www.youtube.com/embed/TW2p93YfLdE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
</template>

<style scoped>
    iframe {
        background: black;
    }
</style>