# Quickstart

::: tip Before You Begin
Before proceeding, install fluxion and make sure it is running properly by following the steps in the [Installation guide](../installation).
:::

::: warning Virtual Environment
If you installed fluxion using `uv`, make sure the virtual environment is activated, or prefix commands with `uv run`.
:::

## Overview

This quickstart guide will lead you through creating a sample project using Fluxion: an animation engine for precise programmatic animations.

## Starting a New Project

Create a new project folder:

```bash
fluxion init project my-project --default
```

## Animating a Circle

Open `main.py`:

```python
from fluxion import *

class CreateCircle(Scene):
    def construct(self):
        circle = Circle()
        circle.set_fill(PINK, opacity=0.5)
        self.play(Create(circle))
```

Run:

```bash
fluxion -pql main.py CreateCircle
```

<div class="video-card">
  <h4 class="video-title">CreateCircle Animation</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/CreateCircle-1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

::: tip
All animations must reside within the construct method of a Scene class.
:::

## Transforming Shapes

```python
class SquareToCircle(Scene):
    def construct(self):
        circle = Circle()
        circle.set_fill(PINK, opacity=0.5)
        square = Square()
        square.rotate(PI / 4)
        
        self.play(Create(square))
        self.play(Transform(square, circle))
        self.play(FadeOut(square))
```

<div class="video-card">
  <h4 class="video-title">Square to Circle Transformation</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/SquareToCircle2-1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

## Positioning Mobjects

```python
class SquareAndCircle(Scene):
    def construct(self):
        circle = Circle()
        circle.set_fill(PINK, opacity=0.5)
        
        square = Square()
        square.set_fill(BLUE, opacity=0.5)
        
        square.next_to(circle, RIGHT, buff=0.5)
        self.play(Create(circle), Create(square))
```

<div class="video-card">
  <h4 class="video-title">Positioning with next_to</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/SquareAndCircle2-1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

## Using .animate Syntax

```python
class AnimatedSquareToCircle(Scene):
    def construct(self):
        circle = Circle()
        square = Square()
        
        self.play(Create(square))
        self.play(square.animate.rotate(PI / 4))
        self.play(Transform(square, circle))
        self.play(square.animate.set_fill(PINK, opacity=0.5))
```

<div class="video-card">
  <h4 class="video-title">Animated Transformations</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/AnimatedSquareToCircle2-1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

## You're Done! 🎉

Continue to the [Building Blocks](building_blocks) tutorial to learn more, or explore the [Examples](../examples) gallery!
