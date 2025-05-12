let colors = ['#8A7B96', '#7B968A', '#968A7B', '#627C70', '#ADA397'];
const sections = {
  header: document.getElementById('header'),
  content: document.getElementById('content'),
  footer: document.getElementById('footer'),
  accent: document.getElementById('accent')
};
let selectedSection = null;
const swatchContainer = document.getElementById('swatch');
const colorInput = document.getElementById('colorInput');
const navBar = document.getElementById('navBar');
const pageContainer = document.getElementById('page');
const exportButton = document.getElementById('exportButton');
let navPosition = 'top';

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

  // Update page with colors
  sections.header.style.backgroundColor = colors[0];
  sections.content.style.backgroundColor = colors[1];
  sections.footer.style.backgroundColor = colors[2];
  sections.accent.style.backgroundColor = colors[3];
  document.body.style.backgroundColor = colors[4];

  // Add event listeners to new swatches
  document.querySelectorAll('.swatch').forEach(swatch => {
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

// Initialize with default colors and nav position
navBar.className = 'nav-bar nav-top';
updateSwatches();

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
  if (y < 50) {
    navPosition = 'top';
    navBar.className = 'nav-bar nav-top';
  } else if (x < 50) {
    navPosition = 'left';
    navBar.className = 'nav-bar nav-left';
  } else if (x > rect.width - 50) {
    navPosition = 'right';
    navBar.className = 'nav-bar nav-right';
  } else {
    navPosition = 'none';
    navBar.className = 'nav-bar';
    navBar.style.display = 'none';
  }
});

// Handle export button
exportButton.addEventListener('click', () => {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PageVis - Exported Design</title>
  <style>
    ${document.querySelector('link[href="styles.css"]').outerHTML.replace('href="styles.css"', '') +
      document.querySelector('style')?.innerHTML ||
      '' +
      `
      body {
        background-color: ${document.body.style.backgroundColor};
      }
      .header {
        background-color: ${sections.header.style.backgroundColor};
      }
      .content {
        background-color: ${sections.content.style.backgroundColor};
      }
      .footer {
        background-color: ${sections.footer.style.backgroundColor};
      }
      .accent {
        background-color: ${sections.accent.style.backgroundColor};
      }
      .nav-bar {
        ${navPosition === 'none' ? 'display: none;' : ''}
        ${navPosition === 'top' ? 'width: 100%; height: 20px; top: 0; left: 0;' : ''}
        ${navPosition === 'left' ? 'width: 20px; height: 100%; top: 0; left: 0;' : ''}
        ${navPosition === 'right' ? 'width: 20px; height: 100%; top: 0; right: 0;' : ''}
      }
    `}
  </style>
</head>
<body>
  <h1>PageVis - Exported Design</h1>
  <div class="page-container" id="page">
    <nav class="nav-bar" id="navBar"></nav>
    <div class="header" id="header"></div>
    <div class="content" id="content"></div>
    <div class="footer" id="footer"></div>
    <div class="accent" id="accent"></div>
  </div>
</body>
</html>
  `;

  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'pagevis-design.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});