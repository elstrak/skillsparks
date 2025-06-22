import Image from "next/image"
import { usePathname } from "next/navigation"

export default function PromoBanner() {
  return (
    <div className="w-[1004px] h-[300px] rounded-[20px] overflow-hidden">
      <Image
        src="/promo_banner.png"
        alt="Промо баннер"
        width={1004}
        height={300}
        className="object-cover w-full h-full"
      />
    </div>
  )
}
