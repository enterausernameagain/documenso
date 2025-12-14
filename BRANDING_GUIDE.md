# Branding Customization Guide

This guide explains how to quickly customize the branding for this application.

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
      hsl: '210 100% 50%',  // Change this HSL value
      hex: '#0080FF',        // Change this hex value
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
eof
