# PageVis

PageVis is a simple, educational web tool designed for students and amateurs to plan and preview basic webpage layouts. Users can customize colors, position a navigation bar, add content, and export their designs as HTML and CSS. The tool is ideal for learning web design fundamentals without needing advanced coding skills.

## Features

- **Color Customization**: Apply a 5-color palette to the page background, header, content, footer, and accent elements. Use a custom palette (e.g., from rgbcolorvis) or randomize colors.
- **Navigation Bar**: Position the nav bar below the header by default. Drag it outside the page area to hide it.
- **Content Library**: Drag and drop content blocks (heading, paragraph, image, button) into the content area. Edit content directly in the preview.
- **Layout Options**: Choose between a fixed-size (center) or responsive (percentage-based) layout.
- **Export Options**: Download your design as:
  - HTML + CSS (complete webpage)
  - HTML only (structure without styles)
  - CSS only (styles without structure)
- **Tutorial Modal**: A first-time user guide explains how to use the tool.
- **Responsive Design**: The interface adapts to different screen sizes, making it accessible on desktops and tablets.

## Usage

1. **Set Colors**:
   - Enter five 6-digit hex codes (e.g., `8A7B96,7B968A,968A7B,627C70,ADA397`) in the input field, separated by commas.
   - Or click **Randomize** to generate a random palette.
2. **Apply Colors**:
   - Click a section (header, content, footer, or accent) to select it (a black border appears).
   - Hover over a color swatch to preview the color on the selected section.
   - Click the swatch to apply the color.
3. **Position the Nav Bar**:
   - The nav bar is a thin rectangle below the header by default.
   - Drag it outside the page area to hide it.
4. **Add Content**:
   - Drag content blocks (Heading, Paragraph, Image, Button) from the Content Library into the content area.
   - Click dropped content to edit it (e.g., change text or image URLs).
5. **Choose Layout**:
   - Select **Center (Fixed)** for a 300x400px layout or **Percentage-Based** for a responsive layout (80% of viewport width/height, max 600x800px).
6. **Export Design**:
   - Click **HTML + CSS** to download a complete webpage.
   - Click **HTML Only** for the structure.
åll    - Click **CSS Only** for the styles.
7. **Learn with the Tutorial**:
   - On first use, a modal guides you through the tool’s features. Click **Got it!** to close it.

## Setup

To run PageVis locally or deploy it:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kappter/PageVis.git
   cd PageVis
   ```
2. **Serve the Files**:
   - Use a local server (e.g., Python’s HTTP server):
     ```bash
     python -m http.server 8000
     ```
   - Open `http://localhost:8000` in your browser.
3. **Deploy to GitHub Pages**:
   - Push changes to the `gh-pages` branch.
   - Enable GitHub Pages in the repository settings to host the app (e.g., at `https://kappter.github.io/PageVis/`).

## Files

- `index.html`: The main HTML structure, including the preview area, controls, content library, and tutorial modal.
- `styles.css`: Styles for the interface, page layout, content blocks, and responsive design.
- `script.js`: JavaScript for color management, nav bar positioning, content dragging/dropping, and export functionality.

## Target Audience

PageVis is designed for:
- **Students** learning HTML and CSS.
- **Amateurs** experimenting with web design.
- **Educators** teaching web development basics.

## Future Enhancements

- Predefined layout templates (e.g., blog, portfolio).
- Undo/redo functionality for actions.
- Live preview in a new window.
- Export as a ZIP file with both HTML and CSS.

## License

© 2025 Ken Kapptie | For educational use only | All rights reserved.

## Contact

For feedback or contributions, open an issue on the [GitHub repository](https://github.com/kappter/PageVis) or contact the author.