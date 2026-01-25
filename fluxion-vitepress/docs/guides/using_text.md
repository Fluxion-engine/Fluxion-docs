# Using Text in Fluxion

Learn how to create and animate text in your Fluxion scenes.

## Basic Text

```python
from fluxion import *

class BasicText(Scene):
    def construct(self):
        text = Text("Hello, Fluxion!")
        self.play(Write(text))
        self.wait()
```

## Text Formatting

### Font and Size

```python
text = Text("Custom Font", font="Arial", font_size=48)
```

### Colors

```python
text = Text("Colored Text", color=BLUE)
text.set_color(RED)  # Change color
```

### Gradients

```python
text = Text("Gradient Text")
text.set_color_by_gradient(BLUE, GREEN)
```

## Mathematical Text (LaTeX)

Use `MathTex` for mathematical expressions:

```python
formula = MathTex(r"E = mc^2")
self.play(Write(formula))
```

### Complex Equations

```python
equation = MathTex(
    r"\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}"
)
```

## Text Positioning

```python
title = Text("Title").to_edge(UP)
subtitle = Text("Subtitle").next_to(title, DOWN)
```

## Text Animations

```python
# Write text character by character
self.play(Write(text))

# Fade in
self.play(FadeIn(text))

# Add text instantly
self.add(text)

# Transform between text
self.play(Transform(text1, text2))
```

## Text Alignment

```python
# Left aligned
text.align_to(ORIGIN, LEFT)

# Center aligned (default)
text.move_to(ORIGIN)

# Right aligned
text.align_to(ORIGIN, RIGHT)
```

## Multi-line Text

```python
text = Text("""
Line 1
Line 2
Line 3
""")
```

## Text with Background

```python
text = Text("Highlighted")
background = SurroundingRectangle(text, color=YELLOW, fill_opacity=0.3)
self.add(background, text)
```
