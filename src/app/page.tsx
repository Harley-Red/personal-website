'use client';

import { Button } from "@radix-ui/themes";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* 顶部导航栏 */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-[#0A0A0A] border-b border-gray-800 flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white">
            <Menu className="h-6 w-6" />
          </Button>
          <span className="text-lg font-semibold">Portfolio</span>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <div className="pt-16 flex min-h-screen">
        {/* 左侧个人信息 */}
        <aside className="w-1/4 p-8 border-r border-gray-800">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src="/avatar.png"
                alt="Profile"
                width={128}
                height={128}
                className="rounded-full object-cover"
                priority
                unoptimized
              />
            </div>
            <h1 className="text-2xl font-bold mb-2">John Doe</h1>
            <p className="text-gray-400 text-center">
              Full Stack Developer
            </p>
          </div>
        </aside>

        {/* 右侧项目列表 */}
        <main className="w-3/4 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 项目卡片 */}
            {[1, 2, 3, 4].map((item) => (
              <article
                key={item}
                className="bg-[#1A1A1A] rounded-lg p-6 hover:bg-[#252525] transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                <p className="text-gray-400 mb-4">
                  A brief description of the project and its key features.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#333] rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-[#333] rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </main>
  );
} 