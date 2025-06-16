import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItems from './nav-items'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link href='/' className='navbar-brand'>
        <div className='flex items-center gap-2.5 cursor-pointer'>
          <Image src='/images/logo.svg' alt='Logo' width={40} height={40} />
        </div>
      </Link>
      <div className='flex items-center gap-8'>
        <NavItems />
        <p>Sign In</p>
      </div>

    </nav>
  )
}
