<script setup lang="ts">
import LatamButton from './components/LatamButton.vue'
import LatamFaq from './components/LatamFaq.vue'
import LatamFaqs from './components/LatamFaqs.vue'
import LatamNav from './components/LatamNav.vue'
import LatamHero from './components/LatamHero.vue'
</script>

<template>
  <main>
    <LatamNav />
    <LatamHero />
    <h1>proyecto web</h1>
    <LatamButton href="/" content="Click me" />
    <LatamFaq question="test pregunta" answer="test respuesta" />
    <LatamFaqs />
  </main>
</template>
