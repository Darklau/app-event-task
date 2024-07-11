import * as React from 'react'
import { ChangeEventHandler } from 'react'
import { cn } from '@/utils/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = event => {
      //Убираем лишние нули в начале числа если type number
      if (type !== 'number') {
        props.onChange && props.onChange(event)
      }
      if (event.target.value) {
        if (Number(event.target.value)) {
          event.target.value = Number(event.target.value).toString()
          return props.onChange && props.onChange(event)
        }
      } else {
        event.target.value = ''
        return props.onChange && props.onChange(event)
      }
    }

    return (
      <input
        type={type}
        className={cn(
          'flex h-[32px] w-full rounded-md ' +
            'bg-neutral-100 p-[8px_14px] rounded-[12px] text-neutral-500' +
            ' text-sm ring-offset-background ' +
            'file:border-0 file:bg-transparent file:text-sm file:font-medium' +
            ' placeholder:text-neutral-300 focus-visible:outline-none ' +
            'focus-visible:ring-2 focus-visible:ring-accent-main focus-visible:ring-offset-2' +
            ' disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
        onChange={onChange}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
