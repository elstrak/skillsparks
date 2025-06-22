import { Unbounded } from "next/font/google"


const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["900"],
  style: ["normal"],
})

export default function Footer() {
  return (
    <div className="flex flex-col items-center p-0 gap-[20px] sm:gap-[40px] w-full">
      <div className="w-full h-px opacity-40 bg-white"></div>
      <div className={`${unbounded.variable} font-black text-lg sm:text-xl leading-snug text-center uppercase text-white`}>
        SKILLSPARKS
      </div>
    </div>
  )
}
