<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<template>
  <div class="logo-wrapper">
    <img src="/logo.png" alt="Fluxion Logo" class="logo-image" />
    <div class="brand-text">
      <span class="brand-top">Fluxion</span>
      <span class="brand-bottom">Engine</span>
    </div>
  </div>
</template>

<style scoped>
.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.logo-wrapper:hover {
  opacity: 0.9;
}

.logo-image {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  justify-content: center;
}

.brand-top {
  font-weight: 800;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.brand-bottom {
  font-weight: 400;
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin-top: 1px;
}
</style>
