<script setup>
import heroImage from '/assets/images/hero.svg'
import LatamMarquee from './LatamMarquee.vue'
import 'latamcomponents/latam-button'
</script>

<template>
  <section class="flex flex-col gap-20 py-14 px-0">
    <div class="container flex flex-wrap items-center gap-[30px] md:flex-nowrap mx-auto max-w-7xl px-3">
      <div class="left flex flex-col gap-5">
        <h1 class="max-w-[405px] text-[42px] md:text-[40px]">
          A digital agency specializing on <span>mobile design</span>
        </h1>
        <p class="text-[22px] leading-[34px] mb[30px] md:text-[18px]">
          We are an award winning design agency that strongly believes in the power of creative ideas.
        </p>
        <latam-button label="Get started" href="/get-started" />
      </div>
      <div class="right">
        <img :src="heroImage" alt="Hero" loading="eager" />
      </div>
    </div>
    <span class="self-center text-paragraph-color">Trusted by over 2K+ clients across the world</span>
    <div class="container flex overflow-x-hidden mx-auto max-w-7xl">
      <LatamMarquee />
      <LatamMarquee />
    </div>
  </section>
</template>
