import { ButtonProps } from '@/types/ui/Button'
import { cn } from '@/lib/utils'
import React from 'react'

const Button = ({
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    loading = false,
    disabled = false,
    fullWidth = false,
    href,
    className,
    children,
    onClick,
    ...props
}: ButtonProps) => {
    const buttonClasses = cn(
        "bg-primary text-white px-4 py-4.5 font-bold rounded-xl flex items-center justify-center gap-1 cursor-pointer",
        variant === 'primary' && "bg-primary hover:bg-primary/90 text-white",
        variant === 'secondary' && "bg-primary/3 text-primary/80 hover:bg-primary/5",
        variant === 'outline' && "bg-transparent text-primary-500 border border-primary-500",
        variant === 'ghost' && "bg-transparent text-primary",
        size === 'sm' && "px-4 py-2 text-sm",
        size === 'md' && "px-4 py-2 text-md",
        size === 'lg' && "px-2 lg:px-4 py-3 lg:py-4.5 text-base lg:text-lg",
        className
    )
    return (
        <button className={buttonClasses} onClick={onClick} {...props}>
            {icon && iconPosition === 'left' && icon}
            {children}
            {icon && iconPosition === 'right' && icon}
        </button>
    )
}

export default Button