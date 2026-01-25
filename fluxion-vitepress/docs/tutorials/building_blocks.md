# Building Blocks

This document explains the building blocks of fluxion and will give you all the necessary tools to start producing your own videos.

Essentially, fluxion puts at your disposal three different concepts that you can orchestrate together to produce mathematical animations: the **mathematical object** (or **mobject** for short), the **animation**, and the **scene**.

## Mobjects

Mobjects are the basic building blocks for all fluxion animations. Each class that derives from `Mobject` represents an object that can be displayed on the screen.

### Creating and Displaying Mobjects

```python
from fluxion import *

class CreatingMobjects(Scene):
    def construct(self):
        circle = Circle()
        self.add(circle)
        self.wait(1)
        self.remove(circle)
        self.wait(1)
```

<div class="video-card">
  <h4 class="video-title">Creating Mobjects</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/CreatingMobjects-1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

### Placing Mobjects

```python
class Shapes(Scene):
    def construct(self):
        circle = Circle()
        square = Square()
        triangle = Triangle()
        
        circle.shift(LEFT)
        square.shift(UP)
        triangle.shift(RIGHT)
        
        self.add(circle, square, triangle)
        self.wait(1)
```

<div class="video-card">
  <h4 class="video-title">Positioning Shapes</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/Shapes-1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

## Animations

At the heart of fluxion is animation. Generally, you can add an animation to your scene by calling the `play()` method.

```python
class SomeAnimations(Scene):
    def construct(self):
        square = Square()
        
        # Some animations display mobjects
        self.play(FadeIn(square))
        
        # Some move or rotate mobjects around
        self.play(Rotate(square, PI/4))
        
        # Some animations remove mobjects from the screen
        self.play(FadeOut(square))
        
        self.wait(1)
```

<div class="video-card">
  <h4 class="video-title">Basic Animations</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/SomeAnimations-1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

::: tip
Fluxion provides a wide variety of animations. Check out the [animation reference](../reference/animations) for a complete list.
:::

## Scenes

The `Scene` class is the canvas for your animations. It provides methods like `play()`, `add()`, `remove()`, and `wait()` to control the flow of your animation.

Every Fluxion animation is defined as a `Scene` subclass with a `construct()` method that contains the animation logic.

## Next Steps

- Learn about [Output & Configuration](output_and_config)
- Explore the [Examples Gallery](../examples)
- Dive into the [Reference Manual](../reference/animations)
