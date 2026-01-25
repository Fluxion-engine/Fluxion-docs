# Examples Gallery

This gallery contains a collection of best practice code snippets together with their corresponding video output, illustrating different functionalities across the library.

All examples are under the MIT license - feel free to copy & paste them to your projects!

## Getting Started

### Fluxion Logo

<div class="video-card">
  <h4 class="video-title">Fluxion Logo Animation</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/logo_intro/1080p60/FluxionLogoIntro.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
from fluxion import *

class fluxionLogo(Scene):
    def construct(self):
        self.camera.background_color = "#ece6e2"
        logo_green = "#87c2a5"
        logo_blue = "#525893"
        logo_red = "#e07a5f"
        logo_black = "#343434"
        ds_f = Text("F", fill_opacity=1, color=logo_black).scale(7)
        ds_f.shift(2.25 * LEFT + 1.5 * UP)
        circle = Circle(color=logo_green, fill_opacity=1).shift(LEFT)
        square = Square(color=logo_blue, fill_opacity=1).shift(UP)
        triangle = Triangle(color=logo_red, fill_opacity=1).shift(RIGHT)
        logo = VGroup(triangle, square, circle, ds_f)
        logo.move_to(ORIGIN)
        self.play(DrawBorderThenFill(logo))
        self.play(logo.animate.shift(UP * 0.5))
        self.wait()
```

### Opening Fluxion

<div class="video-card">
  <h4 class="video-title">Opening Animation</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/OpeningFluxion-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class OpeningFluxion(Scene):
    def construct(self):
        title = Text("Fluxion", font_size=96)
        subtitle = Text("Mathematical Animation Engine", font_size=36)
        subtitle.next_to(title, DOWN)
        
        self.play(Write(title))
        self.play(FadeIn(subtitle, shift=UP))
        self.wait()
```

## Basic Shapes

### Create Circle

<div class="video-card">
  <h4 class="video-title">Creating a Circle</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/CreateCircle-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class CreateCircle(Scene):
    def construct(self):
        circle = Circle()
        circle.set_fill(PINK, opacity=0.5)
        self.play(Create(circle))
        self.wait()
```

### Shapes

<div class="video-card">
  <h4 class="video-title">Multiple Shapes</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/Shapes-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

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
        self.wait()
```

### Square and Circle

<div class="video-card">
  <h4 class="video-title">Square and Circle Positioning</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/SquareAndCircle2-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class SquareAndCircle(Scene):
    def construct(self):
        circle = Circle()
        circle.set_fill(PINK, opacity=0.5)
        
        square = Square()
        square.set_fill(BLUE, opacity=0.5)
        
        square.next_to(circle, RIGHT, buff=0.5)
        self.play(Create(circle), Create(square))
        self.wait()
```

## Transformations

### Square to Circle

<div class="video-card">
  <h4 class="video-title">Square to Circle Transform</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/SquareToCircle2-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

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
        self.wait()
```

### Animated Square to Circle

<div class="video-card">
  <h4 class="video-title">Animated Transformation</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/AnimatedSquareToCircle2-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class AnimatedSquareToCircle(Scene):
    def construct(self):
        circle = Circle()
        square = Square()
        
        self.play(Create(square))
        self.play(square.animate.rotate(PI / 4))
        self.play(Transform(square, circle))
        self.play(square.animate.set_fill(PINK, opacity=0.5))
        self.wait()
```

### Transform Cycle

<div class="video-card">
  <h4 class="video-title">Transform Cycle</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/TransformCycle-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class TransformCycle(Scene):
    def construct(self):
        a = Circle()
        t1 = Square()
        t2 = Triangle()
        self.add(a)
        self.wait()
        for t in [t1, t2]:
            self.play(Transform(a, t))
        self.wait()
```

### Example Transform

<div class="video-card">
  <h4 class="video-title">Transform Example</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/ExampleTransform-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class ExampleTransform(Scene):
    def construct(self):
        A = Text("A")
        B = Text("B")
        self.add(A)
        self.wait()
        self.play(Transform(A, B))
        self.wait()
```

## Animations

### Some Animations

<div class="video-card">
  <h4 class="video-title">Basic Animations</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/SomeAnimations-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class SomeAnimations(Scene):
    def construct(self):
        square = Square()
        self.play(FadeIn(square))
        self.play(Rotate(square, PI/4))
        self.play(FadeOut(square))
        self.wait()
```

