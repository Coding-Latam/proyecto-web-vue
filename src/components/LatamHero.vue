<script setup>
import LatamButton from './LatamButton.vue'
import heroImage from '../assets/images/hero.svg'
import LatamMarquee from './LatamMarquee.vue'
</script>

<template>
  <section class="flex flex-col gap-20 py-14 px-0">
    <div class="container flex flex-wrap items-center gap-[30px] md:flex-nowrap">
      <div class="left flex flex-col gap-5">
        <h1 class="max-w-[405px] md:text-[40px]">A digital agency specializing on <span>mobile design</span></h1>
        <p class="text-[22px] leading-[34px] mb[30px] md:text-[18px]">
          We are an award winning design agency that strongly believes in the power of creative ideas.
        </p>
        <LatamButton content="Get started" href="/get-started" />
      </div>
      <div class="right">
        <img :src="heroImage" alt="Hero" loading="eager" />
      </div>
    </div>
    <span class="self-center text-paragraph-color">Trusted by over 2K+ clients across the world</span>
    <div class="container flex overflow-x-hidden">
      <LatamMarquee />
      <LatamMarquee />
    </div>
  </section>
</template>
