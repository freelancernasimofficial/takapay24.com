import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconMenu from "../icons/IconMenu";
import IconClose from "../icons/IconClose";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='h-16 bg-white sticky top-0 border-b border-b-gray-100 shadow md:shadow-none'>
      <div className='container h-full'>
        <div className='flex items-center justify-between h-full'>
          <Link href='/' className='block'>
            <Image
              height={100}
              width={150}
              alt='logo'
              className='w-28 md:w-36'
              src='/images/takapay24.png'
            />
          </Link>
          <input
            type='checkbox'
            id='handleMenu'
            className='peer/menuHandler hidden'
          />
          <div className='bg-slate-800 md:bg-transparent w-full left-0 md:left-auto top-14 md:top-auto md:w-auto flex-none absolute md:static md:flex-1 md:flex md:flex-row flex-col items-center justify-center md:h-full h-auto py-3 md:py-0 peer-checked/menuHandler:flex hidden'>
            <Link
              className='md:h-full flex items-center md:justify-center md:w-20 font-semibold hover:text-green-500 py-2 md:py-0 justify-start h-auto w-full md:px-0 px-4 text-white md:text-black'
              href='/'
            >
              Home
            </Link>
            <Link
              className='md:h-full flex items-center md:justify-center md:w-20 font-semibold hover:text-green-500 py-2 md:py-0 justify-start h-auto w-full md:px-0 px-4 text-white md:text-black'
              href='#about'
            >
              About
            </Link>
            <Link
              className='md:h-full flex items-center md:justify-center md:w-20 font-semibold hover:text-green-500 py-2 md:py-0 justify-start h-auto w-full md:px-0 px-4 text-white md:text-black'
              href='#services'
            >
              Services
            </Link>
            <Link
              className='md:h-full flex items-center md:justify-center md:w-20 font-semibold hover:text-green-500 py-2 md:py-0 justify-start h-auto w-full md:px-0 px-4 text-white md:text-black'
              href='#partner'
            >
              Partner
            </Link>
            <Link
              className='md:h-full flex items-center md:justify-center md:w-20 font-semibold hover:text-green-500 py-2 md:py-0 justify-start h-auto w-full md:px-0 px-4 text-white md:text-black'
              href='#contact'
            >
              Contact
            </Link>
          </div>
          <div className='flex-1 flex justify-end md:flex-none md:justify-start'>
            <Link href='#contact' className='btn btn-primary'>
              Get Started
            </Link>
          </div>
          <label
            className='md:hidden block cursor-pointer peer-checked/menuHandler:[&_.openMenu]:hidden peer-checked/menuHandler:[&_.closeMenu]:block ml-3'
            htmlFor='handleMenu'
          >
            <IconMenu className='w-9 h-9 openMenu block' />
            <IconClose className='w-9 h-9 closeMenu hidden' />
          </label>
        </div>
      </div>
    </header>
  );
}
