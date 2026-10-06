const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log("Generating General User Manual PDF...");

  // Load logo as base64 for reliable PDF rendering
  let logoBase64 = "";
  const logoPath = path.join(__dirname, 'templates', 'logo_white.png');
  if (fs.existsSync(logoPath)) {
    logoBase64 = `data:image/png;base64,${fs.readFileSync(logoPath).toString('base64')}`;
  }

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>3Sci Work Hack #4 General User Manual</title>
  <style>
    @page {
      size: A4;
      margin: 14mm 16mm 16mm 16mm;
      @bottom-right {
        content: "3sci.com • Page " counter(page) " of 3 • 3Sci Open Source Work Hack #4";
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 8pt;
        color: #64748b;
      }
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
    body { color: #0f172a; line-height: 1.45; font-size: 9.5pt; }
    
    .page { page-break-after: always; min-height: 260mm; position: relative; }
    .page:last-child { page-break-after: avoid; }

    .header-banner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #090f17;
      color: #fff;
      padding: 12px 18px;
      border-radius: 6px;
      margin-bottom: 16px;
    }
    .header-logo { height: 38px; width: auto; object-fit: contain; }
    .header-title-box { text-align: right; }
    .header-title { font-size: 13pt; font-weight: 800; color: #00d2b4; letter-spacing: 0.5px; }
    .header-sub { font-size: 8pt; color: #94a3b8; }

    h1 { font-size: 18pt; font-weight: 800; color: #090f17; margin-bottom: 6px; }
    h2 { font-size: 12pt; font-weight: 800; color: #0f172a; margin-top: 14px; margin-bottom: 8px; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 4px; }
    h3 { font-size: 10pt; font-weight: 700; color: #0f766e; margin-bottom: 4px; }
    p { margin-bottom: 8px; color: #334155; }

    .card { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px 14px; margin-bottom: 10px; }
    .card-accent { border-left: 4px solid #00d2b4; }
    .card-gemini { border-left: 4px solid #10b981; }

    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px; }

    table { width: 100%; border-collapse: collapse; margin: 10px 0 14px 0; font-size: 8.5pt; }
    th { background: #090f17; color: #fff; text-align: left; padding: 7px 9px; font-weight: 700; }
    td { border-bottom: 1px solid #e2e8f0; padding: 6px 9px; vertical-align: top; color: #1e293b; }
    tr:nth-child(even) td { background: #f8fafc; }

    .tag { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-size: 7.5pt; font-weight: 700; }
    .footer-note { font-size: 8pt; color: #64748b; margin-top: 16px; border-top: 1px dashed #cbd5e1; padding-top: 6px; }
  </style>
</head>
<body>

  <!-- PAGE 1: SYSTEM OVERVIEW & WORKFLOW -->
  <div class="page">
    <div class="header-banner">
      <img src="${logoBase64}" class="header-logo" alt="3Sci Logo">
      <div class="header-title-box">
        <div class="header-title">COMPETITOR SHIFT RADAR</div>
        <div class="header-sub">General User Manual • Work Hack #4</div>
      </div>
    </div>

    <h1>Executive Competitive Radar & Due Diligence</h1>
    <p>The <strong>3Sci Competitor Shift Radar</strong> is a zero-setup, client-side intelligence platform designed for founders, investment partners, and corporate strategists. It converts a raw roster of competitor names into a multi-parameter comparative matrix and complete executive reports without requiring tedious manual data entry.</p>

    <h2>1. The 3-Step Rapid Workflow</h2>
    <div class="grid-2">
      <div class="card card-accent">
        <h3>Step 1: Enter Company Names</h3>
        <p>Type company names into the left-hand roster (up to 10 entities). Mark one firm as the <strong>Benchmark Firm</strong>. All other targets will be systematically benchmarked against it.</p>
      </div>
      <div class="card card-accent">
        <h3>Step 2: Configure Dimensions</h3>
        <p>Use the parameter ribbon to choose comparison lenses: <em>General Landscape Overview</em>, <em>Core Product</em>, <em>Target Customer</em>, <em>Observed Moat</em>, <em>Pricing</em>, <em>Tech Stack</em>, or <em>Culture</em>.</p>
      </div>
    </div>

    <div class="card card-gemini">
      <h3>Step 3: Generate Live Reports or Export AI Prompts</h3>
      <p>Execute instant due diligence briefings natively in-browser using <strong>Gemini 3.8 Flash</strong>, or copy the dynamically assembled prompt into ChatGPT, Claude, or Perplexity. Export the final intelligence brief as a formatted Word Document (<strong>.DOC</strong>) or print-ready <strong>PDF</strong> with one click.</p>
    </div>

    <h2>2. Configurable Comparison Dimensions</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 28%;">Parameter Dimension</th>
          <th style="width: 32%;">Analytical Focus</th>
          <th style="width: 40%;">Primary Strategic Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>★ General Landscape Overview</strong></td>
          <td>High-level categorization and market stance</td>
          <td>Executive summaries without cluttered detail; ideal for fast stakeholder briefings.</td>
        </tr>
        <tr>
          <td><strong>Core Product / Value Prop</strong></td>
          <td>Flagship offering and unique differentiation</td>
          <td>Identifies direct vs. adjacent overlaps in operational deliverables.</td>
        </tr>
        <tr>
          <td><strong>Target Customer & Positioning</strong></td>
          <td>Buyer personas, mid-market vs. enterprise</td>
          <td>Pinpoints customer segments neglected by competitors.</td>
        </tr>
        <tr>
          <td><strong>Observed Moat / Vulnerability</strong></td>
          <td>Defensibility, IP, distribution vs. churn risks</td>
          <td>Reveals where competitors are vulnerable to swift counter-positioning.</td>
        </tr>
        <tr>
          <td><strong>Pricing Strategy & Tiers</strong></td>
          <td>SaaS subscription tiers vs. value-based rates</td>
          <td>Exposes pricing power gaps and monetization rigidity across rivals.</td>
        </tr>
        <tr>
          <td><strong>Tech Stack / Velocity</strong></td>
          <td>Modern AI-enabled architecture vs. legacy tech</td>
          <td>Measures rapid engineering delivery speed and disruption resilience.</td>
        </tr>
      </tbody>
    </table>

    <div class="footer-note">
      <strong>Data Privacy Guarantee:</strong> 100% Client-Side Architecture. Target rosters and API keys are stored solely in your local browser sandbox. No user telemetry is tracked.
    </div>
  </div>

  <!-- PAGE 2: EXECUTION & REPORT WORKFLOWS -->
  <div class="page">
    <div class="header-banner">
      <img src="${logoBase64}" class="header-logo" alt="3Sci Logo">
      <div class="header-title-box">
        <div class="header-title">DUAL INTELLIGENCE WORKFLOWS</div>
        <div class="header-sub">Gemini 3.8 Flash Native Runner & Prompt Studio</div>
      </div>
    </div>

    <h2>3. Native In-Browser Execution vs. Prompt Studio</h2>
    <p>The workspace accommodates both closed-loop internal execution and multi-model external workflows.</p>

    <div class="grid-2">
      <div class="card card-gemini">
        <h3>Option A: Native Gemini 3.8 Flash Runner</h3>
        <p><strong>Target User:</strong> Strategists who want instant executive results without switching browser windows or managing multi-app copy-pasting.</p>
        <ul style="padding-left: 16px; margin-bottom: 6px; font-size: 8.5pt; color: #334155;">
          <li>Uses Google's frontier <code>gemini-3.8-flash</code> reasoning model.</li>
          <li>Enter a free API key from <em>aistudio.google.com</em>.</li>
          <li>Key is securely stored in local browser <code>localStorage</code>.</li>
          <li>Click <strong>⚡ Generate Report</strong> for an in-place brief.</li>
        </ul>
      </div>

      <div class="card card-accent">
        <h3>Option B: Precision Prompt Studio</h3>
        <p><strong>Target User:</strong> Users utilizing paid ChatGPT Plus, Claude Team, or Perplexity Pro environments.</p>
        <ul style="padding-left: 16px; margin-bottom: 6px; font-size: 8.5pt; color: #334155;">
          <li>Automatically compiles custom user questions into an executive prompt.</li>
          <li>Embeds the 10-company matrix and selected active parameters.</li>
          <li>Applies structured due diligence personas and grading rubrics.</li>
          <li>Click <strong>Copy Prompt for a Report</strong> and paste directly.</li>
        </ul>
      </div>
    </div>

    <h2>4. Export Capabilities & Deliverables</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">Export Format</th>
          <th style="width: 35%;">Generated Output Contents</th>
          <th style="width: 40%;">Recommended Use Case</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>📄 Download Report (.DOC)</strong></td>
          <td>Word-compatible briefing containing executive narrative, defensibility scorecard, and competitive findings.</td>
          <td>Direct editing, client proposals, investment memos, and board deck preparation.</td>
        </tr>
        <tr>
          <td><strong>🖨️ Download Report (PDF)</strong></td>
          <td>Clean, printer-formatted executive brief with headers, clean typography, and zero UI clutter.</td>
          <td>Formal distribution to executive committees, advisory boards, and co-founders.</td>
        </tr>
        <tr>
          <td><strong>💾 Save JSON Configuration</strong></td>
          <td>Raw <code>companies.json</code> roster including benchmark flags.</td>
          <td>Saving target rosters for future sessions or headless crawler pipelines.</td>
        </tr>
      </tbody>
    </table>

    <h2>5. Evaluation Persona Angles</h2>
    <div class="card">
      <p><strong>• M&A Due Diligence & Commercial Defensibility:</strong> Forensic analysis focusing on margin stability, customer retention moats, and execution barriers.</p>
      <p><strong>• Founder Strategy & Positioning Gaps:</strong> Highlights asymmetric market openings, commoditized competitor features, and pricing white space.</p>
      <p><strong>• Executive Career Health & Hiring Velocity:</strong> Evaluates organizational momentum, tech stack modernness, and turnover risks for job seekers.</p>
    </div>

    <div class="footer-note">
      3Sci Competitor Shift Radar • Built for Google Gemini 3.8 Flash • Zero Server Telemetry
    </div>
  </div>

  <!-- PAGE 3: PLAYBOOKS & STRATEGIC METHODOLOGY -->
  <div class="page">
    <div class="header-banner">
      <img src="${logoBase64}" class="header-logo" alt="3Sci Logo">
      <div class="header-title-box">
        <div class="header-title">STRATEGIC PLAYBOOKS</div>
        <div class="header-sub">Actionable Frameworks & Decision Rubrics</div>
      </div>
    </div>

    <h2>6. Executive Playbooks by Role</h2>

    <div class="card card-accent">
      <h3>For Founders & CEOs: Asymmetric Counter-Positioning</h3>
      <p>Incumbents cannot rapidly match specialized offerings without cannibalizing existing revenue models. Run the radar with your firm as Benchmark against 4–6 market leaders using the <em>General Landscape</em>, <em>Observed Moat</em>, and <em>Pricing Model</em> parameters. Use the generated brief to identify structural blind spots and craft high-converting pitch narratives.</p>
    </div>

    <div class="card card-gemini">
      <h3>For Investors & M&A Partners: Pre-LOI Defensibility Audits</h3>
      <p>Before issuing a Letter of Intent or committing venture capital, benchmark the acquisition target against its direct competitive landscape. Use the <strong>M&A Due Diligence</strong> angle with custom questions probing customer churn and platform lock-in. Export the resulting <code>.DOC</code> file directly into your investment committee packet.</p>
    </div>

    <div class="card card-accent">
      <h3>For Executive Job Seekers: Interview Leverage & Risk Mitigation</h3>
      <p>Avoid taking leadership roles at stagnating firms with legacy tech debt. Select the <strong>Executive Career Health</strong> angle and review the <em>Tech Stack / Velocity</em> and <em>Hiring Signals</em> parameters. The generated report provides 3 sharp, unasked operational questions to pose to the CEO during final interview rounds.</p>
    </div>

    <h2>7. Troubleshooting & FAQ</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 30%;">Scenario / Symptom</th>
          <th style="width: 70%;">Resolution Step</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Gemini API Error</strong></td>
          <td>Verify that your API key is active from <em>aistudio.google.com</em> and that your network permits outbound HTTPS traffic to Google Generative Language APIs.</td>
        </tr>
        <tr>
          <td><strong>Matrix Looks Cluttered</strong></td>
          <td>De-select detailed parameter pills and toggle only <strong>★ General Landscape Overview</strong> for a simplified high-level strategic summary.</td>
        </tr>
        <tr>
          <td><strong>Export File Blocked</strong></td>
          <td>Allow browser pop-ups for local files or GitHub Pages to let the generated Word document and print dialog download automatically.</td>
        </tr>
      </tbody>
    </table>

    <div class="footer-note">
      © 3Sci Venture Studio (3sci.com) • Open Source Strategic Tools. Licensed for founder and enterprise use.
    </div>
  </div>

</body>
</html>
  `;

  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  const outputPath = path.join(__dirname, '3Sci Work Hack 4 General User Manual_E.pdf');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '14mm', bottom: '16mm', left: '16mm', right: '16mm' }
  });

  await browser.close();
  console.log(`✓ User Manual generated successfully: ${outputPath}`);
})();