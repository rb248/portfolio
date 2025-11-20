# Portfolio

A personal portfolio website built with Angular 6.

## About

This is a single-page application (SPA) portfolio showcasing professional experience, projects, skills, and contact information. The site features:

- Responsive design
- Project showcases with filtering
- Skills and experience sections
- Contact information
- Smooth animations and modern UI

## Tech Stack

- **Framework**: Angular 6
- **Language**: TypeScript
- **Styling**: SCSS/CSS
- **Build Tool**: Angular CLI
- **Deployment**: GitHub Pages

## Prerequisites

- Node.js (v8.9.4 or compatible)
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone https://github.com/rb248/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

## Development

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any source files.

## Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions. Every push to the `master` branch triggers a build and deployment workflow.

To deploy manually:
```bash
npm run deploy
```

The site will be available at: https://rb248.github.io/portfolio/

## Project Structure

```
src/
├── app/              # Application components and modules
├── assets/           # Static assets (images, fonts, etc.)
├── environments/     # Environment configurations
└── styles.scss       # Global styles
```

## Testing

Run unit tests:
```bash
npm test
```

Run end-to-end tests:
```bash
npm run e2e
```

## Linting

Check code quality:
```bash
npm run lint
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.