let colors = ['#8A7B96', '#FFFFFF', '#968A7B', '#627C70', '#ADA397'];
const neutralColors = ['#000000', '#FFFFFF', '#333333', '#666666', '#CCCCCC'];
const sections = {
  background: document.getElementById('pageBackground'),
  header: document.getElementById('header'),
  nav: document.getElementById('nav'),
  content: document.getElementById('content'),
  footer: document.getElementById('footer'),
  accent: document.getElementById('accent')
};
let selectedSection = null;
const swatchContainer = document.getElementById('swatch');
const neutralSwatchContainer = document.getElementById('neutralSwatch');
const colorInput = document.getElementById('colorInput');
const randomizeButton = document.getElementById('randomizeButton');
const sectionSelect = document.getElementById('sectionSelect');
const pageContainer = document.getElementById('page');
const exportHtmlCssButton = document.getElementById('exportHtmlCssButton');
const exportHtmlButton = document.getElementById('exportHtmlButton');
const exportCssButton = document.getElementById('exportCssButton');
const alignmentSelect = document.getElementById('alignmentSelect');
let alignment = 'center';

// Function to generate a random hex color
function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to update swatches and page colors
function updateSwatches() {
  swatchContainer.innerHTML = '';
  colors.forEach(color => {
    const swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = color;
    swatch.dataset.color = color;
    swatchContainer.appendChild(swatch);
  });

  neutralSwatchContainer.innerHTML = '';
  neutralColors.forEach(color => {
    const swatch = document.createElement('div');
    swatch.className = 'neutral-swatch';
    swatch.style.backgroundColor = color;
    swatch.dataset.color = color;
    neutralSwatchContainer.appendChild(swatch);
  });

  // Update page with colors, keeping content white
  sections.background.style.backgroundColor = colors[0];
  sections.header.style.backgroundColor = colors[1];
  sections.nav.style.backgroundColor = colors[2];
  sections.footer.style.backgroundColor = colors[3];
  sections.accent.style.backgroundColor = colors[4];

  // Set initial nav color to #20c997 on page load
  if (!sections.nav.dataset.initialized) {
    sections.nav.style.backgroundColor = '#20c997';
    sections.content.style.backgroundColor = '#FFFFFF';
    sections.nav.dataset.initialized = 'true';
  }

  // Add event listeners to all swatches
  document.querySelectorAll('.swatch, .neutral-swatch').forEach(swatch => {
    swatch.addEventListener('mouseover', () => {
      if (selectedSection) {
        const color = swatch.dataset.color;
        sections[selectedSection].style.backgroundColor = color;
      }
    });
    swatch.addEventListener('click', () => {
      if (selectedSection) {
        const color = swatch.dataset.color;
        sections[selectedSection].style.backgroundColor = color;
        sections[selectedSection].style.border = 'none';
        selectedSection = null;
        sectionSelect.value = ''; // Reset dropdown
      }
    });
  });
}

// Function to update page alignment
function updateAlignment() {
  pageContainer.className = 'page-container';
  if (alignment === 'center') {
    pageContainer.classList.add('page-center');
  } else if (alignment === 'percentage') {
    pageContainer.classList.add('page-percentage');
  }
}

// Initialize with default colors and alignment
updateSwatches();
updateAlignment();

// Show tutorial on first load
if (!localStorage.getItem('tutorialShown')) {
  document.getElementById('tutorialModal').style.display = 'flex';
  localStorage.setItem('tutorialShown', 'true');
}
document.getElementById('closeTutorial').addEventListener('click', () => {
  document.getElementById('tutorialModal').style.display = 'none';
});

// Handle section selection via dropdown
sectionSelect.addEventListener('change', () => {
  selectedSection = sectionSelect.value;
  Object.values(sections).forEach(section => section.style.border = 'none');
  if (selectedSection) {
    sections[selectedSection].style.border = '2px solid #000';
  }
});

// Handle section selection via clicks
Object.keys(sections).forEach(key => {
  sections[key].addEventListener('click', e => {
    if (key === 'background') {
      // Only select background if clicking outside page-container
      if (e.target === sections.background) {
        selectedSection = key;
        sectionSelect.value = key;
        Object.values(sections).forEach(section => section.style.border = 'none');
        sections[key].style.border = '2px solid #000';
      }
    } else {
      selectedSection = key;
      sectionSelect.value = key;
      Object.values(sections).forEach(section => section.style.border = 'none');
      sections[key].style.border = '2px solid #000';
    }
    e.stopPropagation(); // Prevent parent (e.g., page-background) from capturing
  });
});

// Handle color input
colorInput.addEventListener('input', () => {
  const input = colorInput.value.trim();
  if (input) {
    const colorArray = input.split(',').map(c => c.trim());
    if (colorArray.length === 5 && colorArray.every(c => /^[0-9A-Fa-f]{6}$/.test(c))) {
      colors = colorArray.map(c => `#${c}`);
      updateSwatches();
    }
  }
});

