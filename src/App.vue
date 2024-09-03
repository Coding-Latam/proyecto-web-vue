<script setup lang="ts">
import LatamFaqs from './components/LatamFaqs.vue'
import LatamNav from './components/LatamNav.vue'
import LatamHero from './components/LatamHero.vue'
</script>

<template>
  <main>
    <LatamNav />
    <LatamHero />
    <LatamFaq question="test pregunta" answer="test respuesta" />
    <LatamFaqs />
  </main>
</template>
