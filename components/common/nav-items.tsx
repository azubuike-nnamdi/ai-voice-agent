'use client'

import { navItems } from '@/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavItems() {
  const pathname = usePathname()
  return (
    <nav className='flex items-center gap-4'>
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className={cn(pathname === item.href && 'text-primary', 'hover:text-primary transition-colors')}>
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default NavItems
