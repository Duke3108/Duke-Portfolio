"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Dịch vụ', path: '/services' },
    { name: 'Giới thiệu', path: '/about' },
    { name: 'Dự án', path: '/projects' },
    { name: 'Liên hệ', path: '/contact' },
]

const Nav = () => {
    const pathname = usePathname();
  return (
    <nav className="flex gap-8">
        {links.map((link, index) => {
            return(
                <Link key={index} href={link.path} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} hover:text-accent capitalize transition-all font-medium`}>
                {link.name}
                </Link>
            )
        })}
    </nav>
  )
}

export default Nav