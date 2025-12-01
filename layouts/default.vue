<template>
  <div class="min-h-screen flex flex-col">

    <!-- Контент -->
    <UContainer class="flex-1 pb-20">
      <slot />
    </UContainer>

    <!-- Нижняя навигация -->
    <div class="fixed bottom-0 left-0 right-0 border-t bg-white dark:bg-gray-900">
      <UHorizontalNavigation
        :links="navLinks"
        class="justify-around py-2"
      />
    </div>

  </div>
</template>

<script setup>
const navLinks = [
  { label: 'Профиль', to: '/' },
  { label: 'Паки', to: '/packs' },
  { label: 'Карточки', to: '/cards' }
]
</script>
