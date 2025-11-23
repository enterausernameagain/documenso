import type { SVGAttributes } from 'react';
import { cn } from '@documenso/ui/lib/utils'; // Assuming utils are available for class merging

export type BrandingLogoProps = SVGAttributes<SVGSVGElement> & {
  className?: string;
};

export const BrandingLogo = ({ className, ...props }: BrandingLogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50" // Maintains 4:1 aspect ratio for logo
      className={cn('h-6 w-auto', className)} // Default height, auto width for responsiveness
      {...props}
    >
      <image
        href="/logo.png"
        xlinkHref="/logo.png" // For older SVG/PDF compatibility
        width="200"
        height="50"
        preserveAspectRatio="xMidYMid meet" // Centers and scales proportionally
        alt="Your Company Logo" // Accessibility fallback
      />
    </svg>
  );
};
