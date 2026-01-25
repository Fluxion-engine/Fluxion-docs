# Utilities Reference

Utility functions and helper modules in Fluxion.

## Color Utilities

### Color Constants

```python
# Basic colors
WHITE = "#FFFFFF"
BLACK = "#000000"
RED = "#FF0000"
GREEN = "#00FF00"
BLUE = "#0000FF"
YELLOW = "#FFFF00"
PINK = "#FF69B4"
PURPLE = "#800080"
ORANGE = "#FFA500"

# Shades
GRAY = "#808080"
LIGHT_GRAY = "#BBBBBB"
DARK_GRAY = "#444444"
```

### Color Functions

```python
from fluxion.utils.color import *

# Interpolate between colors
color = interpolate_color(BLUE, RED, alpha=0.5)

# RGB to hex
hex_color = rgb_to_hex(1.0, 0.5, 0.0)

# Hex to RGB
r, g, b = hex_to_rgb("#FF5500")

# Color gradient
colors = color_gradient([BLUE, GREEN, RED], 10)
```

## Vector Utilities

### Direction Constants

```python
# 2D Directions
UP = np.array([0, 1, 0])
DOWN = np.array([0, -1, 0])
LEFT = np.array([-1, 0, 0])
RIGHT = np.array([1, 0, 0])

# Diagonal
UR = UP + RIGHT
UL = UP + LEFT
DR = DOWN + RIGHT
DL = DOWN + LEFT

# 3D
OUT = np.array([0, 0, 1])
IN = np.array([0, 0, -1])

# Origin
ORIGIN = np.array([0, 0, 0])
```

### Vector Operations

```python
from fluxion.utils.space_ops import *

# Normalize vector
normalized = normalize(vector)

# Rotate vector
rotated = rotate_vector(vector, angle)

# Angle between vectors
angle = angle_between_vectors(v1, v2)
```

## Rate Functions

Control animation timing:

```python
from fluxion.utils.rate_functions import *

# Linear (constant speed)
linear(t)

# Smooth (ease in/out)
smooth(t)

# Rush into (accelerate)
rush_into(t)

# Rush from (decelerate)
rush_from(t)

# There and back
there_and_back(t)

# Exponential
exponential_decay(t)

# Custom
def custom_rate(t):
    return t ** 2
```

## Bezier Utilities

Work with Bezier curves:

```python
from fluxion.utils.bezier import *

# Interpolate bezier
point = bezier(points)(t)

# Partial bezier
partial = partial_bezier_points(points, a, b)
```

## File Utilities

### Media Paths

```python
from fluxion.utils.file_ops import *

# Get video directory
video_dir = get_video_output_dir()

# Get image directory
image_dir = get_image_output_dir()

# Guarantee existence
guarantee_existence(directory)
```

## Math Utilities

### Constants

```python
PI = np.pi
TAU = 2 * PI
DEGREES = PI / 180
```

### Functions

```python
from fluxion.utils.simple_functions import *

# Sigmoid
y = sigmoid(x)

# Choose
combinations = choose(n, k)

# Clip
clipped = clip(value, min_val, max_val)
```

## IPython Magic

Use Fluxion in Jupyter:

```python
%%fluxion -v WARNING -qm

class MyScene(Scene):
    def construct(self):
        circle = Circle()
        self.play(Create(circle))
```

**Flags:**
- `-v`: Verbosity level
- `-qm`: Medium quality
- `-ql`: Low quality
- `-qh`: High quality

## Debugging Utilities

### Print Mobject Info

```python
from fluxion.utils.debug import *

# Print mobject properties
print_mobject_info(mobject)

# Get center
center = mobject.get_center()
print(f"Center: {center}")

# Get dimensions
width = mobject.get_width()
height = mobject.get_height()
```

### Visual Debugging

```python
# Add reference point
self.add(Dot(mobject.get_center(), color=RED))

# Add bounding box
bbox = SurroundingRectangle(mobject, color=YELLOW)
self.add(bbox)
```

## Configuration Helpers

```python
from fluxion import config

# Get current quality
quality = config.quality

# Get frame rate
fps = config.frame_rate

# Get resolution
width = config.pixel_width
height = config.pixel_height
```

## String Utilities

### Text Formatting

```python
from fluxion.utils.tex import *

# Convert to TeX
tex_string = tex_to_svg_file(r"\int x dx")
```

## See Also

- [Configuration Reference](configuration)
- [Deep Dive Guide](../guides/deep_dive)
- [API Reference](../reference)
