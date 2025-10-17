import { cn } from '@/lib/utils'
import { ContainerProps } from '@/types/layout/container'
import React from 'react'

const Container = ({ className, children, ...props }: ContainerProps) => {
    return (
        <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10', className)} {...props}>
            {children}
        </div>
    )
}

export default Container