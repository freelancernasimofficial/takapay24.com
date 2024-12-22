import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='h-16 bg-white sticky top-0 border-b border-b-gray-100'>
      <div className='container h-full'>
        <div className='flex items-center justify-between h-full'>
          <Link href='/' className='block'>
            <Image
              height={100}
              width={150}
              alt='logo'
              src='/images/takapay24.png'
            />
          </Link>
          <div className='flex-1 flex items-center justify-center h-full'>
            <Link
              className='h-full flex items-center justify-center w-20 font-semibold hover:text-green-600'
              href='/'
            >
              Home
            </Link>
            <Link
              className='h-full flex items-center justify-center w-20 font-semibold hover:text-green-600'
              href='#about'
            >
              About
            </Link>
            <Link
              className='h-full flex items-center justify-center w-20 font-semibold hover:text-green-600'
              href='#services'
            >
              Services
            </Link>
            <Link
              className='h-full flex items-center justify-center w-20 font-semibold hover:text-green-600'
              href='#contact'
            >
              Contact
            </Link>
          </div>
          <div>
            <Link href='/' className='btn btn-primary'>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
