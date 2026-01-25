# Configuration

Advanced configuration options for Fluxion.

## Configuration File

Fluxion uses `fluxion.cfg` for project-wide settings.

### Location

The config file is searched in this order:
1. Current directory
2. Project root
3. User home directory (`~/.fluxion/fluxion.cfg`)

### Format

```ini
[CLI]
quality = high
preview = true
save_last_frame = false
verbosity = INFO

[output]
format = mp4
codec = h264
pixel_format = yuv420p
video_dir = ./media/videos
images_dir = ./media/images

[camera]
background_color = #000000
frame_rate = 60
pixel_width = 1920
pixel_height = 1080

[style]
font = Arial
font_size = 48
```

## Python Configuration

Override settings in code:

```python
from fluxion import config

config.quality = "high"
config.preview = True
config.background_color = WHITE
config.frame_rate = 60
```

## Per-Scene Configuration

```python
class MyScene(Scene):
    def __init__(self):
        super().__init__()
        self.camera.background_color = "#1a1a1a"
        self.camera.frame_rate = 30
```

## Quality Presets

Built-in quality presets:

- **low**: 480p, 15fps
- **medium**: 720p, 30fps  
- **high**: 1080p, 60fps
- **4k**: 2160p, 60fps

## Custom Quality

```python
config.pixel_width = 2560
config.pixel_height = 1440
config.frame_rate = 120
```

## Output Directory

```python
config.media_dir = "./output"
config.video_dir = "./output/videos"
config.images_dir = "./output/images"
```

## Logging

```python
config.verbosity = "DEBUG"  # DEBUG, INFO, WARNING, ERROR
```

## Performance

```python
# Use multiple cores
config.max_files_cached = 100

# Disable preview for faster rendering
config.preview = False

# Write to file instead of preview
config.write_to_movie = True
```
