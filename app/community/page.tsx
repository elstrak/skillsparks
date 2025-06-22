"use client"

import Image from "next/image"
import Link from "next/link"
import { Montserrat, Unbounded } from "next/font/google"
import { Play } from "lucide-react"
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

export default function CommunityPage() {
  return (
    <div className={montserrat.variable + ' ' + unbounded.variable + ' w-full min-h-screen bg-[#212121] flex justify-center'}>
      <div className="w-full max-w-[1270px] px-4 py-5 flex flex-col gap-[100px]">
        {/* Main content container */}
        <div className="flex flex-row justify-between items-start p-0 gap-[20px] w-[1270px] h-[2996px]">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex flex-col items-center p-0 gap-[52px] w-[1004px] h-[2996px]">
            {/* Header banner */}
            <div className="w-[1004px] h-[300px] bg-[#0D0D0D] rounded-[20px] relative overflow-hidden">
              {/* Gradient blurs */}
              <div className="absolute w-[314px] h-[263px] left-[812px] top-[-99px] bg-gradient-to-br from-[#9B29FF] to-[#2DFF3B] filter blur-[97px]"></div>
              <div className="absolute w-[314px] h-[263px] left-[-132px] top-[124px] bg-gradient-to-br from-[#9B29FF] to-[#2DFF3B] filter blur-[97px]"></div>
              <div className="absolute w-[314px] h-[263px] left-[567px] top-[248px] bg-gradient-to-br from-[#9B29FF] to-[#2DFF3B] filter blur-[97px]"></div>
              <div className="absolute w-[314px] h-[263px] left-[147px] top-[-218px] bg-gradient-to-br from-[#9B29FF] to-[#2DFF3B] filter blur-[97px]"></div>

              {/* Title */}
              <h1 className="absolute w-[678px] h-[87px] left-[calc(50%-678px/2)] top-[calc(50%-87px/2+0.5px)] font-['Unbounded'] font-black text-[70px] leading-[87px] text-center uppercase text-white">
                сообщество
              </h1>
            </div>

            {/* Introduction section */}
            <div className="flex flex-row justify-between items-center p-0 gap-[36px] w-[1004px] h-[270px]">
              <div className="flex flex-col justify-center items-start p-0 gap-[12px] m-0 auto w-[482px] h-[164px]">
                <h2 className="w-[367px] h-[32px] font-['Montserrat'] font-bold text-[26px] leading-[32px] text-white">
                  Сообщество
                </h2>
                <p className="w-[482px] h-[120px] font-['Montserrat'] font-normal text-[12px] leading-[15px] text-[#9F9F9F]">
                  Добро пожаловать в уникальное сообщество SMM специалистов, где каждый найдет поддержку, знания и
                  возможности для роста! Наша платформа создана для того, чтобы объединить профессионалов в области
                  социального медиа-маркетинга, помочь им обмениваться опытом и находить новые заказы. Здесь вы сможете
                  задать вопросы, получить советы от экспертов и поделиться своими успехами. Мы понимаем, как важно
                  находить единомышленников и строить полезные связи в этой быстро меняющейся сфере.
                </p>
              </div>
              <div className="m-0 auto w-[470px] h-[270px] bg-white rounded-[24px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=270&width=470"
                  alt="Сообщество SMM специалистов"
                  width={470}
                  height={270}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Video section */}
            <div className="w-[900px] h-[360px] bg-white rounded-[24px] relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=360&width=900"
                alt="Видео о сообществе"
                width={900}
                height={360}
                className="object-cover w-full h-full"
              />
              <div className="absolute w-[900px] h-[360px] left-0 top-0 bg-black/10 backdrop-blur-[7.5px]"></div>
              <div className="absolute w-[80px] h-[80px] left-[calc(50%-80px/2)] top-[calc(50%-80px/2)] flex items-center justify-center">
                <div className="w-[80px] h-[80px] rounded-full border-[3px] border-white bg-white/20 flex items-center justify-center">
                  <Play className="w-[30px] h-[30px] text-white" />
                </div>
              </div>
            </div>

            {/* Exclusive content section */}
            <div className="flex flex-row justify-between items-center p-0 gap-[36px] w-[1004px] h-[270px]">
              <div className="flex flex-col justify-center items-start p-0 gap-[12px] m-0 auto w-[482px] h-[106px]">
                <h2 className="w-[367px] h-[64px] font-['Montserrat'] font-bold text-[26px] leading-[32px] text-white">
                  Доступ к эксклюзивному контенту
                </h2>
                <p className="w-[482px] h-[30px] font-['Montserrat'] font-normal text-[12px] leading-[15px] text-[#9F9F9F]">
                  Получайте доступ к онлайн-курсам, вебинарам и мастер-классам от ведущих специалистов в области SMM
                </p>
              </div>
              <div className="m-0 auto w-[470px] h-[270px] bg-white rounded-[24px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=270&width=470"
                  alt="Эксклюзивный контент"
                  width={470}
                  height={270}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Networking section */}
            <div className="flex flex-row justify-between items-center p-0 gap-[36px] w-[1004px] h-[270px]">
              <div className="m-0 auto w-[470px] h-[270px] bg-white rounded-[24px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=270&width=470"
                  alt="Нетворкинг"
                  width={470}
                  height={270}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center items-start p-0 gap-[12px] m-0 auto w-[482px] h-[74px]">
                <h2 className="w-[367px] h-[32px] font-['Montserrat'] font-bold text-[26px] leading-[32px] text-white">
                  Нетворкинг
                </h2>
                <p className="w-[482px] h-[30px] font-['Montserrat'] font-normal text-[12px] leading-[15px] text-[#9F9F9F]">
                  Общайтесь с коллегами, находите партнеров по проектам и обменивайтесь опытом в закрытых группах
                </p>
              </div>
            </div>

            {/* Community support section */}
            <div className="flex flex-row justify-between items-center p-0 gap-[36px] w-[1004px] h-[270px]">
              <div className="flex flex-col justify-center items-start p-0 gap-[12px] m-0 auto w-[482px] h-[74px]">
                <h2 className="w-[367px] h-[32px] font-['Montserrat'] font-bold text-[26px] leading-[32px] text-white">
                  Поддержка сообщества
                </h2>
                <p className="w-[482px] h-[30px] font-['Montserrat'] font-normal text-[12px] leading-[15px] text-[#9F9F9F]">
                  Задавайте вопросы и получайте ответы от профессионалов, которые сталкивались с аналогичными задачами
                </p>
              </div>
              <div className="m-0 auto w-[470px] h-[270px] bg-white rounded-[24px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=270&width=470"
                  alt="Поддержка сообщества"
                  width={470}
                  height={270}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Jobs and orders section */}
            <div className="flex flex-row justify-between items-center p-0 gap-[36px] w-[1004px] h-[270px]">
              <div className="m-0 auto w-[470px] h-[270px] bg-white rounded-[24px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=270&width=470"
                  alt="Вакансии и заказы"
                  width={470}
                  height={270}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center items-start p-0 gap-[12px] m-0 auto w-[482px] h-[74px]">
                <h2 className="w-[367px] h-[32px] font-['Montserrat'] font-bold text-[26px] leading-[32px] text-white">
                  Вакансии и заказы
                </h2>
                <p className="w-[482px] h-[30px] font-['Montserrat'] font-normal text-[12px] leading-[15px] text-[#9F9F9F]">
                  Получайте доступ к эксклюзивным предложениям по работе и проектам, которые доступны только для членов
                  сообщества
                </p>
              </div>
            </div>

            {/* Tips and recommendations section */}
            <div className="flex flex-row justify-between items-center p-0 gap-[36px] w-[1004px] h-[270px]">
              <div className="flex flex-col justify-center items-start p-0 gap-[12px] m-0 auto w-[482px] h-[89px]">
                <h2 className="w-[367px] h-[32px] font-['Montserrat'] font-bold text-[26px] leading-[32px] text-white">
                  Советы и рекомендации
                </h2>
                <p className="w-[482px] h-[45px] font-['Montserrat'] font-normal text-[12px] leading-[15px] text-[#9F9F9F]">
                  Делитесь своими находками и получайте полезные советы от коллег, которые помогут вам улучшить ваши
                  навыки и повысить эффективность ваших кампаний
                </p>
              </div>
              <div className="m-0 auto w-[470px] h-[270px] bg-white rounded-[24px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=270&width=470"
                  alt="Советы и рекомендации"
                  width={470}
                  height={270}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* CTA Banner */}
            <div className="w-[1004px] h-[300px] bg-[#BEFF62] rounded-[20px] relative overflow-hidden">
              <div className="absolute w-[482px] h-[162px] left-[40px] top-[calc(50%-162px/2)] flex flex-col items-start p-0 gap-[24px]">
                <div className="flex flex-col justify-center items-start p-0 gap-[12px] w-[482px] h-[89px]">
                  <h2 className="w-[367px] h-[32px] font-['Montserrat'] font-bold text-[26px] leading-[32px] text-[#353535]">
                    Советы и рекомендации
                  </h2>
                  <p className="w-[482px] h-[45px] font-['Montserrat'] font-normal text-[12px] leading-[15px] text-[#5F7146]">
                    Делитесь своими находками и получайте полезные советы от коллег, которые помогут вам улучшить ваши
                    навыки и повысить эффективность ваших кампаний
                  </p>
                </div>
                <Link
                  href="/courses"
                  className="flex flex-row justify-center items-center p-[16px_20px] gap-[12px] w-[174px] h-[49px] bg-[#353535] rounded-[10px]"
                >
                  <span className="w-[134px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] whitespace-nowrap text-white">
                    Перейти к курсам
                  </span>
                </Link>
              </div>
              <div className="absolute w-[475px] h-[359px] right-[27px] top-[-30px]">
                <Image
                  src="/49153645eafa1c8503a05964269003e53378e932 (1).png"
                  alt="Персонаж с ноутбуком"
                  width={475}
                  height={359}
                  className="object-contain"
                />
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
