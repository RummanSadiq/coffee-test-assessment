import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { AppleIcon, ChevronUpIcon } from '@/components/ui/Icon'
import React from 'react'

const Hero = () => {
    return (
        <Container className='w-full max-w-6xl'>
            <div className='flex flex-col gap-7.5 pt-10 sm:pt-12 md:pt-14 lg:pt-16 xl:pt-20'>
                <h1 className='text-display-lg sm:text-display-xl lg:text-display-2xl xl:text-display-2.5xl font-black leading-14 sm:leading-16 md:leading-18 lg:leading-19 xl:leading-20 xl:w-3/4'>
                    A tiny time <br /> tracker for your next big project
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <Button
                        variant='primary'
                        size='lg'
                        icon={<AppleIcon size={20} />}
                        iconPosition='left'
                        className='gap-2.5 w-max shadow-button-combined'
                    >
                        Download for Mac
                    </Button>

                    <Button
                        variant='outline'
                        size='lg'
                        className='w-max border-accent-red text-accent-red bg-white hover:bg-accent-red/5 !py-1.5 sm:!py-2.5 gap-2.5'
                    >
                        <div className='rounded-full bg-accent-red text-white p-1 flex-1 aspect-square h-5 md:h-6 lg:h-7.5 flex items-center justify-center text-xxs sm:text-xs lg:text-base text-lg'>
                            P
                        </div>
                        <div className="flex flex-col font-bold p-0 m-0">
                            <p className='uppercase text-xxs text-left p-0 m-0'>Featured on</p>
                            <p className='text-sm lg:text-lg xl:text-xl -mt-0.5'>Product Hunt</p>
                        </div>

                        <div className="flex flex-col items-center gap-0.5 ml-6 sm:ml-4">
                            <ChevronUpIcon size={11} className='scale-75 sm:scale-100' />
                            <p className='text-xxs sm:text-xs'>531</p>
                        </div>

                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Hero