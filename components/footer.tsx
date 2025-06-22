import { Unbounded } from "next/font/google"


const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["900"],
  style: ["normal"],
})

export default function Footer() {
  return (
    <div className="flex flex-col items-center p-0 gap-[40px] w-[1270px] h-[101px]">
      <div className="w-[1270px] h-0 opacity-40 border border-white"></div>
      <div className={unbounded.variable + ' w-[179px] h-[25px] font-black text-[20px] leading-[25px] text-center uppercase text-white'}>
        SKILLSPARKS
      </div>
    </div>
  )
}
