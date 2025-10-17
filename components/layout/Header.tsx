import React from 'react'
import Button from '../ui/Button'
import { AppleIcon, LogoIcon } from '../ui/Icon'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-2 sm:p-10 py-3 sm:py-4 sticky top-0 z-10 bg-background-light/80 backdrop-blur-sm'>
            <Button
                variant='ghost'
                size='lg'
                icon={<LogoIcon size={36} className='text-white' />}
                className='gap-2'
            >
                <span className='font-bold text-2xl'>
                    Coffee <span className='hidden xl:inline'>Test</span>
                </span>
            </Button>
            <div className='items-center gap-5 hidden sm:flex'>
                <Button
                    variant='ghost'
                >
                    Contact
                </Button>

                <Button
                    variant='ghost'
                >
                    Twitter
                </Button>

                <Button
                    variant='secondary'
                    icon={<AppleIcon size={20} />}
                    iconPosition='left'
                    className='gap-2.5'
                    size='lg'
                >
                    Download for Mac
                </Button>

            </div>
        </header>
    )
}

export default Header