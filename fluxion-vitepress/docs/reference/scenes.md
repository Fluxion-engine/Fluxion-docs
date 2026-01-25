# Scenes Reference

Complete reference for Scene classes in Fluxion.

## Scene Class

The base class for all Fluxion animations.

```python
from fluxion import *

class MyScene(Scene):
    def construct(self):
        # Your animation code here
        pass
```

## Core Methods

### play()

Play one or more animations:

```python
self.play(animation)
self.play(animation1, animation2)
self.play(animation, run_time=2, rate_func=smooth)
```

**Parameters:**
- `*animations`: One or more Animation objects
- `run_time`: Duration in seconds (default: 1)
- `rate_func`: Timing function (linear, smooth, etc.)

### wait()

Pause the animation:

```python
self.wait()          # Wait 1 second
self.wait(2)         # Wait 2 seconds
self.wait(0.5)       # Wait 0.5 seconds
```

### add()

Add mobjects to the scene instantly:

```python
self.add(mobject)
self.add(mob1, mob2, mob3)
```

### remove()

Remove mobjects from the scene:

```python
self.remove(mobject)
self.remove(mob1, mob2, mob3)
```

## Scene Properties

### camera

Access the scene's camera:

```python
self.camera.background_color = BLACK
self.camera.frame.move_to(RIGHT * 3)
```

### mobjects

List of all mobjects in the scene:

```python
for mob in self.mobjects:
    print(mob)
```

## Special Scene Types

### ThreeDScene

For 3D animations:

```python
class My3DScene(ThreeDScene):
    def construct(self):
        axes = ThreeDAxes()
        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
        self.add(axes)
```

**3D Methods:**

```python
# Set camera orientation
self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)

# Move camera
self.move_camera(phi=60 * DEGREES, theta=45 * DEGREES, run_time=2)

# Begin rotation
self.begin_ambient_camera_rotation(rate=0.1)

# Stop rotation
self.stop_ambient_camera_rotation()
```

### VoiceoverScene

For scenes with voiceovers:

```python
from fluxion_voiceover import VoiceoverScene

class MyVoiceover(VoiceoverScene):
    def construct(self):
        with self.voiceover("Hello!") as tracker:
            circle = Circle()
            self.play(Create(circle), run_time=tracker.duration)
```

## Advanced Methods

### bring_to_front()

Bring mobjects to front:

```python
self.bring_to_front(mobject)
```

### bring_to_back()

Send mobjects to back:

```python
self.bring_to_back(mobject)
```

### get_top_level_mobjects()

Get all top-level mobjects:

```python
mobjects = self.get_top_level_mobjects()
```

## Updaters

Add dynamic updates:

```python
def update_func(mob, dt):
    mob.rotate(dt * PI / 2)

mobject.add_updater(update_func)
self.add(mobject)
self.wait(2)
mobject.remove_updater(update_func)
```

## Scene Configuration

### Setup Method

Override for initialization:

```python
class MyScene(Scene):
    def setup(self):
        # Runs before construct()
        self.camera.background_color = "#1a1a1a"
    
    def construct(self):
        # Your animation code
        pass
```

### Tear Down

Cleanup after scene:

```python
def tear_down(self):
    # Cleanup code
    pass
```

## Rendering Control

### Skip Animations

Skip to end of animation:

```python
self.skip_animations = True
```

### Time

Get current scene time:

```python
current_time = self.time
```

## Scene Examples

### Basic Scene

```python
class BasicScene(Scene):
    def construct(self):
        circle = Circle()
        self.play(Create(circle))
        self.wait()
```

### Multi-Object Scene

```python
class MultiObject(Scene):
    def construct(self):
        circle = Circle().shift(LEFT)
        square = Square().shift(RIGHT)
        
        self.play(
            Create(circle),
            Create(square)
        )
        self.wait()
```

### Animated Scene

```python
class AnimatedScene(Scene):
    def construct(self):
        square = Square()
        
        self.play(Create(square))
        self.play(square.animate.shift(UP * 2))
        self.play(square.animate.rotate(PI / 4))
        self.play(square.animate.set_fill(BLUE, opacity=0.5))
        self.wait()
```

## See Also

- [Animations Reference](animations)
- [Mobjects Reference](mobjects)
- [Cameras Reference](cameras)
- [Building Blocks Tutorial](../tutorials/building_blocks)
