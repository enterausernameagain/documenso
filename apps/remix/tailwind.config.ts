/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('@documenso/tailwind-config');
const path = require('path');

const { BRANDING } = require('./app/config/branding');

const brandingPrimary = BRANDING.colors.primary?.hsl ?? '221.21 82.5% 52.94%';
const brandingPrimaryForeground =
  BRANDING.colors.primaryForeground?.hsl ?? '0 0% 100%';
const brandingSecondary = BRANDING.colors.secondary?.hsl ?? brandingPrimary;
const brandingSecondaryForeground =
  BRANDING.colors.secondaryForeground?.hsl ?? brandingPrimaryForeground;

const remixExtend = {
  colors: {
    primary: {
      DEFAULT: `hsl(var(--primary, ${brandingPrimary}))`,
      foreground: `hsl(var(--primary-foreground, ${brandingPrimaryForeground}))`,
    },
    secondary: {
      DEFAULT: `hsl(var(--secondary, ${brandingSecondary}))`,
      foreground: `hsl(var(--secondary-foreground, ${brandingSecondaryForeground}))`,
    },
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'], // Custom font (load via Google Fonts or local)
    mono: ['Courier New', 'monospace'], // Optional: for code blocks
  },
};

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
    ...baseConfig.theme,
    extend: {
      ...(baseConfig.theme?.extend ?? {}),
      ...remixExtend,
      colors: {
        ...(baseConfig.theme?.extend?.colors ?? {}),
        ...remixExtend.colors,
      },
      fontFamily: {
        ...(baseConfig.theme?.extend?.fontFamily ?? {}),
        ...remixExtend.fontFamily,
      },
    },
  },
};
