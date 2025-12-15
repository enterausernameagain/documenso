/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('@documenso/tailwind-config');
const path = require('path');

const baseTheme = baseConfig.theme ?? {};

module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    './app/**/*.{ts,tsx}',
    `${path.join(require.resolve('@documenso/ui'), '..')}/components/**/*.{ts,tsx}`,
    `${path.join(require.resolve('@documenso/ui'), '..')}/icons/**/*.{ts,tsx}`,
    `${path.join(require.resolve('@documenso/ui'), '..')}/lib/**/*.{ts,tsx}`,
    `${path.join(require.resolve('@documenso/ui'), '..')}/primitives/**/*.{ts,tsx}`,
    `${path.join(require.resolve('@documenso/email'), '..')}/templates/**/*.{ts,tsx}`,
    `${path.join(require.resolve('@documenso/email'), '..')}/template-components/**/*.{ts,tsx}`,
    `${path.join(require.resolve('@documenso/email'), '..')}/providers/**/*.{ts,tsx}`,
  ],
  theme: {
    ...baseTheme,
    extend: {
      ...(baseTheme.extend ?? {}),
      colors: {
        ...(baseTheme.extend?.colors ?? {}),
        primary: {
          DEFAULT: '#22C55E', // Main green (e.g., for buttons, accents)
          dark: '#16A34A',   // Darker variant for hover
        },
        secondary: {
          DEFAULT: '#3B82F6', // Blue for links or secondary actions
          dark: '#1D4ED8',
        },
        accent: '#EAB308',    // Yellow for highlights/warnings
        background: '#F3F4F6', // Light gray for app background
        text: '#1F2937',       // Dark gray for body text
        // Add more shades or colors as per your specs
      },
      fontFamily: {
        ...(baseTheme.extend?.fontFamily ?? {}),
        sans: ['Inter', 'sans-serif'], // Custom font (load via Google Fonts or local)
        mono: ['Courier New', 'monospace'], // Optional: for code blocks
      },
    },
  },
};
