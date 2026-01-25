---
layout: home

hero:
  name: Fluxion Engine
  text: Mathematical Animation Engine
  tagline: Create precise, beautiful videos programmatically with Python
  image:
    src: /logo.png
    alt: Fluxion Logo
  actions:
    - theme: brand
      text: Get Started
      link: /installation
    - theme: alt
      text: View Gallery
      link: /examples
    - theme: alt
      text: View on GitHub
      link: https://github.com/Fluxion-engine/fluxion

features:
  - icon: 📐
    title: Mathematical Precision
    details: Perfect for educational content, technical videos, and complex visualizations.
  - icon: 📦
    title: Extensive Library
    details: Hundreds of pre-built shapes, animations, and mathematical mobjects ready to use.
  - icon: 🎨
    title: Highly Customizable
    details: Full control over colors, timing, effects, and camera movements.
  - icon: 👥
    title: Community Driven
    details: Open source and built for the community, by the community.
---

<div class="intro-video-section">
  <h2 class="section-title">Experience Fluxion</h2>
  <div class="video-card hero-video">
    <div class="video-container">
      <video controls loop autoplay muted playsinline>
        <source src="/media/videos/fluxion_possibilities/480p15/FluxionPossibilities.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</div>

## Build with Code

Fluxion allows you to write Python code to generate high-quality animations.

```python
from fluxion import *

class CreateLogo(Scene):
    def construct(self):
        logo = FluxionLogo()
        self.play(DrawBorderThenFill(logo))
        self.play(logo.animate.shift(UP * 0.5))
```

<div class="video-grid">
  <div class="video-card compact">
    <h4 class="video-title">Logo Animation</h4>
    <div class="video-container">
      <video controls loop autoplay muted playsinline>
        <source src="/media/videos/logo_intro/1080p60/FluxionLogoIntro.mp4" type="video/mp4">
      </video>
    </div>
  </div>
  <div class="video-card compact">
    <h4 class="video-title">3D Surfaces</h4>
    <div class="video-container">
      <video controls loop autoplay muted playsinline>
        <source src="/media/videos/720p30/ThreeDSurfacePlot-1.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</div>

## Beyond the Basics

From trigonometry to complex boolean operations, Fluxion handles it all.

<div class="video-grid gallery">
  <div class="video-card compact">
    <h4 class="video-title">Trigonometry</h4>
    <div class="video-container">
      <video controls loop autoplay muted playsinline>
        <source src="/media/videos/720p30/SineCurveUnitCircle-1.mp4" type="video/mp4">
      </video>
    </div>
  </div>
  <div class="video-card compact">
    <h4 class="video-title">Boolean Logic</h4>
    <div class="video-container">
      <video controls loop autoplay muted playsinline>
        <source src="/media/videos/720p30/BooleanOperations-1.mp4" type="video/mp4">
      </video>
    </div>
  </div>
  <div class="video-card compact">
    <h4 class="video-title">3D Camera</h4>
    <div class="video-container">
      <video controls loop autoplay muted playsinline>
        <source src="/media/videos/720p30/ThreeDCameraRotation-1.mp4" type="video/mp4">
      </video>
    </div>
  </div>
  <div class="video-card compact">
    <h4 class="video-title">Mind Bender</h4>
    <div class="video-container">
      <video controls loop autoplay muted playsinline>
        <source src="/media/videos/mind_bender_safe/1080p60/MindBender.mp4" type="video/mp4">
      </video>
    </div>
  </div>
  <div class="video-card compact">
    <h4 class="video-title">Neural Voice</h4>
    <div class="video-container">
      <video controls loop autoplay muted playsinline>
        <source src="/media/videos/neural_voice_demo/480p15/NeuralVoiceDemo.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</div>

<style>
.section-title {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.video-grid.gallery {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.video-card.compact {
  margin: 0;
}

.video-card.compact .video-title {
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
}

.hero-video {
  max-width: 900px;
  margin: 0 auto 4rem;
  box-shadow: 0 20px 40px rgba(153, 209, 156, 0.1);
}
</style>
