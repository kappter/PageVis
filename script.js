let colors = ['#8A7B96', '#FFFFFF', '#968A7B', '#627C70', '#ADA397'];
const neutralColors = ['#000000', '#FFFFFF', '#333333', '#666666', '#CCCCCC'];
const sections = {
  sidebar: document.getElementById('sidebar'),
  header: document.getElementById('header'),
  content: document.getElementById('content'),
  footer: document.getElementById('footer'),
  accent: document.getElementById('accent')
};
let selectedSection = null;
const swatchContainer = document.getElementById('swatch');
const neutralSwatchContainer = document.getElementById('neutralSwatch');
const colorInput = document.getElementById('colorInput');
const randomizeButton = document.getElementById('randomizeButton');
const navBar = document.getElementById('navBar');
const pageContainer = document.getElementById('page');
const exportHtmlCssButton = document.getElementById('exportHtmlCssButton');
const exportHtmlButton = document.getElementById('exportHtmlButton');
const exportCssButton = document.getElementById('exportCssButton');
const alignmentSelect = document.getElementById('alignmentSelect');
let navPosition = 'header';
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
  sections.sidebar.style.backgroundColor = colors[0];
  sections.header.style.backgroundColor = colors[0];
  sections.content.style.backgroundColor = colors[1];
  sections.footer.style.backgroundColor = colors[2];
  sections.accent.style.backgroundColor = colors[3];
  pageContainer.style.backgroundColor = colors[4];

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

// Initialize with default colors, nav position, and alignment
navBar.className = 'nav-bar nav-header';
updateSwatches();
updateAlignment();

// Handle section selection
Object.keys(sections).forEach(key => {
  sections[key].addEventListener('click', () => {
    selectedSection = key;
    Object.values(sections).forEach(section => section.style.border = 'none');
    sections[key].style.border = '2px solid #000';
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

// Handle nav bar dragging
navBar.addEventListener('dragstart', () => {
  navBar.style.opacity = '0.5';
});

navBar.addEventListener('dragend', () => {
  navBar.style.opacity = '1';
});

pageContainer.addEventListener('dragover', e => {
  e.preventDefault();
});

pageContainer.addEventListener('drop', e => {
  e.preventDefault();
  const rect = pageContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Determine drop position
  if (y < 100) {
    navPosition = 'header';
    navBar.className = 'nav-bar nav-header';
    navBar.style.display = 'block';
  } else if (x < 110) { // Account for sidebar width (60px) + buffer
    navPosition = 'left';
    navBar.className = 'nav-bar nav-left';
    navBar.style.display = 'block';
  } else if (x > rect.width - 50) {
    navPosition = 'right';
    navBar.className = 'nav-bar nav-right';
    navBar.style.display = 'block';
  } else {
    navPosition = 'none';
    navBar.className = 'nav-bar';
    navBar.style.display = 'none';
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
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${pageContainer.style.backgroundColor};
      margin: 0;
      padding: 10px;
      padding-bottom: 40px;
      min-height: 100vh;
    }
    .page-container {
      background-color: #ffffff;
      border-radius: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      margin-bottom: 10px;
      cursor: pointer;
      position: relative;
      ${alignment === 'center' ? 'width: 300px; height: 400px; position: static; margin: 0 auto;' : ''}
      ${alignment === 'percentage' ? 'width: 80vw; height: 80vh; max-width: 600px; max-height: 800px; margin: 0 auto;' : ''}
    }
    .sidebar {
      position: absolute;
      width: 60px;
      height: 100%;
      top: 0;
      left: 0;
      transition: background-color: 0.3s;
      background-color: ${sections.sidebar.style.backgroundColor};
    }
    .nav-bar {
      background-color: #333;
      transition: all 0.3s;
      position: absolute;
      z-index: 10;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      ${navPosition === 'none' ? 'display: none;' : ''}
      ${navPosition === 'header' ? `width: 100%; height: 40px; top: ${alignment === 'percentage' ? 'calc(20%)' : '80px'}; left: 0;` : ''}
      ${navPosition === 'left' ? 'width: 40px; height: 100%; top: 0; left: 60px;' : ''}
      ${navPosition === 'right' ? 'width: 40px; height: 100%; top: 0; right: 0;' : ''}
    }
    .header {
      height: 20%;
      margin-left: 60px;
      transition: background-color: 0.3s;
      background-color: ${sections.header.style.backgroundColor};
    }
    .content {
      height: 60%;
      margin-left: 60px;
      transition: background-color: 0.3s;
      background-color: ${sections.content.style.backgroundColor};
    }
    .footer {
      height: 20%;
      margin-left: 60px;
      transition: background-color: 0.3s;
      background-color: ${sections.footer.style.backgroundColor};
    }
    .accent {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      bottom: 20px;
      right: 20px;
      transition: background-color: 0.3s;
      background-color: ${sections.accent.style.backgroundColor};
    }
    footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      background-color: #222;
      color: #fff;
      text-align: center;
      padding: 5px 0;
      z-index: 20;
    }
    footer p {
      margin: 0;
      font-size: 12px;
    }
    .donation-links {
      margin-top: 3px;
    }
    .donation-links a {
      color: #20c997;
      text-decoration: none;
      font-size: 12px;
      margin: 0 5px;
    }
    .donation-links a:hover {
      text-decoration: underline;
    }
  `;
}

// Shared HTML content for exports
function getHtmlContent(includeStyles = true) {
  const styleTag = includeStyles ? `<style>${getCssContent()}</style>` : '';
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PageVis - Exported Design</title>
  ${styleTag}
</head>
<body>
  <h1>PageVis - Exported Design</h1>
  <div class="page-container" id="page">
    <div class="sidebar" id="sidebar"></div>
    <nav class="nav-bar" id="navBar"${navPosition === 'none' ? ' style="display: none;"' : ''}></nav>
    <div class="header" id="header"></div>
    <div class="content" id="content"></div>
    <div class="footer" id="footer"></div>
    <div class="accent" id="accent"></div>
  </div>
  <footer>
    <p>© 2025 Ken Kapptie | For educational use only | All rights reserved.</p>
    <div class="donation-links">
      <a href="https://kappter.github.io/portfolio/#projects" target="_blank">More tools like this | </a>
      <a href="https://kappter.github.io/portfolio/proposal.html">Want your own? | </a>
    </div>
  </footer>
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