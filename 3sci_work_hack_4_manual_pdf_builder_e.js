import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

async function generateMultiCompanyManual() {
  console.log('Generating Work Hack #4 (10-Company Matrix & Prompt Studio) manual PDF...');

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

  h1 { font-family: 'Space Grotesk', sans-serif; font-size: 22pt; font-weight: 800; color: #0f172a; line-height: 1.15; margin-bottom: 6px; }
  .doc-subtitle { font-size: 10.5pt; color: #64748b; margin-bottom: 16px; }
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

  .studio-highlight { background: #faf5ff; border: 1.5px solid #a855f7; border-radius: 8px; padding: 12px 14px; margin: 14px 0; }
  .studio-title { font-size: 11pt; font-weight: 800; color: #7e22ce; margin-bottom: 4px; }
  .studio-desc { font-size: 9pt; color: #581c87; line-height: 1.45; }

  .ai-help-banner { background: #f0f9ff; border: 1.5px dashed #0284c7; border-radius: 6px; padding: 12px 14px; margin: 16px 0 12px 0; }
  .ai-help-title { font-size: 11pt; font-weight: 800; color: #0369a1; margin-bottom: 3px; }
  .ai-help-desc { font-size: 9pt; color: #0c4a6e; line-height: 1.4; }

  .legal-box { margin-top: 14px; padding: 10px 12px; background: #f8fafc; border-top: 1.5px solid #cbd5e1; font-size: 7.5pt; color: #64748b; line-height: 1.4; }
  .legal-box strong { color: #334155; }
</style>
</head>
<body>

  <!-- PAGE 1 -->
  <h1>Competitor Radar & Precision Prompt Studio</h1>
  <div class="doc-subtitle">Conduct side-by-side due diligence on up to 10 companies and synthesize high-conviction strategic AI prompts.</div>

  <div class="feature-box">
    <div class="feature-title">📊 Multi-Target Intelligence & Question Synthesizer</div>
    <div class="feature-desc">
      Comparing prospective employers, acquisition targets, or industry rivals across separate browser tabs creates noise. This dual-engine tool combines an interactive browser dashboard with a local automated crawler to track products, pricing models, and hiring signals across up to 10 organizations, instantly converting rough strategic questions into high-reasoning AI prompts.
    </div>
  </div>

  <h2>1. Core Architecture: What It Delivers</h2>
  <div class="card-grid">
    <div class="card">
      <div class="card-title">🏢 10-Company Dynamic Matrix</div>
      <div class="card-desc">Compare up to 10 companies simultaneously with benchmark tagging, product catalogs, and key URLs.</div>
    </div>
    <div class="card">
      <div class="card-title">✨ Precision AI Prompt Studio</div>
      <div class="card-desc">Takes your raw, unpolished questions and converts them into role-governed, zero-fluff executive prompts.</div>
    </div>
    <div class="card">
      <div class="card-title">📄 Multi-Format Export Engine</div>
      <div class="card-desc">Export formatted Microsoft Word (.DOC) files, print-optimized PDFs, Markdown tables, or companies.json.</div>
    </div>
    <div class="card">
      <div class="card-title">🔒 100% Local-First Execution</div>
      <div class="card-desc">Runs entirely in client-side HTML/JS or headless Node.js. No cloud databases, trackers, or subscription fees.</div>
    </div>
  </div>

  <h2>2. Quick-Start Workflow (3 Steps)</h2>
  <div class="step-box">
    <div class="step-number">Step 1</div>
    <div class="step-title">Open the Interactive Dashboard (<span class="code-inline">index.html</span>)</div>
    <p>Double-click <span class="code-inline">index.html</span> in your browser. Add your company roster (up to 10), list their core products and services, and set your baseline benchmark firm.</p>
  </div>
  <div class="step-box">
    <div class="step-number">Step 2</div>
    <div class="step-title">Ask Specific Questions in the Prompt Studio</div>
    <p>Scroll down to the Prompt Studio. Select your expert persona (e.g. M&A Auditor, Executive Headhunter) and output format, then type your specific doubts or questions in plain English.</p>
  </div>
  <div class="step-box">
    <div class="step-number">Step 3</div>
    <div class="step-title">Copy Prompt & Export Briefings</div>
    <p>Click <span class="code-inline">Copy Formatted Prompt</span> to feed frontier AI models (ChatGPT-4o, Claude 3.5 Sonnet, Gemini Pro). Click <span class="code-inline">Export as .DOC</span> or <span class="code-inline">Export as PDF</span> to share your dossier.</p>
  </div>

  <div class="page-break"></div>

  <!-- PAGE 2 -->
  <h2>3. The Precision Prompt Studio Deep Dive</h2>
  <div class="studio-highlight">
    <div class="studio-title">🎯 Why Generic Prompts Fail (and How the Studio Fixes It)</div>
    <div class="studio-desc">
      When users ask AI broad questions like <em>"Tell me about Competitor X,"</em> LLMs respond with generic marketing summaries. The Prompt Studio eliminates this by automatically combining four essential context layers:
    </div>
  </div>

  <div class="card-grid">
    <div class="card">
      <div class="card-title">1. Persona Governance</div>
      <div class="card-desc">Directs the model to evaluate through specific lenses: <strong>M&A Auditor</strong> (capital durability), <strong>Executive Headhunter</strong> (career risk), <strong>Contrarian Founder</strong> (moats), or <strong>SaaS CFO</strong> (pricing power).</div>
    </div>
    <div class="card">
      <div class="card-title">2. Company & Product Grounding</div>
      <div class="card-desc">Automatically injects the names, product descriptions, pricing URLs, and careers links for all 10 organizations into the prompt context.</div>
    </div>
    <div class="card">
      <div class="card-title">3. Raw User Question Synthesis</div>
      <div class="card-desc">Wraps your raw input (e.g. <em>"Are they burning cash? What should I ask during an interview?"</em>) as the primary instruction target.</div>
    </div>
    <div class="card">
      <div class="card-title">4. Structured Output Mandates</div>
      <div class="card-desc">Forces strict deliverables such as 1-10 Defensibility Scorecards, Unasked Leadership Probes, or Counter-Positioning Blueprints.</div>
    </div>
  </div>

  <h2>4. Persona & Output Matrix Reference</h2>
  <div class="step-box">
    <div class="step-number">Persona 1</div>
    <div class="step-title">Ruthless M&A Partner & Due Diligence Auditor</div>
    <p>Evaluates pricing power defensibility, hidden customer churn vulnerability, moat durability, and execution risk. Best for investment reviews and commercial due diligence.</p>
  </div>
  <div class="step-box">
    <div class="step-number">Persona 2</div>
    <div class="step-title">Elite Executive Headhunter & Career Strategist</div>
    <p>Assesses organizational stability, tech stack obsolescence, leadership turnover, and real upside. Best for candidates evaluating job offers or leadership interviews.</p>
  </div>
  <div class="step-box">
    <div class="step-number">Persona 3</div>
    <div class="step-title">Contrarian Founder & Asymmetric Moat Specialist</div>
    <p>Identifies incumbent blind spots, overpriced products, feature bloat, and white space opportunities for challengers. Best for market entry and competitive strategy.</p>
  </div>

  <div class="page-break"></div>

  <!-- PAGE 3 -->
  <h2>5. Local Node.js Background Scraper (<span class="code-inline">build_dossier.js</span>)</h2>
  <p>To run deep headless text extraction across all company URLs without opening the browser UI:</p>

  <pre>import fs from 'fs';
import puppeteer from 'puppeteer';

async function runCrawler() {
  const companies = JSON.parse(fs.readFileSync('./data/companies.json', 'utf-8'));
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const extracts = [];

  for (const c of companies.slice(0, 10)) {
    console.log(\`Crawling: \${c.company}\`);
    try {
      await page.goto(c.homepage, { waitUntil: 'domcontentloaded', timeout: 25000 });
      const text = await page.evaluate(() => {
        document.querySelectorAll('script, style, nav, footer').forEach(e => e.remove());
        return document.body.innerText.replace(/\\s+/g, ' ').trim();
      });
      extracts.push({ company: c.company, products: c.products, sample: text.slice(0, 700) });
    } catch (e) {
      extracts.push({ company: c.company, sample: '[Fallback data]' });
    }
  }
  await browser.close();
  fs.writeFileSync('competitive_matrix.md', JSON.stringify(extracts, null, 2));
}
runCrawler();</pre>

  <!-- AI ASSISTANCE BANNER -->
  <div class="ai-help-banner">
    <div class="ai-help-title">✨ Always ask your preferred AI platform if you need help updating code!</div>
    <div class="ai-help-desc">
      If you want to add automated SEC Edgar filings search, Glassdoor sentiment scrapers, or direct Excel (.xlsx) export capabilities, copy your <span class="code-inline">index.html</span> or <span class="code-inline">build_dossier.js</span> file and paste it into ChatGPT, Claude, or Gemini with this prompt:<br><br>
      <em>"Here is my Work Hack #4 code. Please preserve all existing styling and Prompt Studio functionality, but add an additional export button that generates a formatted CSV spreadsheet of the matrix."</em>
    </div>
  </div>

  <!-- INDEMNITY CLAUSE -->
  <div class="legal-box">
    <strong>INDEMNITY & LIMITATION OF LIABILITY:</strong> This software, web scraping templates, prompt generation matrices, and comparative scripts are provided on an "as is" and "as available" basis for general informational, research, due diligence, career planning, and workflow automation purposes. 3Sci, its founders, and contributors make no representations or warranties of any kind regarding crawl reliability, target site availability, financial accuracy, or legal compliance with third-party terms of service. Users assume sole responsibility for ensuring that all data extraction and monitoring comply with applicable website policies, rate limits, and jurisdictional data access laws. In no event shall 3Sci or its contributors be held liable for any career decisions, investment losses, operational downtime, intellectual property disputes, or consequential damages resulting from the use or execution of this codebase.
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