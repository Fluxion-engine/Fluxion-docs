# Deep Dive

Advanced concepts and internals of Fluxion.

## Scene Rendering Pipeline

Understanding how Fluxion renders animations:

1. **Scene Construction**: `construct()` method is called
2. **Animation Queue**: Animations are queued via `play()`
3. **Frame Generation**: Each frame is rendered
4. **Video Encoding**: Frames are encoded to video

## Mobject Hierarchy

```python
Mobject (base class)
├── VMobject (vector graphics)
│   ├── Circle
│   ├── Square
│   ├── Line
│   └── Polygon
├── ImageMobject (raster graphics)
└── Group (container)
```

## Custom Mobjects

Create your own mobjects:

```python
class CustomShape(VMobject):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        # Define points
        self.set_points_as_corners([
            UP, RIGHT, DOWN, LEFT, UP
        ])
```

## Animation Internals

Animations interpolate between states:

```python
class CustomAnimation(Animation):
    def interpolate_mobject(self, alpha):
        # alpha goes from 0 to 1
        # Modify self.mobject based on alpha
        self.mobject.set_opacity(alpha)
```

## Rate Functions

Control animation timing:

```python
from fluxion import *

# Linear (default)
self.play(animation, rate_func=linear)

# Smooth (ease in/out)
self.play(animation, rate_func=smooth)

# Custom rate function
def custom_rate(t):
    return t ** 2  # Quadratic

self.play(animation, rate_func=custom_rate)
```

## Updaters

Dynamic animations that update every frame:

```python
def update_func(mob, dt):
    mob.rotate(dt * PI / 2)

circle.add_updater(update_func)
self.add(circle)
self.wait(2)  # Circle rotates for 2 seconds
circle.remove_updater(update_func)
```

## Camera Control

Advanced camera manipulation:

```python
# Move camera
self.camera.frame.move_to(RIGHT * 3)

# Zoom
self.camera.frame.scale(0.5)  # Zoom in

# Rotate camera
self.camera.frame.rotate(PI / 4)
```

## 3D Scenes

```python
class My3DScene(ThreeDScene):
    def construct(self):
        axes = ThreeDAxes()
        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
        self.add(axes)
```

## Performance Optimization

### Caching

```python
# Cache complex mobjects
@cache
def create_complex_shape():
    return ComplexMobject()
```

### Partial Rendering

```python
# Render specific time range
fluxion scene.py MyScene -n 0,60  # First 60 frames
```

## Plugin System

Create Fluxion plugins:

```python
# my_plugin.py
from fluxion import *

class MyCustomMobject(VMobject):
    pass

# Use in scenes
from my_plugin import MyCustomMobject
```

## Debugging

```python
# Print mobject info
print(mobject.get_center())
print(mobject.get_width())

# Visual debugging
self.add(Dot(mobject.get_center(), color=RED))
```
