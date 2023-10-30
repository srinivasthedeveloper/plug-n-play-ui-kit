import { forwardRef, isValidElement } from 'react'
import { ButtonProps } from './types'
import { SButton } from './styles'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, leftIcon, rightIcon, variant = 'primary', ...props }, ref) => {
    return (
      <SButton variant={variant} ref={ref} {...props}>
        {isValidElement(leftIcon) ? leftIcon : null}
        {label}
        {isValidElement(rightIcon) ? rightIcon : null}
      </SButton>
    )
  },
)

export { Button }
