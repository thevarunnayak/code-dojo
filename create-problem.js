const fs = require('fs');
const path = require('path');

const problemName = process.argv[2];

if (!problemName) {
  console.log("Please provide a problem name");
  process.exit(1);
}

const dir = path.join(__dirname, 'problems', problemName);

fs.mkdirSync(dir, { recursive: true });

fs.writeFileSync(path.join(dir, 'solution.py'), '');
fs.writeFileSync(path.join(dir, 'solution.js'), '');
fs.writeFileSync(
  path.join(dir, 'notes.md'),
`# ${problemName}

[![Update Tracker](https://img.shields.io/badge/Update-Tracker-blue)](https://github.com/<your-username>/code-dojo/actions/workflows/update-tracker.yml)
`
);

console.log(`Created ${problemName}`);