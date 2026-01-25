# Cameras Reference

Complete reference for camera control in Fluxion.

## Camera Class

The `Camera` class controls what is rendered and how.

### Basic Properties

```python
class Scene:
    def construct(self):
        # Access camera
        self.camera.background_color = BLACK
        self.camera.frame_rate = 60
```

## Camera Frame

Control the camera's view:

```python
# Move camera
self.camera.frame.move_to(RIGHT * 3)

# Zoom in
self.camera.frame.scale(0.5)

# Zoom out
self.camera.frame.scale(2)

# Rotate camera
self.camera.frame.rotate(PI / 4)
```

## Background

### Background Color

```python
self.camera.background_color = "#1a1a1a"
self.camera.background_color = WHITE
```

### Background Opacity

```python
config.background_opacity = 0  # Transparent
config.background_opacity = 1  # Opaque
```

## Resolution

### Pixel Dimensions

```python
config.pixel_width = 1920
config.pixel_height = 1080
```

### Aspect Ratio

```python
config.aspect_ratio = 16/9
```

## Frame Rate

```python
config.frame_rate = 60  # 60 FPS
config.frame_rate = 30  # 30 FPS
```

## 3D Camera

For 3D scenes, use `ThreeDCamera`:

```python
from fluxion import *

class My3DScene(ThreeDScene):
    def construct(self):
        # Set camera orientation
        self.set_camera_orientation(
            phi=75 * DEGREES,
            theta=30 * DEGREES
        )
        
        # Add 3D objects
        axes = ThreeDAxes()
        self.add(axes)
```

### Camera Movement in 3D

```python
# Move camera
self.move_camera(
    phi=60 * DEGREES,
    theta=45 * DEGREES,
    run_time=2
)

# Begin ambient camera rotation
self.begin_ambient_camera_rotation(rate=0.1)

# Stop rotation
self.stop_ambient_camera_rotation()
```

## Camera Tracking

Track a mobject with the camera:

```python
# Add updater to follow mobject
def update_camera(mob):
    self.camera.frame.move_to(mob)

mobject.add_updater(update_camera)
```

## Multiple Cameras

Use multiple cameras for picture-in-picture:

```python
class MultiCamera(Scene):
    def construct(self):
        # Main camera
        main_camera = self.camera
        
        # Create secondary camera
        small_camera = Camera()
        small_camera.frame.scale(0.3)
        small_camera.frame.move_to(UR * 2)
```

## Camera Configuration

### Quality Presets

```python
config.quality = "low"     # 480p
config.quality = "medium"  # 720p
config.quality = "high"    # 1080p
config.quality = "4k"      # 2160p
```

### Custom Quality

```python
config.pixel_width = 2560
config.pixel_height = 1440
config.frame_rate = 120
```

## See Also

- [Configuration Reference](configuration)
- [Scenes Reference](scenes)
- [3D Examples](../examples#3d-animations)
