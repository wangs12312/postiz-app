'use client';

import React, { useState, useEffect } from 'react';

export default function LandingPage() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  useEffect(() => {
    document.title =
      lang === 'zh'
        ? 'yishuibh - 使用 AI 智能体全自动运行您的社交媒体矩阵'
        : 'yishuibh - Run your social media on autopilot with AI agents';
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white flex flex-col font-sans selection:bg-fuchsia-500 selection:text-white">
      {/* 顶部 Pink Banner */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium">
        {lang === 'zh'
          ? '✨ 易水百会 (YishuiBH) 社媒智能矩阵自动化平台已正式上线！'
          : '✨ YishuiBH AI Social Media Matrix Engine is Now Live!'}
      </div>

      {/* 导航栏 Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0F17]/80 border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md">
              Y
            </div>
            <span className="text-xl font-bold tracking-tight text-white">yishuibh</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#features" className="hover:text-white transition">
              {lang === 'zh' ? '核心功能' : 'Features'}
            </a>
            <a href="#platforms" className="hover:text-white transition">
              {lang === 'zh' ? '支持平台' : 'Platforms'}
            </a>
            <a href="#pricing" className="hover:text-white transition">
              {lang === 'zh' ? '价格方案' : 'Pricing'}
            </a>
            <a href="#faq" className="hover:text-white transition">
              {lang === 'zh' ? '常见问题' : 'FAQ'}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="px-3 py-1.5 text-xs text-gray-300 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition"
            >
              {lang === 'zh' ? 'English' : '中文'}
            </button>
            <a
              href="/auth"
              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white rounded-lg shadow-md transition"
            >
              {lang === 'zh' ? '进入系统' : 'Sign In'}
            </a>
          </div>
        </div>
      </header>

      {/* 主体内容 */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold tracking-wide text-fuchsia-400 bg-fuchsia-950/60 border border-fuchsia-800/50 rounded-full">
              <span>🤖 Next-Gen Social Media Autopilot</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              {lang === 'zh' ? (
                <>
                  使用 AI 智能体 <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-pink-400 to-indigo-400">
                    全自动运行您的社交媒体矩阵
                  </span>
                </>
              ) : (
                <>
                  Run Your Social Media on <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-pink-400 to-indigo-400">
                    Autopilot with AI Agents
                  </span>
                </>
              )}
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
              {lang === 'zh'
                ? '一站式整合 TikTok、Facebook、Instagram、YouTube 等主流平台，提供多账号调度、自动化定时排期、内容自动分发及全链路数据看板。'
                : 'All-in-one hub integrating TikTok, Facebook, Instagram, and YouTube. Powering multi-account scheduling, AI content distribution, and analytics.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/auth"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white font-semibold text-base shadow-lg transition"
              >
                {lang === 'zh' ? '免费开始使用' : 'Get Started for Free'}
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-300 font-semibold text-base border border-gray-800 transition"
              >
                {lang === 'zh' ? '了解功能' : 'Explore Features'}
              </a>
            </div>
          </div>
        </section>

        {/* Platforms Bar */}
        <section id="platforms" className="py-12 border-y border-gray-800/60 bg-[#0d121c]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6">
              {lang === 'zh' ? '原生 API 深度集成主流社媒生态' : 'Deeply Integrated With Top Platforms'}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 text-gray-400 font-medium text-lg">
              <span className="hover:text-white transition">TikTok</span>
              <span className="hover:text-white transition">YouTube</span>
              <span className="hover:text-white transition">Facebook</span>
              <span className="hover:text-white transition">Instagram</span>
              <span className="hover:text-white transition">X (Twitter)</span>
              <span className="hover:text-white transition">Pinterest</span>
              <span className="hover:text-white transition">LinkedIn</span>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {lang === 'zh' ? '打造高效率社媒矩阵工作流' : 'Streamlined Multi-Account Workflow'}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              {lang === 'zh' ? '专为创作者与出海团队打造的自动化运维中心' : 'Built for creators and cross-border teams.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-fuchsia-500/50 transition">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">{lang === 'zh' ? '一键矩阵分发' : 'Matrix Distribution'}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {lang === 'zh'
                  ? '一次上传视频与文案，自动适配各平台发布规格并同步推送到多账号。'
                  : 'Upload once and automatically synchronize content across multiple platforms.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-fuchsia-500/50 transition">
              <div className="text-3xl mb-4">⏱</div>
              <h3 className="text-xl font-bold mb-3">{lang === 'zh' ? '可视化智能日历' : 'Visual Smart Scheduler'}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {lang === 'zh'
                  ? '基于最佳受众互动时间精准安排发布排期，告别手动守候。'
                  : 'Schedule posts dynamically based on peak audience engagement times.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-fuchsia-500/50 transition">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">{lang === 'zh' ? '全域数据洞察' : 'Unified Analytics'}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {lang === 'zh'
                  ? '聚合播放量、点赞数、评论互动率等多维度数据，实时评估内容效果。'
                  : 'Aggregate views, likes, and engagement metrics in one single real-time dashboard.'}
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-6 bg-[#0d121c] border-t border-gray-800/60">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{lang === 'zh' ? '简单透明的方案' : 'Simple Pricing'}</h2>
            <p className="text-gray-400 mb-12">{lang === 'zh' ? '根据团队规模灵活选择' : 'Choose the plan that fits you best'}</p>

            <div className="p-8 rounded-3xl bg-gray-900/80 border-2 border-fuchsia-500/80 max-w-md mx-auto relative shadow-2xl">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Most Popular
              </span>
              <h3 className="text-2xl font-bold mb-2">Pro Suite</h3>
              <div className="text-4xl font-extrabold my-4 text-white">$0 <span className="text-sm text-gray-400 font-normal">/ Community Edition</span></div>
              <p className="text-xs text-gray-400 mb-6">{lang === 'zh' ? '支持全功能多平台社媒自动化调度' : 'Full access to multi-platform scheduling'}</p>
              <a
                href="/auth"
                className="block w-full py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white font-semibold transition"
              >
                {lang === 'zh' ? '立即进入控制台' : 'Access Dashboard'}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{lang === 'zh' ? '常见问题' : 'Frequently Asked Questions'}</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
              <h4 className="font-semibold text-white mb-2">{lang === 'zh' ? '平台支持哪些社交媒体的官方授权？' : 'Which platforms are supported?'}</h4>
              <p className="text-sm text-gray-400">{lang === 'zh' ? '支持 TikTok Content Posting API、Google YouTube API、Meta Facebook & Instagram API 等官方正规授权接口。' : 'We support official APIs from TikTok, YouTube, Meta (Facebook & Instagram), and more.'}</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
              <h4 className="font-semibold text-white mb-2">{lang === 'zh' ? '我的社媒授权凭证安全吗？' : 'Is my account credential secure?'}</h4>
              <p className="text-sm text-gray-400">{lang === 'zh' ? '系统严格使用官方 OAuth 2.0 协议进行授权交互，不会保存您的第三方平台明文密码。' : 'All authentications follow strict OAuth 2.0 standards without storing plaintext passwords.'}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (审核必备条款) */}
      <footer className="border-t border-gray-800/80 bg-[#080B11] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <div>
            <span className="font-semibold text-gray-400">yishuibh</span> — © 2026 YishuiBH. All rights reserved.
          </div>
          <div className="flex items-center gap-8">
            <a
              href="https://privacy.yishuibh.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 underline underline-offset-4"
            >
              Privacy Policy (隐私政策)
            </a>
            <a
              href="https://terms.yishuibh.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 underline underline-offset-4"
            >
              Terms of Service (服务条款)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
