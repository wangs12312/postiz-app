import React from 'react';
import Link from 'next/link';

export const LogoTextComponent = () => {
  return (
    <Link href="/" className="inline-flex items-center gap-3 no-underline">
      {/* 品牌方块图标 */}
      <div className="w-[38px] h-[38px] rounded-xl bg-gradient-to-tr from-[#612BD3] to-[#A855F7] flex items-center justify-center font-black text-white text-[20px] shadow-lg shadow-purple-500/30">
        Y
      </div>
      {/* 品牌文字 */}
      <div className="flex flex-col text-start">
        <span className="text-white text-[22px] font-bold tracking-wide leading-tight">
          Yishui<span className="text-[#A855F7]">BH</span>
        </span>
        <span className="text-white/40 text-[10px] tracking-widest uppercase">
          易水百会
        </span>
      </div>
    </Link>
  );
};
