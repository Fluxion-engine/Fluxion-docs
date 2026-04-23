<script setup>
import DefaultTheme from 'vitepress/theme'
import Logo from './components/Logo.vue'
import BuyMeACoffee from './components/BuyMeACoffee.vue'
import AnimatedGradient from './components/AnimatedGradient.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <!-- Fixed full-page WebGL gradient background -->
  <div class="vp-page-gradient-bg">
    <AnimatedGradient />
  </div>
  <Layout>
    <template #nav-bar-title-before>
      <Logo />
    </template>
  </Layout>
  <BuyMeACoffee />
</template>
