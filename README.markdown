# PageVis - Color Swatch App

## Overview
PageVis is a web-based tool for designing and previewing webpage layouts using a 5-color swatch. Users can customize a page’s sidebar, header, nav bar, content, footer, and accent elements, apply colors from a swatch or neutral palette, and export the design as HTML+CSS, HTML only, or CSS only. The app features a responsive, mobile-friendly interface and supports center (fixed) or percentage-based layouts.

## Features
- **Color Swatch Input**: Paste a 5-color hex code swatch (e.g., `8A7B96,7B968A,968A7B,627C70,ADA397`) or click "Randomize" to generate one.
- **Customizable Components**: Click to select and color the sidebar, header, content, footer, or accent using swatches or neutral colors (`#000000`, `#FFFFFF`, `#333333`, `#666666`, `#CCCCCC`).
- **Draggable Nav Bar**: Drag the nav bar to position it below the header, left, right, or omit it.
- **Alignment Options**: Choose center (fixed size) or percentage-based (responsive) layout.
- **Export Options**: Download the design as:
  - **HTML+CSS**: Single file with styles and structure (`pagevis-design.html`).
  - **HTML Only**: Structure without styles (`pagevis-design-html.html`).
  - **CSS Only**: Stylesheet (`pagevis-design.css`).
- **Responsive Design**: Optimized for desktop and mobile (phone screens ~320–480px), with touch-friendly buttons and swatches.
- **Static Background**: App body uses a fixed `#f4f4f4` background; the preview uses the swatch’s fifth color.

## Installation
1. **Clone or Download**: Obtain the project files (`index.html`, `styles.css`, `script.js`).
2. **Host Locally**: Place files in a directory and serve using a local server (e.g., `python -m http.server 8000` or VS Code’s Live Server).
3. **Access**: Open `index.html` in a modern browser (Chrome, Firefox, Safari).

No external dependencies are required, except the `Inter` font loaded via Google Fonts.

## Usage
1. **Launch the App**: Open the app in a browser.
2. **Input Colors**:
   - Paste a 5-color hex swatch (comma-separated, no `#`) into the text box.
   - Or click "Randomize" to generate a new swatch.
3. **Customize Design**:
   - Click the sidebar, header, content, footer, or accent in the preview to select it (black border appears).
   - Hover over a swatch (main or neutral) to preview the color; click to apply.
   - Drag the nav bar to reposition it (below header, left, right, or outside to omit).
4. **Set Alignment**: Select "Center (Fixed)" or "Percentage-Based" from the dropdown.
5. **Export**:
   - Click "HTML + CSS" for a complete file.
   - Click "HTML Only" for structure.
   - Click "CSS Only" for styles.
6. **Mobile Use**: On phones, the interface scales down, with larger buttons/swatches and a compact preview.

## File Structure
- `index.html`: Main HTML file with the app’s structure.
- `styles.css`: Stylesheet for layout, responsive design, and animations.
- `script.js`: JavaScript for interactivity, color management, nav bar dragging, and exports.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository (if hosted on GitHub).
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

Please report issues or suggest features via email (see portfolio links).

## Credits
- **Author**: Ken Kapptie
- **Portfolio**: [kappter.github.io/portfolio](https://kappter.github.io/portfolio)
- **License**: For educational use only, all rights reserved.

## Links
- **Color Swatch Source**: [rgbcolorvis](https://kappter.github.io/rgbcolorvis/)
- **More Tools**: [Portfolio Projects](https://kappter.github.io/portfolio/#projects)
- **Custom Requests**: [Proposal](https://kappter.github.io/portfolio/proposal.html)

© 2025 Ken Kapptie