### Creating Mobjects

<div class="video-card">
  <h4 class="video-title">Creating Mobjects</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/CreatingMobjects-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class CreatingMobjects(Scene):
    def construct(self):
        circle = Circle()
        self.add(circle)
        self.wait(1)
        self.remove(circle)
        self.wait(1)
```

### Animate Example

<div class="video-card">
  <h4 class="video-title">Using .animate</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/AnimateExample-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class AnimateExample(Scene):
    def construct(self):
        square = Square()
        self.add(square)
        self.play(square.animate.shift(UP * 2))
        self.play(square.animate.rotate(PI / 4))
        self.wait()
```

## Movement

### Moving Around

<div class="video-card">
  <h4 class="video-title">Moving Around</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/MovingAround-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class MovingAround(Scene):
    def construct(self):
        square = Square(color=BLUE, fill_opacity=1)
        self.play(square.animate.shift(LEFT))
        self.play(square.animate.set_fill(ORANGE))
        self.play(square.animate.scale(0.3))
        self.play(square.animate.rotate(0.4))
        self.wait()
```

### Moving Dots

<div class="video-card">
  <h4 class="video-title">Moving Dots</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/MovingDots-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class MovingDots(Scene):
    def construct(self):
        d1 = Dot(color=BLUE)
        d2 = Dot(color=GREEN)
        d2.shift(RIGHT * 3)
        
        self.add(d1, d2)
        self.play(d1.animate.shift(RIGHT * 3), d2.animate.shift(LEFT * 3))
        self.wait()
```

### Point Moving on Shapes

<div class="video-card">
  <h4 class="video-title">Point Moving on Shapes</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/PointMovingOnShapes-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class PointMovingOnShapes(Scene):
    def construct(self):
        circle = Circle(radius=1, color=BLUE)
        dot = Dot()
        self.play(GrowFromCenter(circle))
        self.play(MoveAlongPath(dot, circle), run_time=2, rate_func=linear)
        self.wait()
```

### Point with Trace

<div class="video-card">
  <h4 class="video-title">Point with Trace</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/PointWithTrace-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class PointWithTrace(Scene):
    def construct(self):
        path = Circle(radius=2)
        dot = Dot(color=RED)
        dot.move_to(path.point_from_proportion(0))
        
        trace = TracedPath(dot.get_center, stroke_color=YELLOW)
        self.add(path, dot, trace)
        self.play(MoveAlongPath(dot, path), run_time=3, rate_func=linear)
        self.wait()
```

### Moving Group to Destination

<div class="video-card">
  <h4 class="video-title">Moving Group</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/MovingGroupToDestination-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class MovingGroupToDestination(Scene):
    def construct(self):
        group = VGroup(Circle(), Square(), Triangle())
        group.arrange(RIGHT)
        
        self.add(group)
        self.play(group.animate.shift(UP * 2))
        self.wait()
```

## Rotation

### Different Rotations

<div class="video-card">
  <h4 class="video-title">Different Rotation Methods</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/DifferentRotations2-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class DifferentRotations(Scene):
    def construct(self):
        left_square = Square(color=BLUE, fill_opacity=0.7).shift(2 * LEFT)
        right_square = Square(color=GREEN, fill_opacity=0.7).shift(2 * RIGHT)
        self.play(
            left_square.animate.rotate(PI), 
            Rotate(right_square, angle=PI), 
            run_time=2
        )
        self.wait()
```

### Example Rotation

<div class="video-card">
  <h4 class="video-title">Rotation Example</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/ExampleRotation-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class ExampleRotation(Scene):
    def construct(self):
        square = Square()
        self.add(square)
        self.play(Rotate(square, PI/4))
        self.wait()
```

### Rotation Updater

<div class="video-card">
  <h4 class="video-title">Rotation with Updater</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/RotationUpdater-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class RotationUpdater(Scene):
    def construct(self):
        square = Square()
        square.add_updater(lambda m, dt: m.rotate(dt * PI / 2))
        self.add(square)
        self.wait(2)
        square.clear_updaters()
        self.wait()
```

### Moving Angle

