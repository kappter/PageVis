# PageVis

PageVis is a web-based tool designed to help users create and visualize webpage layouts with customizable colors and content. It’s ideal for beginners learning HTML and CSS, offering a simple interface to design a page with sections (header, nav, content, footer, and accent), apply color schemes, edit content, and export as HTML and CSS. Exports use semantic HTML, include instructional comments, and provide sample content to guide new learners.

## Features
- **Interactive Design**: Select sections (background, header, nav, content, footer, accent) via dropdown or click, and apply colors from swatches or custom input.
- **Color Customization**: Choose from predefined swatches, neutral colors, or input custom hex codes (e.g., `8A7B96,7B968A,968A7B,627C70,ADA397`) from ColorVis. Randomize colors for background, header, nav, footer, and accent, keeping the content area white (#FFFFFF).
- **Content Editing**: Edit content directly in the content section using a contenteditable area, allowing text, headings, or pasted HTML. The content area remains white during randomization but can be manually colored.
- **Alignment Options**: Toggle between fixed (300px preview, 960px export) and percentage-based (80vw preview and export) layouts.
- **Mobile Responsiveness**: Content is centered and scales appropriately on mobile devices, with a compact, user-friendly layout.
- **Export Functionality**: Export the design as:
  - **HTML + CSS**: A single file with embedded CSS, using semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`), comments, and sample content (e.g., `<h1>` in header, nav links, content, copyright in footer).
  - **HTML Only**: Structure with a `<link>` to `pagevis-design.css`, same semantic HTML, comments, and sample content, works when both files are in the same folder.
  - **CSS Only**: Styles with comments explaining each section, linked by the HTML Only export.
- **Beginner-Friendly Exports**: Exports include:
  - **Semantic HTML**: Uses `<header>`, `<nav>`, `<main>`, `<footer>` to teach modern web standards.
  - **Comments**: Explain each section (e.g., “`<header>` for site title or logo”).
  - **Sample Content**: `<h1>Sample Heading</h1>` in header, `<a href="#">Home</a>` in nav, `<p>Hello World</p>` or rich template (e.g., image, list) in content, `<p>© 2026 Your Name</p>` in footer.
  - **Accent Options**: Decorative circle or optional back-to-top link (`<a href="#">↥</a>`).
- **Content Options**: UI checkboxes to include a rich content template (e.g., image, list) or make the accent a back-to-top link in exports.

## Usage
1. Open [PageVis](https://kappter.github.io/PageVis/) in your browser.
2. Paste a 5-color swatch from [ColorVis](https://kappter.github.io/rgbcolorvis/) (e.g., `8A7B96,7B968A,968A7B,627C70,ADA397`) or click Randomize to set colors for background, header, nav, footer, and accent. The content area stays white (#FFFFFF).
3. Use the dropdown or click to select a section (e.g., header, nav, content).
4. Apply colors by hovering/clicking swatches or entering hex codes in the input field. The content area can be manually colored if desired.
5. Click the content section to edit directly (e.g., type text, add headings, paste HTML).
6. Toggle between "Center (Fixed)" and "Percentage-Based" alignment to preview different layouts.
7. Check "Include Rich Content Template" for extra sample content (e.g., image, list) or "Make Accent a Back-to-Top Link" for an interactive accent in exports.
8. Export your design:
   - **HTML + CSS**: Download `pagevis-design.html` with semantic HTML, comments, and sample content.
   - **HTML Only**: Download `pagevis-design-html.html`, which links to `pagevis-design.css`, with same content.
   - **CSS Only**: Download `pagevis-design.css` with comments. Place it in the same folder as `pagevis-design-html.html` for styling.
9. Open the exported files in a text editor to customize the sample content (e.g., change “Sample Heading” or “Your Name”) or host on a server for real projects.

## Exported Output
- **Fixed Layout**: `.page-container` is 960px wide, auto height, top-aligned with a 10px top margin.
- **Percentage Layout**: `.page-container` is 80vw wide, auto height, top-aligned with a 10px top margin.
- **Semantic HTML**: Uses `<header>`, `<nav>`, `<main>`, `<footer>` instead of `<div>` for modern web standards.
- **Content Area**: `height: auto; min-height: 400px;`. Stays white (#FFFFFF) during randomization, changeable manually. Exports include `<p>Hello World</p>` or rich template (e.g., `<img>`, `<ul>`) if no user content, else user content.
- **Header**: `height: 20%; min-height: 80px;`. Exports include `<h1>Sample Heading</h1>` with comments.
- **Nav**: Fixed `30px` height, default green (#20c997) on load, randomized with other sections. Exports include `<a href="#">Home</a> <a href="#">About</a>` with comments. Links are centered horizontally.
- **Footer**: `height: 20%; min-height: 80px;`. Exports include `<p>© 2026 Your Name</p>` with comments.
- **Accent**: Decorative circle or back-to-top link (`<a href="#">↥</a>` if enabled). Exports include comments explaining how to remove or modify (e.g., change shape, add content).
- **Comments**: Exports include instructional comments (e.g., “Edit the HTML below to customize”, “`<main>` for main content”).
- **HTML Only + CSS Only**: `pagevis-design-html.html` includes `<link rel="stylesheet" href="pagevis-design.css">`. Place both files in the same folder to apply styles.
- **No Fluff**: Exports contain only the `.page-container` with user or sample content, no promotional footer.

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