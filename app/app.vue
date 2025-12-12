<template>
  <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  script: [
    { src: 'https://telegram.org/js/telegram-web-app.js',
      defer: true }
  ]
})
</script>
