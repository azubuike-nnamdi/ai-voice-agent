import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from 'next/image';
import Link from 'next/link';
import NavItems from './nav-items';

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
        <SignedOut>
          <div className="flex items-center gap-4">
            <SignInButton mode="modal">
              <button className="hover:text-primary transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}
