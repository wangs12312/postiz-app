import React from 'react';
import Link from 'next/link';

export const LogoTextComponent = () => {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <img
        src="/logo-text.svg"
        alt="YishuiBH"
        className="h-[36px] w-auto object-contain cursor-pointer"
      />
    </Link>
  );
};
