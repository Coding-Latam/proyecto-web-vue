<script setup>
import { customerLogos } from '../constants.ts'
const logoSrc = '/assets/images/logos/'
</script>

<template>
  <ul class="flex items-center gap-14 pl-14 ticker">
    <li v-for="logo in customerLogos" :key="logo.id">
      <img :src="`${logoSrc}${logo}.png`" :alt="logo" class="min-w-28" />
    </li>
  </ul>
</template>

<style scoped>
.ticker {
  animation: marquee 20s infinite linear;
}
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
