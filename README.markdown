# PageVis - Color Swatch Visualization App

PageVis is a web-based application that allows users to visualize and customize a webpage layout using a 5-color swatch. Built with HTML, CSS, and JavaScript, it provides an intuitive interface for designing a page with customizable colors, navigation bar placement, alignment options, and export functionality. The app is ideal for designers, developers, or anyone experimenting with color schemes and layout configurations.

## Features

### 1. Color Swatch Customization
- **Input**: Paste a 5-color swatch in the format `8A7B96, 7B968A, 968A7B, 627C70, ADA397` (hex codes without `#`, comma-separated) from [rgbcolorvis](https://kappter.github.io/rgbcolorvis/).
- **Validation**: The app ensures the input contains exactly five valid 6-digit hex codes.
- **Application**: Colors are applied to:
  - Header (color 1)
  - Content (color 2)
  - Footer (color 3)
  - Accent circle (color 4)
  - Body background (color 5)
- **Interaction**:
  - Click a section (header, content, footer, or accent) to select it (highlighted with a black border).
  - Hover over a swatch to preview the color on the selected section.
  - Click a swatch to apply the color permanently and deselect the section.
- **Default Colors**: Starts with `#8A7B96`, `#7B968A`, `#968A7B`, `#627C70`, `#ADA397`.

### 2. Draggable Navigation Bar
- **Purpose**: A thin navigation bar can be positioned to simulate different layouts.
- **Positions**:
  - **Top**: Full width, 20px height at the top (default).
  - **Left**: 20px width, full height on the left.
  - **Right**: 20px width, full height on the right.
  - **Omitted**: Hidden if dropped outside the designated edges.
- **Interaction**:
  - Drag the nav bar within the page container.
  - Drop near the top (y < 50px) for top placement, left edge (x < 50px) for left, right edge (x > width - 50px) for right, or elsewhere to hide.
  - Visual feedback: Nav bar opacity reduces to 0.5 during dragging.

### 3. Page Alignment Options
- **Purpose**: Customize the page container’s size and position.
- **Options** (selected via a dropdown):
  - **Center (Fixed, Default)**: 300px × 400px, centered with `position: static` and `margin: 0 auto`.
  - **Percentage-Based**: 80% of viewport width and height (max 600px × 800px), centered.
  - **Top-Left**: 300px × 400px, positioned at top-left (20px offset) with `position: absolute`.
- **Interaction**: Changing the dropdown updates the page’s size and position instantly.

### 4. Export Functionality
- **Purpose**: Save the current design as a standalone HTML file.
- **Output**: A single `pagevis-design.html` file with:
  - Inline CSS capturing the current colors, nav bar position, alignment, and footer styles.
  - Static HTML replicating the page container (header, content, footer, accent, nav bar) and fixed footer.
- **Interaction**: Click the "Export as HTML" button to download the file via the browser’s `Blob` API.
- **Note**: The exported file is static (no interactivity like color picking or dragging).

### 5. Fixed Footer
- **Purpose**: Provide attribution and links to related resources.
- **Content**:
  - Copyright: `© 2025 Ken Kapptie | For educational use only | All rights reserved.`
  - Links:
    - [More tools like this](https://kappter.github.io/portfolio/#projects)
    - [Want your own?](  (https://kappter.github.io/portfolio/proposal.html)
- **Styling**: Fixed at the bottom (`position: fixed`), dark background, centered white text, teal links with hover underline.
- **Positioning**: Stays at the viewport bottom, with body padding (`padding-bottom: 60px`) to prevent content overlap.

## Installation
1. **Clone or Download**: Obtain the source files (`index.html`, `styles.css`, `script.js`).
2. **Serve Locally**:
   - Place all files in a directory.
   - Use a local server (e.g., `python -m http.server` or VS Code’s Live Server) to avoid CORS issues.
3. **Open in Browser**: Navigate to `http://localhost:8000` (or the server’s port) to run the app.

## Usage
1. **Launch the App**: Open `index.html` in a modern browser (Chrome, Firefox, Edge recommended).
2. **Customize Colors**:
   - Paste a 5-color swatch (e.g., `8A7B96, 7B968A, 968A7B, 627C70, ADA397`) into the input field.
   - The swatches and page sections update if the input is valid (five 6-digit hex codes).
3. **Apply Colors**:
   - Click a section (header, content, footer, or accent).
   - Hover over a swatch to preview.
   - Click a swatch to apply the color.
4. **Position Navigation Bar**:
   - Drag the nav bar to the top, left, right, or drop elsewhere to hide it.
5. **Set Alignment**:
   - Select an option (Center, Percentage-Based, Top-Left) from the dropdown.
6. **Export Design**:
   - Click "Export as HTML" to download `pagevis-design.html`.
7. **Explore Footer Links**:
   - Click the links for more tools or to inquire about custom solutions.

## Possibilities and Customization
PageVis is extensible. Here are potential enhancements:

### Feature Additions
- **Custom Color Input**: Add a color picker (`<input type="color">`) for manual color selection.
- **Dynamic Swatches**: Fetch color palettes from [rgbcolorvis](https://kappter.github.io/rgbcolorvis/) via an API (if available) or generate random palettes.
- **Interactive Export**: Include JavaScript in the exported HTML for color picking and nav bar dragging.
- **Nav Bar Content**: Add menu items or icons to the nav bar for realism.
- **Reset Button**: Restore default colors, nav position, and alignment with one click.
- **Accessibility**:
  - Add ARIA labels for footer links and dropdown.
  - Implement keyboard navigation for sections, swatches, and alignment.
- **Preview Mode**: Toggle footer visibility during design.
- **Save State**: Use `localStorage` to persist user preferences across sessions.
- **Animations**: Add fade-in or slide effects for color changes and nav bar movement.

### Styling Tweaks
- **Footer Color**: Tie the footer’s background to the body’s color (`colors[4]`) for cohesion.
- **Theme Options**: Offer light/dark modes or custom swatch-based themes.
- **Responsive Design**: Adjust swatch sizes or page dimensions for mobile devices.
- **Custom Fonts**: Use Google Fonts (e.g., Roboto, Open Sans) for a modern look.

### Advanced Integrations
- **Backend Integration**: Save designs to a server or database.
- **Framework Migration**: Convert to React/Vue for scalability (see React guidelines in the original instructions).
- **API Support**: Integrate with xAI’s API ([https://x.ai/api](https://x.ai/api)) for enhanced features, if applicable.

## Limitations
- **Static Export**: The exported file lacks interactivity (no color picking or dragging).
- **Color Validation**: Only accepts 6-digit hex codes without `#`. Could expand to RGB or HSL.
- **Nav Bar**: Minimal design (no content). Adding items may require layout adjustments.
- **Browser Compatibility**: Tested in modern browsers. Older browsers (e.g., IE) may have issues with drag-and-drop or `Blob` API.

## Contributing
- **Report Issues**: Submit bugs or feature requests via email (use the footer’s "Want your own?" link).
- **Pull Requests**: Fork the repository, make changes, and submit a pull request with clear descriptions.
- **Suggestions**: Share ideas for new features or UI improvements.

## License
© 2025 Ken Kapptie. For educational use only. All rights reserved.

## Contact
- **Portfolio**: [https://kappter.github.io/portfolio/#projects](https://kappter.github.io/portfolio/#projects)
- **Custom Requests**: [https://kappter.github.io/portfolio/proposal.html](https://kappter.github.io/portfolio/proposal.html)

---

*Built with ❤️ by Ken Kapptie for creative web design exploration.*