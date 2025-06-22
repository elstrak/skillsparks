"use client"

import Image from "next/image"
import Link from "next/link"
import { Montserrat, Unbounded } from "next/font/google"
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

// Related blog posts data
const relatedPosts = [
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
]

export default function BlogArticlePage() {
  return (
    <div className={montserrat.variable + ' ' + unbounded.variable + ' w-full min-h-screen bg-[#212121] flex justify-center'}>
      <div className="w-full max-w-[1270px] px-4 py-5 flex flex-col gap-[100px]">
        {/* Main content container */}
        <div className="flex flex-row justify-between items-start p-0 gap-[20px] w-[1270px] h-[2996px]">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex flex-col items-start p-0 gap-[36px] w-[1004px] h-[2375px]">
            {/* Breadcrumb */}
            <div className="flex flex-row items-start p-0 gap-[8px] w-[100px] h-[15px]">
              <Link
                href="/blog"
                className="w-[30px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-[#878787]"
              >
                Блог
              </Link>
              <span className="w-[5px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-[#878787]">
                /
              </span>
              <span className="w-[49px] h-[15px] font-['Montserrat'] font-medium text-[12px] leading-[15px] text-white">
                Статья 1
              </span>
            </div>

            {/* Article header image */}
            <div className="w-[1004px] h-[300px] rounded-[20px] overflow-hidden">
              <Image
                src="/89b0164d547939936688b2bb22e2abee850976b1.png"
                alt="Зачем нужен SMM: цели и польза для бизнеса"
                width={1004}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Article title */}
            <h1 className="w-[658px] h-[32px] font-['Montserrat'] font-bold text-[26px] leading-[32px] text-white">
              Зачем нужен SMM: цели и польза для бизнеса
            </h1>

            {/* Introduction section */}
            <div className="flex flex-col items-start p-0 gap-[16px] w-[1004px] h-[106px]">
              <h2 className="w-[116px] h-[22px] font-['Montserrat'] font-semibold text-[18px] leading-[22px] text-white">
                Вступление
              </h2>
              <p className="w-[1004px] h-[68px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#9B9B9B]">
                Социальные медиа стали неотъемлемой частью жизни современного человека. Миллионы пользователей ежедневно
                проводят время в социальных сетях, общаются с друзьями, ищут информацию и делают покупки. Именно поэтому
                для бизнеса важно уметь использовать возможности социальных медиа для продвижения своих товаров и услуг.
                В этой статье мы рассмотрим, зачем нужен SMM (Social Media Marketing), какие цели он преследует и какую
                пользу может принести для вашего бизнеса
              </p>
            </div>

            {/* What is SMM section */}
            <div className="flex flex-col items-start p-0 gap-[16px] w-[1004px] h-[89px]">
              <h2 className="w-[331px] h-[22px] font-['Montserrat'] font-semibold text-[18px] leading-[22px] text-white">
                Что такое SMM и зачем он нужен?
              </h2>
              <p className="w-[1004px] h-[51px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#9B9B9B]">
                SMM (Social Media Marketing) – это процесс привлечения внимания и получения трафика через социальные
                медиа. Он включает в себя различные методы и инструменты, такие как создание контента, управление
                сообществами, рекламные кампании и аналитика. Главная цель SMM – это создание взаимодействия с
                аудиторией, увеличение узнаваемости бренда и повышение продаж
              </p>
            </div>

            {/* SMM goals section */}
            <div className="flex flex-col items-start p-0 gap-[16px] w-[1004px] h-[463px]">
              <h2 className="w-[226px] h-[22px] font-['Montserrat'] font-semibold text-[18px] leading-[22px] text-white">
                Цели SMM для бизнеса
              </h2>
              <div className="w-[1004px] h-[425px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#9B9B9B]">
                <p className="mb-4">Рассмотрим основные цели, которые преследует SMM для бизнеса:</p>

                <p className="mb-2">
                  <strong>а) Привлечение внимания и увеличение охвата аудитории</strong>
                </p>
                <p className="mb-4">
                  SMM позволяет расширить охват аудитории и привлечь внимание к вашему бренду. Регулярное публикование
                  интересного и полезного контента в социальных сетях поможет привлечь новых подписчиков и удержать
                  старых.
                </p>

                <p className="mb-2">
                  <strong>б) Укрепление имиджа и узнаваемости бренда</strong>
                </p>
                <p className="mb-4">
                  С помощью SMM вы можете формировать имидж вашей компании и улучшать узнаваемость бренда. Создавайте
                  контент, который отражает ценности и принципы вашего бренда, активно общайтесь с аудиторией и
                  проводите PR-акции.
                </p>

                <p className="mb-2">
                  <strong>в) Взаимодействие с аудиторией и получение обратной связи</strong>
                </p>
                <p className="mb-4">
                  Социальные медиа предоставляют возможность напрямую общаться с вашими клиентами и получать их отзывы о
                  вашем товаре или услуге. Это поможет вам лучше узнать свою аудиторию и улучшить свои продукты или
                  услуги согласно их потребностям и предпочтениям.
                </p>

                <p className="mb-2">
                  <strong>г) Увеличение продаж и лидогенерация</strong>
                </p>
                <p className="mb-4">
                  SMM может стать эффективным инструментом для увеличения продаж и привлечения потенциальных клиентов.
                  Размещая рекламные объявления, акции и специальные предложения в социальных сетях, вы сможете
                  привлекать новых клиентов и стимулировать повторные покупки.
                </p>

                <p className="mb-2">
                  <strong>д) Повышение лояльности клиентов</strong>
                </p>
                <p className="mb-4">
                  Активное взаимодействие с аудиторией в социальных медиа и предоставление полезной информации помогут
                  повысить лояльность клиентов к вашему бренду. Лояльные клиенты чаще совершают покупки и рекомендуют
                  вашу компанию своим знакомым
                </p>
              </div>
            </div>

            {/* SMM benefits section */}
            <div className="flex flex-col items-start p-0 gap-[16px] w-[1004px] h-[344px]">
              <h2 className="w-[245px] h-[22px] font-['Montserrat'] font-semibold text-[18px] leading-[22px] text-white">
                Польза SMM для бизнеса
              </h2>
              <div className="w-[1004px] h-[306px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#9B9B9B]">
                <p className="mb-4">Теперь рассмотрим, какую пользу SMM может принести для вашего бизнеса:</p>

                <p className="mb-2">
                  <strong>а) Экономия на рекламе</strong>
                </p>
                <p className="mb-4">
                  SMM является одним из наиболее экономичных способов продвижения, поскольку позволяет получить
                  значительный охват аудитории при сравнительно небольших затратах.
                </p>

                <p className="mb-2">
                  <strong>б) Целевая аудитория</strong>
                </p>
                <p className="mb-4">
                  Социальные сети позволяют точно настроить таргетинг рекламных кампаний, благодаря чему ваше
                  предложение будет попадать именно к тем людям, которым оно будет интересно.
                </p>

                <p className="mb-2">
                  <strong>в) Мгновенная обратная связь</strong>
                </p>
                <p className="mb-4">
                  SMM предоставляет возможность получать мгновенную обратную связь от аудитории, что помогает быстро
                  корректировать стратегию продвижения и улучшать качество предлагаемых товаров и услуг.
                </p>

                <p className="mb-2">
                  <strong>г) Аналитика и мониторинг</strong>
                </p>
                <p className="mb-4">
                  Благодаря инструментам аналитики, таким как Facebook Insights, Google Analytics или Яндекс.Метрика, вы
                  сможете отслеживать эффективность своих SMM-кампаний и анализировать поведение аудитории на вашем
                  сайте.
                </p>
              </div>
            </div>

            {/* Conclusion section */}
            <div className="flex flex-col items-start p-0 gap-[16px] w-[1004px] h-[293px]">
              <h2 className="w-[121px] h-[22px] font-['Montserrat'] font-semibold text-[18px] leading-[22px] text-white">
                Заключение
              </h2>
              <div className="w-[1004px] h-[255px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#9B9B9B]">
                <p className="mb-4">
                  SMM является мощным инструментом для продвижения бизнеса в современном мире. Он позволяет привлекать
                  внимание к вашему бренду, расширять аудиторию, увеличивать продажи и повышать лояльность клиентов.
                  Используя различные методы и инструменты SMM, вы сможете формировать имидж вашей компании, улучшать
                  узнаваемость бренда и создавать эффективное взаимодействие с аудиторией.
                </p>

                <p className="mb-4">
                  Для достижения максимальных результатов в SMM важно разработать стратегию продвижения, которая будет
                  учитывать особенности вашего бизнеса, цели и задачи, а также предпочтения и потребности вашей целевой
                  аудитории. Регулярный анализ и корректировка стратегии, а также использование разнообразных форматов
                  контента и рекламных инструментов позволят вам добиться успеха в социальных медиа и привлечь новых
                  клиентов для вашего бизнеса.
                </p>

                <p className="mb-4">
                  Итак, подводя итоги, можно сказать, что SMM является неотъемлемой частью успешного продвижения бизнеса
                  в современном мире. Наличие активных страниц вашей компании в социальных сетях поможет привлекать
                  новых клиентов, укреплять имидж бренда, повышать лояльность аудитории и, в конечном итоге, увеличивать
                  продажи и доходы вашей компании. Не пренебрегайте возможностями SMM и используйте их в полной мере для
                  развития вашего бизнеса
                </p>
              </div>
            </div>

            {/* Related blog posts section */}
            <div className="flex flex-col items-start p-0 gap-[20px] w-[1004px] h-[473px]">
              <div className="flex flex-row justify-between items-center p-0 gap-[393px] w-[1004px] h-[29px]">
                <h2 className="w-[61px] h-[29px] font-['Montserrat'] font-semibold text-[24px] leading-[29px] text-white">
                  Блог
                </h2>
                <Link
                  href="/blog"
                  className="w-[99px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] underline text-[#8D8D8D]"
                >
                  Смотреть все
                </Link>
              </div>

              {/* Related blog posts */}
              <div className="flex flex-row items-center p-0 gap-[12px] w-[1004px] h-[424px]">
                {relatedPosts.map((post) => (
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
                    <Link
                      href={`/blog/${post.id}`}
                      className="box-border flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[91px] h-[41px] border border-[#B1B1B1] rounded-[10px]"
                    >
                      <span className="w-[51px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#B1B1B1]">
                        Читать
                      </span>
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