<div class="video-card">
  <h4 class="video-title">Moving Angle</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/MovingAngle-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class MovingAngle(Scene):
    def construct(self):
        line1 = Line(ORIGIN, RIGHT * 2)
        line2 = Line(ORIGIN, UP * 2)
        angle = Angle(line1, line2)
        
        self.add(line1, line2, angle)
        self.play(Rotate(line2, PI/4, about_point=ORIGIN))
        self.wait()
```

## Styling

### Mobject Styling

<div class="video-card">
  <h4 class="video-title">Mobject Styling</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/MobjectStyling-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class MobjectStyling(Scene):
    def construct(self):
        circle = Circle()
        circle.set_fill(PINK, opacity=0.5)
        circle.set_stroke(color=GREEN, width=10)
        self.play(Create(circle))
        self.wait()
```

### Mobject Placement

<div class="video-card">
  <h4 class="video-title">Mobject Placement</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/MobjectPlacement-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class MobjectPlacement(Scene):
    def construct(self):
        c = Circle()
        c.to_edge(UP)
        s = Square()
        s.next_to(c, DOWN)
        t = Triangle()
        t.to_corner(UR)
        
        self.add(c, s, t)
        self.wait()
```

### Mobject Z-Order

<div class="video-card">
  <h4 class="video-title">Z-Order (Layering)</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/MobjectZOrder-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class MobjectZOrder(Scene):
    def construct(self):
        circle = Circle(fill_opacity=1, color=RED)
        square = Square(fill_opacity=1, color=BLUE).shift(RIGHT)
        
        self.add(circle, square)
        self.wait()
        self.bring_to_front(circle)
        self.wait()
```

## Boolean Operations

### Boolean Operations

<div class="video-card">
  <h4 class="video-title">Boolean Operations</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/BooleanOperations-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class BooleanOperations(Scene):
    def construct(self):
        ellipse1 = Ellipse(
            width=4.0, height=5.0, fill_opacity=0.5, 
            color=BLUE, stroke_width=10
        ).move_to(LEFT)
        ellipse2 = ellipse1.copy().set_color(color=RED).move_to(RIGHT)
        
        self.play(FadeIn(ellipse1), FadeIn(ellipse2))
        i = Intersection(ellipse1, ellipse2, color=GREEN, fill_opacity=0.5)
        self.play(i.animate.scale(0.25).move_to(RIGHT * 5 + UP * 2.5))
        self.wait()
```

## Graphs and Plots

### Sin and Cos Function Plot

<div class="video-card">
  <h4 class="video-title">Sin and Cos Plot</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/SinAndCosFunctionPlot-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class SinAndCosFunctionPlot(Scene):
    def construct(self):
        axes = Axes(x_range=[-10, 10], y_range=[-1.5, 1.5])
        sin_graph = axes.plot(lambda x: np.sin(x), color=BLUE)
        cos_graph = axes.plot(lambda x: np.cos(x), color=RED)
        
        self.play(Create(axes))
        self.play(Create(sin_graph), Create(cos_graph))
        self.wait()
```

### Sine Curve Unit Circle

<div class="video-card">
  <h4 class="video-title">Sine Curve from Unit Circle</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/SineCurveUnitCircle-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class SineCurveUnitCircle(Scene):
    def construct(self):
        circle = Circle(radius=1)
        axes = Axes(x_range=[0, 4*PI], y_range=[-2, 2])
        sine = axes.plot(lambda x: np.sin(x), color=BLUE)
        
        self.play(Create(circle), Create(axes))
        self.play(Create(sine))
        self.wait()
```

### Graph Area Plot

<div class="video-card">
  <h4 class="video-title">Graph Area Plot</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/GraphAreaPlot-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class GraphAreaPlot(Scene):
    def construct(self):
        axes = Axes(x_range=[0, 5], y_range=[0, 6])
        curve = axes.plot(lambda x: x**2, color=BLUE)
        area = axes.get_area(curve, x_range=[0, 2], color=BLUE, opacity=0.3)
        
        self.play(Create(axes), Create(curve))
        self.play(FadeIn(area))
        self.wait()
```

### Polygon on Axes

