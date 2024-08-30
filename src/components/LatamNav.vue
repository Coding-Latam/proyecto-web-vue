<script setup lang="ts">
import { ref } from 'vue'
import { navItems } from '../constants.ts'
import logo from '/assets/images/logo.png'

const isOpen = ref<boolean>(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="py-5">
    <div class="container flex justify-between mx-auto max-w-7xl px-3">
      <div class="logo">
        <img :src="logo" alt="Logo image" />
      </div>
      <button @click="toggleMenu" v-if="!isOpen" class="md:hidden">Menu</button>
      <ul
        :class="{ flex: isOpen, hidden: !isOpen }"
        class="absolute inset-0 flex-col items-center gap-10 w-full pt-12 list-none bg-primary-color md:static md:flex md:flex-row md:w-fit md:pt-0 md:bg-transparent"
      >
        <li v-for="item in navItems" :key="item.id">
          <a class="text-white md:text-paragraph-color" :href="item.href"> {{ item.title }} </a>
        </li>
        <button @click="toggleMenu" v-if="isOpen" class="font-semibold absolute right-5 top-5 md:hidden">Close</button>
      </ul>
    </div>
  </nav>
</template>
