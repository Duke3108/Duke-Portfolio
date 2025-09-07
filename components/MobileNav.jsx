"use client"

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet" 
import { usePathname } from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"

const links = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Dịch vụ', path: '/services' },
    { name: 'Giới thiệu', path: '/about' },
    { name: 'Dự án', path: '/projects' },
    { name: 'Liên hệ', path: '/contact' },
]

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <SheetTitle></SheetTitle>
            <div className="my-20 text-center text-xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Duke<span className='text-accent'>.</span>
                    </h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => (
                    <Link key={index} href={link.path} className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} text-xl capitalize hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                ))}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav