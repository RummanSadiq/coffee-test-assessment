import React from 'react'
import { HeartIcon } from '../ui/Icon'

const Footer = () => {
    return (
        <footer className='flex items-center justify-center pb-10 mx-auto'>
            <div className="flex flex-col items-center justify-center text-primary font-bold text-center">
                <HeartIcon size={24} />
                <p className='text-primary/50 text-lg sm:text-xl'>Made by freelancers for freelancers</p>
                <p className='text-primary/30 text-sm sm:text-base'>This is an Anyday Inc Test Project Inspired by trycoffee.co</p>
            </div>
        </footer>
    )
}

export default Footer