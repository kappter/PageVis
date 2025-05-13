let colors = ['#8A7B96', '#FFFFFF', '#968A7B', '#627C70', '#ADA397'];
const neutralColors = ['#000000', '#FFFFFF', '#333333', '#666666', '#CCCCCC'];
const sections = {
  background: document.getElementById('page'),
  header: document.getElementById('header'),
  content: document.getElementById('content'),
  footer: document.getElementById('footer')
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
let resizingElement = null;

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
  sections.content.style.backgroundColor = colors[1];
  sections.footer.style.backgroundColor = colors[2];

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
  // Reset positions to default when alignment changes
  sections.header.style.top = '0';
  sections.header.style.left = '0';
  sections.header.style.width = '100%';
  sections.content.style.top = '20%';
  sections.content.style.left = '0';
  sections.content.style.width = '100%';
  sections.footer.style.top = '80%';
  sections.footer.style.left = '0';
  sections.footer.style.width = '100%';
  navBar.className = 'nav-bar nav-header';
  navPosition = 'header';
}

// Initialize with default colors, nav position, and alignment
navBar.className = 'nav-bar nav-header';
updateSwatches();
updateAlignment();

// Handle section selection
Object.keys(sections).forEach(key => {
  sections[key].addEventListener('click', (e) => {
    if (!e.target.classList.contains('resize-handle')) {
      selectedSection = key;
      Object.values(sections).forEach(section => section.style.border = 'none');
      sections[key].style.border = '2px solid #000';
    }
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

// Handle dragging for components
const draggables = [pageContainer, sections.header, sections.content, sections.footer, navBar];
draggables.forEach(element => {
  element.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', element.id);
    element.style.opacity = '0.5';
  });
  element.addEventListener('dragend', () => {
    element.style.opacity = '1';
  });
});

pageContainer.addEventListener('dragover', e => {
  e.preventDefault();
});

pageContainer.addEventListener('drop', e => {
  e.preventDefault();
  const id = e.dataTransfer.getData('text/plain');
  const element = document.getElementById(id);
  const rect = pageContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const isMobile = window.innerWidth <= 480;

  if (element.id === 'navBar') {
    // Nav bar positioning
    if (y < (isMobile ? 90 : 100)) {
      navPosition = 'header';
      element.className = 'nav-bar nav-header';
      element.style.display = 'block';
      element.style.top = (isMobile ? 70 : 80) + 'px';
      element.style.left = '0';
    } else if (x < 50) {
      navPosition = 'left';
      element.className = 'nav-bar nav-left';
      element.style.display = 'block';
      element.style.top = '0';
      element.style.left = '0';
    } else if (x > rect.width - 50) {
      navPosition = 'right';
      element.className = 'nav-bar nav-right';
      element.style.display = 'block';
      element.style.top = '0';
      element.style.right = '0';
      element.style.left = '';
    } else {
      navPosition = 'none';
      element.className = 'nav-bar';
      element.style.display = 'none';
    }
  } else {
    // Other components: free positioning
    const maxX = rect.width - element.offsetWidth;
    const maxY = rect.height - element.offsetHeight;
    element.style.position = 'absolute';
    element.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
    element.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
  }
});

// Handle resizing
document.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('resize-handle')) {
    resizingElement = e.target.parentElement;
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
  }
});

function resize(e) {
  if (resizingElement) {
    const rect = pageContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const minSize = 50;
    const maxWidth = rect.width * 0.9;
    const maxHeight = rect.height * 0.9;
    const newWidth = Math.max(minSize, Math.min(x - parseFloat(resizingElement.style.left || 0), maxWidth));
    const newHeight = Math.max(minSize, Math.min(y - parseFloat(resizingElement.style.top || 0), maxHeight));
    resizingElement.style.width = newWidth + 'px';
    resizingElement.style.height = newHeight + 'px';
  }
}

function stopResize() {
  resizingElement = null;
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
}

// Handle alignment selection
alignmentSelect.addEventListener('change', () => {
  alignment = alignmentSelect.value;
  updateAlignment();
});

// Shared CSS content for exports
function getCssContent() {
  const isMobile = window.innerWidth <= 480;
  const navHeight = isMobile ? 30 : 40;
  const navTop = isMobile ? 70 : 80;
  const navWidth = isMobile ? 30 : 40;
  return `
    body {
      font-family: 'Inter', Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${pageContainer.style.backgroundColor};
      margin: 0;
      padding: 10px;
      min-height: 100vh;
    }
    .page-container {
      background-color: ${sections.background.style.backgroundColor};
      border-radius: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      margin-bottom: 10px;
      cursor: move;
      position: relative;
      ${alignment === 'center' ? `width: ${isMobile ? '250px' : '300px'}; height: ${isMobile ? '350px' : '400px'}; position: static; margin: 0 auto;` : ''}
      ${alignment === 'percentage' ? `width: ${isMobile ? '90vw' : '80vw'}; height: ${isMobile ? '70vh' : '80vh'}; max-width: ${isMobile ? '400px' : '600px'}; max-height: ${isMobile ? '600px' : '800px'}; margin: 0 auto;` : ''}
      ${sections.background.style.left ? `left: ${sections.background.style.left};` : ''}
      ${sections.background.style.top ? `top: ${sections.background.style.top};` : ''}
    }
    .nav-bar {
      background-color: #333;
      transition: all 0.3s;
      position: absolute;
      z-index: 10;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      ${navPosition === 'none' ? 'display: none;' : ''}
      ${navPosition === 'header' ? `width: 100%; height: ${navHeight}px; top: ${alignment === 'percentage' ? 'calc(20%)' : `${navTop}px`}; left: 0;` : ''}
      ${navPosition === 'left' ? `width: ${navWidth}px; height: 100%; top: 0; left: 0;` : ''}
      ${navPosition === 'right' ? `width: ${navWidth}px; height: 100%; top: 0; right: 0;` : ''}
    }
    .header {
      height: ${sections.header.style.height || '20%'};
      width: ${sections.header.style.width || '100%'};
      transition: background-color: 0.3s;
      background-color: ${sections.header.style.backgroundColor};
      position: absolute;
      top: ${sections.header.style.top || '0'};
      left: ${sections.header.style.left || '0'};
    }
    .content {
      height: ${sections.content.style.height || '60%'};
      width: ${sections.content.style.width || '100%'};
      transition: background-color: 0.3s;
      background-color: ${sections.content.style.backgroundColor};
      position: absolute;
      top: ${sections.content.style.top || '20%'};
      left: ${sections.content.style.left || '0'};
    }
    .footer {
      height: ${sections.footer.style.height || '20%'};
      width: ${sections.footer.style.width || '100%'};
      transition: background-color: 0.3s;
      background-color: ${sections.footer.style.backgroundColor};
      position: absolute;
      top: ${sections.footer.style.top || '80%'};
      left: ${sections.footer.style.left || '0'};
    }
    .resize-handle {
      width: 10px;
      height: 10px;
      background-color: #20c997;
      position: absolute;
      bottom: 0;
      right: 0;
      cursor: nwse-resize;
      border-radius: 2px;
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
    <nav class="nav-bar" id="navBar"${navPosition === 'none' ? ' style="display: none;"' : ''}></nav>
    <div class="header" id="header"></div>
    <div class="content" id="content"></div>
    <div class="footer" id="footer"></div>
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