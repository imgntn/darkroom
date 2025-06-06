# QA Guide

This guide outlines how to set up and test **The Dark Room** locally.

## Prerequisites

- **Node.js v18 or later**
- A modern web browser (Chrome, Firefox, or Edge)

## Getting Started

1. Install project dependencies and build the bundle:
   ```bash
   npm install
   npm run build
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open [http://localhost:3333](http://localhost:3333) in your browser.
   - Verify the server responds at [http://localhost:3333/health](http://localhost:3333/health).

## Running Tests

Execute the automated Jasmine tests with Web Test Runner:
```bash
npm test
```

To generate a coverage report, run:
```bash
npm run test:coverage
```
Coverage output appears in the `coverage/` directory.

## QA Automation

A helper script is provided to build the project and run the test suite with coverage:
```bash
npm run qa
```

Continuous integration runs the same `qa` script for pull requests. See `.github/workflows/qa.yml` for details.

## Offline Testing

After the first visit, the service worker caches assets so the game can run offline. When offline, navigation shows `offline.html`.

---
Use this document as a quick reference for your QA workflow.
