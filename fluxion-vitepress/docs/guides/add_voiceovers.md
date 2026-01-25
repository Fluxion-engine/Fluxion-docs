# Add Voiceovers

Add AI-generated voiceovers to your Fluxion animations.

## Installation

Install the voiceover plugin:

```bash
pip install fluxion-voiceover
```

## Basic Usage

```python
from fluxion import *
from fluxion_voiceover import VoiceoverScene

class MyVoiceover(VoiceoverScene):
    def construct(self):
        with self.voiceover(text="Welcome to Fluxion!") as tracker:
            circle = Circle()
            self.play(Create(circle), run_time=tracker.duration)
```

## Voice Selection

```python
# Set voice
self.set_voice("en-US-Neural2-A")  # Google Cloud TTS
```

## Multiple Voiceovers

```python
def construct(self):
    with self.voiceover("First sentence"):
        self.play(Create(Circle()))
    
    with self.voiceover("Second sentence"):
        self.play(Create(Square()))
```

## Timing Control

```python
with self.voiceover("This is timed") as tracker:
    # Animation duration matches voiceover
    self.play(animation, run_time=tracker.duration)
```

## Configuration

Create `voiceover_config.json`:

```json
{
  "provider": "gtts",
  "language": "en",
  "speed": 1.0,
  "cache_dir": "./voiceovers"
}
```

## Providers

Supported TTS providers:

- **gTTS** (Google Text-to-Speech) - Free
- **Azure** - High quality
- **Google Cloud** - Natural voices
- **Amazon Polly** - Multiple voices

## Example

```python
class VoiceoverExample(VoiceoverScene):
    def construct(self):
        title = Text("Voiceover Demo")
        
        with self.voiceover("This is a demonstration"):
            self.play(Write(title))
        
        with self.voiceover("Watch the circle appear"):
            circle = Circle()
            self.play(Create(circle))
        
        with self.voiceover("And now it fades away"):
            self.play(FadeOut(circle))
```
