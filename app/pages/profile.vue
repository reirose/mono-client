<script setup lang="ts">
  definePageMeta({
  middleware: 'tg-auth-client'
})
var tg
onMounted(() => {
  const tg = window.Telegram?.WebApp
  console.log('tg exists:', !!tg)

  // если страницу открыли не из Telegram
  if (!tg) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Not opened in Telegram'
    })
  }

  tg.ready()

  const user = tg.initDataUnsafe?.user

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'No Telegram user'
    })
  }
}
)

// отправляем initData на сервер для проверки
await $fetch('/api/auth/telegram', {
  method: 'POST',
  body: {
    initData: tg.initData
  }
})
</script>

<template>
  <div class="p-6 space-y-2">
    <h1 class="text-xl font-bold">Профиль</h1>

    <div>ID: {{ user.id }}</div>
    <div>Username: {{ user.username }}</div>
    <div>Имя: {{ user.first_name }}</div>
  </div>
</template>
