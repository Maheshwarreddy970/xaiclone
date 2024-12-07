import Xailogo from '@/icons/logo'
import React from 'react'
import NavLinks from './ui/NavLinks'

const links = [
    "Grok",
    "API",
    "Blog",
    "About",
    "Careers"]
export default function Navbar() {
    return (
        <nav className=' w-full fixed top-0 z-50 bg-black '>
            <div className=' max-w-[80rem] py-5 mx-auto flex items-center'>
                <Xailogo></Xailogo>
                <div className=' flex gap-5 ml-6'>
                    {
                        links.map((link, i) => (
                            <NavLinks key={i} href={link} text={link}>
                            </NavLinks>
                        )
                        )
                    }
                </div>

            </div>
        </nav>
    )
}
