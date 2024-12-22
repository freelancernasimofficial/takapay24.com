import React from "react";

type Props = {
  title: string;
  desc: string;
};

export default function SectionTitle({ title, desc }: Props) {
  return (
    <div className='mb-12 text-center md:max-w-screen-sm w-full mx-auto font-medium text-lg'>
      <h1 className='text-[40px]'>{title}</h1>
      <p className='mt-2'>{desc}</p>
    </div>
  );
}
