/* apps/remix/app/components/general/branding-logo.tsx */
import type { SVGAttributes } from 'react';

/* We define the props as SVGAttributes so the PDF generator is happy */
export type LogoProps = SVGAttributes<SVGSVGElement>;

export const BrandingLogo = (props: LogoProps) => {
  return (
    /* This SVG wrapper satisfies the system's type requirements */
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      /* Defines a 4:1 aspect ratio container. Adjust if your logo looks cut off. */
      viewBox="0 0 200 50" 
      {...props}
    >
      /* This embeds your PNG inside the SVG wrapper */
      <image 
        href="/logo.png" 
        width="200" 
        height="50"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
};

export default BrandingLogo;
