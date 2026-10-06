const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log("Generating Updated General User Manual PDF (18 Angles, Dossier Exports)...");

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
  <title>3Sci Work Hack #4 General User Manual</title>
  <style>
    @page {
      size: A4;
      margin: 14mm 16mm 16mm 16mm;
      @bottom-right {
        content: "3sci.com • Page " counter(page) " of 3 • 3Sci Universal Intelligence Engine";
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 8pt;
        color: #64748b;
      }
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
    body { color: #0f172a; line-height: 1.45; font-size: 9.2pt; }
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
    h1 { font-size: 17pt; font-weight: 800; color: #090f17; margin-bottom: 6px; }
    h2 { font-size: 11.5pt; font-weight: 800; color: #0f172a; margin-top: 14px; margin-bottom: 8px; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 4px; }
    h3 { font-size: 9.8pt; font-weight: 700; color: #0f766e; margin-bottom: 4px; }
    p { margin-bottom: 8px; color: #334155; }
    .card { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px 14px; margin-bottom: 10px; }
    .card-accent { border-left: 4px solid #00d2b4; }
    .card-gemini { border-left: 4px solid #10b981; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px; }
    table { width: 100%; border-collapse: collapse; margin: 8px 0 12px 0; font-size: 8.2pt; }
    th { background: #090f17; color: #fff; text-align: left; padding: 7px 9px; font-weight: 700; }
    td { border-bottom: 1px solid #e2e8f0; padding: 6px 9px; vertical-align: top; color: #1e293b; }
    tr:nth-child(even) td { background: #f8fafc; }
    .footer-note { font-size: 8pt; color: #64748b; margin-top: 14px; border-top: 1px dashed #cbd5e1; padding-top: 6px; }
  </style>
</head>
<body>

  <!-- PAGE 1: UNIVERSAL RADAR WORKFLOW -->
  <div class="page">
    <div class="header-banner">
      <img src="${logoBase64}" class="header-logo" alt="3Sci Logo">
      <div class="header-title-box">
        <div class="header-title">UNIVERSAL COMPARATIVE RADAR</div>
        <div class="header-sub">General User Manual • Work Hack #4</div>
      </div>
    </div>

    <h1>Universal Comparative Intelligence & Executive Dossier Engine</h1>
    <p>The <strong>3Sci Competitor Shift Radar</strong> is a zero-telemetry, client-side intelligence suite built for corporate strategists, M&A partners, procurement leads, and analysts. It transforms raw entity rosters into authentic, AI-differentiated comparative matrices and formatted executive dossiers covering 18 domain-specific analytical frameworks.</p>

    <h2>1. The 3-Step Rapid Intelligence Workflow</h2>
    <div class="grid-2">
      <div class="card card-accent">
        <h3>Step 1: Set Up Roster & API Key</h3>
        <p>Enter your free Google Gemini API Key in the top header bar (stored locally in browser storage). Add up to 10 entities (enterprises, startups, political figures, sports icons, or authors). Mark one as the <strong>★ Primary / Benchmark Baseline</strong>.</p>
      </div>
      <div class="card card-accent">
        <h3>Step 2: Generate Differentiated Matrix</h3>
        <p>Toggle your active comparison parameters (e.g., <em>General Landscape Overview</em>, <em>Core Product</em>, <em>Pricing Tiers</em>). Click <strong>⚡ Populate Matrix with AI</strong> for authentic intelligence, or click into any table cell to edit directly.</p>
      </div>
    </div>

    <div class="card card-gemini">
      <h3>Step 3: Executive Report Generation & Dissemination</h3>
      <p>Select from 18 analytical angles (e.g., <em>Product & Price Comparisons</em>, <em>SWOT</em>, <em>Political Stance</em>, <em>Personalities & Achievements</em>). Click <strong>⚡ Generate Report using AI</strong> to run Gemini 3.8 Flash, or <strong>📋 Generate Prompt</strong> to copy formatted prompts for ChatGPT or Claude. Export instantly to <strong>.DOC</strong> or print-ready <strong>PDF</strong>.</p>
    </div>

    <h2>2. Configurable Matrix Comparison Dimensions</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 28%;">Parameter Dimension</th>
          <th style="width: 32%;">Analytical Focus</th>
          <th style="width: 40%;">Strategic Utility</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>★ General Landscape Overview</strong></td>
          <td>High-level categorization & strategic posture</td>
          <td>Executive overview without granular detail; ideal for board briefings.</td>
        </tr>
        <tr>
          <td><strong>Core Product / Value Prop</strong></td>
          <td>Flagship offering, platform capabilities, or signature works</td>
          <td>Evaluates functional overlap, flagship differentiators, and commoditization risks.</td>
        </tr>
        <tr>
          <td><strong>Target Customer & Positioning</strong></td>
          <td>Buyer personas, addressable market, constituent base</td>
          <td>Pinpoints customer segments or voter demographics neglected by contenders.</td>
        </tr>
        <tr>
          <td><strong>Observed Moat / Vulnerability</strong></td>
          <td>Structural defensibility, lock-in, churn liabilities</td>
          <td>Exposes fragility where the benchmark entity can exploit rivals.</td>
        </tr>
        <tr>
          <td><strong>Pricing Strategy & Tiers</strong></td>
          <td>Monetization models, subscription tiers, TCO friction</td>
          <td>Compares pricing power elasticity, packaging traps, and discounting opacity.</td>
        </tr>
        <tr>
          <td><strong>Tech Stack / Velocity</strong></td>
          <td>Infrastructure modernity, engineering velocity</td>
          <td>Evaluates technology debt vs. rapid AI-driven platform delivery.</td>
        </tr>
      </tbody>
    </table>

    <div class="footer-note">
      <strong>Data Privacy Guarantee:</strong> 100% Client-Side Architecture. API keys and target data remain inside your browser sandbox. No server-side tracking.
    </div>
  </div>

  <!-- PAGE 2: 18 REPORTING FRAMEWORKS -->
  <div class="page">
    <div class="header-banner">
      <img src="${logoBase64}" class="header-logo" alt="3Sci Logo">
      <div class="header-title-box">
        <div class="header-title">18 ANALYTICAL LENSES</div>
        <div class="header-sub">Corporate, Commercial, Political & Cultural Frameworks</div>
      </div>
    </div>

    <h2>3. The 18 Domain-Specific Reporting Frameworks</h2>
    <p>The workspace dynamically adjusts its analysis, scoring rubrics, and diagnostic questions based on your chosen angle:</p>

    <table>
      <thead>
        <tr>
          <th style="width: 32%;">Report Angle</th>
          <th style="width: 68%;">Core Investigative Focus & Output Architecture</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Product & Price Comparisons</strong></td>
          <td>Side-by-side feature packaging, licensing tiers, total cost of ownership (TCO), and price-to-value elasticity scorecards.</td>
        </tr>
        <tr>
          <td><strong>Competitor Profile & Market Share</strong></td>
          <td>Origins, leadership ethos, operational footprint, addressable segment dominance, and customer acquisition momentum.</td>
        </tr>
        <tr>
          <td><strong>SWOT & Defensibility</strong></td>
          <td>Forensic Strengths, Weaknesses, Opportunities, and Threats contrasting contenders against the designated benchmark.</td>
        </tr>
        <tr>
          <td><strong>Feature Comparison & Win/Loss</strong></td>
          <td>Direct capability parity, evaluation criteria, primary sales objections, buyer deal-breakers, and churn drivers.</td>
        </tr>
        <tr>
          <td><strong>Customer Sentiment & Reviews</strong></td>
          <td>Public perception, NPS signals, brand loyalty, recurring customer complaints, and advocacy metrics.</td>
        </tr>
        <tr>
          <td><strong>Sales & Strategy Positioning</strong></td>
          <td>Go-to-market execution, revenue stability, category wedges, brand narratives, and counter-positioning levers.</td>
        </tr>
        <tr>
          <td><strong>Technology & Ecosystems</strong></td>
          <td>Engineering velocity, IP moats, developer integrations, channel resellers, and disruption vulnerability.</td>
        </tr>
        <tr>
          <td><strong>Digital Marketing & Social Media</strong></td>
          <td>SEO authority, paid acquisition reach, share of voice, audience engagement depth, and executive personal branding.</td>
        </tr>
        <tr>
          <td><strong>Emerging Threats & Disruptors</strong></td>
          <td>Unobserved edge players, cross-industry invaders, open-source alternatives, and macro structural headwinds.</td>
        </tr>
        <tr>
          <td><strong>Political Stance & Main Policies</strong></td>
          <td>Ideological alignment, legislative voting records, platform planks, voter coalition loyalty, and rhetorical liabilities.</td>
        </tr>
        <tr>
          <td><strong>Personalities & Achievements</strong></td>
          <td>Comparative dossier for athletes, authors, scientists, and creators covering career milestones, titles, and historical legacy.</td>
        </tr>
      </tbody>
    </table>

    <h2>4. Structured Executive Dossier Exports</h2>
    <div class="card card-accent">
      <p>Clicking <strong>📄 Download Report (.DOC)</strong> or <strong>🖨️ Download Report (PDF)</strong> generates a structured executive briefing packet that includes:</p>
      <ul style="padding-left: 18px; margin-top: 4px; font-size: 8.5pt; color: #334155;">
        <li><strong>Executive Overview Table:</strong> Formal header displaying framework, benchmark subject, cohort list, active dimensions, and evaluation date.</li>
        <li><strong>Embedded Landscape Matrix:</strong> The complete multi-parameter comparison table rendered prior to the detailed narrative.</li>
        <li><strong>Parsed Executive Narrative:</strong> Formatted headings, subheadings, bullet lists, scorecards, and sharp diagnostic inquiries.</li>
      </ul>
    </div>

    <div class="footer-note">
      3Sci Universal Intelligence Radar • Built for Google Gemini 3.8 Flash • Zero Telemetry
    </div>
  </div>

  <!-- PAGE 3: PLAYBOOKS & STRATEGIC METHODOLOGY -->
  <div class="page">
    <div class="header-banner">
      <img src="${logoBase64}" class="header-logo" alt="3Sci Logo">
      <div class="header-title-box">
        <div class="header-title">EXECUTIVE PLAYBOOKS</div>
        <div class="header-sub">Founders, Procurement, Investors & Analysts</div>
      </div>
    </div>

    <h2>5. Executive Use Cases by Role</h2>

    <div class="card card-accent">
      <h3>For Enterprise Procurement & Commercial Officers: Vendor Negotiation</h3>
      <p>Select the <strong>Product Comparison and Price Comparisons</strong> angle. Use the generated Feature-by-Feature Value Ledger and Diagnostic Buyer Questions to expose hidden renewals, tier lock-ins, and licensing traps before signing enterprise contracts.</p>
    </div>

    <div class="card card-gemini">
      <h3>For Corporate Strategists & Founders: Asymmetric Counter-Positioning</h3>
      <p>Benchmark your firm against 4–6 market incumbents. Use the <em>Observed Moat</em> and <em>Target Customer</em> parameters to uncover underserved segments and craft positioning campaigns that exploit incumbents' pricing rigidity.</p>
    </div>

    <div class="card card-accent">
      <h3>For Campaign Strategists & Political Analysts: Policy Contrast Memos</h3>
      <p>Select the <strong>Political Stance and Main Policies</strong> angle. Contrast political figures or parties across key legislative planks, voter coalition loyalty, and policy contradictions to prepare for debates or legislative analysis.</p>
    </div>

    <div class="card card-gemini">
      <h3>For Cultural Critics & Researchers: Comparative Biographies</h3>
      <p>Select the <strong>Personalities and Achievements</strong> angle. Compare authors, historical figures, or elite sports icons (e.g., Federer vs. Nadal vs. Djokovic) across career milestones, technical mastery, and long-term historical impact.</p>
    </div>

    <h2>6. Operational FAQ & Diagnostic Tips</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 30%;">Scenario</th>
          <th style="width: 70%;">Recommended Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Gemini API Error</strong></td>
          <td>Confirm that your Google Gemini API key is pasted into the top header bar and that your browser allows outbound HTTPS calls to Google Generative Language endpoints.</td>
        </tr>
        <tr>
          <td><strong>Customizing Matrix Notes</strong></td>
          <td>Click directly into any cell in the Competitive Summary Matrix. Cells are fully editable (<code>contenteditable</code>) and synchronize into your downloaded Word/PDF dossier.</td>
        </tr>
        <tr>
          <td><strong>External AI Workflows</strong></td>
          <td>Click <strong>📋 Generate Prompt</strong> and then <strong>Copy Prompt</strong> to paste the synthesized intelligence prompt directly into ChatGPT Plus, Claude Team, or Perplexity Pro.</td>
        </tr>
      </tbody>
    </table>

    <div class="footer-note">
      © 3Sci Venture Studio (3sci.com) • Open Source Strategic Tools. Licensed for founder and enterprise use.
    </div>
  </div>

</body>
</html>`;

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
