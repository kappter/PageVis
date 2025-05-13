# PageVis

PageVis is a web-based tool designed to help users create and visualize webpage layouts with customizable colors and content. It allows users to design a page with sections (header, nav, content, footer, and accent), apply color schemes, edit content directly, and export the design as HTML and CSS for use in real projects. It’s ideal for beginners learning HTML and CSS, with exports that include instructional comments and sample content.

## Features
- **Interactive Design**: Select sections (background, header, nav, content, footer, accent) via dropdown or click, and apply colors from swatches or custom input.
- **Color Customization**: Choose from predefined swatches, neutral colors, or input custom hex codes (e.g., `8A7B96,7B968A,968A7B,627C70,ADA397`) from ColorVis. Randomize colors for background, header, nav, footer, and accent, keeping the content area white (#FFFFFF).
- **Content Editing**: Edit content directly in the content section using a contenteditable area, allowing text, headings, or pasted HTML. The content area remains white during randomization but can be manually colored.
- **Alignment Options**: Toggle between fixed (300px preview, 960px export) and percentage-based (80vw preview and export) layouts.
- **Mobile Responsiveness**: Content is centered and scales appropriately on mobile devices, with a compact, user-friendly layout.
- **Export Functionality**: Export the design as:
  - **HTML + CSS**: A single file with embedded CSS, including comments and sample content (e.g., `<h1>` in header, nav links, “Hello World” in content, copyright in footer).
  - **HTML Only**: Structure with a `<link>` to `pagevis-design.css`, same comments and sample content, works when both files are in the same folder.
  - **CSS Only**: Styles with comments explaining each section, linked by the HTML Only export.
- **User-Friendly Interface**: Includes a tutorial modal on first load, a dynamic-size preview container (800px wide or 90vw on mobile, auto height), and a green nav bar (#20c997) by default.
- **Beginner-Friendly Exports**: Exports include comments explaining each section and sample content to guide new HTML learners (e.g., `<h1>Sample Heading</h1>`, `<a href="#">Home</a>`, `<p>Hello World</p>`, `<p>&copy; 2026 Your Name</p>`).

## Usage
1. Open [PageVis](https://kappter.github.io/PageVis/) in your browser.
2. Paste a 5-color swatch from [ColorVis](https://kappter.github.io/rgbcolorvis/) (e.g., `8A7B96,7B968A,968A7B,627C70,ADA397`) or click Randomize to set colors for background, header, nav, footer, and accent. The content area stays white (#FFFFFF).
3. Use the dropdown or click to select a section (e.g., header, nav, content).
4. Apply colors by hovering/clicking swatches or entering hex codes in the input field. The content area can be manually colored if desired.
5. Click the content section to edit directly (e.g., type text, add headings, paste HTML).
6. Toggle between "Center (Fixed)" and "Percentage-Based" alignment to preview different layouts.
7. Export your design:
   - **HTML + CSS**: Download `pagevis-design.html` for a complete page with comments and sample content.
   - **HTML Only**: Download `pagevis-design-html.html`, which links to `pagevis-design.css`, with comments and sample content.
   - **CSS Only**: Download `pagevis-design.css` with comments. Place it in the same folder as `pagevis-design-html.html` for styling.
8. Open the exported files in a text editor to customize the sample content (e.g., change “Sample Heading” or “Your Name”) or host on a server for real projects.

## Exported Output
- **Fixed Layout**: `.page-container` is 960px wide, auto height, top-aligned with a 10px top margin.
- **Percentage Layout**: `.page-container` is 80vw wide, auto height, top-aligned with a 10px top margin.
- **Content Area**: `height: auto; min-height: 400px;` to support real content. Stays white (#FFFFFF) during randomization, changeable manually. Exports include `<p>Hello World</p>` if no user content, else user content.
- **Header**: `height: 20%; min-height: 80px;`. Exports include `<h1>Sample Heading</h1>` with comments.
- **Nav**: Fixed `30px` height, default green (#20c997) on load, randomized with other sections. Exports include `<a href="#">Home</a> <a href="#">About</a>` with comments.
- **Footer**: `height: 20%; min-height: 80px;`. Exports include `<p>&copy; 2026 Your Name</p>` with comments.
- **HTML Only + CSS Only**: `pagevis-design-html.html` includes `<link rel="stylesheet" href="pagevis-design.css">`. Place both files in the same folder to apply styles.
- **Comments**: Exports include instructional comments (e.g., “Edit the HTML below to customize”, “Add your site title here”).
- **No Fluff**: Exports contain only the `.page-container` (header, nav, content, footer, accent) with user or sample content, no promotional footer.

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