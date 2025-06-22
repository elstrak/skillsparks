"use client"

import Image from "next/image"
import Link from "next/link"
import { Montserrat, Unbounded } from "next/font/google"
import { ChevronDown, ChevronUp, Play, Lock } from "lucide-react"
import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
})

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  weight: ["900"],
})

export default function SmmStartCoursePage() {
  const [expandedModules, setExpandedModules] = useState<number[]>([1, 2])

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId) 
        : [...prev, moduleId]
    )
  }

  // Module data structure for better maintainability
  const modules = [
    {
      id: 1,
      title: "Знакомство с SMM",
      progress: "0/2",
      lessons: [
        { id: 1, title: "Что такое SMM?", isLocked: false, href: "/courses/smm-start/lessons/lesson1" },
        { id: 2, title: "Платформы для продвижения в России", isLocked: true }
      ]
    },
    {
      id: 2,
      title: "Создание контента",
      progress: "0/2",
      lessons: [
        { id: 1, title: "Как писать цепляющие посты", isLocked: true },
        { id: 2, title: "Визуальный контент: сторис, обложки, инфографика", isLocked: true }
      ]
    },
    {
      id: 3,
      title: "Таргетированная реклама",
      progress: "0/2",
      lessons: [
        { id: 1, title: "Основы таргетинга", isLocked: true },
        { id: 2, title: "Настройка рекламных кампаний", isLocked: true }
      ]
    },
    {
      id: 4,
      title: "Аналитика и метрики",
      progress: "0/2",
      lessons: [
        { id: 1, title: "Ключевые показатели эффективности", isLocked: true },
        { id: 2, title: "Инструменты аналитики", isLocked: true }
      ]
    }
  ];

  return (
    <div className={montserrat.variable + ' ' + unbounded.variable + ' w-full min-h-screen bg-[#212121] flex justify-center'}>
      <div className="w-full max-w-[1270px] px-4 py-5 flex flex-col gap-[100px]">
        {/* Main content container */}
        <div className="flex flex-row justify-between items-start p-0 gap-[20px] w-[1270px]">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex flex-col items-start p-0 gap-[36px] w-[1004px]">
            {/* Breadcrumb and course header */}
            <div className="flex flex-col items-start p-0 gap-[8px] w-[1004px] h-[323px]">
              <div className="flex flex-row items-start p-0 gap-[8px] w-[99px] h-[15px]">
                <Link
                  href="/courses"
                  className="w-[40px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-[#878787]"
                >
                  Курсы
                </Link>
                <span className="w-[5px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-[#878787]">
                  /
                </span>
                <span className="w-[38px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-white">
                  Курс 1
                </span>
              </div>

              {/* Course header banner */}
              <div className="box-border w-[1004px] h-[300px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px] relative overflow-hidden">
                {/* Background image with gradient overlay */}
                <div className="absolute w-[1004px] h-[300px] left-0 top-0 bg-gradient-to-r from-[#3C3C3C] via-[rgba(60,60,60,0.8)] to-[rgba(60,60,60,0)]">
                  <Image
                    src="/6eef2902e0c8fdb019857e59c9d48dbdfcfc0783 (2).png"
                    alt="SMM-старт: Основы продвижения в соцсетях"
                    width={1004}
                    height={300}
                    className="object-cover mix-blend-overlay"
                  />
                </div>

                {/* Gradient effect */}
                <div className="absolute w-[474px] h-[474px] left-[-237px] top-[calc(50%-474px/2-259px)] bg-[#AAFD32] opacity-50 blur-[237px]"></div>

                {/* Course title and description */}
                <div className="absolute flex flex-col items-start p-0 gap-[32px] w-[356px] h-[131px] left-[48px] top-[calc(50%-131px/2)]">
                  <div className="flex flex-col items-start p-0 gap-[16px] w-[356px] h-[131px]">
                    <h1 className="w-[356px] h-[64px] font-['Montserrat'] font-semibold text-[26px] leading-[32px] text-white">
                      SMM-старт: Основы продвижения в соцсетях
                    </h1>
                    <p className="w-[356px] h-[51px] font-['Montserrat'] font-normal text-[14px] leading-[17px] text-[#B6B6B6]">
                      С нуля научить создавать контент, настраивать таргетированную рекламу и анализировать результаты
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Course content and progress */}
            <div className="flex flex-row items-start p-0 gap-[20px] w-[1004px]">
              {/* Course program */}
              <div className="flex flex-col items-start p-0 gap-[20px] w-[574px]">
                <h2 className="w-[574px] h-[29px] font-['Montserrat'] font-semibold text-[24px] leading-[29px] text-white">
                  Программа курса
                </h2>

                {/* Course modules */}
                <div className="box-border flex flex-col items-start p-4 gap-3 w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                  {modules.map((module, index) => (
                    <div key={module.id} className="w-full">
                      {index > 0 && <div className="w-full h-0 opacity-40 border border-[#4B4B4B] mb-3"></div>}
                      
                      <div className="flex flex-col items-start w-full gap-4">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row items-center gap-5">
                            <span className="font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B6B6B6]">
                              Модуль {module.id}
                            </span>
                            <span className="font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                              {module.title}
                            </span>
                          </div>
                          
                          <div className="flex flex-row items-center gap-4">
                            <span className="font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B6B6B6]">
                              {module.progress}
                            </span>
                            <button
                              onClick={() => toggleModule(module.id)}
                              className="box-border flex items-center justify-center p-2 w-9 h-9 border border-[#4B4B4B] rounded-[8px]"
                              aria-expanded={expandedModules.includes(module.id)}
                              aria-label={expandedModules.includes(module.id) ? "Свернуть модуль" : "Развернуть модуль"}
                            >
                              {expandedModules.includes(module.id) ? (
                                <ChevronUp className="w-5 h-5 text-[#DDDDDD]" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-[#DDDDDD]" />
                              )}
                            </button>
                          </div>
                        </div>

                        {expandedModules.includes(module.id) && (
                          <div className="flex flex-col items-start gap-3 w-full">
                            {module.lessons.map(lesson => (
                              <div key={lesson.id} className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row items-center gap-2">
                                  <span className="font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B6B6B6]">
                                    #{lesson.id}
                                  </span>
                                  <span className="font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                                    {lesson.title}
                                  </span>
                                </div>
                                
                                {lesson.isLocked ? (
                                  <button 
                                    disabled 
                                    className="flex items-center justify-center p-2 w-9 h-9 border border-[#4B4B4B] rounded-[8px]"
                                    aria-label="Урок заблокирован"
                                  >
                                    <Lock className="w-5 h-5 text-[#4B4B4B]" />
                                  </button>
                                ) : (
                                  <Link 
                                    href={lesson.href || "#"} 
                                    className="flex items-center justify-center p-2 w-9 h-9 bg-[#21A221] rounded-[8px]"
                                    aria-label="Начать урок"
                                  >
                                    <Play className="w-5 h-5 text-white" />
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course progress */}
              <div className="box-border flex flex-col items-start p-[20px] gap-[20px] w-[410px] h-[154px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                <div className="flex flex-col items-start p-0 gap-[16px] w-[370px] h-[53px]">
                  <h3 className="w-[370px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-white">
                    Прохождение курса
                  </h3>
                  <div className="flex flex-row items-center p-0 gap-[12px] w-[370px] h-[20px]">
                    <div className="w-[338px] h-[20px] relative">
                      <div className="absolute w-[338px] h-[20px] left-0 top-0 bg-[#606060] rounded-[4px]"></div>
                      <div className="absolute w-[41px] h-[20px] left-0 top-0 bg-white rounded-[4px]"></div>
                    </div>
                    <span className="w-[20px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-white">
                      5%
                    </span>
                  </div>
                </div>
                <button className="flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[128px] h-[41px] bg-[#21A121] rounded-[10px]">
                  <span className="w-[88px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-white">
                    Приступить
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
