import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

async function crawlPageText(page, url) {
  if (!url) return '';
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 25000 });
    return await page.evaluate(() => {
      const unwanted = document.querySelectorAll('script, style, nav, footer, noscript, svg');
      unwanted.forEach(el => el.remove());
      return document.body.innerText.replace(/\s+/g, ' ').trim();
    });
  } catch (err) {
    return `[Crawl Warning: ${err.message}]`;
  }
}

async function runCompetitiveRadar() {
  console.log('================================================================');
  console.log('  3SCI MULTI-COMPANY COMPETITIVE ANALYSIS & DUE DILIGENCE ENGINE  ');
  console.log('================================================================\n');

  const configPath = './data/companies.json';
  if (!fs.existsSync(configPath)) {
    console.error('Error: ./data/companies.json not found!');
    return;
  }

  const companies = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  if (companies.length > 10) {
    console.warn('⚠️ Warning: Maximum recommended is 10 companies. Truncating to first 10.\n');
    companies.length = 10;
  }

  console.log(`Loaded ${companies.length} companies for multi-target analysis.\n`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  await page.setViewport({ width: 1440, height: 900 });

  const intelligenceRecords = [];

  for (let i = 0; i < companies.length; i++) {
    const c = companies[i];
    console.log(`[${i + 1}/${companies.length}] Analyzing: ${c.company} ${c.is_benchmark ? '(★ Benchmark Firm)' : ''}`);

    console.log('    • Crawling Homepage / Core Value Prop...');
    const homeText = await crawlPageText(page, c.homepage);

    console.log('    • Crawling Pricing & Packaging Model...');
    const pricingText = await crawlPageText(page, c.pricing_url);

    console.log('    • Crawling About & Leadership Narrative...');
    const aboutText = await crawlPageText(page, c.about_url);

    console.log('    • Crawling Careers, Tech Stack & Culture...');
    const careersText = await crawlPageText(page, c.careers_url);

    intelligenceRecords.push({
      company: c.company,
      is_benchmark: !!c.is_benchmark,
      summary: {
        homepage_snippet: homeText.slice(0, 700),
        pricing_snippet: pricingText.slice(0, 700),
        about_snippet: aboutText.slice(0, 700),
        careers_snippet: careersText.slice(0, 700)
      }
    });
    console.log('    ✓ Intelligence captured.\n');
  }

  await browser.close();

  // 1. Build Side-by-Side Competitive Matrix Markdown
  let matrixMd = `# 3Sci Multi-Company Competitive Intelligence & Due Diligence Matrix\n\n`;
  matrixMd += `**Scan Date:** ${new Date().toLocaleDateString()} | **Monitored Organizations:** ${companies.length}\n\n`;
  matrixMd += `| Company | Role | Core Value Proposition | Pricing Model Signals | Hiring & Stack Clues |\n`;
  matrixMd += `| :--- | :--- | :--- | :--- | :--- |\n`;

  for (const item of intelligenceRecords) {
    const roleTag = item.is_benchmark ? '**Benchmark / Self**' : 'Rival / Target';
    const hpSafe = item.summary.homepage_snippet.slice(0, 140).replace(/\|/g, '-');
    const prSafe = item.summary.pricing_snippet.slice(0, 140).replace(/\|/g, '-');
    const crSafe = item.summary.careers_snippet.slice(0, 140).replace(/\|/g, '-');
    matrixMd += `| **${item.company}** | ${roleTag} | ${hpSafe}... | ${prSafe}... | ${crSafe}... |\n`;
  }

  matrixMd += `\n\n## Raw Structured Company Intelligence\n\n`;
  for (const item of intelligenceRecords) {
    matrixMd += `### ${item.company} ${item.is_benchmark ? '(★ Benchmark)' : ''}\n`;
    matrixMd += `- **Value Proposition & Market Hook:**\n  > ${item.summary.homepage_snippet}\n\n`;
    matrixMd += `- **Pricing & Monetization Architecture:**\n  > ${item.summary.pricing_snippet}\n\n`;
    matrixMd += `- **Mission & Leadership Narrative:**\n  > ${item.summary.about_snippet}\n\n`;
    matrixMd += `- **Hiring Trends, Culture & Technology Stack:**\n  > ${item.summary.careers_snippet}\n\n`;
    matrixMd += `---\n\n`;
  }

  fs.writeFileSync('competitive_matrix.md', matrixMd, 'utf-8');

  // 2. Build Ready-to-Run AI Strategic Synthesis Prompt
  const aiPrompt = `You are a Principal Due Diligence Partner and Executive Career Strategist.
Analyze the following multi-company intelligence records comparing ${companies.length} organizations:

${JSON.stringify(intelligenceRecords, null, 2)}

Provide a structured, rigorous assessment tailored for both DUE DILIGENCE and JOB SEEKERS:

1. SIDE-BY-SIDE STRATEGIC POSITIONING:
   - What are the distinct positioning angles and value hooks of each player?
   - Where are the pricing and feature white spaces in the market?

2. ORGANIZATIONAL HEALTH & CULTURE AUDIT (For Due Diligence & Job Seekers):
   - What tech stacks, methodologies, or organizational skills are they actively recruiting for?
   - Which companies show signals of rapid expansion vs. operational defensive posture?
   - If interviewing or evaluating an investment, what are the top 3 unasked friction points to probe for each firm?

3. COMPARATIVE VERDICT (Benchmark vs. Competitors):
   - Compare all competitors against the Benchmark Firm (if marked), or rank them by competitive defensibility (moats, pricing power, and execution velocity).
   - Produce a concise final scorecard.`;

  fs.writeFileSync('competitive_analysis_prompt.txt', aiPrompt, 'utf-8');

  console.log('================================================================');
  console.log('ANALYSIS COMPLETE!');
  console.log('• Markdown Matrix:      ' + path.resolve('competitive_matrix.md'));
  console.log('• Ready-to-Use Prompt:  ' + path.resolve('competitive_analysis_prompt.txt'));
  console.log('================================================================\n');
}

runCompetitiveRadar();