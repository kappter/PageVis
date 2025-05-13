# PageVis - Webpage Layout Design App

## Overview
PageVis is a web-based tool for designing and experimenting with webpage layouts. It allows users to manage five core components—background, header, nav bar, content, and footer—by adjusting their colors, positions, and sizes. Components can be dragged to reposition and resized via handles to demonstrate how a page aligns and adapts in center (fixed) or percentage-based layouts. Designs can be exported as HTML+CSS, HTML only, or CSS only. The app is responsive, optimized for both desktop and mobile (phone screens ~320–480px).

## Features
- **Color Swatch Input**: Paste a 5-color hex swatch (e.g., `8A7B96,7B968A,968A7B,627C70,ADA397`) or click "Randomize" to generate one.
- **Five Components**:
  - **Background**: The page container’s background, fillable with the swatch’s fifth color.
  - **Header**: Top section, fillable, draggable, and resizable.
  - **Nav Bar**: Movable to below header, left, right, or omitted (fixed dark color).
  - **Content**: Main section, fillable (defaults white), draggable, and resizable.
  - **Footer**: Bottom section, fillable, draggable, and resizable.
- **Movability**: Drag components within the page container to reposition (e.g., swap header/footer).
- **Resizability**: Resize header, content, and footer using bottom-right handles (min 50px, max 90% container size).
- **Alignment**: Choose center (fixed size) or percentage-based (responsive) layout.
- **Export Options**:
  - **HTML+CSS**: Single file with styles and structure (`pagevis-design.html`).
  - **HTML Only**: Structure without styles (`pagevis-design-html.html`).
  - **CSS Only**: Stylesheet (`pagevis-design.css`).
- **Responsive Design**: Touch-friendly buttons/swatches, compact preview, and scaled sizes for mobile.
- **Static Background**: App body uses fixed `#f4f4f4` for contrast.

## Installation
1. **Clone or Download**: Obtain `index.html`, `styles.css`, `script.js`.
2. **Host Locally**: Serve files using a local server (e.g., `python -m http.server 8000` or VS Code’s Live Server).
3. **Access**: Open `index.html` in a modern browser (Chrome, Firefox, Safari).

Requires only the `Inter` font via Google Fonts.

## Usage
1. **Launch**: Open the app in a browser.
2. **Input Colors**:
   - Paste a 5-color hex swatch (comma-separated, no `#`) or click "Randomize".
3. **Customize Layout**:
   - Click background, header, content, or footer to select (black border appears).
   - Hover over a swatch (main or neutral: `#000000`, `#FFFFFF`, `#333333`, `#666666`, `#CCCCCC`) to preview; click to apply.
   - Drag background, header, nav bar, content, or footer to reposition.
   - Resize header, content, or footer using the bottom-right handle.
   - Drag nav bar to below header, left, right, or outside to omit.
4. **Set Alignment**: Select "Center (Fixed)" or "Percentage-Based".
5. **Export**: Download as HTML+CSS, HTML only, or CSS only.
6. **Mobile**: Scaled-down preview, larger buttons/swatches for touch.

## File Structure
- `index.html`: App structure.
- `styles.css`: Responsive layout, animations, and component styles.
- `script.js`: Interactivity, color management, dragging, resizing, and exports.

## Contributing
1. Fork the repository (if on GitHub).
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

Report issues or suggest features via portfolio email.

## Credits
- **Author**: Ken Kapptie
- **Portfolio**: [kappter.github.io/portfolio](https://kappter.github.io/portfolio)
- **License**: Educational use only, all rights reserved.

## Links
- **Color Swatch Source**: [rgbcolorvis](https://kappter.github.io/rgbcolorvis/)
- **More Tools**: [Portfolio Projects](https://kappter.github.io/portfolio/#projects)
- **Custom Requests**: [Proposal](https://kappter.github.io/portfolio/proposal.html)

© 2025 Ken Kapptie