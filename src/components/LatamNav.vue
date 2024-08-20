<script setup lang="ts">
import { ref } from 'vue'
import { navItems } from '../constants.ts'
import logo from '../assets/images/logo.png'

const isOpen = ref<boolean>(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="py-5 px-0">
    <div class="container flex justify-between">
      <div class="logo">
        <img :src="logo" alt="Logo image" />
      </div>
      <button @click="toggleMenu" v-if="!isOpen" class="md:hidden">Menu</button>
      <ul :class="{ active: isOpen }" class="hidden md:flex gap-10 list-none">
        <li v-for="item in navItems" :key="item.id">
          <a class="text-white md:text-paragraph-color" :href="item.href"> {{ item.title }} </a>
        </li>
        <button @click="toggleMenu" v-if="isOpen" class="font-semibold absolute right-[10px] top-[20px] md:hidden">
          Close
        </button>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.active {
  @apply bg-primary-color;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  flex-direction: column;
  padding: 50px 0 20px;
  text-align: center;
  width: 100%;
}
</style>
