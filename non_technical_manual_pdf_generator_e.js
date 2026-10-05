import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

async function generateMultiCompanyManual() {
  console.log('Generating Work Hack #4 (10-Company Matrix) manual PDF...');

  let logoBase64 = '';
  const possibleLogoPaths = [
    './templates/logo_white.png',
    './logo_white.png',
    '../The Multi-Format Content Repurpose Tool/templates/logo_white.png',
    '../What If - Scenario Calculator/templates/logo_white.png',
    '../../templates/logo_white.png'
  ];

  for (const p of possibleLogoPaths) {
    if (fs.existsSync(p)) {
      const buffer = fs.readFileSync(p);
      logoBase64 = `data:image/png;base64,${buffer.toString('base64')}`;
      break;
    }
  }

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&family=JetBrains+Mono:wght@400;600&display=swap');

  @page { size: A4 portrait; margin: 22mm 16mm 22mm 16mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Plus Jakarta Sans', sans-serif; color: #1e293b; background: #ffffff; line-height: 1.55; font-size: 9.8pt; }
  .page-break { page-break-before: always; }

  h1 { font-family: 'Space Grotesk', sans-serif; font-size: 23pt; font-weight: 800; color: #0f172a; line-height: 1.15; margin-bottom: 6px; }
  .doc-subtitle { font-size: 11pt; color: #64748b; margin-bottom: 16px; }
  h2 { font-family: 'Space Grotesk', sans-serif; font-size: 13pt; font-weight: 700; color: #0f172a; margin: 16px 0 8px 0; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 4px; }
  p { margin-bottom: 8px; color: #334155; }

  .feature-box { background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 14px 16px; margin: 14px 0; }
  .feature-title { font-size: 12pt; font-weight: 800; color: #15803d; margin-bottom: 6px; }
  .feature-desc { font-size: 9.5pt; color: #166534; line-height: 1.45; }

  .card-grid { display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; margin: 12px 0; }
  .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 12px; }
  .card-title { font-weight: 700; color: #0f172a; font-size: 9.5pt; margin-bottom: 3px; }
  .card-desc { font-size: 8.5pt; color: #64748b; line-height: 1.35; }

  .step-box { background: #f8fafc; border-left: 4px solid #0d9488; border-radius: 4px; padding: 10px 14px; margin-bottom: 10px; }
  .step-number { font-weight: 800; color: #0d9488; font-size: 8.5pt; text-transform: uppercase; letter-spacing: 0.5px; }
  .step-title { font-size: 11pt; font-weight: 700; color: #0f172a; margin-bottom: 4px; }

  pre { background: #0f172a; color: #f8fafc; font-family: 'JetBrains Mono', monospace; font-size: 7.2pt; line-height: 1.4; padding: 10px 12px; border-radius: 6px; margin: 6px 0 10px 0; white-space: pre-wrap; word-break: break-all; }
  .code-inline { background: #e2e8f0; color: #0f172a; font-weight: 700; padding: 2px 6px; border-radius: 4px; font-size: 8.5pt; font-family: 'JetBrains Mono', monospace; }

  .ai-help-banner { background: #f0f9ff; border: 1.5px dashed #0284c7; border-radius: 6px; padding: 12px 14px; margin: 16px 0 12px 0; }
  .ai-help-title { font-size: 11pt; font-weight: 800; color: #0369a1; margin-bottom: 3px; }
  .ai-help-desc { font-size: 9pt; color: #0c4a6e; line-height: 1.4; }

  .legal-box { margin-top: 14px; padding: 10px 12px; background: #f8fafc; border-top: 1.5px solid #cbd5e1; font-size: 7.5pt; color: #64748b; line-height: 1.4; }
  .legal-box strong { color: #334155; }
</style>
</head>
<body>

  <!-- PAGE 1 -->
  <h1>10-Company Competitive Matrix & Due Diligence Engine</h1>
  <div class="doc-subtitle">Conduct side-by-side competitive research, due diligence, and employer analysis on up to 10 companies locally for free.</div>

  <div class="feature-box">
    <div class="feature-title">📊 Comparative Market Intelligence & Organizational Health</div>
    <div class="feature-desc">
      Whether preparing for executive job interviews, conducting commercial due diligence, or benchmarking your startup against market rivals, evaluating companies one by one in silos hides macro patterns. This engine crawls up to 10 companies side-by-side, extracts pricing structures, hiring priorities, and leadership messaging, and synthesizes a structured comparative matrix on your local machine.
    </div>
  </div>

  <h2>1. Overview: How It Works</h2>
  <div class="card-grid">
    <div class="card">
      <div class="card-title">🏢 Up to 10 Organizations (<span class="code-inline">data/companies.json</span>)</div>
      <div class="card-desc">Define your target roster. Set your own company as the benchmark, or compare 10 peers head-to-head.</div>
    </div>
    <div class="card">
      <div class="card-title">🌐 Multi-Page Extraction</div>
      <div class="card-desc">Crawls Home, Pricing, Leadership, and Careers boards to uncover strategy, tech stacks, and culture.</div>
    </div>
    <div class="card">
      <div class="card-title">📑 Side-by-Side Matrix (<span class="code-inline">competitive_matrix.md</span>)</div>
      <div class="card-desc">Generates a clean comparative table and deep raw intelligence sections ready to review.</div>
    </div>
    <div class="card">
      <div class="card-title">🤖 Strategic Synthesis Prompt</div>
      <div class="card-desc">Outputs a ready-to-paste prompt for ChatGPT, Claude, or Gemini to extract moats, gaps, and hidden risks.</div>
    </div>
  </div>

  <h2>2. Quick-Start Setup (3 Steps)</h2>
  <div class="step-box">
    <div class="step-number">Step 1</div>
    <div class="step-title">Populate the Companies List</div>
    <p>Open <span class="code-inline">data/companies.json</span> in Notepad. Add up to 10 companies with their URLs.</p>
  </div>
  <div class="step-box">
    <div class="step-number">Step 2</div>
    <div class="step-title">Run the Multi-Crawler</div>
    <p>In Command Prompt, run <span class="code-inline">node build_dossier.js</span>. Puppeteer will crawl and compile all profiles.</p>
  </div>
  <div class="step-box">
    <div class="step-number">Step 3</div>
    <div class="step-title">Generate AI Synthesis</div>
    <p>Open <span class="code-inline">competitive_analysis_prompt.txt</span>, copy the generated prompt, and paste it into your preferred AI model.</p>
  </div>

  <div class="page-break"></div>

  <!-- PAGE 2 -->
  <h2>3. The Configuration File (<span class="code-inline">data/companies.json</span>)</h2>
  <p>Format your list of companies as follows:</p>

  <pre>[
  {
    "company": "Your Company (Optional Benchmark)",
    "is_benchmark": true,
    "homepage": "https://yourcompany.com",
    "pricing_url": "https://yourcompany.com/pricing",
    "careers_url": "https://yourcompany.com/careers",
    "about_url": "https://yourcompany.com/about"
  },
  {
    "company": "Competitor 1",
    "is_benchmark": false,
    "homepage": "https://competitor1.com",
    "pricing_url": "https://competitor1.com/pricing",
    "careers_url": "https://competitor1.com/careers",
    "about_url": "https://competitor1.com/about"
  }
]</pre>

  <h2>4. Core Use Cases</h2>
  <div class="step-box">
    <div class="step-number">Use Case A</div>
    <div class="step-title">Job Seekers & Executive Placement</div>
    <p>Compare 5 prospective employers simultaneously. The engine exposes their hiring patterns, tech stacks, and stated cultural priorities, helping you spot which company is growing versus which is struggling.</p>
  </div>

  <div class="step-box">
    <div class="step-number">Use Case B</div>
    <div class="step-title">M&A and Commercial Due Diligence</div>
    <p>Evaluate target acquisition candidates against their top 5 industry rivals. Instantly identify pricing transparency, positioning overlaps, and product roadmap trajectories.</p>
  </div>

  <div class="page-break"></div>

  <!-- PAGE 3 -->
  <h2>5. How to Customize Scrape Targets</h2>
  <p>You can add additional crawl targets—like customer review pages, documentation portals, or leadership bios—by updating the crawl calls inside <span class="code-inline">build_dossier.js</span>.</p>

  <!-- AI ASSISTANCE BANNER -->
  <div class="ai-help-banner">
    <div class="ai-help-title">✨ Always ask your preferred AI platform if you need help updating code!</div>
    <div class="ai-help-desc">
      If you want to add glassdoor/review scrapers, export results directly to an Excel sheet, or add sentiment analysis, simply copy your <span class="code-inline">build_dossier.js</span> file into ChatGPT, Claude, or Gemini with this prompt:<br><br>
      <em>"Here is my build_dossier.js multi-company engine. Please preserve all error handling, but update it so the output is saved as a structured CSV file with columns for Company, Pricing Model, and Tech Stack."</em>
    </div>
  </div>

  <!-- INDEMNITY CLAUSE -->
  <div class="legal-box">
    <strong>INDEMNITY & LIMITATION OF LIABILITY:</strong> This software, web scraping templates, and multi-company comparative scripts are provided on an "as is" and "as available" basis for general research, due diligence, career planning, and workflow automation purposes. 3Sci, its founders, and contributors make no representations or warranties of any kind regarding crawl reliability, target site availability, or legal compliance with third-party terms of service. Users assume sole responsibility for ensuring that all data extraction complies with applicable website policies, rate limits, and jurisdictional data access laws. In no event shall 3Sci or its contributors be held liable for any operational downtime, intellectual property disputes, IP blocks, or consequential damages resulting from the use or execution of this codebase.
  </div>

</body>
</html>
  `;

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });

  const pdfPath = path.join('./', '3Sci_Work_Hack_4_Competitive_Matrix_Manual.pdf');

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 0 16mm; color: #64748b; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; box-sizing: border-box;">
        <div style="display: flex; align-items: center; gap: 8px;">
          ${logoBase64 ? `<img src="${logoBase64}" style="height: 18px; width: auto; filter: invert(1);" alt="3Sci Logo">` : ''}
          <span style="font-weight: 800; color: #0f172a; letter-spacing: 0.5px;">3Sci Intelligence Systems</span>
        </div>
        <span style="text-transform: uppercase; font-size: 7pt; letter-spacing: 1px; color: #0d9488; font-weight: 700;">Open Source Workflow Manual</span>
      </div>
    `,
    footerTemplate: `
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 0 16mm; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 4px; box-sizing: border-box;">
        <span><strong>3sci.com</strong></span>
        <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
        <span>3Sci Open Source Work Hack #4</span>
      </div>
    `,
    margin: {
      top: '18mm',
      bottom: '18mm',
      left: '16mm',
      right: '16mm'
    }
  });

  await browser.close();
  console.log(`\nManual PDF generated successfully: ${path.resolve(pdfPath)}`);
}

generateMultiCompanyManual();