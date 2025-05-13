let colors = ['#8A7B96', '#FFFFFF', '#968A7B', '#627C70', '#ADA397'];
const neutralColors = ['#000000', '#FFFFFF', '#333333', '#666666', '#CCCCCC'];
const sections = {
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
const contentLibrary = document.getElementById('contentLibrary');
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
  // Update nav bar position after alignment change
  navBar.className = `nav-bar ${navPosition === 'header' ? 'nav-header' : 'nav-hidden'}`;
  navBar.style.display = navPosition === 'header' ? 'block' : 'none';
}

// Initialize with default colors, nav position, and alignment
navBar.className = 'nav-bar nav-header';
navBar.style.display = 'block';
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
  const y = e.clientY - rect.top;
  if (y < 150) {
    navPosition = 'header';
    navBar.className = 'nav-bar nav-header';
    navBar.style.display = 'block';
  } else {
    navPosition = 'none';
    navBar.className = 'nav-bar nav-hidden';
    navBar.style.display = 'none';
  }
});

// Handle content dragging and dropping
document.querySelectorAll('.content-block').forEach(block => {
  block.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.dataset.type);
    block.style.opacity = '0.5';
  });
  block.addEventListener('dragend', () => {
    block.style.opacity = '1';
  });
});
sections.content.addEventListener('dragover', e => {
  e.preventDefault();
});
sections.content.addEventListener('drop', e => {
  e.preventDefault();
  const type = e.dataTransfer.getData('text/plain');
  let contentItem;
  switch (type) {
    case 'heading':
      contentItem = document.createElement('h2');
      contentItem.textContent = 'Sample Heading';
      break;
    case 'paragraph':
      contentItem = document.createElement('p');
      contentItem.textContent = 'Sample paragraph text.';
      break;
    case 'image':
      contentItem = document.createElement('img');
      contentItem.src = 'https://via.placeholder.com/150';
      contentItem.alt = 'Sample Image';
      contentItem.style.maxWidth = '100%';
      break;
    case 'button':
      contentItem = document.createElement('button');
      contentItem.textContent = 'Click Me';
      break;
    default:
      return;
  }
  contentItem.className = 'content-item editable';
  contentItem.setAttribute('contenteditable', 'true');
  sections.content.appendChild(contentItem);
});

// Handle content editing
sections.content.addEventListener('input', e => {
  if (e.target.classList.contains('editable')) {
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
    .nav-bar {
      background-color: #333;
      transition: all 0.3s;
      position: absolute;
      z-index: 10;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      ${navPosition === 'none' ? 'display: none;' : ''}
      ${navPosition === 'header' ? `width: 100%; height: 30px; top: ${alignment === 'percentage' ? 'calc(20% + 10px)' : '20%'}; left: 0;` : ''}
    }
    .header {
      height: 20%;
      transition: background-color: 0.3s;
      background-color: ${sections.header.style.backgroundColor};
    }
    .content {
      height: 60%;
      transition: background-color: 0.3s;
      background-color: ${sections.content.style.backgroundColor};
      position: relative;
      top: 30px;
    }
    .content .content-item {
      margin: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #fff;
    }
    .footer {
      height: 20%;
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
  const contentHtml = Array.from(sections.content.children)
    .map(item => {
      if (item.tagName === 'H2') return `<h2>${item.textContent}</h2>`;
      if (item.tagName === 'P') return `<p>${item.textContent}</p>`;
      if (item.tagName === 'IMG') return `<img src="${item.src}" alt="${item.alt}" style="max-width: 100%;">`;
      if (item.tagName === 'BUTTON') return `<button>${item.textContent}</button>`;
      return '';
    })
    .join('');
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
    ${navPosition !== 'none' ? '<div class="nav-bar nav-header"></div>' : ''}
    <div class="header"></div>
    <div class="content">${contentHtml}</div>
    <div class="footer"></div>
    <div class="accent"></div>
  </div>
  <footer>
    <p>© 2025 Ken Kapptie | For educational use only | All rights reserved.</p>
    <div class="donation-links">
      <a href="#">More tools like this</a> | 
      <a href="#">Want your own?</a>
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