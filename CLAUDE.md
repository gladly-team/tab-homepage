# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tab for a Cause homepage (https://tab.gladly.io) - a Gatsby React application for a browser extension that lets users raise money for charity by opening new tabs.

## Development Commands

**Development:**
```bash
yarn develop  # Development server with cause pages enabled
yarn dev      # Alias for develop
```

**Build & Deploy:**
```bash
yarn build    # Production build
yarn serve    # Serve built site locally
yarn deploy   # Deploy to S3
```

**Testing:**
```bash
yarn test       # Run linting + unit tests with coverage
yarn test:watch # Watch mode for unit tests
yarn test:e2e   # End-to-end tests
yarn jest       # Jest only
```

**Code Quality:**
```bash
yarn lint    # ESLint
yarn format  # ESLint with --fix
```

**Storybook:**
```bash
yarn storybook       # Development server on port 6006
yarn build-storybook # Build static Storybook
```

## Architecture Overview

### Core Stack
- **Gatsby 4.5.5** - Static site generator with React
- **Material-UI v5** - UI component library with Emotion styling
- **Typography.js** - Typography system

### Dynamic Page Generation
The site uses Gatsby's `createPages` API to generate cause-specific pages:

- **Cause Pages**: Generated from JSON data in `src/data/causes/`
- **Referrer Landing Pages**: Generated from YAML data in `src/data/referrers/`
- **Impact Milestone Pages**: Static milestone pages (million.js, million-and-a-half.js)

Key files:
- `gatsby-node.esm.js` - Main page generation logic
- `generatePagesForCause.js` - Cause page generation helper
- `src/components/V4HomePage.js` - Main cause page template

### Cause-Driven Architecture
Each cause (cats, trees, seas, etc.) has:
- JSON configuration in `src/data/causes/[cause].json`
- Cause-specific images in `src/img/[cause]/`
- Shared components with cause-specific styling and content

### Key Directories
- `src/components/` - Reusable React components
- `src/pages/` - Gatsby route pages
- `src/data/` - Static data (causes, financials, referrers)
- `src/img/` - Images organized by cause
- `src/utils/` - Utility functions and helpers

### Environment Variables
- `GATSBY_GENERATE_CAUSE_PAGES=true` - Enable cause page generation
- `SHOW_CATS_PAGE=true` - Feature flag for cats cause page
- `RUNNING_STORYBOOK=true` - Storybook environment flag

### Testing Structure
- **Unit Tests**: Jest with Enzyme and React Testing Library
- **E2E Tests**: Custom framework using `tab-e2e` package
- **Storybook**: Component documentation and visual testing
- Test files in `__tests__` directories alongside components

### Content Management
- Cause data in JSON format with extensive configuration
- Financial data in YAML format
- Referrer configuration in YAML format
- Markdown support for rich content via `remark`

### Deployment
- Built for AWS S3 hosting
- Image optimization via Gatsby's image processing
- Sitemap and robots.txt generation
- Facebook Pixel and Sentry integration

## Tools and Utilities

### Jira CLI
- When accessing Jira we have https://github.com/ankitpokhrel/jira-cli installed. you can access it from the command line with jira. Whenever you are asked to read a jira task, comment on one, or change that status this tool is helpful. --raw will giave you JSON output (example: jira issue view TFAC-1424 --raw)