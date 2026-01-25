# Output Settings and Configuration

This guide covers Fluxion's output settings and configuration options.

## Output Formats

Fluxion can render to multiple formats:

- **MP4 Video** (default)
- **GIF Animation**
- **PNG Sequence**
- **MOV Video**

## Quality Settings

Control output quality with the `-q` flag:

```bash
# Low quality (480p)
fluxion -ql scene.py MyScene

# Medium quality (720p) - default
fluxion -qm scene.py MyScene

# High quality (1080p)
fluxion -qh scene.py MyScene

# 4K quality
fluxion -qk scene.py MyScene
```

## Configuration File

Create a `fluxion.cfg` file in your project:

```ini
[CLI]
quality = high
preview = true
save_last_frame = false

[output]
format = mp4
codec = h264
pixel_format = yuv420p
```

## Command Line Options

Common flags:

- `-p` - Preview (open video after rendering)
- `-s` - Save last frame as PNG
- `-l` - Low quality (faster rendering)
- `-m` - Medium quality
- `-h` - High quality
- `-k` - 4K quality
- `--format` - Output format (mp4, gif, mov)

## Frame Rate

Set custom frame rate:

```python
class MyScene(Scene):
    def construct(self):
        self.camera.frame_rate = 60  # 60 FPS
        # Your animation code
```

## Background Color

```python
class MyScene(Scene):
    def construct(self):
        self.camera.background_color = "#000000"  # Black
        # or
        self.camera.background_color = WHITE
```

## Transparent Background

```python
config.background_opacity = 0
```

Then render as PNG or MOV with alpha channel.
