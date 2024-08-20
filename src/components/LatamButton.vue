<script setup>
defineProps(['href', 'content'])
</script>
<template>
  <a
    className="bg-primary-color
    rounded-3xl
    text-white
    block
    h-fit
    p-4
    w-fit
    no-underline
    shadow-md"
    v-bind:href="href"
  >
    {{ content }}
  </a>
</template>
