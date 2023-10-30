type ButtonStyleProps = {
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  shape?: 'box' | 'oval'
  fontWeight?: 'light' | 'normal' | 'bold'
  fontSize?: 'small' | 'medium' | 'large'
  fontStyle?: 'normal' | 'italic'
  variant?: 'primary' | 'secondary' | 'text' | 'link'
}

type ButtonProps = ButtonStyleProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string | React.ReactNode
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    onClick?: () => void
    ref?: React.RefObject<HTMLButtonElement> | null
  }

export type { ButtonStyleProps, ButtonProps }
