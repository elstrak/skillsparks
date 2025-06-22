"use client"

import Image from "next/image"
import { Montserrat, Unbounded } from "next/font/google"
import Sidebar from "@/components/sidebar"
import PromoBanner from "@/components/promo-banner"
import Footer from "@/components/footer"
import Link from "next/link"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
})

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  weight: ["900"],
})

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Зачем нужен SMM: цели и польза для бизнеса",
    date: "01.01.2000",
    description:
      "Социальные медиа стали неотъемлемой частью жизни современного человека. Миллионы пользователей ежедневно проводят время в социальных сетях, общаются с друзьями, ищут информацию и делают покупки. Именно поэтому для бизнеса важно...",
    image: "/89b0164d547939936688b2bb22e2abee850976b1.png",
  },
  {
    id: 2,
    title: "Как выбрать подходящие социальные сети для бизнеса",
    date: "01.01.2000",
    description:
      "В этой статье мы рассмотрим, как определить, какие социальные платформы подходят именно вашему бизнесу. Узнайте о ключевых факторах, таких как целевая аудитория, тип контента и характер взаимодействия, чтобы максимизировать эффективность своих...",
    image: "/74c7ea7ea6085387a5e45a52435ab23a1d69136d.png",
  },
  {
    id: 3,
    title: "Топ-10 инструментов для SMM-специалистов",
    date: "01.01.2000",
    description:
      "Ознакомьтесь с лучшими инструментами для управления социальными сетями, которые помогут вам оптимизировать рабочие процессы. Мы собрали информацию о функционале, преимуществах и ценах, чтобы вы могли выбрать идеальные решения для...",
    image: "/73656366bed46de70999a69aeef5feb0d72dff53.png",
  },
  {
    id: 4,
    title: "Как использовать UTM-метки для отслеживания трафика",
    date: "01.01.2000",
    description:
      "Узнайте, как UTM-метки помогут вам анализировать эффективность ваших маркетинговых кампаний. Мы расскажем о том, какие параметры использовать и как интерпретировать собранные данные, чтобы оптимизировать свои стратегии",
    image: "/060dee1dd1a119c1fe06b6ddb985974727dba169.png",
  },
  {
    id: 5,
    title: "Визуальный контент: почему он важен для SMM",
    date: "01.01.2000",
    description:
      "В этой статье мы обсудим значимость визуального контента в социальных сетях. Узнайте, как изображения и видео могут повысить вовлеченность и привлечь внимание к вашему бренду, а также советы по созданию качественного визуала",
    image: "/6823c55b6f1b42f645ecc99a6d369e89b200beed.png",
  },
  {
    id: 6,
    title: "5 ошибок в SMM, которых стоит избегать",
    date: "01.01.2000",
    description:
      "Ознакомьтесь с распространенными ошибками, которые могут отрицательно сказаться на ваших усилиях в SMM. Мы разберем основные недочеты и предложим рекомендации по их устранению, чтобы ваши кампании были более успешными",
    image: "/33fb9ba2e44f075590d26554e82999fb4dd4eb06.png",
  },
]

export default function BlogPage() {
  return (
    <div className={montserrat.variable + ' ' + unbounded.variable + ' w-full min-h-screen bg-[#212121] flex justify-center'}>
      <div className="w-full max-w-[1270px] px-4 py-5 flex flex-col gap-[100px]">
        {/* Main content container */}
        <div className="flex flex-row justify-between items-start p-0 gap-[20px] w-[1270px] h-[1248px]">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex flex-col items-start p-0 gap-[36px] w-[1004px] h-[1248px]">
            {/* Promo banner */}
            <PromoBanner />

            {/* Blog section */}
            <div className="flex flex-col items-start p-0 gap-[20px] w-[1004px] h-[912px]">
              <h1 className="w-[1004px] h-[32px] font-['Montserrat'] font-bold text-[26px] leading-[32px] text-white">
                Блог
              </h1>

              {/* Blog posts grid */}
              <div className="flex flex-row flex-wrap items-center align-content-start p-0 gap-[12px] w-[1004px] h-[860px]">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="box-border flex flex-col items-start p-[12px] gap-[20px] w-[325px] h-[424px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]"
                  >
                    <div className="flex flex-col items-start p-0 gap-[16px] w-[301px] h-[339px]">
                      <div className="w-[301px] h-[160px] rounded-[20px] overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={301}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start p-0 gap-[8px] w-[301px] h-[163px]">
                        <div className="box-border flex flex-row justify-center items-center p-[4px_20px] gap-[10px] w-[102px] h-[23px] border border-[#727272] rounded-[30px]">
                          <span className="w-[62px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-center text-[#9F9F9F]">
                            {post.date}
                          </span>
                        </div>
                        <h3 className="w-[301px] h-[34px] font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                          {post.title}
                        </h3>
                        <p className="w-[301px] h-[90px] font-['Montserrat'] font-normal text-[12px] leading-[15px] text-[#9F9F9F]">
                          {post.description}
                        </p>
                      </div>
                    </div>
                    <Link href="/blog/1">
                    <button className="box-border flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[91px] h-[41px] border border-[#B1B1B1] rounded-[10px]">
                      <span className="w-[51px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B1B1B1]">
                        Читать
                      </span>
                    </button>
                    </Link>
                  </div>
                ))}
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
