<script setup lang="ts">
  const showLogo = ref<boolean>(false)
  onMounted(() => {
    showLogo.value = true
  })
</script>

<template>
  <transition
    enter-active-class="transition-all duration-1000 ease-out"
    enter-from-class="opacity-0 scale-75"
    enter-to-class="opacity-100 scale-100">
    <img v-if="showLogo" key="logo" src="/image/logo.png" alt="logo" class="w-[400px] max-w-full">
  </transition>
</template>