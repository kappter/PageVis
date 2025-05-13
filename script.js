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

  // Update page with colors
  sections.background.style.backgroundColor = colors[4];
  sections.header.style.backgroundColor = colors[0];
  sections.nav.style.backgroundColor = sections.nav.style.backgroundColor || '#20c997'; // Default to green on load
  sections.content.style.backgroundColor = colors[1];
  sections.footer.style.backgroundColor = colors[2];
  sections.accent.style.backgroundColor = colors[3];

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
    body {
      font-family: 'Inter', Arial, sans-serif;
      background-color: ${sections.background.style.backgroundColor};
      margin: 0;
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .page-container {
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
      height: 20%;
      min-height: 80px;
      background-color: ${sections.header.style.backgroundColor};
    }
    .nav {
      height: 30px;
      width: 100%;
      background-color: ${sections.nav.style.backgroundColor};
    }
    .content {
      height: auto;
      min-height: 400px;
      background-color: ${sections.content.style.backgroundColor};
      padding: 10px;
      box-sizing: border-box;
    }
    .footer {
      height: 20%;
      min-height: 80px;
      background-color: ${sections.footer.style.backgroundColor};
    }
    .accent {
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
  const styleTag = includeStyles ? `<style>${getCssContent()}</style>` : '';
  const contentHtml = sections.content.innerHTML; // Capture raw HTML from contenteditable
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${styleTag}
  <title>PageVis - Exported Design</title>
</head>
<body>
  <div class="page-container">
    <div class="header"></div>
    <div class="nav"></div>
    <div class="content">${contentHtml}</div>
    <div class="footer"></div>
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