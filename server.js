const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const SCORES_FILE = path.join(__dirname, 'scoreboard.json');
app.use(express.json());

function readScores() {
  try {
    return JSON.parse(fs.readFileSync(SCORES_FILE, 'utf8'));
  } catch {
    return { times: [] };
  }
}

function writeScores(data) {
  fs.writeFileSync(SCORES_FILE, JSON.stringify(data, null, 2));
}

// Disable the X-Powered-By header for security
app.disable('x-powered-by');

// Serve static files from the project root
app.use(express.static(path.join(__dirname)));

// Example async route using Express 5's promise support
app.get('/health', async (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/scoreboard', async (req, res) => {
  res.json(readScores());
});

app.post('/api/scoreboard', async (req, res) => {
  const time = parseInt(req.body.time, 10);
  if (isNaN(time)) return res.status(400).json({ error: 'Invalid time' });
  const data = readScores();
  data.times.push(time);
  data.times = data.times.sort((a, b) => a - b).slice(0, 10);
  writeScores(data);
  res.json({ status: 'ok' });
});

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
