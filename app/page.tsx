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

export default function Dashboard() {
  return (
    <div className={montserrat.variable + ' ' + unbounded.variable + ' w-full min-h-screen bg-[#212121] flex justify-center'}>
      <div className="w-full max-w-[1270px] px-4 py-5 flex flex-col gap-[100px]">
        {/* Main content container */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-5 w-full">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex flex-col items-start gap-9 w-full md:w-auto md:flex-1">
            {/* Promo banner */}
            <PromoBanner />

            {/* Content sections */}
            <div className="flex flex-col items-start gap-9 w-full">
              {/* Courses section */}
              <div className="flex flex-col items-start p-0 gap-[20px] w-[1004px] h-[649px]">
                <div className="flex flex-row justify-between items-center p-0 gap-[393px] w-[1004px] h-[29px]">
                  <h2 className="w-[82px] h-[29px] font-['Montserrat'] font-semibold text-[24px] leading-[29px] text-white">
                    Курсы
                  </h2>
                  <a
                    href="#"
                    className="w-[99px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] underline text-[#8D8D8D]"
                  >
                    Смотреть все
                  </a>
                </div>

                {/* Course cards grid */}
                <div className="flex flex-row flex-wrap items-start content-start p-0 gap-[12px] w-[1004px] h-[600px]">
                  {/* Course 1 */}
                  <div className="box-border flex flex-col justify-between items-start p-[12px] gap-[20px] w-[325px] h-[294px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-[12px] m-0 auto w-[301px] h-[209px]">
                      <div className="w-[301px] h-[96px] rounded-[12px] overflow-hidden">
                        <Image
                          src="/6eef2902e0c8fdb019857e59c9d48dbdfcfc0783.png"
                          alt="СММ-старт"
                          width={301}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start p-0 gap-[12px] w-[301px] h-[101px]">
                        <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[92px] h-[20px] bg-[#364C93] rounded-[20px]">
                          <span className="w-[72px] h-[12px] font-['Montserrat'] font-medium text-[10px] leading-[12px] text-white">
                            Начинающий
                          </span>
                        </div>
                        <h3 className="w-[301px] h-[34px] font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                          SMM-старт: Основы продвижения в соцсетях
                        </h3>
                        <div className="flex flex-row items-center p-0 gap-[8px] w-[171px] h-[23px]">
                          <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[79px] h-[23px] bg-[#212121] rounded-[20px]">
                            <span className="w-[59px] h-[15px] font-['Montserrat'] font-semibold text-[12px] leading-[15px] text-[#8D8D8D]">
                              4 модуля
                            </span>
                          </div>
                          <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[84px] h-[23px] bg-[#212121] rounded-[20px]">
                            <span className="w-[64px] h-[15px] font-['Montserrat'] font-semibold text-[12px] leading-[15px] text-[#8D8D8D]">
                              20 уроков
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="/courses/smm-start">
                    <button className="box-border flex flex-row justify-center items-center p-[12px_20px] gap-[12px] m-0 auto w-[125px] h-[41px] border border-[#B1B1B1] rounded-[10px]">
                    <span className="w-[85px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B1B1B1]">
                      Подробнее
                    </span>
                  </button>
                  </Link>
                  </div>

                  {/* Course 2 */}
                  <div className="box-border flex flex-col justify-between items-start p-[12px] gap-[20px] w-[326px] h-[294px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-[12px] m-0 auto w-[302px] h-[192px]">
                      <div className="w-[302px] h-[96px] rounded-[12px] overflow-hidden">
                        <Image
                          src="/88606c6c5e875558ad3f43695f23e9a24d286531.png"
                          alt="Контент-маркетинг"
                          width={302}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start p-0 gap-[12px] w-[302px] h-[84px]">
                        <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[92px] h-[20px] bg-[#364C93] rounded-[20px]">
                          <span className="w-[72px] h-[12px] font-['Montserrat'] font-medium text-[10px] leading-[12px] text-white">
                            Начинающий
                          </span>
                        </div>
                        <h3 className="w-[302px] h-[17px] font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                          Контент-маркетинг в социальных сетях
                        </h3>
                        <div className="flex flex-row items-center p-0 gap-[8px] w-[168px] h-[23px]">
                          <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[79px] h-[23px] bg-[#212121] rounded-[20px]">
                            <span className="w-[59px] h-[15px] font-['Montserrat'] font-semibold text-[12px] leading-[15px] text-[#8D8D8D]">
                              4 модуля
                            </span>
                          </div>
                          <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[81px] h-[23px] bg-[#212121] rounded-[20px]">
                            <span className="w-[61px] h-[15px] font-['Montserrat'] font-semibold text-[12px] leading-[15px] text-[#8D8D8D]">
                              16 уроков
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="box-border flex flex-row justify-center items-center p-[12px_20px] gap-[12px] m-0 auto w-[125px] h-[41px] border border-[#B1B1B1] rounded-[10px]">
                      <span className="w-[85px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B1B1B1]">
                        Подробнее
                      </span>
                    </button>
                  </div>

                  {/* Course 3 */}
                  <div className="box-border flex flex-col justify-between items-start p-[12px] gap-[20px] w-[326px] h-[294px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-[12px] m-0 auto w-[302px] h-[192px]">
                      <div className="w-[302px] h-[96px] rounded-[12px] overflow-hidden">
                        <Image
                          src="/38c22307b8135f545c588b8d9efabddfa17d7104.png"
                          alt="Продвижение в Instagram"
                          width={302}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start p-0 gap-[12px] w-[302px] h-[84px]">
                        <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[94px] h-[20px] bg-[#369365] rounded-[20px]">
                          <span className="w-[74px] h-[12px] font-['Montserrat'] font-medium text-[10px] leading-[12px] text-white">
                            Продвинутый
                          </span>
                        </div>
                        <h3 className="w-[302px] h-[17px] font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                          Продвижение в Instagram
                        </h3>
                        <div className="flex flex-row items-center p-0 gap-[8px] w-[179px] h-[23px]">
                          <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[87px] h-[23px] bg-[#212121] rounded-[20px]">
                            <span className="w-[67px] h-[15px] font-['Montserrat'] font-semibold text-[12px] leading-[15px] text-[#8D8D8D]">
                              6 модулей
                            </span>
                          </div>
                          <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[84px] h-[23px] bg-[#212121] rounded-[20px]">
                            <span className="w-[64px] h-[15px] font-['Montserrat'] font-semibold text-[12px] leading-[15px] text-[#8D8D8D]">
                              24 уроков
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="box-border flex flex-row justify-center items-center p-[12px_20px] gap-[12px] m-0 auto w-[125px] h-[41px] border border-[#B1B1B1] rounded-[10px]">
                      <span className="w-[85px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B1B1B1]">
                        Подробнее
                      </span>
                    </button>
                  </div>

                  {/* Course 4 */}
                  <div className="box-border flex flex-col justify-between items-start p-[12px] gap-[20px] w-[326px] h-[294px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-[12px] m-0 auto w-[302px] h-[209px]">
                      <div className="w-[302px] h-[96px] rounded-[12px] overflow-hidden">
                        <Image
                          src="/63feb642bc14e95c074de67b18b8d2cf346e2571.png"
                          alt="Создание рекламных кампаний"
                          width={302}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start p-0 gap-[12px] w-[302px] h-[101px]">
                        <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[94px] h-[20px] bg-[#369365] rounded-[20px]">
                          <span className="w-[74px] h-[12px] font-['Montserrat'] font-medium text-[10px] leading-[12px] text-white">
                            Продвинутый
                          </span>
                        </div>
                        <h3 className="w-[302px] h-[34px] font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                          Создание эффективных рекламных кампаний
                        </h3>
                        <div className="flex flex-row items-center p-0 gap-[8px] w-[179px] h-[23px]">
                          <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[87px] h-[23px] bg-[#212121] rounded-[20px]">
                            <span className="w-[67px] h-[15px] font-['Montserrat'] font-semibold text-[12px] leading-[15px] text-[#8D8D8D]">
                              5 модулей
                            </span>
                          </div>
                          <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[84px] h-[23px] bg-[#212121] rounded-[20px]">
                            <span className="w-[64px] h-[15px] font-['Montserrat'] font-semibold text-[12px] leading-[15px] text-[#8D8D8D]">
                              20 уроков
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="box-border flex flex-row justify-center items-center p-[12px_20px] gap-[12px] m-0 auto w-[125px] h-[41px] border border-[#B1B1B1] rounded-[10px]">
                      <span className="w-[85px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B1B1B1]">
                        Подробнее
                      </span>
                    </button>
                  </div>

                  {/* Course 5 */}
                  <div className="box-border flex flex-col justify-between items-start p-[12px] gap-[20px] w-[326px] h-[294px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-[12px] m-0 auto w-[302px] h-[192px]">
                      <div className="w-[302px] h-[96px] rounded-[12px] overflow-hidden">
                        <Image
                          src="/416d6a9a433535fe22ff3d0690cf9de1f64bf202.png"
                          alt="Аналитика и метрики"
                          width={302}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start p-0 gap-[12px] w-[302px] h-[84px]">
                        <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[100px] h-[20px] bg-[#933E36] rounded-[20px]">
                          <span className="w-[80px] h-[12px] font-['Montserrat'] font-medium text-[10px] leading-[12px] text-white">
                            Профессионал
                          </span>
                        </div>
                        <h3 className="w-[302px] h-[17px] font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                          Аналитика и метрики в SMM
                        </h3>
                        <div className="flex flex-row items-center p-0 gap-[8px] w-[168px] h-[23px]">
                          <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[79px] h-[23px] bg-[#212121] rounded-[20px]">
                            <span className="w-[59px] h-[15px] font-['Montserrat'] font-semibold text-[12px] leading-[15px] text-[#8D8D8D]">
                              4 модуля
                            </span>
                          </div>
                          <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[81px] h-[23px] bg-[#212121] rounded-[20px]">
                            <span className="w-[61px] h-[15px] font-['Montserrat'] font-semibold text-[12px] leading-[15px] text-[#8D8D8D]">
                              16 уроков
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="box-border flex flex-row justify-center items-center p-[12px_20px] gap-[12px] m-0 auto w-[125px] h-[41px] border border-[#B1B1B1] rounded-[10px]">
                      <span className="w-[85px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B1B1B1]">
                        Подробнее
                      </span>
                    </button>
                  </div>

                  {/* Course 6 */}
                  <div className="box-border flex flex-col justify-between items-start p-[12px] gap-[20px] w-[326px] h-[294px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-[12px] m-0 auto w-[302px] h-[192px]">
                      <div className="w-[302px] h-[96px] rounded-[12px] overflow-hidden">
                        <Image
                          src="/970cd4eac65d4330b9726843c6dfa24b3f956772.png"
                          alt="Копирайтинг"
                          width={302}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start p-0 gap-[12px] w-[302px] h-[84px]">
                        <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[92px] h-[20px] bg-[#364C93] rounded-[20px]">
                          <span className="w-[72px] h-[12px] font-['Montserrat'] font-medium text-[10px] leading-[12px] text-white">
                            Начинающий
                          </span>
                        </div>
                        <h3 className="w-[302px] h-[17px] font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                          Копирайтинг для социальных сетей
                        </h3>
                        <div className="flex flex-row items-center p-0 gap-[8px] w-[179px] h-[23px]">
                          <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[87px] h-[23px] bg-[#212121] rounded-[20px]">
                            <span className="w-[67px] h-[15px] font-['Montserrat'] font-semibold text-[12px] leading-[15px] text-[#8D8D8D]">
                              6 модулей
                            </span>
                          </div>
                          <div className="flex flex-row justify-center items-center p-[4px_10px] gap-[10px] w-[84px] h-[23px] bg-[#212121] rounded-[20px]">
                            <span className="w-[64px] h-[15px] font-['Montserrat'] font-semibold text-[12px] leading-[15px] text-[#8D8D8D]">
                              24 уроков
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="box-border flex flex-row justify-center items-center p-[12px_20px] gap-[12px] m-0 auto w-[125px] h-[41px] border border-[#B1B1B1] rounded-[10px]">
                      <span className="w-[85px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B1B1B1]">
                        Подробнее
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Blog section */}
              <div className="flex flex-col items-start p-0 gap-[20px] w-[1004px] h-[473px]">
                <div className="flex flex-row justify-between items-center p-0 gap-[393px] w-[1004px] h-[29px]">
                  <h2 className="w-[61px] h-[29px] font-['Montserrat'] font-semibold text-[24px] leading-[29px] text-white">
                    Блог
                  </h2>
                  <a
                    href="#"
                    className="w-[99px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] underline text-[#8D8D8D]"
                  >
                    Смотреть все
                  </a>
                </div>

                {/* Blog posts */}
                <div className="flex flex-row items-center p-0 gap-[12px] w-[1004px] h-[424px]">
                  {/* Blog post 1 */}
                  <div className="box-border flex flex-col items-start p-[12px] gap-[20px] w-[325px] h-[424px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-[16px] w-[301px] h-[339px]">
                      <div className="w-[301px] h-[160px] rounded-[20px] overflow-hidden">
                        <Image
                          src="/89b0164d547939936688b2bb22e2abee850976b1.png"
                          alt="Зачем нужен SMM"
                          width={301}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start p-0 gap-[8px] w-[301px] h-[163px]">
                        <div className="box-border flex flex-row justify-center items-center p-[4px_20px] gap-[10px] w-[102px] h-[23px] border border-[#727272] rounded-[30px]">
                          <span className="w-[62px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-center text-[#9F9F9F]">
                            01.01.2000
                          </span>
                        </div>
                        <h3 className="w-[301px] h-[34px] font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                          Зачем нужен SMM: цели и польза для бизнеса
                        </h3>
                        <p className="w-[301px] h-[90px] font-['Montserrat'] font-normal text-[12px] leading-[15px] text-[#9F9F9F]">
                          Социальные медиа стали неотъемлемой частью жизни современного человека. Миллионы пользователей
                          ежедневно проводят время в социальных сетях, общаются с друзьями, ищут информацию и делают
                          покупки. Именно поэтому для бизнеса важно...
                        </p>
                      </div>
                    </div>
                    <Link href="/">
                    <button className="box-border flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[91px] h-[41px] border border-[#B1B1B1] rounded-[10px]">
                      <span className="w-[51px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B1B1B1]">
                        Читать
                      </span>
                    </button>
                    </Link>
                  </div>

                  {/* Blog post 2 */}
                  <div className="box-border flex flex-col items-start p-[12px] gap-[20px] w-[325px] h-[424px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-[16px] w-[301px] h-[339px]">
                      <div className="w-[301px] h-[160px] rounded-[20px] overflow-hidden">
                        <Image
                          src="/74c7ea7ea6085387a5e45a52435ab23a1d69136d.png"
                          alt="Как выбрать соцсети"
                          width={301}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start p-0 gap-[8px] w-[301px] h-[163px]">
                        <div className="box-border flex flex-row justify-center items-center p-[4px_20px] gap-[10px] w-[102px] h-[23px] border border-[#727272] rounded-[30px]">
                          <span className="w-[62px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-center text-[#9F9F9F]">
                            01.01.2000
                          </span>
                        </div>
                        <h3 className="w-[301px] h-[34px] font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                          Как выбрать подходящие социальные сети для бизнеса
                        </h3>
                        <p className="w-[301px] h-[90px] font-['Montserrat'] font-normal text-[12px] leading-[15px] text-[#9F9F9F]">
                          В этой статье мы рассмотрим, как определить, какие социальные платформы подходят именно вашему
                          бизнесу. Узнайте о ключевых факторах, таких как целевая аудитория, тип контента и характер
                          взаимодействия, чтобы максимизировать эффективность своих...
                        </p>
                      </div>
                    </div>
                    <button className="box-border flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[91px] h-[41px] border border-[#B1B1B1] rounded-[10px]">
                      <span className="w-[51px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B1B1B1]">
                        Читать
                      </span>
                    </button>
                  </div>

                  {/* Blog post 3 */}
                  <div className="box-border flex flex-col items-start p-[12px] gap-[20px] w-[325px] h-[424px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                    <div className="flex flex-col items-start p-0 gap-[16px] w-[301px] h-[339px]">
                      <div className="w-[301px] h-[160px] rounded-[20px] overflow-hidden">
                        <Image
                          src="/73656366bed46de70999a69aeef5feb0d72dff53.png"
                          alt="Топ-10 инструментов"
                          width={301}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start p-0 gap-[8px] w-[301px] h-[163px]">
                        <div className="box-border flex flex-row justify-center items-center p-[4px_20px] gap-[10px] w-[102px] h-[23px] border border-[#727272] rounded-[30px]">
                          <span className="w-[62px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-center text-[#9F9F9F]">
                            01.01.2000
                          </span>
                        </div>
                        <h3 className="w-[301px] h-[34px] font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                          Топ-10 инструментов для SMM-специалистов
                        </h3>
                        <p className="w-[301px] h-[90px] font-['Montserrat'] font-normal text-[12px] leading-[15px] text-[#9F9F9F]">
                          Ознакомьтесь с лучшими инструментами для управления социальными сетями, которые помогут вам
                          оптимизировать рабочие процессы. Мы собрали информацию о функционале, преимуществах и ценах,
                          чтобы вы могли выбрать идеальные решения...
                        </p>
                      </div>
                    </div>
                    <button className="box-border flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[91px] h-[41px] border border-[#B1B1B1] rounded-[10px]">
                      <span className="w-[51px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B1B1B1]">
                        Читать
                      </span>
                    </button>
                  </div>
                </div>
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
