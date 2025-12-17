import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

/**
 * Redsolutions brand icon.
 */
export const BrandingLogoIcon = ({ className, ...props }: LogoProps) => {
  return (
    <img
      src="/static/logo-icon.png"
      alt="Redsolutions"
      decoding="async"
      loading="eager"
      className={className}
      {...props}
    />
  );
};
