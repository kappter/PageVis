# PageVis

PageVis is a web-based tool designed to help users create and visualize webpage layouts with customizable colors and content. It allows users to design a page with sections (header, nav, content, footer, and accent), apply color schemes, drag-and-drop content (headings, paragraphs, images, buttons), and export the design as HTML and CSS for use in real projects.

## Features
- **Interactive Design**: Select sections (background, header, nav, content, footer, accent) via dropdown or click, and apply colors from a swatch or custom input.
- **Color Customization**: Choose from predefined color swatches, neutral colors, or input custom hex codes (e.g., `FFFFFF,000000,FF0000,00FF00,0000FF`).
- **Content Management**: Drag-and-drop content blocks (headings, paragraphs, images, buttons) into the content section, with editable text.
- **Alignment Options**: Toggle between fixed (300px preview, 960px export) and percentage-based (80vw preview and export) layouts.
- **Export Functionality**: Export the design as:
  - HTML with embedded CSS (full page).
  - HTML only (structure without styles).
  - CSS only (styles without markup).
- **User-Friendly Interface**: Includes a tutorial modal on first load, a fixed-size preview container (800px × 850px), and a green nav bar (#20c997) for visibility.

## Usage
1. Open [PageVis](https://kappter.github.io/PageVis/) in your browser.
2. Use the dropdown or click to select a section (e.g., header, nav).
3. Apply colors by hovering/clicking swatches or entering hex codes in the input field.
4. Drag content blocks (e.g., heading, paragraph) from the content library to the content section and edit as needed.
5. Toggle between "Center (Fixed)" and "Percentage-Based" alignment to preview different layouts.
6. Export your design using the "HTML + CSS", "HTML Only", or "CSS Only" buttons.
7. Host the exported files on a server to use in real projects.

## Exported Output
- **Fixed Layout**: `.page-container` is 960px wide, auto height, top-aligned with a 10px top margin.
- **Percentage Layout**: `.page-container` is 80vw wide, auto height, top-aligned with a 10px top margin.
- **Content Area**: `height: auto; min-height: 400px;` to support real content.
- **Header/Footer**: `height: 20%; min-height: 80px;` for balanced proportions.
- **Nav**: Fixed `30px` height, default green (#20c997).
- **No Fluff**: Exports contain only the `.page-container` (header, nav, content, footer, accent) with user-added content, no promotional footer.

## Related Projects
- **[ColorVis](https://kappter.github.io/rgbcolorvis/)**: A tool for visualizing and experimenting with RGB color combinations, perfect for selecting color schemes to use in PageVis.

## Installation (for Development)
1. Clone the repository:
   ```bash
   git clone https://github.com/kappter/PageVis.git
   ```
2. Navigate to the project directory:
   ```bash
   cd PageVis
   ```
3. Serve the project locally:
   ```bash
   python -m http.server 8000
   ```
4. Open `http://localhost:8000` in your browser.

## Contributing
Feel free to submit issues or pull requests via the [GitHub repository](https://github.com/kappter/PageVis). Suggestions for new features (e.g., templates, undo/redo) are welcome!

## License
© 2025 Ken Kapptie. For educational use only. All rights reserved.