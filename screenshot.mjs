import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const dir   = join(__dirname, 'temporary screenshots');

await mkdir(dir, { recursive: true });

let n = 1;
while (existsSync(join(dir, `screenshot-${n}${label ? '-' + label : ''}.png`))) n++;
const filename = `screenshot-${n}${label ? '-' + label : ''}.png`;

const browser = await puppeteer.launch({ headless: 'new' });
const page    = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 800)); // let Three.js settle
await page.screenshot({ path: join(dir, filename), fullPage: false });
await browser.close();

console.log(`Saved: temporary screenshots/${filename}`);
