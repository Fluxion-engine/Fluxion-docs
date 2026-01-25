# Mobjects Reference

Complete reference for mathematical objects (Mobjects) in Fluxion.

## Introduction

Mobjects (Mathematical Objects) are the fundamental building blocks of Fluxion animations. Everything you see on screen is a mobject.

## Base Classes

### Mobject

The base class for all mobjects.

```python
class Mobject:
    def __init__(self, **kwargs):
        pass
```

### VMobject

Vector-based mobjects (most common).

```python
class VMobject(Mobject):
    pass
```

## Basic Shapes

### Circle

```python
Circle(radius=1.0, color=WHITE, **kwargs)
```

**Example:**

```python
circle = Circle(radius=2, color=BLUE)
circle.set_fill(BLUE, opacity=0.5)
```

<div class="video-card">
  <h4 class="video-title">Circle Example</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/CreateCircle-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

### Square

```python
Square(side_length=2.0, color=WHITE, **kwargs)
```

### Rectangle

```python
Rectangle(width=4.0, height=2.0, **kwargs)
```

### Triangle

```python
Triangle(**kwargs)
```

### Polygon

```python
Polygon(*vertices, **kwargs)
```

**Example:**

```python
pentagon = Polygon(
    UP, UR, DR, DL, UL,
    color=GREEN
)
```

## Lines and Arrows

### Line

```python
Line(start=LEFT, end=RIGHT, **kwargs)
```

### Arrow

```python
Arrow(start=ORIGIN, end=RIGHT, **kwargs)
```

### Vector

```python
Vector(direction=RIGHT, **kwargs)
```

### DashedLine

```python
DashedLine(start=LEFT, end=RIGHT, **kwargs)
```

## Advanced Shapes

### Ellipse

```python
Ellipse(width=2.0, height=1.0, **kwargs)
```

### Annulus

```python
Annulus(inner_radius=1, outer_radius=2, **kwargs)
```

### Arc

```python
Arc(radius=1.0, start_angle=0, angle=TAU/4, **kwargs)
```

### Sector

```python
Sector(outer_radius=1, inner_radius=0, **kwargs)
```

## Text Mobjects

### Text

```python
Text(text, font="Arial", font_size=48, **kwargs)
```

**Example:**

```python
title = Text("Hello Fluxion!", font="Arial", font_size=60)
title.set_color(BLUE)
```

### MathTex

LaTeX mathematical expressions:

```python
MathTex(tex_string, **kwargs)
```

**Example:**

```python
formula = MathTex(r"E = mc^2")
equation = MathTex(
    r"\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}"
)
```

### Tex

General LaTeX text:

```python
Tex(tex_string, **kwargs)
```

## 3D Mobjects

### Sphere

```python
Sphere(radius=1, **kwargs)
```

### Cube

```python
Cube(side_length=2, **kwargs)
```

### Cylinder

```python
Cylinder(radius=1, height=2, **kwargs)
```

### Cone

```python
Cone(base_radius=1, height=2, **kwargs)
```

## Mobject Methods

### Positioning

```python
# Move to position
mobject.move_to(ORIGIN)
mobject.move_to(UP * 2 + RIGHT * 3)

# Shift by vector
mobject.shift(LEFT * 2)

# Align to edge
mobject.to_edge(UP)
mobject.to_corner(UR)

# Position relative to another
mobject.next_to(other, RIGHT, buff=0.5)
```

### Scaling

```python
# Scale uniformly
mobject.scale(2)

# Scale on specific axis
mobject.scale(2, axis=0)  # X-axis

# Stretch
mobject.stretch(2, 0)  # Stretch horizontally
```

### Rotation

```python
# Rotate around origin
mobject.rotate(PI / 4)

# Rotate around point
mobject.rotate(PI / 4, about_point=ORIGIN)

# Rotate around axis
mobject.rotate(PI / 4, axis=OUT)
```

### Colors and Styling

```python
# Set color
mobject.set_color(BLUE)
mobject.set_color_by_gradient(BLUE, GREEN)

# Set fill
mobject.set_fill(RED, opacity=0.5)

# Set stroke
mobject.set_stroke(WHITE, width=4)

# Set opacity
mobject.set_opacity(0.5)
```

### Alignment

```python
# Align to another mobject
mobject.align_to(other, UP)
mobject.align_to(other, LEFT)

# Center
mobject.center()
```

## Grouping

### VGroup

Group multiple mobjects:

```python
group = VGroup(circle, square, triangle)
group.arrange(RIGHT, buff=1)
```

**Methods:**

```python
# Add to group
group.add(mobject)

# Remove from group
group.remove(mobject)

# Arrange
group.arrange(direction=RIGHT, buff=0.5)
group.arrange_in_grid(rows=2, cols=3)
```

## Custom Mobjects

Create your own:

```python
class CustomShape(VMobject):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.set_points_as_corners([
            UP, RIGHT, DOWN, LEFT, UP
        ])
        self.set_fill(BLUE, opacity=0.5)
```

## See Also

- [Animations Reference](animations)
- [Scenes Reference](scenes)
- [Examples Gallery](../examples)
