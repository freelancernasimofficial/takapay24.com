// icon:currency-taka | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconCurrencyTaka(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M17.5 15.5 A1 1 0 0 1 16.5 16.5 A1 1 0 0 1 15.5 15.5 A1 1 0 0 1 17.5 15.5 z' />
      <path d='M7 7a2 2 0 114 0v9a3 3 0 006 0v-.5M8 11h6' />
    </svg>
  );
}

export default IconCurrencyTaka;
