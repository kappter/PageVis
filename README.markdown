# PageVis

PageVis is a web-based tool designed to help users create and visualize webpage layouts with customizable colors and content. It allows users to design a page with sections (header, nav, content, footer, and accent), apply color schemes, edit content directly, and export the design as HTML and CSS for use in real projects.

## Features
- **Interactive Design**: Select sections (background, header, nav, content, footer, accent) via dropdown or click, and apply colors from swatches or custom input.
- **Color Customization**: Choose from predefined swatches, neutral colors, or input custom hex codes (e.g., `8A7B96,7B968A,968A7B,627C70,ADA397`) from ColorVis. Randomize colors for all sections, including the nav bar.
- **Content Editing**: Edit content directly in the content section using a contenteditable area, allowing text, headings, or pasted HTML.
- **Alignment Options**: Toggle between fixed (300px preview, 960px export) and percentage-based (80vw preview and export) layouts.
- **Mobile Responsiveness**: Content is centered and scales appropriately on mobile devices, with a compact, user-friendly layout.
- **Export Functionality**: Export the design as:
  - **HTML + CSS**: A single file with embedded CSS (full page).
  - **HTML Only**: Structure with a `<link>` to `pagevis-design.css`, works when both files are in the same folder.
  - **CSS Only**: Styles without markup, linked by the HTML Only export.
- **User-Friendly Interface**: Includes a tutorial modal on first load, a dynamic-size preview container (800px wide or 90vw on mobile, auto height), and a green nav bar (#20c997) by default.

## Usage
1. Open [PageVis](https://kappter.github.io/PageVis/) in your browser.
2. Paste a 5-color swatch from [ColorVis](https://kappter.github.io/rgbcolorvis/) (e.g., `8A7B96,7B968A,968A7B,627C70,ADA397`) or click Randomize to set colors for all sections, including the nav bar.
3. Use the dropdown or click to select a section (e.g., header, nav).
4. Apply colors by hovering/clicking swatches or entering hex codes in the input field.
5. Click the content section to edit directly (e.g., type text, add headings, paste HTML).
6. Toggle between "Center (Fixed)" and "Percentage-Based" alignment to preview different layouts.
7. Export your design:
   - **HTML + CSS**: Download `pagevis-design.html` for a complete page.
   - **HTML Only**: Download `pagevis-design-html.html`, which links to `pagevis-design.css`.
   - **CSS Only**: Download `pagevis-design.css`. Place it in the same folder as `pagevis-design-html.html` for styling.
8. Host the exported files on a server to use in real projects.

## Exported Output
- **Fixed Layout**: `.page-container` is 960px wide, auto height, top-aligned with a 10px top margin.
- **Percentage Layout**: `.page-container` is 80vw wide, auto height, top-aligned with a 10px top margin.
- **Content Area**: `height: auto; min-height: 400px;` to support real content.
- **Header/Footer**: `height: 20%; min-height: 80px;` for balanced proportions.
- **Nav**: Fixed `30px` height, default green (#20c997) on load, randomized with other sections.
- **HTML Only + CSS Only**: `pagevis-design-html.html` includes `<link rel="stylesheet" href="pagevis-design.css">`. Place both files in the same folder to apply styles.
- **No Fluff**: Exports contain only the `.page-container` (header, nav, content, footer, accent) with user-edited content, no promotional footer.

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