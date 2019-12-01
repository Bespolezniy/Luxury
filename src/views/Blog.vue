<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FooterBlock from '@/components/FooterBlock.vue';
import PostsBlock from '@/components/PostsBlock.vue';
import BlogFilter from '@/components/BlogFilter.vue';

@Component({
  components: {
    BlogFilter,
    PostsBlock,
    FooterBlock,
  },
})

export default class Blog extends Vue {}
</script>

<template>
    <main class="blog mt-3">
        <div class="blog-title-block container-fluid d-flex justify-content-center align-items-center">
            <h1 class="text-center text-white block-title">Blog</h1>
        </div>
        <div class="container">
          <BlogFilter class="col-3 float-right"/>
          <PostsBlock/>
        </div>
        <FooterBlock/>
    </main>
</template>

<style scoped>
.blog {
  position: relative;
}

.blog-title-block {
  background: black url('../assets/images/blockback.jpg') no-repeat center center;
  background-size: 100%;
  font-family: 'PlayFairDisplay', sans-serif;
  min-height: 250px;
}

.block-title {
  position: relative;
}

.block-title::after {
  background: url('../assets/images/right_leaf.png') no-repeat center center;
  content: "";
  height: 25px;
  position: absolute;
  top: 15px;
  width: 45px;
}

.block-title::before {
  background: url('../assets/images/left_leaf.png') no-repeat center center;
  content: "";
  left: -45px;
  height: 25px;
  position: absolute;
  top: 15px;
  width: 45px;
}
</style>