import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='py-6 xl:py-8 px-4 text-white'>
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
                <h1 className='text-4xl font-semibold'>
                    Duke<span className='text-accent'>.</span>
                </h1>
            </Link>

            {/* nav & button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                {/* <Link href="/contact">
                    <Button>Liên hệ</Button>
                </Link> */}
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav/>
            </div>
        </div>
    </header>
  )
}

export default Header