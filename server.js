const express = require('express');
const path = require('path');

const app = express();

// Disable the X-Powered-By header for security
app.disable('x-powered-by');

// Serve static files from the project root
app.use(express.static(path.join(__dirname)));

// Example async route using Express 5's promise support
app.get('/health', async (req, res) => {
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
