import React from 'react';
import Link from 'next/link';

export const LogoTextComponent = () => {
  return (
    <Link href="/" className="inline-flex items-center gap-3 no-underline">
      {/* 云存储公网品牌图标 */}
      <img
        src="https://yishui.yunina.top/favicon.ico.png"
        alt="YishuiBH"
        className="w-[42px] h-[42px] object-contain cursor-pointer"
      />
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
