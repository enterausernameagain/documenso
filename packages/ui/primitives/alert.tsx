import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '../lib/utils';

const alertVariants = cva(
  'relative w-full rounded-lg p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-8',
  {
    variants: {
      variant: {
        default: 'bg-primary/10 text-primary [&_.alert-title]:text-primary [&>svg]:text-primary',
        neutral: 'bg-muted text-muted-foreground [&_.alert-title]:text-foreground',
        secondary: 'bg-secondary text-secondary-foreground [&_.alert-title]:text-secondary-foreground [&>svg]:text-secondary-foreground',
        destructive:
          'bg-destructive/10 text-destructive [&_.alert-title]:text-destructive [&>svg]:text-destructive',
        warning:
          'bg-warning/10 text-warning [&_.alert-title]:text-warning [&>svg]:text-warning',
      },
      padding: {
        tighter: 'p-2',
        tight: 'px-4 py-2',
        default: 'p-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, padding, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn('space-y-2', alertVariants({ variant, padding }), className)}
    {...props}
  />
));

Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('alert-title text-base font-medium', className)} {...props} />
  ),
);

AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm', className)} {...props} />
));

AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
