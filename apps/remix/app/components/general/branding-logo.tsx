/* apps/remix/app/components/general/branding-logo.tsx */
import { cn } from "@documenso/ui/lib/utils";
import type { ImgHTMLAttributes } from "react";

/* * RedSolutions Logo Component
 * Loads the PNG logo from the /public folder instead of drawing an SVG.
 */

export type BrandingLogoProps = {
  className?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogo = ({ className, ...props }: BrandingLogoProps) => {
  return (
    <img
      src="/logo.png"
      alt="Redsolutions"
      /* * 'h-8' sets height to 32px. 
       * 'w-auto' keeps aspect ratio. 
       * You can change h-8 to h-10 or h-12 if you need it bigger.
       */
      className={cn("h-8 w-auto", className)}
      {...props}
    />
  );
};

export default BrandingLogo;
