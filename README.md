# Fluxion Documentation

This repository contains the official documentation for the **Fluxion Engine** - a powerful Python framework for creating mathematical animations programmatically.

## 📚 Documentation Site

The documentation is built using [Sphinx](https://www.sphinx-doc.org/) with the [Furo](https://github.com/pradyunsg/furo) theme.

## 🚀 Quick Start

### Prerequisites

- Python 3.11 or higher
- pip package manager

### Installation

1. **Clone this repository**:
   ```bash
   git clone https://github.com/Fluxion-engine/Fluxion-docs.git
   cd Fluxion-docs
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Install Fluxion** (required for API documentation):
   ```bash
   pip install fluxion-engine
   ```

### Building the Documentation

#### On Windows:
```bash
.\make.bat html
```

#### On Linux/macOS:
```bash
make html
```

The built documentation will be in the `build/html/` directory.

### Viewing the Documentation

#### Option 1: Open directly in browser
```bash
# Windows
start build/html/index.html

# Linux
xdg-open build/html/index.html

# macOS
open build/html/index.html
```

#### Option 2: Use a local web server
```bash
# Using Python's built-in server
python -m http.server 8000 --directory build/html

# Then open http://localhost:8000 in your browser
```

## 📝 Making Changes

1. Edit the `.rst` or `.md` files in the `source/` directory
2. Rebuild the documentation using `make html` or `.\make.bat html`
3. Refresh your browser to see the changes

### Live Reload (Optional)

For automatic rebuilding on file changes:

```bash
pip install sphinx-autobuild
sphinx-autobuild source build/html
```

Then open http://localhost:8000 in your browser.

## 📂 Repository Structure

```
Fluxion-docs/
├── source/              # Documentation source files
│   ├── _static/        # CSS, images, logos
│   ├── _templates/     # Custom Sphinx templates
│   ├── tutorials/      # Tutorial content
│   ├── guides/         # User guides
│   ├── faq/           # Frequently asked questions
│   ├── reference/     # API reference
│   ├── contributing/  # Contribution guidelines
│   ├── changelog/     # Version history
│   ├── installation/  # Installation instructions
│   ├── conf.py        # Sphinx configuration
│   └── index.rst      # Documentation homepage
├── examples/           # Example scenes for documentation
├── assets/            # Logo and branding assets
├── i18n/              # Internationalization files
├── build/             # Generated documentation (gitignored)
├── Makefile           # Build automation (Unix)
├── make.bat           # Build automation (Windows)
└── requirements.txt   # Python dependencies
```

## 🌐 Deployment

### ReadTheDocs

This documentation is configured for deployment on [ReadTheDocs](https://readthedocs.org/):

1. Connect your GitHub repository to ReadTheDocs
2. The `.readthedocs.yml` configuration file will handle the build automatically
3. Documentation will be available at `https://fluxion-docs.readthedocs.io/`

### GitHub Pages

To deploy to GitHub Pages:

```bash
# Build the documentation
make html

# Deploy to gh-pages branch
pip install ghp-import
ghp-import -n -p -f build/html
```

### Custom Hosting

Simply upload the contents of `build/html/` to any static web hosting service.

## 🤝 Contributing

Contributions to improve the documentation are welcome! Please:

1. Fork this repository
2. Create a feature branch
3. Make your changes
4. Test the build locally
5. Submit a pull request

## 📜 License

This documentation is licensed under the MIT License, matching the Fluxion Engine library.

---

<p align="center">
    Made with ❤️ by The Fluxion Community
</p>
