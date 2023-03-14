<template>
  <BackGround />
  <div class="index">
    <HeadNav />
    <MainInfo class="focusInfo focusInfo_reactive" />
  </div>
</template>


<script setup>

import BackGround from '@/components/BackGround.vue';
import HeadNav from '@/components/HeadNav.vue'
import MainInfo from '@/components/MainInfo.vue'
</script>

<style>
.index {
  position: relative;
  width: 100%;
  height: 100%;

}

.focusInfo {
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  ;
}
</style>
