# Configuration Reference

Complete reference for Fluxion configuration options.

## Configuration File

Fluxion uses `fluxion.cfg` for project-wide settings.

### File Location

The config file is searched in this order:
1. Current directory (`./fluxion.cfg`)
2. Project root
3. User home directory (`~/.fluxion/fluxion.cfg`)

## Configuration Sections

### [CLI]

Command-line interface settings:

```ini
[CLI]
quality = high
preview = true
save_last_frame = false
verbosity = INFO
write_to_movie = true
```

**Options:**
- `quality`: low, medium, high, 4k
- `preview`: true/false - Open video after rendering
- `save_last_frame`: true/false - Save final frame as PNG
- `verbosity`: DEBUG, INFO, WARNING, ERROR
- `write_to_movie`: true/false - Write to file

### [output]

Output file settings:

```ini
[output]
format = mp4
codec = h264
pixel_format = yuv420p
video_dir = ./media/videos
images_dir = ./media/images
text_dir = ./media/texts
```

**Options:**
- `format`: mp4, mov, gif, png
- `codec`: h264, h265, vp9
- `pixel_format`: yuv420p, yuv444p, rgb24
- `video_dir`: Output directory for videos
- `images_dir`: Output directory for images

### [camera]

Camera settings:

```ini
[camera]
background_color = #000000
frame_rate = 60
pixel_width = 1920
pixel_height = 1080
```

**Options:**
- `background_color`: Hex color or name
- `frame_rate`: Frames per second
- `pixel_width`: Width in pixels
- `pixel_height`: Height in pixels

### [style]

Default style settings:

```ini
[style]
font = Arial
font_size = 48
stroke_width = 4
fill_opacity = 1.0
```

## Python Configuration

Override settings in code:

```python
from fluxion import config

# Quality
config.quality = "high"
config.pixel_width = 1920
config.pixel_height = 1080
config.frame_rate = 60

# Output
config.preview = True
config.write_to_movie = True
config.save_last_frame = True

# Paths
config.media_dir = "./output"
config.video_dir = "./output/videos"
config.images_dir = "./output/images"

# Background
config.background_color = WHITE
config.background_opacity = 1

# Logging
config.verbosity = "DEBUG"
```

## Quality Presets

### Low Quality
```python
config.quality = "low"
# 480p, 15fps
```

### Medium Quality (Default)
```python
config.quality = "medium"
# 720p, 30fps
```

### High Quality
```python
config.quality = "high"
# 1080p, 60fps
```

### 4K Quality
```python
config.quality = "4k"
# 2160p, 60fps
```

## Custom Quality

```python
config.pixel_width = 2560
config.pixel_height = 1440
config.frame_rate = 120
```

## Performance Settings

```python
# Cache settings
config.max_files_cached = 100

# Disable preview for faster rendering
config.preview = False

# Write directly to file
config.write_to_movie = True
```

## Environment Variables

Set via environment:

```bash
export FLUXION_QUALITY=high
export FLUXION_PREVIEW=false
export FLUXION_OUTPUT_DIR=./renders
```

## Command Line Flags

Override config with flags:

```bash
# Quality
fluxion -ql scene.py  # Low
fluxion -qm scene.py  # Medium
fluxion -qh scene.py  # High
fluxion -qk scene.py  # 4K

# Preview
fluxion -p scene.py   # Preview

# Save last frame
fluxion -s scene.py

# Custom resolution
fluxion --resolution 2560,1440 scene.py

# Frame rate
fluxion --frame_rate 120 scene.py
```

## See Also

- [Cameras Reference](cameras)
- [Output & Configuration Tutorial](../tutorials/output_and_config)
- [Configuration Guide](../guides/configuration)
