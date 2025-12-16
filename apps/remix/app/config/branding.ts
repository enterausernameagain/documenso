/**
 * BRANDING CONFIGURATION
 *
 * This file centralizes all branding elements for easy customization.
 * Change these values to rebrand the entire application.
 */

export const BRANDING = {
  // Company name
  companyName: 'RedSolutions',

  // Logo configuration
  logo: {
    path: '/redsolutions-logo.png',
    alt: 'RedSolutions Logo',
    height: 'h-12',
  },

  // Color scheme (HSL format for light/dark mode compatibility)
  colors: {
    primary: {
      hsl: '210 100% 50%',
      hex: '#0080FF',
    },
    primaryForeground: {
      hsl: '0 0% 100%',
      hex: '#FFFFFF',
    },
    secondary: {
      hsl: '210 100% 50%',
      hex: '#0080FF',
    },
    secondaryForeground: {
      hsl: '0 0% 100%',
      hex: '#FFFFFF',
    },
  },

  // Typography
  fonts: {
    primary: 'Inter',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap',
  },

  // Favicon (browser tab icon)
  favicon: {
    path: '/redsolutions-logo.png',
  },
};
