# Installation

import Callout from '@site/src/components/Callout';

## System Requirements

Fluxion requires Python 3.9 or higher.

## Installation Methods

### Using uv (Recommended)

```bash
# Install uv if you haven't already
curl -LsSf https://astral.sh/uv/install.sh | sh

# Create a new project
uv init my-fluxion-project
cd my-fluxion-project

# Install fluxion
uv add fluxion
```

### Using pip

```bash
pip install fluxion
```

<Callout type="note">
If you use `uv`, remember to activate the virtual environment or prefix commands with `uv run`.
</Callout>

## Verify Installation

```bash
fluxion --version
```

You should see the Fluxion version number printed.

## Next Steps

Continue to the [Quickstart Tutorial](tutorials/quickstart) to create your first animation!
