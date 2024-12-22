import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconMail from "../icons/IconMail";
import IconTelegram from "../icons/IconTelegram";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className='bg-slate-900 text-white h-full md:h-96 flex flex-col justify-between pt-16'>
      <div className='container'>
        <div className='flex md:flex-row md:justify-between flex-col'>
          <div className='flex-1'>
            <Image
              width={150}
              height={100}
              alt='logo'
              src='/images/logo-dark-bg.png'
            />
            <p className='mt-4 text-gray-400'>
              TakaPay24 is the only payments solution in Bangladesh that allows
              businesses to accept, process and disburse payments with its
              product suite.
            </p>
          </div>
          <div className='flex-1 md:pl-16 mt-8 md:mt-0'>
            <h2 className='mb-2'>Legal</h2>
            <Link
              className='block w-full font-medium py-2 hover:text-green-600'
              href='/'
            >
              Privacy Policy
            </Link>
            <Link
              className='block w-full font-medium py-2 hover:text-green-600'
              href='/'
            >
              Terms & Conditions
            </Link>
            <Link
              className='block w-full font-medium py-2 hover:text-green-600'
              href='/'
            >
              Refund Policy
            </Link>
          </div>
          <div className='flex-1 md:pl-10 mt-8 md:mt-0'>
            <h2 className='mb-2'>Follow Us</h2>
            <Link
              className='block w-full font-medium py-2 hover:text-green-600'
              href='/'
            >
              Facebook
            </Link>
            <Link
              className='block w-full font-medium py-2 hover:text-green-600'
              href='/'
            >
              Linked In
            </Link>
            <Link
              className='block w-full font-medium py-2 hover:text-green-600'
              href='/'
            >
              Twitter
            </Link>
          </div>
          <div className='flex-1 my-8 md:my-0'>
            <h2 className='mb-4'>Get In Touch</h2>
            <div className='flex items-center mb-4'>
              <div>
                <IconMail className='mr-2 w-6 h-6' />{" "}
              </div>
              <div>support@takapay24.com</div>
            </div>

            <div className='flex items-center mb-4'>
              <div>
                <IconTelegram className='mr-2 w-6 h-6' />{" "}
              </div>
              <div>
                <Link href='https://t.me/sohan423156'>sohan423156</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-800 py-5 text-center'>
        <div className='container font-semibold'>
          TakaPay24.Com | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
