import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

export const BrandingLogo = ({ ...props }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      /* * viewBox "0 0 200 50" creates a 4:1 aspect ratio. 
       * This matches the typical rectangular shape of a logo name.
       */
      viewBox="0 0 200 50"
      {...props}
    >
      {/* * We use 'image' to embed your PNG. 
        * We use 'xlinkHref' in addition to 'href' for maximum compatibility 
        * with older PDF generation engines (like the one failing).
        */}
      <image
        href="/logo.png"
        xlinkHref="/logo.png"
        width="200"
        height="50"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
};
