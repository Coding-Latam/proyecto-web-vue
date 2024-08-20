<script setup>
defineProps(['question', 'answer'])
</script>
<template>
  <div className="shadow-md cursor-pointer">
    <details className="p-5 bg-white rounded">
      <summary className="bg-white text-lg font-semibold marker:text-primary-color">
        {{ question }}
      </summary>
      <p>{{ answer }}</p>
    </details>
  </div>
</template>
