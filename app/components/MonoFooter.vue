<template>
  <UFooter class="sticky bottom-0 left-0 right-0 w-full z-20 backdrop-blur">
    <UTabs
      v-model="currentPath"
      :items="tabs"
      variant="pill"
      size="xl"
      :ui="{ trigger: 'grow' }"
      class="gap-0 w-full"
    />
  </UFooter>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const tabs = [
  { label: 'Packs', icon: 'i-lucide-arrow-big-up-dash', value: '/packs' },
  { label: 'Collection', icon: 'i-lucide-wallet-cards', value: '/collection' },
  { label: 'Profile', icon: 'i-lucide-circle-user', value: '/profile' },
] satisfies TabsItem[]

const allowedPaths = tabs.map(t => t.value)
const currentPath = ref('/packs')
const router = useRouter()
const route = useRoute()

// show tab active accoding to the route
watch(() => route.path, (path) => {
  currentPath.value = allowedPaths.includes(path) ? path : tabs[0]?.value || "/profile"
}, { immediate: true })

// tab changes => route changes
watch(currentPath, (path) => {
  if (path && path !== route.path) router.push(path)
})
</script>
