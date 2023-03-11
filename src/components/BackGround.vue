<script setup>
import {index} from '@/store/index.js'
const indexStore = index()

</script>


<template>
    <div class="cover">
        <img :src="indexStore.bgURL" alt="" class="bg">
        <div class="gray"></div>
    </div>
</template>

<style scoped>
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition:0.25s;
  z-index: -1;
}
.cover .bg {
    transform: scale(1);
    filter: blur(0);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1.5s ease 0s;
    backface-visibility: hidden;
  }

.gray {
    opacity: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
        rgba(0, 0, 0, 0) 0,
        rgba(0, 0, 0, 0.5) 100%
      ),
      radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);

    transition: 1.5s;
  }
</style>