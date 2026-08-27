import { getT } from '@gitroom/react/translation/get.translation.service.backend';

export const dynamic = 'force-dynamic';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import loadDynamic from 'next/dynamic';
import { LogoTextComponent } from '@gitroom/frontend/components/ui/logo-text.component';

export const metadata: Metadata = {
  title: 'YishuiBH - 社交媒体智能管理平台',
  description: '易水百会（YishuiBH）多平台社交媒体内容调度与自动化发布中心',
};

const ReturnUrlComponent = loadDynamic(() => import('./return.url.component'));

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const t = await getT();

  return (
    <div className="bg-[#0E0E0E] flex flex-1 p-[12px] gap-[12px] min-h-screen w-screen text-white">
      <ReturnUrlComponent />
      <div className="flex flex-col py-[40px] px-[20px] flex-1 lg:w-[600px] lg:flex-none rounded-[12px] text-white p-[12px] bg-[#1A1919]">
        <div className="w-full max-w-[440px] mx-auto justify-center gap-[20px] h-full flex flex-col text-white">
          <LogoTextComponent />
          <div className="flex">{children}</div>
        </div>
      </div>
      <div className="flex-1 pt-[40px] pb-[40px] px-[30px] hidden lg:flex flex-col items-center justify-center">
        <div className="text-[30px] text-center mb-6 font-semibold tracking-tight">
          一站式多平台社交媒体 <span className="text-[#A855F7]">智能调度中心</span>
        </div>
        <div className="w-full max-w-[700px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
          <img
            src="https://yishui.yunina.top/auth-banner.png.png"
            alt="YishuiBH Platform Dashboard"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
