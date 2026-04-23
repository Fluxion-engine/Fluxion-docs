<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  cards: {
    type: Array,
    default: () => []
  },
  sectionTitle: { type: String, default: 'Why Fluxion?' }
})

const sectionRef = ref(null)
const activeIndex = ref(0)
const progress = ref(0)

const handleScroll = () => {
  if (!sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  const sectionHeight = sectionRef.value.offsetHeight
  const viewHeight = window.innerHeight

  // How far we've scrolled INTO the section
  const scrolled = -rect.top
  const totalScrollable = sectionHeight - viewHeight

  if (totalScrollable <= 0) return

  const raw = scrolled / totalScrollable
  progress.value = Math.min(1, Math.max(0, raw))

  // Determine active card based on progress
  const cardCount = props.cards.length
  const idx = Math.min(
    cardCount - 1,
    Math.floor(progress.value * cardCount)
  )
  activeIndex.value = idx
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const activeCard = computed(() => props.cards[activeIndex.value] || props.cards[0])
</script>

<template>
  <section ref="sectionRef" class="ssc-section">
    <div class="ssc-sticky-wrapper">
      <!-- LEFT: Sticky image panel -->
      <div class="ssc-left">
        <div class="ssc-image-wrap">
          <transition-group name="fade-image">
            <img
              v-for="(card, i) in cards"
              v-show="i === activeIndex"
              :key="i"
              :src="card.image"
              :alt="card.title"
              class="ssc-image absolute-image"
            />
          </transition-group>
          <div class="ssc-image-overlay" />
          <!-- Active card label overlay on image -->
          <transition name="fade">
            <div class="ssc-image-label" :key="activeIndex">
              <span class="ssc-label-number">{{ String(activeIndex + 1).padStart(2, '0') }}</span>
              <span class="ssc-label-title">{{ activeCard.title }}</span>
            </div>
          </transition>
          <!-- Progress dots -->
          <div class="ssc-dots">
            <span
              v-for="(card, i) in cards"
              :key="'dot-'+i"
              class="ssc-dot"
              :class="{ active: i === activeIndex }"
            />
          </div>
        </div>
      </div>

      <!-- RIGHT: Scrolling cards -->
      <div class="ssc-right">
        <div class="ssc-cards-header">
          <h2 class="ssc-section-title">{{ sectionTitle }}</h2>
        </div>
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="ssc-card"
          :class="{ 'is-active': i === activeIndex }"
          :style="{
            '--card-bg': card.bgColor,
            '--card-text': card.textColor,
          }"
        >
          <div class="ssc-card-inner">
            <div class="ssc-card-icon">{{ card.icon }}</div>
            <h3 class="ssc-card-title">{{ card.title }}</h3>
            <p class="ssc-card-desc">{{ card.description }}</p>
          </div>
          <div class="ssc-card-number">{{ String(i + 1).padStart(2, '0') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ssc-section {
  width: 100%;
  /* Tall section so scrolling happens through all cards */
  min-height: 300vh;
  position: relative;
}

.ssc-sticky-wrapper {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  position: sticky;
  top: 80px; /* below navbar */
  height: calc(100vh - 80px);
  overflow: hidden;
  padding: 2rem 2rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}

/* ── LEFT ── */
.ssc-left {
  flex: 0 0 42%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ssc-image-wrap {
  position: relative;
  width: 100%;
  height: 520px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(153, 209, 156, 0.15);
}

.ssc-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.ssc-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%);
}

.ssc-image-label {
  position: absolute;
  bottom: 60px;
  left: 24px;
  right: 24px;
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.ssc-label-number {
  font-size: 3rem;
  font-weight: 900;
  color: #99d19c;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  letter-spacing: -2px;
}

.ssc-label-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
}

.ssc-dots {
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
  gap: 8px;
}

.ssc-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  transition: background 0.3s, width 0.3s;
}

.ssc-dot.active {
  background: #99d19c;
  width: 24px;
  border-radius: 4px;
}

/* ── RIGHT ── */
.ssc-right {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  overflow: hidden;
}

.ssc-cards-header {
  margin-bottom: 0.5rem;
}

.ssc-section-title {
  font-size: 0.85rem !important;
  font-weight: 700 !important;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #99d19c;
  margin: 0 !important;
  border: none !important;
  padding: 0 !important;
}

.ssc-card {
  background: var(--card-bg, rgba(20, 20, 20, 0.7));
  color: var(--card-text, #ffffff);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition:
    transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.4s ease,
    opacity 0.4s ease;
  opacity: 0.45;
  transform: scale(0.97);
  cursor: default;
}

.ssc-card.is-active {
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(153, 209, 156, 0.25);
}

.ssc-card-inner {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.ssc-card-icon {
  font-size: 1.6rem;
  margin-bottom: 0.25rem;
}

.ssc-card-title {
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
}

.ssc-card-desc {
  font-size: 0.875rem;
  font-weight: 500;
  opacity: 0.8;
  margin: 0;
  line-height: 1.5;
}

.ssc-card-number {
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  font-size: 2rem;
  font-weight: 900;
  opacity: 0.1;
  letter-spacing: -2px;
  line-height: 1;
}

.absolute-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Fade transition for label */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Crossfade images */
.fade-image-enter-active,
.fade-image-leave-active {
  transition: opacity 0.5s ease;
}
.fade-image-enter-from,
.fade-image-leave-to {
  opacity: 0;
}

/* Mobile: stack vertically */
@media (max-width: 768px) {
  .ssc-section {
    min-height: auto;
  }

  .ssc-sticky-wrapper {
    flex-direction: column;
    position: static;
    height: auto;
    padding: 1rem;
  }

  .ssc-left {
    flex: none;
    width: 100%;
  }

  .ssc-image-wrap {
    height: 220px;
  }

  .ssc-right {
    height: auto;
    overflow: visible;
  }

  .ssc-card {
    opacity: 1;
    transform: none;
  }
}
</style>
