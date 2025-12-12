<template />
<script setup lang="ts">
definePageMeta({
  layout: 'default',
  redirect: '/profile',
  middleware: 'tg-auth-client'
})
</script>