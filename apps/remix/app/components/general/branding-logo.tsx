import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

/**
 * Redsolutions brand wordmark.
 */
export const BrandingLogo = ({ className, ...props }: LogoProps) => {
  return (
    <img
      src="/red-favcon.png"
      alt="Redsolutions"
      decoding="async"
      loading="eager"
      className={className}
      {...props}
    />
  );
};
