# Plugins

Extend Fluxion with community plugins.

## Official Plugins

### Fluxion Voiceover

Add AI-generated voiceovers to your animations.

**Installation:**

```bash
pip install fluxion-voiceover
```

**Usage:**

```python
from fluxion_voiceover import VoiceoverScene

class MyVoiceover(VoiceoverScene):
    def construct(self):
        with self.voiceover("Welcome to Fluxion!") as tracker:
            circle = Circle()
            self.play(Create(circle), run_time=tracker.duration)
```

[Learn more →](guides/add_voiceovers)

### Fluxion Physics

Physics simulations and particle systems.

**Installation:**

```bash
pip install fluxion-physics
```

**Usage:**

```python
from fluxion_physics import *

class PhysicsDemo(Scene):
    def construct(self):
        # Create physics world
        world = PhysicsWorld()
        
        # Add objects with physics
        ball = Circle().add_physics(world, mass=1)
        self.add(ball)
        
        # Simulate
        self.play(world.simulate(duration=5))
```

## Community Plugins

### Fluxion Slides

Create presentation slides with Fluxion.

```bash
pip install fluxion-slides
```

### Fluxion Chemistry

Chemical structures and reactions.

```bash
pip install fluxion-chemistry
```

### Fluxion Music

Musical notation and audio visualization.

```bash
pip install fluxion-music
```

## Creating Plugins

Build your own Fluxion plugin:

### Plugin Structure

```
my-fluxion-plugin/
├── fluxion_myplugin/
│   ├── __init__.py
│   ├── mobjects.py
│   ├── animations.py
│   └── scenes.py
├── setup.py
└── README.md
```

### Example Plugin

```python
# fluxion_myplugin/__init__.py
from fluxion import *

class CustomMobject(VMobject):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        # Your custom mobject code

class CustomAnimation(Animation):
    def interpolate_mobject(self, alpha):
        # Your custom animation code
        pass
```

### Setup File

```python
# setup.py
from setuptools import setup, find_packages

setup(
    name="fluxion-myplugin",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "fluxion>=0.18.0",
    ],
)
```

### Publishing

1. Test your plugin locally
2. Create documentation
3. Publish to PyPI
4. Submit to plugin directory

## Plugin Directory

Browse all available plugins at [fluxion.community/plugins](https://fluxion.community/plugins)

## See Also

- [Deep Dive Guide](guides/deep_dive)
- [Contributing Guide](https://github.com/Fluxion-engine/fluxion/blob/main/CONTRIBUTING.md)
