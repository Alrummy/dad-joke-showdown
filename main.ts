const fs = require('fs');
const path = require('path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
// Dad joke about a developer losing money by exhausting his cache.
const text = 'Why did the developer go broke? He used up all his cache.\n';

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), text, 'utf8');
