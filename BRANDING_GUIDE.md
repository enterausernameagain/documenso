# Branding Customization Guide

This guide explains where to update logos and brand colors in this fork while keeping the upstream structure intact.

## Quick Start (5 Minutes)

### 1. Update Branding Configuration
Edit `apps/remix/app/config/branding.ts`:

```typescript
export const BRANDING = {
  companyName: 'YourCompany',

  logo: {
    path: '/your-logo.png',
    alt: 'Your Company Logo',
    height: 'h-12',
  },

  colors: {
    primary: {
      hsl: '210 100% 50%',  // change this HSL value
      hex: '#0080FF',        // change this hex value
    },
    primaryForeground: {
      hsl: '0 0% 100%',
      hex: '#FFFFFF',
    },
  },

  fonts: {
    primary: 'Inter',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap',
  },

  favicon: {
    path: '/your-logo.png',
  },
};
```

### 2. Update Global Theme Tokens
Adjust the light/dark CSS variables that drive buttons, text, and focus states:

- `apps/remix/app/globals.css` sets root-level `:root` and `.dark` tokens used across components.
- `apps/remix/app/app.css` maps those tokens into the Remix theme (e.g., `--color-primary`, foregrounds, and backgrounds).

Replace the existing hex/HSL values with your palette to propagate colors everywhere (buttons, links, toasts, form states) without changing layouts.

### 3. Verify Assets
Place your logo files in `apps/remix/public/` and update the paths in `branding.ts` (logo + favicon). Keep dimensions consistent with the original assets for best results.

### 4. Test Locally
Run the existing lint command before pushing:

```bash
npm run lint
```

Then start the Remix dev server to visually confirm colors and logos:

```bash
npm run dev
```

These steps limit changes to branding only, preserving the page structure from the upstream repository.
