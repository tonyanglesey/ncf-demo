# AI Coding Agent Instructions - ncf-demo

## Project Overview
Minimal React 19.2 + Vite 7 demo application using modern ESM-based tooling. This is a starter template with default Vite/React scaffolding.

## Architecture & Structure
- **Entry point**: [index.html](../index.html) loads [src/main.jsx](../src/main.jsx) as module
- **React root**: [src/main.jsx](../src/main.jsx) renders `<App />` with StrictMode enabled
- **Main component**: [src/App.jsx](../src/App.jsx) - single-file component with counter example
- **Styling**: Global CSS in [src/index.css](../src/index.css), component-scoped in [src/App.css](../src/App.css)
- **Assets**: Static assets in `public/`, imported assets in `src/assets/`

## Development Workflow
```bash
npm run dev      # Start dev server with HMR at http://localhost:5173
npm run build    # Production build to dist/ folder
npm run preview  # Preview production build locally
npm run lint     # Run ESLint checks
```

## Code Conventions

### JavaScript/React
- **Module type**: ESM only (`"type": "module"` in package.json)
- **File extensions**: Use `.jsx` for React components
- **React patterns**: Functional components with hooks (see [App.jsx](../src/App.jsx))
- **Imports**: Named imports from React (`import { useState } from 'react'`)

### ESLint Configuration
- Using flat config format in [eslint.config.js](../eslint.config.js)
- Ignores: `dist/` folder
- Custom rule: `no-unused-vars` allows PascalCase variables (components)
- Plugins: react-hooks (recommended), react-refresh (for HMR)

### Styling
- **CSS approach**: Vanilla CSS with component-scoped stylesheets
- **Color scheme**: Dark mode by default with light mode media query support
- **Design tokens**: CSS custom properties defined in `:root` in [index.css](../src/index.css)
- **System fonts**: Uses `system-ui` font stack for native look

## Build Configuration
- **Bundler**: Vite with `@vitejs/plugin-react` (Babel-based Fast Refresh)
- **HMR**: Enabled by default in dev mode
- **React Compiler**: Not enabled (performance considerations noted in README)

## Key Patterns
- **Asset imports**: Vite-style imports (e.g., `import logo from './assets/react.svg'`)
- **Public assets**: Reference with leading slash (e.g., `src="/vite.svg"`)
- **State management**: Local component state with `useState` hook
- **Strict mode**: All components wrapped in `<StrictMode>` for development warnings

## Adding Features
- New components: Create in `src/` with `.jsx` extension
- New routes: Would require installing `react-router-dom` (not currently included)
- Global styles: Add to [src/index.css](../src/index.css)
- Component styles: Create matching `.css` file and import in component