// Handle randomize button
randomizeButton.addEventListener('click', () => {
  colors = [getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor()];
  colorInput.value = colors.map(c => c.slice(1)).join(',');
  updateSwatches();
});

// Handle content editing
sections.content.addEventListener('input', e => {
  if (e.target.classList.contains('content')) {
    e.target.style.borderColor = '#20c997';
  }
});

// Handle alignment selection
alignmentSelect.addEventListener('change', () => {
  alignment = alignmentSelect.value;
  updateAlignment();
});

// Shared CSS content for exports
function getCssContent() {
  return `
    /* Styles for your PageVis design. Edit to change colors, sizes, etc. */
    /* Generated by PageVis (https://kappter.github.io/PageVis/) */
    body {
      /* Sets the page background and layout */
      font-family: 'Inter', Arial, sans-serif;
      background-color: ${sections.background.style.backgroundColor};
      margin: 0;
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .page-container {
      /* Main container for all sections */
      background-color: #ffffff;
      border-radius: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      position: relative;
      margin: 10px auto;
      ${alignment === 'center' ? 'width: 960px; height: auto;' : ''}
      ${alignment === 'percentage' ? 'width: 80vw; height: auto;' : ''}
    }
    .header {
      /* Styles the header section */
      height: 20%;
      min-height: 80px;
      background-color: ${sections.header.style.backgroundColor};
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .header h1 {
      /* Styles the header title */
      font-size: 24px;
      color: #fff;
      margin: 0;
      text-align: center;
    }
    .nav {
      /* Styles the navigation bar */
      height: 30px;
      width: 100%;
      background-color: ${sections.nav.style.backgroundColor};
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 0 10px;
    }
    .nav a {
      /* Styles navigation links */
      color: #fff;
      text-decoration: none;
      font-size: 14px;
    }
    .nav a:hover {
      /* Hover effect for navigation links */
      text-decoration: underline;
    }
    .content {
      /* Styles the main content area */
      height: auto;
      min-height: 400px;
      background-color: ${sections.content.style.backgroundColor};
      padding: 10px;
      box-sizing: border-box;
    }
    .content p {
      /* Styles content text */
      margin: 0;
      font-size: 16px;
      color: #222;
    }
    .footer {
      /* Styles the footer section */
      height: 20%;
      min-height: 80px;
      background-color: ${sections.footer.style.backgroundColor};
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .footer p {
      /* Styles footer text */
      margin: 0;
      font-size: 14px;
      color: #fff;
    }
    .accent {
      /* Styles the accent circle */
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      bottom: 20px;
      right: 20px;
      background-color: ${sections.accent.style.backgroundColor};
    }
  `;
}

// Shared HTML content for exports
function getHtmlContent(includeStyles = true) {
  const styleTag = includeStyles ? `<style>${getCssContent()}</style>` : `<link rel="stylesheet" href="pagevis-design.css">`;
  const contentHtml = sections.content.innerHTML.trim() || '<p>Hello World</p>'; // Use user content or default
  return `
    <!-- This is your PageVis webpage design. Edit the HTML below to customize. -->
    <!-- Generated by PageVis (https://kappter.github.io/PageVis/) -->
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags and styles for the page -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${styleTag}
    <title>PageVis - Exported Design</title>
</head>
<body>
    <!-- Main container for your webpage -->
    <div class="page-container">
        <!-- Header: Add your site title or logo here (e.g., change the <h1> text) -->
        <div class="header">
            <h1>Sample Heading</h1>
        </div>
        <!-- Navigation: Add links here (e.g., edit or add <a> tags) -->
        <div class="nav">
            <a href="#">Home</a>
            <a href="#">About</a>
        </div>
        <!-- Content: Main content area. Replace or add text, images, etc. -->
        <div class="content">${contentHtml}</div>
        <!-- Footer: Add copyright or contact info here (e.g., update the text) -->
        <div class="footer">
            <p>&copy; 2026 Your Name</p>
        </div>
        <!-- Accent: Decorative circle, styled via CSS -->
        <div class="accent"></div>
    </div>
</body>
</html>
  `;
}

// Function to trigger download
function triggerDownload(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Handle export buttons
exportHtmlCssButton.addEventListener('click', () => {
  triggerDownload(getHtmlContent(true), 'pagevis-design.html', 'text/html');
});
exportHtmlButton.addEventListener('click', () => {
  triggerDownload(getHtmlContent(false), 'pagevis-design-html.html', 'text/html');
});
exportCssButton.addEventListener('click', () => {
  triggerDownload(getCssContent(), 'pagevis-design.css', 'text/css');
});