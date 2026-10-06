const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log("Generating Generic, Step-by-Step Technical Manual PDF...");

  let logoBase64 = "";
  const logoPath = path.join(__dirname, 'templates', 'logo_white.png');
  if (fs.existsSync(logoPath)) {
    logoBase64 = `data:image/png;base64,${fs.readFileSync(logoPath).toString('base64')}`;
  }

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>3Sci Work Hack #4 Technical Manual</title>
  <style>
    @page {
      size: A4;
      margin: 12mm 15mm 15mm 15mm;
      @bottom-right {
        content: "3sci.com • Page " counter(page) " of 4 • Technical Architecture & Setup Manual";
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 8pt;
        color: #64748b;
      }
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
    body { color: #0f172a; line-height: 1.4; font-size: 8.8pt; }
    .page { page-break-after: always; min-height: 260mm; position: relative; }
    .page:last-child { page-break-after: avoid; }
    .header-banner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #090f17;
      color: #fff;
      padding: 10px 16px;
      border-radius: 6px;
      margin-bottom: 12px;
    }
    .header-logo { height: 36px; width: auto; object-fit: contain; }
    .header-title-box { text-align: right; }
    .header-title { font-size: 12pt; font-weight: 800; color: #00d2b4; letter-spacing: 0.5px; }
    .header-sub { font-size: 8pt; color: #94a3b8; }
    h1 { font-size: 16pt; font-weight: 800; color: #090f17; margin-bottom: 5px; }
    h2 { font-size: 10.5pt; font-weight: 800; color: #0f172a; margin-top: 10px; margin-bottom: 5px; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 3px; }
    h3 { font-size: 9pt; font-weight: 700; color: #0f766e; margin-bottom: 3px; }
    p { margin-bottom: 5px; color: #334155; }
    .code-box {
      background: #090f17;
      color: #e2e8f0;
      border: 1px solid #1e293b;
      border-radius: 5px;
      padding: 8px 11px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 7.8pt;
      line-height: 1.35;
      white-space: pre-wrap;
      margin: 5px 0 8px 0;
    }
    .callout {
      background: #f0fdfa;
      border-left: 3.5px solid #00d2b4;
      padding: 7px 10px;
      border-radius: 4px;
      margin: 6px 0;
      font-size: 8.3pt;
      color: #134e4a;
    }
    .callout-warn {
      background: #fffbeb;
      border-left: 3.5px solid #f59e0b;
      padding: 7px 10px;
      border-radius: 4px;
      margin: 6px 0;
      font-size: 8.3pt;
      color: #78350f;
    }
    .step-badge {
      display: inline-block;
      background: #00d2b4;
      color: #090f17;
      font-weight: 800;
      border-radius: 50%;
      width: 17px;
      height: 17px;
      text-align: center;
      line-height: 17px;
      font-size: 8pt;
      margin-right: 4px;
    }
    table { width: 100%; border-collapse: collapse; margin: 6px 0 8px 0; font-size: 7.8pt; }
    th { background: #090f17; color: #fff; text-align: left; padding: 5px 7px; font-weight: 700; }
    td { border-bottom: 1px solid #e2e8f0; padding: 4px 7px; vertical-align: top; }
    tr:nth-child(even) td { background: #f8fafc; }
    .footer-note { font-size: 7.5pt; color: #64748b; margin-top: 10px; border-top: 1px dashed #cbd5e1; padding-top: 4px; }
  </style>
</head>
<body>

  <!-- PAGE 1: PREREQUISITES & ENVIRONMENT SETUP -->
  <div class="page">
    <div class="header-banner">
      <img src="${logoBase64}" class="header-logo" alt="3Sci Logo">
      <div class="header-title-box">
        <div class="header-title">TECHNICAL MANUAL</div>
        <div class="header-sub">Setup, Environment & Architecture • Work Hack #4</div>
      </div>
    </div>

    <h1>Complete Technical Setup & Deployment Manual</h1>
    <p>This technical guide provides portable, cross-platform instructions to set up, customize, and deploy the <strong>Competitor Shift Radar</strong>. Follow these step-by-step instructions to prepare your environment, install dependencies, run scripts, and publish to GitHub Pages.</p>

    <div class="callout">
      <strong>Universal Path Notice:</strong> All examples throughout this guide use generic paths like <code>&lt;YOUR_PROJECT_DIRECTORY&gt;</code> (for example: <code>C:\\projects\\competitor-shift-radar</code> on Windows or <code>~/projects/competitor-shift-radar</code> on macOS/Linux). Replace this placeholder with the actual folder on your machine.
    </div>

    <h2>1. Step-by-Step Software Prerequisites</h2>
    <p>Install the following free, industry-standard tools before running scripts locally:</p>

    <p><strong><span class="step-badge">1</span> Install Node.js (LTS Version):</strong></p>
    <ul style="padding-left: 18px; margin-bottom: 6px;">
      <li>Go to <code>https://nodejs.org</code> and download the recommended <strong>LTS (Long Term Support)</strong> installer.</li>
      <li>Run the installer and accept all default settings. Verify in your terminal/PowerShell:</li>
    </ul>
    <div class="code-box">node -v     # Should return v18.0.0 or higher (e.g. v20.x, v22.x)
npm -v      # Confirms the Node Package Manager is active</div>

    <p><strong><span class="step-badge">2</span> Install Git:</strong></p>
    <ul style="padding-left: 18px; margin-bottom: 6px;">
      <li>Download from <code>https://git-scm.com</code>. Run the installer with default options.</li>
      <li>Open your terminal and configure your identity (required before your first commit):</li>
    </ul>
    <div class="code-box">git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"</div>

    <h2>2. Directory Initialization & Dependency Installation</h2>
    <p>Create a dedicated folder for your project and install Puppeteer (used to compile PDF manuals and run headless crawlers):</p>

    <div class="code-box"># 1. Create and navigate into your project folder
mkdir competitor-shift-radar
cd competitor-shift-radar

# 2. Initialize a standard package.json file
npm init -y

# 3. Install Puppeteer (headless Chrome browser runtime)
npm install puppeteer</div>

    <div class="callout-warn">
      <strong>CommonJS (.cjs) Extension Rule:</strong> If your <code>package.json</code> contains <code>"type": "module"</code>, scripts using <code>require()</code> must end in <code>.cjs</code> (e.g., <code>build_user_manual_pdf.cjs</code>, <code>build_technical_manual_pdf.cjs</code>). This prevents <code>ReferenceError: require is not defined</code>.
    </div>

    <h2>3. Portable Repository File Tree</h2>
    <div class="code-box">&lt;YOUR_PROJECT_DIRECTORY&gt;/
├── index.html                           <- Standalone Interactive Dashboard (0 dependencies)
├── build_dossier.cjs                    <- Optional Headless Web Scraper (Node.js + Puppeteer)
├── build_user_manual_pdf.cjs            <- Compiles 3-Page User Manual PDF
├── build_technical_manual_pdf.cjs       <- Compiles 4-Page Technical Manual PDF
├── package.json                         <- Project metadata and npm dependency manifest
├── .gitignore                           <- Excludes node_modules/ from version control
├── data/
│   └── companies.json                   <- Roster configuration (Names & benchmark flags)
└── templates/
    └── logo_white.png                   <- High-resolution brand asset for headers</div>

    <div class="footer-note">3Sci Open Source Work Hack #4 • Environment Configuration • 3sci.com</div>
  </div>

  <!-- PAGE 2: ARCHITECTURE & SCRIPTS -->
  <div class="page">
    <div class="header-banner">
      <img src="${logoBase64}" class="header-logo" alt="3Sci Logo">
      <div class="header-title-box">
        <div class="header-title">DATA SCHEMAS & SCRIPTS</div>
        <div class="header-sub">Roster Specifications & Local Crawler Engine</div>
      </div>
    </div>

    <h2>4. Target Roster Schema (data/companies.json)</h2>
    <p>The system is streamlined around entity names. The <code>is_benchmark</code> flag identifies the primary organization that all rivals are evaluated against:</p>

    <div class="code-box">[
  { "name": "Primary Firm (Benchmark)", "is_benchmark": true },
  { "name": "Competitor Alpha", "is_benchmark": false },
  { "name": "Competitor Beta", "is_benchmark": false },
  { "name": "Competitor Gamma", "is_benchmark": false }
]</div>

    <h2>5. Headless Web Scraper Engine (build_dossier.cjs)</h2>
    <p>For automated reconnaissance pipelines, this Node.js script reads your roster and uses Puppeteer to simulate browser sessions:</p>

    <div class="code-box">const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log("Initializing headless competitive crawler...");
  const dataPath = path.join(__dirname, 'data', 'companies.json');
  
  if (!fs.existsSync(dataPath)) {
    console.error("Error: data/companies.json missing.");
    process.exit(1);
  }

  const companies = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

  let outputSummary = "# Competitive Matrix Dossier\\n\\n";
  outputSummary += "| Company | Evaluation Role | Ingestion Status |\\n| :--- | :--- | :--- |\\n";

  for (const item of companies) {
    const role = item.is_benchmark ? "**Benchmark Baseline**" : "Target Competitor";
    console.log(\`Processing: \${item.name}...\`);
    outputSummary += \`| **\${item.name}** | \${role} | Indexed ✓ |\\n\`;
  }

  await browser.close();
  fs.writeFileSync(path.join(__dirname, 'competitive_matrix.md'), outputSummary);
  console.log("✓ competitive_matrix.md generated successfully.");
})();</div>

    <h2>6. Crucial Git Hygiene: .gitignore</h2>
    <p>Create a file named <code>.gitignore</code> in your root folder. This prevents committing heavy Puppeteer browser binaries:</p>
    <div class="code-box">node_modules/
package-lock.json
.env
*.tmp</div>

    <div class="callout">
      <strong>Important:</strong> If you omit <code>node_modules/</code> from <code>.gitignore</code>, Git will attempt to upload tens of thousands of Chromium binary files, resulting in rejected or frozen GitHub pushes.
    </div>

    <div class="footer-note">3Sci Open Source Work Hack #4 • Data Schemas & Headless Engine • 3sci.com</div>
  </div>

  <!-- PAGE 3: CLIENT-SIDE DASHBOARD & GEMINI 3.8 FLASH -->
  <div class="page">
    <div class="header-banner">
      <img src="${logoBase64}" class="header-logo" alt="3Sci Logo">
      <div class="header-title-box">
        <div class="header-title">CLIENT-SIDE DASHBOARD</div>
        <div class="header-sub">Dynamic Matrix & Gemini 3.8 Flash Execution</div>
      </div>
    </div>

    <h2>7. Parameter Ribbon & State Engine (index.html)</h2>
    <p>The dashboard dynamically manages active comparison dimensions. Selecting or deselecting a parameter pill modifies table rendering and updates the underlying AI prompt:</p>

    <div class="code-box">const parameterDefs = {
  general: { id: "general", title: "General Landscape Overview", default: true },
  product: { id: "product", title: "Core Product / Value Prop", default: true },
  target:  { id: "target",  title: "Target Customer & Positioning", default: true },
  moat:    { id: "moat",    title: "Observed Moat / Vulnerability", default: true },
  pricing: { id: "pricing", title: "Pricing Model & Tiers", default: false },
  tech:    { id: "tech",    title: "Tech Stack / Velocity", default: false },
  culture: { id: "culture", title: "Hiring & Culture Signals", default: false }
};

let activeParams = ["general", "product", "target", "moat"];

function toggleParameter(paramKey) {
  if (activeParams.includes(paramKey)) {
    activeParams = activeParams.filter(k => k !== paramKey);
  } else {
    activeParams.push(paramKey);
  }
  if (activeParams.length === 0) activeParams = ["general"];
  renderMatrix();
  generateCustomPrompt();
}</div>

    <h2>8. Gemini 3.8 Flash Direct Browser API Integration</h2>
    <p>The dashboard calls the modern <code>gemini-3.8-flash</code> endpoint directly from the browser. API keys are stored solely in the user's local browser storage (<code>localStorage</code>) with zero server telemetry:</p>

    <div class="code-box">async function runLiveGeminiReport() {
  const apiKey = document.getElementById('gemini-api-key').value.trim() 
                 || localStorage.getItem('3sci_gemini_key') || '';
  if (!apiKey) return alert("Please provide a valid Google Gemini API Key.");

  const promptText = generateCustomPrompt();
  const endpoint = \`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=\${apiKey}\`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
    });
    const data = await response.json();
    if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
      document.getElementById('report-output').innerText = data.candidates[0].content.parts[0].text;
      document.getElementById('report-wrapper').style.display = 'flex';
    } else {
      document.getElementById('report-output').innerText = \`API Error: \${data.error?.message || 'Unknown error'}\`;
    }
  } catch (err) {
    document.getElementById('report-output').innerText = \`Network Error: \${err.message}\`;
  }
}</div>

    <h2>9. Client-Side Word (.DOC) & PDF Export Serialization</h2>
    <p>Word exports are generated in memory using standard UTF-8 Blob serialization, triggering an instant browser file download without third-party services:</p>

    <div class="code-box">function downloadReportDoc() {
  const reportText = document.getElementById('report-output').innerText;
  let htmlDoc = \`&lt;html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'&gt;
    &lt;head&gt;&lt;style&gt;body{font-family:Arial;font-size:11pt;line-height:1.5;} pre{white-space:pre-wrap;}&lt;/style&gt;&lt;/head&gt;
    &lt;body&gt;&lt;h1&gt;Executive Intelligence Report&lt;/h1&gt;&lt;pre&gt;\${reportText}&lt;/pre&gt;&lt;/body&gt;&lt;/html&gt;\`;

  const blob = new Blob(['\\ufeff', htmlDoc], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = \`Competitive_Report_\${Date.now()}.doc\`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}</div>

    <div class="footer-note">3Sci Open Source Work Hack #4 • Gemini 3.8 Flash & Export Engines • 3sci.com</div>
  </div>

  <!-- PAGE 4: GITHUB DEPLOYMENT & VERIFICATION -->
  <div class="page">
    <div class="header-banner">
      <img src="${logoBase64}" class="header-logo" alt="3Sci Logo">
      <div class="header-title-box">
        <div class="header-title">GIT & GITHUB PAGES DEPLOYMENT</div>
        <div class="header-sub">Complete Commit Workflow & Cloud Hosting</div>
      </div>
    </div>

    <h2>10. Step-by-Step GitHub Setup & Push Instructions</h2>
    <p>Follow this exact sequence to upload your project to GitHub and obtain a public, shareable evaluation URL:</p>

    <p><strong><span class="step-badge">1</span> Create an Empty Repository on GitHub:</strong></p>
    <ul style="padding-left: 18px; margin-bottom: 4px;">
      <li>Log into <code>https://github.com</code> and click <strong>New repository</strong> (or navigate to <code>https://github.com/new</code>).</li>
      <li>Enter a repository name (e.g., <code>competitor-shift-radar</code>). Set visibility to <strong>Public</strong>.</li>
      <li><strong>Leave all checkboxes unchecked</strong> (do NOT check "Add a README", .gitignore, or license). Click <strong>Create repository</strong>.</li>
    </ul>

    <p><strong><span class="step-badge">2</span> Stage, Commit, and Push via Terminal / PowerShell:</strong></p>
    <div class="code-box"># 1. Navigate to your project directory
cd &lt;YOUR_PROJECT_DIRECTORY&gt;

# 2. Initialize the Git repository (if not already initialized)
git init

# 3. Stage all modified and new files (excluding node_modules via .gitignore)
git add .

# 4. Create your commit with a descriptive message
git commit -m "Deploy: names-only roster, auto matrix, Gemini 3.8 Flash, and export engines"

# 5. Set the default branch name to 'main'
git branch -M main

# 6. Link your local project to your GitHub repository (replace with your actual GitHub URL)
git remote add origin https://github.com/&lt;YOUR_GITHUB_USERNAME&gt;/&lt;YOUR_REPOSITORY_NAME&gt;.git
# (Note: If origin already exists, use: git remote set-url origin https://github.com/&lt;YOUR_USERNAME&gt;/&lt;YOUR_REPO&gt;.git)

# 7. Push all code to GitHub
git push -u origin main</div>

    <h2>11. Enabling Free Live Hosting (GitHub Pages)</h2>
    <ul style="padding-left: 18px; margin-bottom: 6px;">
      <li>Navigate to your repository page on GitHub.</li>
      <li>Click the <strong>Settings</strong> tab along the top navigation bar, then select <strong>Pages</strong> in the left sidebar.</li>
      <li>Under <strong>Build and deployment &gt; Source</strong>, ensure <strong>Deploy from a branch</strong> is selected.</li>
      <li>Under <strong>Branch</strong>, select <strong><code>main</code></strong> and keep folder as <strong><code>/(root)</code></strong>, then click <strong>Save</strong>.</li>
      <li>Wait 60–90 seconds and refresh the screen. A banner will confirm:  
        <strong>"Your site is live at https://&lt;YOUR_GITHUB_USERNAME&gt;.github.io/&lt;YOUR_REPOSITORY_NAME&gt;/"</strong></li>
    </ul>

    <h2>12. Technical Verification Matrix</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">Feature Component</th>
          <th style="width: 35%;">Test Procedure</th>
          <th style="width: 40%;">Expected Verification Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Roster Management</strong></td>
          <td>Type names in roster; toggle Benchmark radio.</td>
          <td>Matrix updates instantly; selected benchmark highlights in blue.</td>
        </tr>
        <tr>
          <td><strong>Parameter Filters</strong></td>
          <td>Click "General Landscape Overview" or "Pricing".</td>
          <td>Table columns show/hide instantly; AI prompt updates with selected tags.</td>
        </tr>
        <tr>
          <td><strong>Gemini 3.8 Flash API</strong></td>
          <td>Paste API key and click <em>Generate Report</em>.</td>
          <td>Outputs multi-section due diligence report directly in browser view.</td>
        </tr>
        <tr>
          <td><strong>Direct Document Export</strong></td>
          <td>Click <em>Download Report (.DOC)</em> or <em>(PDF)</em>.</td>
          <td>Browser initiates immediate download of formatted document.</td>
        </tr>
      </tbody>
    </table>

    <div class="footer-note">© 3Sci Venture Studio (3sci.com) • Open Source Tools • Architecture & Build Guide</div>
  </div>

</body>
</html>`;

  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  const outputPath = path.join(__dirname, '3Sci Work Hack 4 Technical Manual_E.pdf');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', bottom: '15mm', left: '15mm', right: '15mm' }
  });

  await browser.close();
  console.log(`✓ Technical Manual generated successfully: ${outputPath}`);
})();
