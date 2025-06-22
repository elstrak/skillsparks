"use client"

import Image from "next/image"
import Link from "next/link"
import { Montserrat, Unbounded } from "next/font/google"
import { Upload } from "lucide-react"
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

export default function ProfilePage() {
  return (
    <div className={montserrat.variable + ' ' + unbounded.variable + ' w-full min-h-screen bg-[#212121] flex justify-center'}>
      <div className="w-full max-w-[1270px] px-4 py-5 flex flex-col gap-[100px]">
        {/* Main content container */}
        <div className="flex flex-row justify-between items-start p-0 gap-[20px] w-[1270px] h-[814px]">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex flex-col items-start p-0 gap-[52px] w-[1004px] h-[814px]">
            {/* Breadcrumb */}
            <div className="flex flex-col items-start p-0 gap-[8px] w-[1004px] h-[375px]">
              <div className="flex flex-row items-start p-0 gap-[8px] w-[100px] h-[15px]">
                <span className="w-[5px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-[#878787]">
                  Профиль
                </span>
              </div>

              {/* Profile and Status sections */}
              <div className="flex flex-row justify-center items-start p-0 gap-[20px] w-[1004px] h-[352px]">
                {/* Basic Information section */}
                <div className="box-border w-[410px] h-[352px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px] relative">
                  <div className="flex flex-col items-start p-0 gap-[20px] absolute w-[354px] h-[312px] left-[28px] top-[20px]">
                    <h2 className="w-[354px] h-[24px] font-['Montserrat'] font-bold text-[20px] leading-[24px] text-white">
                      Основная информация
                    </h2>

                    {/* Profile photo and upload button */}
                    <div className="flex flex-row items-center p-0 gap-[24px] w-[286px] h-[77px]">
                      <div className="w-[77px] h-[77px] rounded-[8px] overflow-hidden flex-shrink-0">
                        <Image
                          src="/f9f802d1539ff5c2e2c823484f676d172c1c3172.png"
                          alt="Фото профиля"
                          width={77}
                          height={77}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <button className="box-border flex flex-row justify-center items-center p-[12px_16px] gap-[8px] w-[185px] h-[41px] border border-[#B1B1B1] rounded-[10px]">
                        <span className="w-[120px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B1B1B1]">
                          Загрузить фото
                        </span>
                        <Upload className="w-[20px] h-[20px] text-[#B1B1B1]" />
                      </button>
                    </div>

                    {/* Form fields */}
                    <div className="flex flex-col items-start p-0 gap-[24px] w-[354px] h-[171px]">
                      <div className="flex flex-col items-start p-0 gap-[8px] w-[354px] h-[106px]">
                        <div className="flex flex-row items-center p-[16px] gap-[10px] w-[354px] h-[49px] bg-[#212121] rounded-[12px]">
                          <span className="w-[32px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-white">
                            Имя
                          </span>
                        </div>
                        <div className="flex flex-row items-center p-[16px] gap-[10px] w-[354px] h-[49px] bg-[#212121] rounded-[12px]">
                          <span className="w-[45px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-white">
                            Почта
                          </span>
                        </div>
                      </div>
                      <button className="flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[206px] h-[41px] bg-white rounded-[10px]">
                        <span className="w-[166px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#3B3B3B]">
                          Сохранить изменения
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Status section */}
                <div className="box-border w-[574px] h-[352px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px] relative">
                  <h2 className="absolute w-[72px] h-[24px] left-[28px] top-[20px] font-['Montserrat'] font-bold text-[20px] leading-[24px] text-white">
                    Статус
                  </h2>

                  {/* Status levels */}
                  <div className="flex flex-col justify-between items-start p-0 gap-[32px] absolute w-[371px] h-[223px] left-[28px] top-[65px]">
                    {/* Beginner level */}
                    <div className="flex flex-row items-center p-0 gap-[65px] m-0 auto w-[371px] h-[41px]">
                      <div className="flex flex-col items-start p-0 gap-[4px] w-[175px] h-[41px]">
                        <span className="w-[175px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-[#8B8B8B]">
                          Уровень
                        </span>
                        <span className="w-[175px] h-[22px] font-['Montserrat'] font-semibold text-[18px] leading-[22px] text-white">
                          Начинающий
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-[4px] w-[131px] h-[41px]">
                        <span className="w-[131px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-[#8B8B8B]">
                          Пройдено уроков
                        </span>
                        <span className="w-[131px] h-[22px] font-['Montserrat'] font-semibold text-[18px] leading-[22px] text-white">
                          15
                        </span>
                      </div>
                    </div>

                    {/* Advanced level */}
                    <div className="flex flex-row items-center p-0 gap-[65px] m-0 auto w-[371px] h-[41px]">
                      <div className="flex flex-col items-start p-0 gap-[4px] w-[175px] h-[41px]">
                        <span className="w-[175px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-[#8B8B8B]">
                          Уровень
                        </span>
                        <span className="w-[175px] h-[22px] font-['Montserrat'] font-semibold text-[18px] leading-[22px] text-white">
                          Продвинутый
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-[4px] w-[131px] h-[41px]">
                        <span className="w-[131px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-[#8B8B8B]">
                          Пройдено уроков
                        </span>
                        <span className="w-[131px] h-[22px] font-['Montserrat'] font-semibold text-[18px] leading-[22px] text-white">
                          15
                        </span>
                      </div>
                    </div>

                    {/* Professional level */}
                    <div className="flex flex-row items-center p-0 gap-[65px] m-0 auto w-[371px] h-[41px]">
                      <div className="flex flex-col items-start p-0 gap-[4px] w-[175px] h-[41px]">
                        <span className="w-[175px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-[#8B8B8B]">
                          Уровень
                        </span>
                        <span className="w-[175px] h-[22px] font-['Montserrat'] font-semibold text-[18px] leading-[22px] text-white">
                          Профессионал
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-[4px] w-[131px] h-[41px]">
                        <span className="w-[131px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-[#8B8B8B]">
                          Пройдено уроков
                        </span>
                        <span className="w-[131px] h-[22px] font-['Montserrat'] font-semibold text-[18px] leading-[22px] text-white">
                          15
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Star badge */}
                  <div className="flex flex-col items-center p-0 gap-[20px] absolute w-[73px] h-[108px] left-[473px] top-[calc(50%-108px/2)]">
                    <div className="w-[73px] h-[73px] relative">
                    <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M72.9999 30.1855C72.9999 30.1352 73.0005 30.0854 72.9978 30.0351C73.0698 25.0262 69.9574 24.3365 69.9574 24.3365L65.5393 23.772L67.539 26.6809L49.2198 24.6756C48.8411 24.634 48.5088 24.3933 48.3525 24.0476L39.6602 4.82015C39.0916 3.5626 37.8797 2.78149 36.4966 2.78149C35.1135 2.78149 33.9011 3.5626 33.333 4.82015L24.6402 24.0476C24.4839 24.3933 24.1516 24.634 23.7734 24.6756L5.44788 26.682L7.44813 23.7725L3.02997 24.337C3.02997 24.337 -0.0984276 24.7341 0.00238522 29.7955V29.7977C0.00291862 29.836 -0.00028498 29.8693 0.000781822 29.9082L0.00718319 29.9125C0.0125172 30.8588 0.404567 31.7685 1.14173 32.4364L16.4455 47.1637C16.7272 47.4192 16.8541 47.8086 16.7768 48.18L12.4754 68.8297C12.2615 69.8559 12.5149 70.9045 13.1705 71.708C13.8308 72.517 14.8416 73.0006 15.8743 73.0006C16.4695 73.0006 17.0643 72.8409 17.5945 72.5389L35.96 62.0787C36.1233 61.9857 36.3083 61.9365 36.4961 61.9365C36.6838 61.9365 36.8689 61.9857 37.0316 62.0787L55.3972 72.5389C55.9274 72.8409 56.5221 73.0006 57.1174 73.0006C58.1501 73 59.1603 72.5176 59.8207 71.708C60.4762 70.9045 60.7296 69.8553 60.5157 68.8297L56.2143 48.1795C56.137 47.8081 56.2639 47.4192 56.5456 47.1637L71.8627 32.7339C72.601 32.065 72.993 31.1542 72.9973 30.2063L72.9983 30.2057C73.0005 30.1981 72.9999 30.1921 72.9999 30.1855Z" fill="url(#paint0_linear_131_757)"/>
<path d="M56.5477 70.2191C55.9689 70.2191 55.3902 70.0594 54.8749 69.7574L37.0161 59.2972C36.8577 59.2042 36.6774 59.155 36.495 59.155C36.3126 59.155 36.1323 59.2042 35.9739 59.2972L18.115 69.7574C17.5998 70.0594 17.021 70.2191 16.4423 70.2191C15.4384 70.2191 14.4554 69.7361 13.8132 68.9265C13.1758 68.123 12.9293 67.0738 13.1373 66.0482L17.3197 45.3986C17.395 45.0271 17.2712 44.6377 16.9976 44.3822L1.7775 30.197C0.782706 29.2693 0.422126 27.8788 0.837646 26.5671C1.25317 25.2554 2.34184 24.3468 3.67854 24.1964L24.1227 21.8941C24.4903 21.8531 24.8135 21.6124 24.9655 21.2661L33.4183 2.03866C33.9709 0.78111 35.1498 0 36.495 0C37.8397 0 39.019 0.78111 39.5716 2.03866L48.0239 21.2661C48.1759 21.6118 48.4992 21.8525 48.8672 21.8941L69.3104 24.1959C70.6476 24.3463 71.7363 25.2554 72.1518 26.5671C72.5673 27.8788 72.2073 29.2698 71.2119 30.197L55.9919 44.3822C55.7182 44.6377 55.5945 45.0271 55.6697 45.398L59.8521 66.0488C60.0596 67.0744 59.8137 68.1235 59.1757 68.9271C58.5346 69.7355 57.5515 70.2185 56.5477 70.2191Z" fill="url(#paint1_linear_131_757)"/>
<path d="M38.5159 2.52848L46.9682 21.756C47.2898 22.4878 47.9651 22.9911 48.7439 23.0786L69.1875 25.3809C71.0822 25.5942 71.8449 28.0005 70.4341 29.3155L55.214 43.5007C54.6342 44.0406 54.3766 44.8551 54.5361 45.6411L58.7185 66.2913C59.1063 68.2053 57.1097 69.6926 55.4551 68.7227L37.5963 58.262C36.9162 57.8638 36.0815 57.8638 35.4014 58.262L17.5426 68.7227C15.8874 69.692 13.8914 68.2047 14.2787 66.2913L18.4611 45.6411C18.6206 44.8545 18.3624 44.0406 17.7831 43.5007L2.56307 29.3155C1.15276 28.001 1.91499 25.5942 3.80963 25.3809L24.2533 23.0786C25.0315 22.9911 25.7068 22.4878 26.029 21.756L34.4813 2.52848C35.2654 0.746366 37.7329 0.746366 38.5159 2.52848Z" fill="url(#paint2_linear_131_757)"/>
<path d="M58.7201 66.2908L54.5377 45.6406C54.3782 44.854 54.6364 44.0401 55.2157 43.5002L70.4357 29.3149C71.8461 28.0005 71.0838 25.5937 69.1892 25.3804L57.4138 24.0544C51.0898 30.3919 39.1528 39.174 18.4243 44.5723C18.5171 44.9153 18.5358 45.2801 18.4627 45.6406L14.2803 66.2908C13.8925 68.2047 15.8891 69.692 17.5437 68.7222L35.4025 58.2614C36.0826 57.8632 36.9173 57.8632 37.5974 58.2614L55.4562 68.7222C57.1114 69.692 59.1079 68.2047 58.7201 66.2908Z" fill="url(#paint3_linear_131_757)"/>
<path opacity="0.44" d="M46.9677 21.7547L38.5154 2.52726C37.7318 0.745145 35.2648 0.745145 34.4813 2.52726L26.029 21.7547C25.7074 22.4866 25.0321 22.9899 24.2533 23.0774L3.80963 25.3797C1.91499 25.593 1.15276 27.9993 2.56307 29.3142L12.3729 38.4567C29.6897 35.8607 40.8757 27.8166 47.125 22.0468C47.0663 21.9544 47.0125 21.8576 46.9677 21.7547Z" fill="url(#paint4_linear_131_757)"/>
<path d="M35.8139 14.2375C35.0367 16.4868 33.5181 17.9866 32.4214 17.5884C31.3248 17.1902 31.0655 15.0438 31.8427 12.7951C32.6199 10.5458 34.1385 9.04597 35.2351 9.44418C36.3318 9.84239 36.591 11.9883 35.8139 14.2375Z" fill="#FFF8E1"/>
<path d="M32.5973 20.3689C32.5973 21.1916 31.9471 21.8589 31.1448 21.8589C30.3426 21.8589 29.6924 21.1921 29.6924 20.3689C29.6924 19.5462 30.3426 18.8794 31.1448 18.8794C31.9465 18.8788 32.5973 19.5462 32.5973 20.3689Z" fill="#FFF8E1"/>
<defs>
<linearGradient id="paint0_linear_131_757" x1="36.5003" y1="12.1257" x2="36.5003" y2="56.6888" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF8F00"/>
<stop offset="0.995" stop-color="#B13827"/>
</linearGradient>
<linearGradient id="paint1_linear_131_757" x1="36.4949" y1="9.3444" x2="36.4949" y2="53.9074" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF176"/>
<stop offset="1" stop-color="#FF8F00"/>
</linearGradient>
<linearGradient id="paint2_linear_131_757" x1="33.9775" y1="21.2755" x2="42.0808" y2="44.1909" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFCB28"/>
<stop offset="0.4132" stop-color="#FFCC2B"/>
<stop offset="0.5969" stop-color="#FFD032"/>
<stop offset="0.735" stop-color="#FFD63E"/>
<stop offset="0.8505" stop-color="#FFDF50"/>
<stop offset="0.9507" stop-color="#FFEA68"/>
<stop offset="1" stop-color="#FFF176"/>
</linearGradient>
<linearGradient id="paint3_linear_131_757" x1="50.9876" y1="63.5483" x2="23.4858" y2="11.9745" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD54F"/>
<stop offset="0.4801" stop-color="#FFAF16"/>
<stop offset="0.6546" stop-color="#FFA000"/>
</linearGradient>
<linearGradient id="paint4_linear_131_757" x1="23.5021" y1="16.2847" x2="16.7848" y2="-40.0875" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF176"/>
<stop offset="1" stop-color="#FF8F00"/>
</linearGradient>
</defs>
</svg>

                    </div>
                    <span className="w-[73px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-center text-[#AEAEAE]">
                      1
                    </span>
                  </div>

                  {/* Vertical divider */}
                  <div className="absolute w-[1px] h-[352px] left-[445px] top-0 bg-[#4B4B4B]"></div>
                </div>
              </div>
            </div>

            {/* Achievements section */}
            <div className="box-border w-[1004px] h-[387px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px] relative">
              <h2 className="absolute w-[138px] h-[24px] left-[28px] top-[20px] font-['Montserrat'] font-bold text-[20px] leading-[24px] text-white">
                Достижения
              </h2>

              {/* Achievement cards */}
              <div className="flex flex-row justify-between items-center p-0 gap-[27px] absolute w-[948px] h-[263px] left-[28px] top-[80px]">
                {/* Content Master achievement */}
                <div className="flex flex-col items-center p-0 gap-[20px] m-0 auto w-[200px] h-[263px]">
                  <div className="w-[200px] h-[200px] relative">
                    <div className="absolute w-[118px] h-[118px] left-[calc(50%-118px/2)] top-[calc(50%-118px/2)] bg-[#D157CF] filter blur-[47px]"></div>
                    <Image
                      src="/010370c10e67ef0cacaee96ec3b76727fc1a5499.png"
                      alt="Мастер контента"
                      width={200}
                      height={200}
                      className="absolute w-[200px] h-[200px] left-[calc(50%-200px/2)] top-[calc(50%-200px/2)] object-cover rounded-[16px]"
                    />
                  </div>
                  <div className="flex flex-col items-center p-0 gap-[8px] w-[200px] h-[43px]">
                    <h3 className="w-[200px] h-[20px] font-['Montserrat'] font-bold text-[16px] leading-[20px] text-center text-white">
                      Мастер контента
                    </h3>
                    <p className="w-[200px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-center text-white">
                      Закончи 1 урок
                    </p>
                  </div>
                </div>

                {/* Network Guru achievement */}
                <div className="flex flex-col items-center p-0 gap-[20px] m-0 auto w-[200px] h-[263px]">
                  <div className="w-[200px] h-[200px] relative">
                    <Image
                      src="/030c3b794de5b15906f73f574f7c4e6003d16bf7.png"
                      alt="Сетевой гуру"
                      width={200}
                      height={200}
                      className="absolute w-[200px] h-[200px] left-[calc(50%-200px/2)] top-[calc(50%-200px/2)] object-cover rounded-[16px] mix-blend-luminosity opacity-50"
                    />
                  </div>
                  <div className="flex flex-col items-center p-0 gap-[8px] w-[200px] h-[43px]">
                    <h3 className="w-[200px] h-[20px] font-['Montserrat'] font-bold text-[16px] leading-[20px] text-center text-white">
                      Сетевой гуру
                    </h3>
                    <p className="w-[200px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-center text-white">
                      Закончи 1 модуль
                    </p>
                  </div>
                </div>

                {/* Analyst achievement */}
                <div className="flex flex-col items-center p-0 gap-[20px] m-0 auto w-[200px] h-[263px]">
                  <div className="w-[200px] h-[200px] relative">
                    <Image
                      src="/8bb4cd835cdf3e58859ed3955019394752726448.png"
                      alt="Аналитик"
                      width={200}
                      height={200}
                      className="absolute w-[200px] h-[200px] left-[calc(50%-200px/2)] top-[calc(50%-200px/2)] object-cover rounded-[16px] mix-blend-luminosity opacity-50"
                    />
                  </div>
                  <div className="flex flex-col items-center p-0 gap-[8px] w-[200px] h-[43px]">
                    <h3 className="w-[200px] h-[20px] font-['Montserrat'] font-bold text-[16px] leading-[20px] text-center text-white">
                      Аналитик
                    </h3>
                    <p className="w-[200px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-center text-white">
                      Пройди 4 игры
                    </p>
                  </div>
                </div>

                {/* Project Partner achievement */}
                <div className="flex flex-col items-center p-0 gap-[20px] m-0 auto w-[200px] h-[263px]">
                  <div className="w-[200px] h-[200px] relative">
                    <div className="absolute w-[118px] h-[118px] left-[calc(50%-118px/2)] top-[calc(50%-118px/2)] bg-[#D2FCFB] filter blur-[47px]"></div>
                    <Image
                      src="/312b920f786de034f08286d0f6c72aa9e56a8901.png"
                      alt="Партнер по проекту"
                      width={200}
                      height={200}
                      className="absolute w-[200px] h-[200px] left-[calc(50%-200px/2)] top-[calc(50%-200px/2)] object-cover rounded-[16px]"
                    />
                  </div>
                  <div className="flex flex-col items-center p-0 gap-[8px] w-[200px] h-[43px]">
                    <h3 className="w-[200px] h-[20px] font-['Montserrat'] font-bold text-[16px] leading-[20px] text-center text-white">
                      Партнер по проекту
                    </h3>
                    <p className="w-[200px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-center text-white">
                      Выучи 15 новых терминов
                    </p>
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
