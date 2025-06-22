"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile burger button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 p-2 bg-[#3C3C3C] border border-[#4B4B4B] rounded-[8px] sm:hidden"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } sm:relative sm:translate-x-0 sm:z-auto`}>
        <div className="box-border flex flex-col items-start p-[12px] gap-[20px] sm:gap-[40px] w-[280px] sm:w-[246px] h-full sm:h-[591px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px] sm:rounded-[20px] overflow-y-auto sm:overflow-y-visible">
          {/* User profile */}
          <div className="flex flex-row justify-between items-center p-0 gap-[20px] sm:gap-[80px] w-full h-[36px]">
            <div className="flex flex-row items-center p-0 gap-[12px] sm:gap-[16px] w-auto sm:w-[115px] h-[36px]">
              <div className="w-[36px] h-[36px] rounded-[8px] bg-gray-300 overflow-hidden flex-shrink-0">
                <Image
                  src="/f9f802d1539ff5c2e2c823484f676d172c1c3172.png"
                  alt="Аватар пользователя"
                  width={36}
                  height={36}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-start p-0 w-auto sm:w-[63px] h-[36px]">
                <span className="w-auto sm:w-[63px] h-[20px] font-['Montserrat'] font-semibold text-[16px] leading-[20px] text-white">
                  Виктор
                </span>
                <div className="flex flex-row items-center p-0 gap-[4px] w-auto sm:w-[25px] h-[16px]">
                  <span className="text-[#AEAEAE] text-[12px]">1</span>
                  <svg width="16" height="16" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                    <path d="M72.9999 30.1855C72.9999 30.1352 73.0005 30.0854 72.9978 30.0351C73.0698 25.0262 69.9574 24.3365 69.9574 24.3365L65.5393 23.772L67.539 26.6809L49.2198 24.6756C48.8411 24.634 48.5088 24.3933 48.3525 24.0476L39.6602 4.82015C39.0916 3.5626 37.8797 2.78149 36.4966 2.78149C35.1135 2.78149 33.9011 3.5626 33.333 4.82015L24.6402 24.0476C24.4839 24.3933 24.1516 24.634 23.7734 24.6756L5.44788 26.682L7.44813 23.7725L3.02997 24.337C3.02997 24.337 -0.0984276 24.7341 0.00238522 29.7955V29.7977C0.00291862 29.836 -0.00028498 29.8693 0.000781822 29.9082L0.00718319 29.9125C0.0125172 30.8588 0.404567 31.7685 1.14173 32.4364L16.4455 47.1637C16.7272 47.4192 16.8541 47.8086 16.7768 48.18L12.4754 68.8297C12.2615 69.8559 12.5149 70.9045 13.1705 71.708C13.8308 72.517 14.8416 73.0006 15.8743 73.0006C16.4695 73.0006 17.0643 72.8409 17.5945 72.5389L35.96 62.0787C36.1233 61.9857 36.3083 61.9365 36.4961 61.9365C36.6838 61.9365 36.8689 61.9857 37.0316 62.0787L55.3972 72.5389C55.9274 72.8409 56.5221 73.0006 57.1174 73.0006C58.1501 73 59.1603 72.5176 59.8207 71.708C60.4762 70.9045 60.7296 69.8553 60.5157 68.8297L56.2143 48.1795C56.137 47.8081 56.2639 47.4192 56.5456 47.1637L71.8627 32.7339C72.601 32.065 72.993 31.1542 72.9973 30.2063L72.9983 30.2057C73.0005 30.1981 72.9999 30.1921 72.9999 30.1855Z" fill="url(#paint0_linear_131_757)"/>
                    <path d="M56.5477 70.2191C55.9689 70.2191 55.3902 70.0594 54.8749 69.7574L37.0161 59.2972C36.8577 59.2042 36.6774 59.155 36.495 59.155C36.3126 59.155 36.1323 59.2042 35.9739 59.2972L18.115 69.7574C17.5998 70.0594 17.021 70.2191 16.4423 70.2191C15.4384 70.2191 14.4554 69.7361 13.8132 68.9265C13.1758 68.123 12.9293 67.0738 13.1373 66.0482L17.3197 45.3986C17.395 45.0271 17.2712 44.6377 16.9976 44.3822L1.7775 30.197C0.782706 29.2693 0.422126 27.8788 0.837646 26.5671C1.25317 25.2554 2.34184 24.3468 3.67854 24.1964L24.1227 21.8941C24.4903 21.8531 24.8135 21.6124 24.9655 21.2661L33.4183 2.03866C33.9709 0.78111 35.1498 0 36.495 0C37.8397 0 39.019 0.78111 39.5716 2.03866L48.0239 21.2661C48.1759 21.6118 48.4992 21.8525 48.8672 21.8941L69.3104 24.1959C70.6476 24.3463 71.7363 25.2554 72.1518 26.5671C72.5673 27.8788 72.2073 29.2698 71.2119 30.197L55.9919 44.3822C55.7182 44.6377 55.5945 45.0271 55.6697 45.398L59.8521 66.0488C60.0596 67.0744 59.8137 68.1235 59.1757 68.9271C58.5346 69.7355 57.5515 70.2185 56.5477 70.2191Z" fill="url(#paint1_linear_131_757)"/>
                    <path d="M38.5159 2.52848L46.9682 21.756C47.2898 22.4878 47.9651 22.9911 48.7439 23.0786L69.1875 25.3809C71.0822 25.5942 71.8449 28.0005 70.4341 29.3155L55.214 43.5007C54.6342 44.0406 54.3766 44.8551 54.5361 45.6411L58.7185 66.2913C59.1063 68.2053 57.1097 69.6926 55.4551 68.7227L37.5963 58.262C36.9162 57.8638 36.0815 57.8638 35.4014 58.262L17.5426 68.7227C15.8874 69.692 13.8914 68.2047 14.2787 66.2913L18.4611 45.6411C18.6206 44.8545 18.3624 44.0406 17.7831 43.5007L2.56307 29.3155C1.15276 28.001 1.91499 25.5942 3.80963 25.3809L24.2533 23.0786C25.0315 22.9911 25.7068 22.4878 26.029 21.756L34.4813 2.52848C35.2654 0.746366 37.7329 0.746366 38.5159 2.52848Z" fill="url(#paint2_linear_131_757)"/>
                    <path d="M58.7201 66.2908L54.5377 45.6406C54.3782 44.854 54.6364 44.0401 55.2157 43.5002L70.4357 29.3149C71.8461 28.0005 71.0838 25.5937 69.1892 25.3804L57.4138 24.0544C51.0898 30.3919 39.1528 39.174 18.4243 44.5723C18.5171 44.9153 18.5358 45.2801 18.4627 45.6406L14.2803 66.2908C13.8925 68.2047 15.8891 69.692 17.5437 68.7222L35.4025 58.2614C36.0826 57.8632 36.9173 57.8632 37.5974 58.2614L55.4562 68.7222C57.1114 69.692 59.1079 68.2047 58.7201 66.2908Z" fill="url(#paint3_linear_131_757)"/>
                    <path opacity="0.44" d="M46.9677 21.7547L38.5154 2.52726C37.7318 0.745145 35.2648 0.745145 34.4813 2.52726L26.029 21.7547C25.7074 22.4866 25.0321 22.9899 24.2533 23.0774L3.80963 25.3797C1.91499 25.593 1.15276 27.9993 2.56307 29.3142L12.3729 38.4567C29.6897 35.8607 40.8757 27.8166 47.125 22.0468C47.0663 21.9544 47.0125 21.8576 46.9677 21.7547Z" fill="url(#paint4_linear_131_757)"/>
                    <path d="M35.8139 14.2375C35.0367 16.4868 33.5181 17.9866 32.4214 17.5884C31.3248 17.1902 31.0655 15.0438 31.8427 12.7951C32.6199 10.5458 34.1385 9.04597 35.2351 9.44418C36.3318 9.84239 36.591 11.9883 35.8139 14.2375Z" fill="#FFF8E1"/>
                    <path d="M32.5973 20.3689C32.5973 21.1916 31.9471 21.8589 31.1448 21.8589C30.3426 21.8589 29.6924 21.1921 29.6924 20.3689C29.6924 19.5462 30.3426 18.8794 31.1448 18.8794C31.9465 18.8788 32.5973 19.5462 32.5973 20.3689Z" fill="#FFF8E1"/>
                    <defs>
                      <linearGradient id="paint0_linear_131_757" x1="36.5003" y1="12.1257" x2="36.5003" y2="56.6888" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF8F00"/>
                        <stop offset="0.995" stopColor="#B13827"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_131_757" x1="36.4949" y1="9.3444" x2="36.4949" y2="53.9074" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFF176"/>
                        <stop offset="1" stopColor="#FF8F00"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_131_757" x1="33.9775" y1="21.2755" x2="42.0808" y2="44.1909" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFCB28"/>
                        <stop offset="0.4132" stopColor="#FFCC2B"/>
                        <stop offset="0.5969" stopColor="#FFD032"/>
                        <stop offset="0.735" stopColor="#FFD63E"/>
                        <stop offset="0.8505" stopColor="#FFDF50"/>
                        <stop offset="0.9507" stopColor="#FFEA68"/>
                        <stop offset="1" stopColor="#FFF176"/>
                      </linearGradient>
                      <linearGradient id="paint3_linear_131_757" x1="50.9876" y1="63.5483" x2="23.4858" y2="11.9745" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFD54F"/>
                        <stop offset="0.4801" stopColor="#FFAF16"/>
                        <stop offset="0.6546" stopColor="#FFA000"/>
                      </linearGradient>
                      <linearGradient id="paint4_linear_131_757" x1="23.5021" y1="16.2847" x2="16.7848" y2="-40.0875" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFF176"/>
                        <stop offset="1" stopColor="#FF8F00"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <Link
              href="/profile"
              onClick={closeMobileMenu}
              className="box-border flex flex-row items-center p-[8px] gap-[10px] w-[36px] h-[36px] border border-[#4B4B4B] rounded-[8px] -ml-4"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                  stroke="#DDDDDD"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                  stroke="#DDDDDD"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-start p-0 gap-[12px] w-full h-auto sm:h-[491px]">
            {/* Main nav items */}
            <div className="flex flex-col items-start p-0 w-full h-auto sm:h-[156px]">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`flex flex-row items-center p-[16px] gap-[12px] w-full h-[52px] rounded-[12px] ${
                  pathname === "/" ? "bg-white" : ""
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"
                    stroke={pathname === "/" ? "#3B3B3B" : "#8D8D8D"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className={`w-auto sm:w-[67px] h-[20px] font-['Montserrat'] font-medium text-[16px] leading-[20px] ${
                    pathname === "/" ? "text-[#3B3B3B]" : "text-[#8D8D8D]"
                  }`}
                >
                  Главная
                </span>
              </Link>
              <Link
                href="/courses"
                onClick={closeMobileMenu}
                className={`flex flex-row items-center p-[16px] gap-[12px] w-full h-[52px] rounded-[12px] ${
                  pathname === "/courses" ? "bg-white" : ""
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.4546 0.0417485H11.5461C12.6857 0.0417318 13.6043 0.0417152 14.3268 0.138849C15.0769 0.239699 15.7084 0.45544 16.2101 0.95704C16.7117 1.45864 16.9274 2.0902 17.0282 2.84029C17.1253 3.56277 17.1253 4.48136 17.1253 5.62102V12.3792C17.1253 13.5188 17.1253 14.4374 17.0282 15.1599C16.9274 15.91 16.7117 16.5415 16.2101 17.0432C15.7084 17.5447 15.0769 17.7605 14.3268 17.8613C13.6043 17.9584 12.6857 17.9584 11.5461 17.9584H6.4546C6.19334 17.9584 5.94369 17.9584 5.70537 17.9572C5.69268 17.958 5.67987 17.9584 5.66699 17.9584C5.65173 17.9584 5.6366 17.9578 5.62162 17.9568C4.85704 17.9521 4.21121 17.9336 3.67387 17.8613C2.92378 17.7605 2.29222 17.5447 1.79062 17.0432C1.28902 16.5415 1.07328 15.91 0.972425 15.1599C0.892325 14.5641 0.878292 13.8349 0.875842 12.9584H0.666992C0.321817 12.9584 0.0419922 12.6786 0.0419922 12.3334C0.0419922 11.9882 0.321817 11.7084 0.666992 11.7084H0.875325V9.62508H0.666992C0.321817 9.62508 0.0419922 9.34525 0.0419922 9.00008C0.0419922 8.65491 0.321817 8.37508 0.666992 8.37508H0.875325V6.29175H0.666992C0.321817 6.29175 0.0419922 6.01192 0.0419922 5.66675C0.0419922 5.32157 0.321817 5.04175 0.666992 5.04175H0.875842C0.878292 4.16523 0.892325 3.43607 0.972425 2.84029C1.07328 2.0902 1.28902 1.45864 1.79062 0.95704C2.29222 0.45544 2.92378 0.239699 3.67387 0.138849C4.39634 0.0417152 5.31494 0.0417318 6.4546 0.0417485ZM2.12533 6.29175H2.33366C2.67883 6.29175 2.95866 6.01192 2.95866 5.66675C2.95866 5.32157 2.67883 5.04175 2.33366 5.04175H2.12598C2.12864 4.17025 2.14223 3.52039 2.21128 3.00685C2.29349 2.39537 2.44387 2.07156 2.6745 1.84092C2.90513 1.61029 3.22894 1.45992 3.84043 1.37771C4.17516 1.3327 4.5678 1.31126 5.04199 1.30104V16.6992C4.5678 16.6889 4.17516 16.6675 3.84043 16.6225C3.22894 16.5402 2.90513 16.3899 2.6745 16.1592C2.44387 15.9286 2.29349 15.6048 2.21128 14.9933C2.14223 14.4797 2.12864 13.8299 2.12598 12.9584H2.33366C2.67883 12.9584 2.95866 12.6786 2.95866 12.3334C2.95866 11.9882 2.67883 11.7084 2.33366 11.7084H2.12533V9.62508H2.33366C2.67883 9.62508 2.95866 9.34525 2.95866 9.00008C2.95866 8.65491 2.67883 8.37508 2.33366 8.37508H2.12533V6.29175ZM6.29199 16.7084C6.36019 16.7084 6.42963 16.7084 6.50032 16.7084H11.5003C12.6965 16.7084 13.5307 16.7071 14.1602 16.6225C14.7717 16.5402 15.0955 16.3899 15.3262 16.1592C15.5568 15.9286 15.7072 15.6048 15.7894 14.9933C15.874 14.3638 15.8753 13.5296 15.8753 12.3334V5.66675C15.8753 4.47056 15.874 3.63631 15.7894 3.00685C15.7072 2.39537 15.5568 2.07156 15.3262 1.84092C15.0955 1.61029 14.7717 1.45992 14.1602 1.37771C13.5307 1.29307 12.6965 1.29175 11.5003 1.29175H6.50032C6.42963 1.29175 6.36019 1.29176 6.29199 1.29178V16.7084ZM7.95866 4.41675C7.95866 4.07157 8.23849 3.79175 8.58366 3.79175H12.7503C13.0955 3.79175 13.3753 4.07157 13.3753 4.41675C13.3753 4.76192 13.0955 5.04175 12.7503 5.04175H8.58366C8.23849 5.04175 7.95866 4.76192 7.95866 4.41675ZM7.95866 7.33342C7.95866 6.98824 8.23849 6.70842 8.58366 6.70842H12.7503C13.0955 6.70842 13.3753 6.98824 13.3753 7.33342C13.3753 7.67858 13.0955 7.95842 12.7503 7.95842H8.58366C8.23849 7.95842 7.95866 7.67858 7.95866 7.33342Z" fill="#8D8D8D"/>
                </svg>
                <span
                  className={`w-auto sm:w-[54px] h-[20px] font-['Montserrat'] font-medium text-[16px] leading-[20px] ${
                    pathname === "/courses" ? "text-[#3B3B3B]" : "text-[#8D8D8D]"
                  }`}
                >
                  Курсы
                </span>
              </Link>
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className={`flex flex-row items-center p-[16px] gap-[12px] w-full h-[52px] rounded-[12px] ${
                  pathname.startsWith("/blog") ? "bg-white" : ""
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                    stroke={pathname.startsWith("/blog") ? "#3B3B3B" : "#8D8D8D"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                    stroke={pathname.startsWith("/blog") ? "#3B3B3B" : "#8D8D8D"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className={`w-auto sm:w-[40px] h-[20px] font-['Montserrat'] font-medium text-[16px] leading-[20px] ${
                    pathname.startsWith("/blog") ? "text-[#3B3B3B]" : "text-[#8D8D8D]"
                  }`}
                >
                  Блог
                </span>
              </Link>
            </div>

            <div className="w-full h-0 opacity-40 border border-[#4B4B4B]"></div>

            <Link
              href="/community"
              onClick={closeMobileMenu}
              className={`flex flex-row items-center p-[16px] gap-[12px] w-full h-[55px] rounded-[12px] ${
                pathname === "/community" ? "bg-white" : ""
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  stroke={pathname === "/community" ? "#3B3B3B" : "#8D8D8D"}
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className={`w-auto sm:w-[105px] h-[20px] font-['Montserrat'] font-medium text-[16px] leading-[20px] ${
                  pathname === "/community" ? "text-[#3B3B3B]" : "text-[#8D8D8D]"
                }`}
              >
                Сообщество
              </span>
              <div className="flex flex-row justify-center items-center p-[4px_8px] gap-[10px] w-[44px] h-[23px] bg-gradient-to-r from-[#9B29FF] to-[#2DFF3B] rounded-[30px]">
                <span className="w-[28px] h-[15px] font-['Montserrat'] font-semibold text-[12px] leading-[15px] text-white">
                  PRO
                </span>
              </div>
            </Link>

            <div className="w-full h-0 opacity-40 border border-[#4B4B4B]"></div>

            {/* Settings nav items */}
            <div className="flex flex-col items-start p-0 w-full h-auto sm:h-[156px]">
              <Link
                href="/settings"
                onClick={closeMobileMenu}
                className={`flex flex-row items-center p-[16px] gap-[12px] w-full h-[52px] rounded-[12px] ${
                  pathname === "/settings" ? "bg-white" : ""
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke={pathname === "/settings" ? "#3B3B3B" : "#8D8D8D"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                    stroke={pathname === "/settings" ? "#3B3B3B" : "#8D8D8D"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className={`w-auto sm:w-[93px] h-[20px] font-['Montserrat'] font-medium text-[16px] leading-[20px] ${
                    pathname === "/settings" ? "text-[#3B3B3B]" : "text-[#8D8D8D]"
                  }`}
                >
                  Настройки
                </span>
              </Link>
              <Link
                href="/notifications"
                onClick={closeMobileMenu}
                className={`flex flex-row items-center p-[16px] gap-[12px] w-full h-[52px] rounded-[12px] ${
                  pathname === "/notifications" ? "bg-white" : ""
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                    stroke={pathname === "/notifications" ? "#3B3B3B" : "#8D8D8D"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.73 21a2 2 0 0 1-3.46 0"
                    stroke={pathname === "/notifications" ? "#3B3B3B" : "#8D8D8D"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className={`w-auto sm:w-[116px] h-[20px] font-['Montserrat'] font-medium text-[16px] leading-[20px] ${
                    pathname === "/notifications" ? "text-[#3B3B3B]" : "text-[#8D8D8D]"
                  }`}
                >
                  Уведомления
                </span>
              </Link>
              <Link
                href="/help"
                onClick={closeMobileMenu}
                className={`flex flex-row items-center p-[16px] gap-[12px] w-full h-[52px] rounded-[12px] ${
                  pathname === "/help" ? "bg-white" : ""
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke={pathname === "/help" ? "#3B3B3B" : "#8D8D8D"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="12"
                    y1="16"
                    x2="12"
                    y2="12"
                    stroke={pathname === "/help" ? "#3B3B3B" : "#8D8D8D"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="12"
                    y1="8"
                    x2="12"
                    y2="8"
                    stroke={pathname === "/help" ? "#3B3B3B" : "#8D8D8D"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className={`w-auto sm:w-[71px] h-[20px] font-['Montserrat'] font-medium text-[16px] leading-[20px] ${
                    pathname === "/help" ? "text-[#3B3B3B]" : "text-[#8D8D8D]"
                  }`}
                >
                  Помощь
                </span>
              </Link>
            </div>

            <div className="w-full h-0 opacity-40 border border-[#4B4B4B]"></div>

            <button
              onClick={closeMobileMenu}
              className="flex flex-row items-center p-[16px] gap-[12px] w-full h-[52px] rounded-[12px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                  stroke="#8D8D8D"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="16 17 21 12 16 7"
                  stroke="#8D8D8D"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="21"
                  y1="12"
                  x2="9"
                  y2="12"
                  stroke="#8D8D8D"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="w-auto sm:w-[55px] h-[20px] font-['Montserrat'] font-medium text-[16px] leading-[20px] text-[#8D8D8D]">
                Выйти
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
