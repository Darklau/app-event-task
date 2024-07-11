'use client'

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const toggleVariants = cva(
  'inline-flex transition-colors duration-300 uppercase flex p-[12px_14px] rounded-md  items-center' +
    ' justify-center rounded-md text-sm font-medium ring-offset-background transition-colors' +
    ' hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2' +
    ' focus-visible:ring-accent-main focus-visible:ring-offset-2 disabled:pointer-events-none' +
    ' disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
  {
    variants: {
      variant: {
        default:
          'bg-neutral-0 text-accent-main hover:bg-accent-green data-[state=on]:bg-accent-green data-[state=on]:hover:bg-opacity-80 data-[state=on]:text-neutral-0 hover:text-neutral-0',
        ghost:
          ' border-neutral-700 hover:text-neutral-0 text-neutral-700 bg-transparent hover:bg-accent-green data-[state=on]:hover:bg-opacity-80  data-[state=on]:text-neutral-0 data-[state=on]:bg-accent-green text-accent-main',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
