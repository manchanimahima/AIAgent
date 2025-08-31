# AIAgent - Automated Testing Project

This project demonstrates automated end-to-end testing using Playwright for web applications.

## Project Structure

```
AIAgent/
├── tests/
│   ├── e2e-shop.spec.js        # E-commerce test scenarios
│   └── example.spec.js         # Example test file
├── tests-examples/
│   └── demo-todo-app.spec.js   # Demo todo app tests
├── playwright.config.js        # Playwright configuration
├── server.js                   # Local development server
└── package.json               # Project dependencies and scripts
```

## Features

- End-to-end testing with Playwright
- Multi-browser testing (Chromium, Firefox, and WebKit)
- Local development server using Express
- Example test scenarios for e-commerce workflows

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (Comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/manchanimahima/AIAgent.git
   cd AIAgent
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

Run all tests:
```bash
npm test
```

Run specific test file:
```bash
npx playwright test tests/e2e-shop.spec.js
```

Run tests in headed mode (with browser visible):
```bash
npx playwright test --headed
```

Run tests in specific browser:
```bash
npx playwright test --project=chromium
```

## Development Server

Start the local development server:
```bash
npm start
```
The server will be available at http://localhost:3000

## Available Scripts

- `npm start` - Start the development server
- `npm test` - Run all tests
- `npx playwright test --ui` - Open Playwright UI mode
- `npx playwright show-report` - Show HTML report of test runs

## Current Test Scenarios

1. E-commerce Login and Purchase Flow:
   - Navigate to login page
   - Authenticate user
   - Select iPhone X product
   - Add to cart
   - Verify cart contents

## Contributing

Feel free to submit issues and enhancement requests!