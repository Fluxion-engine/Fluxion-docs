# Animations Reference

Complete reference for all animation classes in Fluxion.

## Introduction

Animations are the core of Fluxion. They interpolate between two states of a mobject over time, creating smooth transitions.

## Basic Animations

### Create

Draws a mobject onto the screen.

```python
Create(mobject, **kwargs)
```

**Example:**

```python
class CreateExample(Scene):
    def construct(self):
        circle = Circle()
        self.play(Create(circle))
```

<div class="video-card">
  <h4 class="video-title">Create Animation</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/CreateCircle-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

### FadeIn / FadeOut

Fade mobjects in or out.

```python
FadeIn(mobject, **kwargs)
FadeOut(mobject, **kwargs)
```

### Write

Animates text being written.

```python
Write(text_mobject, **kwargs)
```

## Transform Animations

### Transform

Morphs one mobject into another.

```python
Transform(mobject, target_mobject, **kwargs)
```

### ReplacementTransform

Replaces one mobject with another.

```python
ReplacementTransform(mobject, target_mobject, **kwargs)
```

## Movement Animations

### MoveToTarget

Moves a mobject to a target position.

```python
mobject.generate_target()
mobject.target.shift(RIGHT * 2)
self.play(MoveToTarget(mobject))
```

### Shift

Shifts a mobject by a vector.

```python
mobject.animate.shift(UP * 2)
```

## Rotation Animations

### Rotate

Rotates a mobject.

```python
Rotate(mobject, angle, axis=OUT, **kwargs)
```

### Rotating

Continuously rotates a mobject.

```python
Rotating(mobject, radians=TAU, **kwargs)
```

## Growth Animations

### GrowFromCenter

Grows a mobject from its center.

```python
GrowFromCenter(mobject, **kwargs)
```

### GrowFromEdge

Grows a mobject from an edge.

```python
GrowFromEdge(mobject, edge, **kwargs)
```

## Indication Animations

### Indicate

Temporarily highlights a mobject.

```python
Indicate(mobject, **kwargs)
```

### Flash

Creates a flash effect.

```python
Flash(point, **kwargs)
```

### Circumscribe

Draws a shape around a mobject.

```python
Circumscribe(mobject, **kwargs)
```

## Advanced Animations

### AnimationGroup

Groups multiple animations.

```python
AnimationGroup(*animations, **kwargs)
```

### Succession

Plays animations in succession.

```python
Succession(*animations, **kwargs)
```

### LaggedStart

Starts animations with a lag.

```python
LaggedStart(*animations, lag_ratio=0.5, **kwargs)
```

## Rate Functions

Control animation timing:

- `linear` - Constant speed
- `smooth` - Ease in and out
- `rush_into` - Accelerate
- `rush_from` - Decelerate
- `there_and_back` - Go and return

```python
self.play(animation, rate_func=smooth)
```

## Custom Animations

Create your own animations:

```python
class CustomAnimation(Animation):
    def interpolate_mobject(self, alpha):
        # alpha goes from 0 to 1
        self.mobject.set_opacity(alpha)
```

## See Also

- [Mobjects Reference](mobjects)
- [Scenes Reference](scenes)
- [Examples Gallery](../examples)
