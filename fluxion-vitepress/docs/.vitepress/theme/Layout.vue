<script setup>
import DefaultTheme from 'vitepress/theme'
import Logo from './components/Logo.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <Logo />
    </template>
  </Layout>
</template>
