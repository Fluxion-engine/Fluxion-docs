# API Reference

Complete API documentation for Fluxion.

## Core Classes

### Scene

The base class for all animations.

```python
class Scene:
    def construct(self):
        """Override this method with your animation code"""
        pass
    
    def play(*animations, **kwargs):
        """Play one or more animations"""
        pass
    
    def wait(duration=1):
        """Wait for specified duration"""
        pass
    
    def add(*mobjects):
        """Add mobjects to the scene"""
        pass
    
    def remove(*mobjects):
        """Remove mobjects from the scene"""
        pass
```

### Mobject

Base class for all mathematical objects.

```python
class Mobject:
    def shift(vector):
        """Move mobject by vector"""
        pass
    
    def move_to(point):
        """Move mobject to point"""
        pass
    
    def scale(factor):
        """Scale mobject by factor"""
        pass
    
    def rotate(angle, axis=OUT):
        """Rotate mobject"""
        pass
    
    def set_color(color):
        """Set mobject color"""
        pass
```

## Shapes

### Circle

```python
Circle(radius=1.0, color=WHITE, **kwargs)
```

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

### Line

```python
Line(start=LEFT, end=RIGHT, **kwargs)
```

### Arrow

```python
Arrow(start=ORIGIN, end=RIGHT, **kwargs)
```

## Text

### Text

```python
Text(text, font="Arial", font_size=48, **kwargs)
```

### MathTex

```python
MathTex(tex_string, **kwargs)
```

## Animations

### Create

```python
Create(mobject, **kwargs)
```

### FadeIn / FadeOut

```python
FadeIn(mobject, **kwargs)
FadeOut(mobject, **kwargs)
```

### Transform

```python
Transform(mobject, target_mobject, **kwargs)
```

### Write

```python
Write(text_mobject, **kwargs)
```

### Rotate

```python
Rotate(mobject, angle, **kwargs)
```

## Constants

### Directions

```python
UP = np.array([0, 1, 0])
DOWN = np.array([0, -1, 0])
LEFT = np.array([-1, 0, 0])
RIGHT = np.array([1, 0, 0])
ORIGIN = np.array([0, 0, 0])
```

### Colors

```python
WHITE = "#FFFFFF"
BLACK = "#000000"
RED = "#FF0000"
GREEN = "#00FF00"
BLUE = "#0000FF"
YELLOW = "#FFFF00"
PINK = "#FF69B4"
```

## Configuration

```python
config.quality = "high"
config.preview = True
config.background_color = BLACK
config.frame_rate = 60
```

For complete API documentation, see the [source code](https://github.com/Fluxion-engine/fluxion).
