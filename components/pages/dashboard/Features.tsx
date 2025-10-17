import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { TrackingIcon, LaptopIcon, AnalyticsIcon, NotesIcon, NotificationsIcon, FolderIcon, PenIcon, InfinityIcon, AppleIcon } from '@/components/ui/Icon'
import { Feature } from '@/types/features'
import React from 'react'

const Features = () => {

    const features: Feature[] = [
        {
            title: 'Hassle-free time tracking',
            icon: <TrackingIcon size={80} className='scale-75 sm:scale-85 md:scale-90 xl:scale-100' />
        },
        {
            title: 'Perfect for freelancers',
            icon: <LaptopIcon size={80} className='scale-75 sm:scale-85 md:scale-95 xl:scale-100' />
        },
        {
            title: 'Useful insights and analytics',
            icon: <AnalyticsIcon size={80} className='scale-75 sm:scale-85 md:scale-90 xl:scale-100' />
        },
        {
            title: 'Quick export to CSV',
            icon: <NotesIcon size={80} className='scale-75 sm:scale-85 md:scale-90 xl:scale-100' />
        },
        {
            title: 'Daily limits and notifications',
            icon: <NotificationsIcon size={80} className='scale-75 sm:scale-85 md:scale-90 xl:scale-100' />
        },
        {
            title: 'Menubar extension',
            icon: <FolderIcon size={80} className='scale-75 sm:scale-85 md:scale-90 xl:scale-100' />
        },
        {
            title: 'Playful customization',
            icon: <PenIcon size={80} className='scale-75 sm:scale-85 md:scale-90 xl:scale-100' />
        },
        {
            title: 'Unlimited projects',
            icon: <InfinityIcon size={80} className='scale-75 sm:scale-85 md:scale-90 xl:scale-100' />
        },
    ]

    return (
        <Container className='flex flex-col justify-center items-center gap-10 xl:gap-20 pb-14'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-primary font-bold text-lg lg:text-xl xl:text-2xl text-center w-full max-w-6xl">
                {features.map((feature, index) => (
                    <div key={index} className='flex flex-col items-center justify-center w-44 lg:w-48 xl:w-56 mx-auto'>
                        {feature.icon}
                        <h3>{feature.title}</h3>
                    </div>
                ))}
            </div>

            <Button
                variant='primary'
                size='lg'
                icon={<AppleIcon size={20} />}
                iconPosition='left'
                className='gap-2.5 w-max shadow-button-combined'
            >
                Download for Mac
            </Button>
        </Container>
    )
}

export default Features