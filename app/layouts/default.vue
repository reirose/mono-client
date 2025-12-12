<template>
  <MonoHeader class="mt=[2em] mb-0 px-0" />

  <UContainer class="min-h-screen flex flex-col pb-[calc(env(safe-area-inset-bottom)+12px)]">
    <!-- main scrollable content -->
    <UMain class="flex-1">
      <UContainer class="py-4">
        <slot />
      </UContainer>
    </UMain>

    <!-- footer pinned to bottom -->
    <MonoFooter class="mb-[2em] mt-0 px-0" />
  </UContainer>
</template>

<script setup lang="ts">
import MonoFooter from '~/components/MonoFooter.vue'
const activeTab = ref<'packs' | 'collection' | 'profile'>('packs')

</script>

<style>
  
</style>