<div class="video-card">
  <h4 class="video-title">Polygon on Axes</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/PolygonOnAxes-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class PolygonOnAxes(Scene):
    def construct(self):
        axes = Axes(x_range=[-5, 5], y_range=[-5, 5])
        polygon = Polygon(
            axes.c2p(0, 0),
            axes.c2p(2, 0),
            axes.c2p(2, 2),
            axes.c2p(0, 2),
            color=BLUE, fill_opacity=0.5
        )
        
        self.play(Create(axes))
        self.play(Create(polygon))
        self.wait()
```

### Heat Diagram Plot

<div class="video-card">
  <h4 class="video-title">Heat Diagram</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/HeatDiagramPlot-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class HeatDiagramPlot(Scene):
    def construct(self):
        # Create heat map visualization
        axes = Axes(x_range=[0, 10], y_range=[0, 10])
        # Add heat map data visualization
        self.play(Create(axes))
        self.wait()
```

## 3D Animations

### 3D Camera Rotation

<div class="video-card">
  <h4 class="video-title">3D Camera Rotation</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/ThreeDCameraRotation-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class ThreeDCameraRotation(ThreeDScene):
    def construct(self):
        axes = ThreeDAxes()
        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
        self.add(axes)
        self.begin_ambient_camera_rotation(rate=0.1)
        self.wait(5)
```

### 3D Camera Illusion Rotation

<div class="video-card">
  <h4 class="video-title">3D Illusion Rotation</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/ThreeDCameraIllusionRotation-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class ThreeDCameraIllusionRotation(ThreeDScene):
    def construct(self):
        axes = ThreeDAxes()
        cube = Cube()
        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
        self.add(axes, cube)
        self.move_camera(phi=135 * DEGREES, theta=45 * DEGREES, run_time=3)
        self.wait()
```

### 3D Surface Plot

<div class="video-card">
  <h4 class="video-title">3D Surface Plot</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/ThreeDSurfacePlot-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class ThreeDSurfacePlot(ThreeDScene):
    def construct(self):
        axes = ThreeDAxes()
        surface = Surface(
            lambda u, v: axes.c2p(u, v, np.sin(u) * np.cos(v)),
            u_range=[-3, 3],
            v_range=[-3, 3]
        )
        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
        self.add(axes, surface)
        self.wait()
```

### 3D Light Source Position

<div class="video-card">
  <h4 class="video-title">3D Light Source</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/ThreeDLightSourcePosition-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class ThreeDLightSourcePosition(ThreeDScene):
    def construct(self):
        axes = ThreeDAxes()
        sphere = Sphere()
        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
        self.renderer.camera.light_source.move_to(3*IN)
        self.add(axes, sphere)
        self.wait()
```

## Advanced Features

### Counting Scene

<div class="video-card">
  <h4 class="video-title">Counting Animation</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/CountingScene-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class CountingScene(Scene):
    def construct(self):
        number = DecimalNumber(0)
        number.add_updater(lambda m, dt: m.increment_value(dt))
        self.add(number)
        self.wait(5)
```

### Run Time

<div class="video-card">
  <h4 class="video-title">Run Time Control</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/RunTime-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class RunTime(Scene):
    def construct(self):
        square = Square()
        self.play(Create(square), run_time=3)
        self.play(FadeOut(square), run_time=0.5)
        self.wait()
```

### ArgMin Example

<div class="video-card">
  <h4 class="video-title">ArgMin Visualization</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/ArgMinExample-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class ArgMinExample(Scene):
    def construct(self):
        axes = Axes(x_range=[-3, 3], y_range=[-1, 4])
        graph = axes.plot(lambda x: x**2, color=BLUE)
        dot = Dot(axes.c2p(0, 0), color=RED)
        
        self.play(Create(axes), Create(graph))
        self.play(FadeIn(dot))
        self.wait()
```

### Brace Annotation

<div class="video-card">
  <h4 class="video-title">Brace Annotation</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/BraceAnnotation-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class BraceAnnotation(Scene):
    def construct(self):
        line = Line(LEFT * 2, RIGHT * 2)
        brace = Brace(line, UP)
        text = brace.get_text("Length")
        
        self.play(Create(line))
        self.play(GrowFromCenter(brace), Write(text))
        self.wait()
```

### Vector Arrow

