<script setup>
import { ref } from 'vue'

const isVisible = ref(true)

const closePopup = () => {
  isVisible.value = false
}
</script>

<template>
  <transition name="slide-fade">
    <div v-if="isVisible" class="bmc-container">
      <div class="bmc-card">
        <button class="close-btn" @click="closePopup" aria-label="Close">×</button>
        <div class="bmc-content">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="coffee-icon">
              <path fill="currentColor" d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
            </svg>
          </div>
          <div class="text-content">
            <h3 class="bmc-title">Support Fluxion Engine</h3>
            <p class="bmc-description">
              If you find this project useful, please consider supporting its development.
            </p>
            <a href="https://buymeacoffee.com/fluxionengine" target="_blank" rel="noopener noreferrer" class="bmc-button">
              Support Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.bmc-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
  font-family: var(--vp-font-family-base, sans-serif);
}

.bmc-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 20px; /* Increased padding */
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15); /* More prominent shadow */
  width: 320px; /* Slightly wider */
  position: relative;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  font-size: 20px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  padding: 4px;
  line-height: 1;
  border-radius: 50%; /* Circular hover */
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background-color: var(--vp-c-bg-mute); /* Subtle hover background */
  color: var(--vp-c-text-1);
}

.bmc-content {
  display: flex;
  flex-direction: column; /* Stack vertically for a more formal look */
  gap: 16px;
  align-items: flex-start; /* Align specifically to start */
}

.icon-wrapper {
  background: var(--vp-c-brand-soft); /* Use soft brand color */
  width: 40px;
  height: 40px;
  border-radius: 8px; /* Slightly rounded squares are more formal */
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-brand-1);
}

.coffee-icon {
  width: 24px;
  height: 24px;
}

.text-content {
  flex: 1;
  width: 100%;
}

.bmc-title {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}

.bmc-description {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.bmc-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-bg); /* Contrast text */
  padding: 8px 16px;
  border-radius: 6px; /* consistent border radius */
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.2s;
  width: 100%; /* Full width button */
  text-align: center;
}

.bmc-button:hover {
  background-color: var(--vp-c-brand-2);
}

/* Slide Fade Animation */
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
