const fs = require('fs');
const path = require('path');

const trackerPath = path.join(__dirname, 'tracker.csv');
const readmePath = path.join(__dirname, 'README.md');

const tracker = fs.readFileSync(trackerPath, 'utf-8').trim().split('\n');
const rows = tracker.slice(1);

let table = `
## 📚 Problem Index

| # | Problem | Difficulty | Pattern | Python | JS |
|---|--------|----------|--------|--------|----|
`;

rows.forEach((row, i) => {
  const [id, problem, difficulty, pattern] = row.split(',');

  const name = problem.replace(/-/g, ' ');
  const link = `./problems/${problem}`;

  table += `| ${i + 1} | [${name}](${link}) | ${difficulty} | ${pattern} | ✅ | ✅ |\n`;
});

let readme = fs.readFileSync(readmePath, 'utf-8');

readme = readme.replace(/## 📚 Problem Index[\s\S]*/g, table);

fs.writeFileSync(readmePath, readme);

console.log("✅ README updated");