<div class="video-card">
  <h4 class="video-title">Vector Arrow</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/VectorArrow-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class VectorArrow(Scene):
    def construct(self):
        plane = NumberPlane()
        vector = Arrow(ORIGIN, RIGHT * 3 + UP * 2, buff=0, color=YELLOW)
        
        self.add(plane)
        self.play(GrowArrow(vector))
        self.wait()
```

### Gradient Image from Array

<div class="video-card">
  <h4 class="video-title">Gradient Image</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/GradientImageFromArray-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class GradientImageFromArray(Scene):
    def construct(self):
        # Create gradient array
        n = 256
        array = np.zeros((n, n, 3))
        for i in range(n):
            for j in range(n):
                array[i, j] = [i/n, j/n, 0.5]
        
        image = ImageMobject(array)
        self.play(FadeIn(image))
        self.wait()
```

## Camera Features

### Following Graph Camera

<div class="video-card">
  <h4 class="video-title">Camera Following Graph</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/FollowingGraphCamera-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class FollowingGraphCamera(Scene):
    def construct(self):
        axes = Axes()
        graph = axes.plot(lambda x: np.sin(x), color=BLUE)
        dot = Dot(axes.c2p(0, 0), color=RED)
        
        self.camera.frame.add_updater(lambda m: m.move_to(dot))
        self.add(axes, graph, dot)
        self.play(MoveAlongPath(dot, graph), run_time=5, rate_func=linear)
```

### Moving Frame Box

<div class="video-card">
  <h4 class="video-title">Moving Frame Box</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/MovingFrameBox-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class MovingFrameBox(Scene):
    def construct(self):
        text = Text("Focus Here")
        box = SurroundingRectangle(text, color=YELLOW)
        
        self.play(Write(text))
        self.play(Create(box))
        self.play(box.animate.shift(RIGHT * 2))
        self.wait()
```

### Moving Zoomed Scene Around

<div class="video-card">
  <h4 class="video-title">Zoomed Scene</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/MovingZoomedSceneAround-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class MovingZoomedSceneAround(Scene):
    def construct(self):
        dot = Dot()
        self.add(dot)
        self.camera.frame.save_state()
        self.play(self.camera.frame.animate.scale(0.5).move_to(dot))
        self.wait()
        self.play(Restore(self.camera.frame))
```

### Fixed in Frame MObject Test

<div class="video-card">
  <h4 class="video-title">Fixed in Frame</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/FixedInFrameMObjectTest-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class FixedInFrameMObjectTest(Scene):
    def construct(self):
        circle = Circle()
        text = Text("Fixed").fix_in_frame()
        
        self.add(circle, text)
        self.play(self.camera.frame.animate.shift(RIGHT * 2))
        self.wait()
```

## Voiceover

### Voiceover Example

<div class="video-card">
  <h4 class="video-title">Voiceover Integration</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/VoiceoverExample-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
from fluxion_voiceover import VoiceoverScene

class VoiceoverExample(VoiceoverScene):
    def construct(self):
        with self.voiceover("Welcome to Fluxion!") as tracker:
            circle = Circle()
            self.play(Create(circle), run_time=tracker.duration)
        
        with self.voiceover("Watch it transform!") as tracker:
            square = Square()
            self.play(Transform(circle, square), run_time=tracker.duration)
```

### Toy Example

<div class="video-card">
  <h4 class="video-title">Toy Example</h4>
  <div class="video-container">
    <video controls loop autoplay muted playsinline>
      <source src="/media/videos/720p30/ToyExample-1.mp4" type="video/mp4">
    </video>
  </div>
</div>

```python
class ToyExample(Scene):
    def construct(self):
        orange_square = Square(color=ORANGE, fill_opacity=0.5)
        blue_circle = Circle(color=BLUE, fill_opacity=0.5)
        
        self.play(Create(orange_square))
        self.play(Transform(orange_square, blue_circle))
        self.play(FadeOut(orange_square))
```

## Browse by Category

- [Animations Reference](reference/animations)
- [Mobjects Reference](reference/mobjects)
- [Scenes Reference](reference/scenes)
- [3D Animations Guide](guides/deep_dive)

## More Resources

- [GitHub Repository](https://github.com/Fluxion-engine/fluxion) - 100+ more examples
- [Community Examples](https://fluxion.community/examples)
- [Video Tutorials](https://youtube.com/fluxion)
