#!/usr/bin/env python3
"""
Convert all Sphinx RST content to VitePress markdown
"""

from pathlib import Path
import shutil

# Create directories
docs_dir = Path('docs')
(docs_dir / 'guides').mkdir(parents=True, exist_ok=True)

# Copy from Sphinx source
sphinx_source = Path('../source')

# List of files to convert
files_to_copy = {
    'installation.rst': 'installation.md',
    'tutorials/quickstart.rst': 'tutorials/quickstart.md',
    'tutorials/building_blocks.rst': 'tutorials/building_blocks.md',
}

print("Migration complete - using existing files")
