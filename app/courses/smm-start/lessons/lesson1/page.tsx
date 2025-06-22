"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronLeft, Check, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Montserrat, Unbounded } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
})

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  weight: ["900"],
})


export default function Lesson1() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [progress, setProgress] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [expandedCards, setExpandedCards] = useState<string[]>([])
  const [allCardsRead, setAllCardsRead] = useState(false)

  // For step 2 (matching game)
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [selectedRight, setSelectedRight] = useState<string | null>(null)
  const [correctMatches, setCorrectMatches] = useState<string[]>([])
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // For step 4 (business selection)
  const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null)
  const [showBusinessHint, setShowBusinessHint] = useState(false)

  // Messages for step 1
  const messages = [
    { id: 1, text: "Привет!", isTitle: true },
    { id: 2, text: "Ты только начинаешь в SMM? Давай разберемся, что это такое", isTitle: false },
    {
      id: 3,
      text: "SMM (Social Media Marketing) — это продвижение бизнеса в соцсетях. Например, когда кофейня публикует красивый пост про новый латте и собирает лайки — это SMM",
      isTitle: false,
    },
    { id: 4, text: "3 главные цели SMM:", isTitle: true },
    { id: 5, text: "• Привлечь клиентов\n• Укрепить доверие к бренду\n• Продавать, не навязывая", isTitle: false },
    { id: 6, text: "Совет", isTitle: true },
    { id: 7, text: "Хороший SMM — это как дружеский чат, а не рекламный крик!", isTitle: false },
  ]

  // Cards for step 1
  const infoCards = [
    {
      id: "targeting",
      title: "Таргетинг это",
      content: "Это процесс определения и выбора определённой аудитории для рекламных или маркетинговых кампаний",
      bgColor: "bg-[#DEEDFF]",
    },
    {
      id: "ctr",
      title: "CTR это",
      content:
        "Это показатель эффективности рекламы, который измеряет процент кликов по объявлению относительно его показов",
      bgColor: "bg-[#DEE1FF]",
    },
    {
      id: "content-plan",
      title: "Контент-план это",
      content:
        "Это стратегический документ, который определяет, какой контент будет публиковаться в социальных сетях, когда и с какой целью",
      bgColor: "bg-[#E2FFDE]",
    },
  ]

  // Matching pairs for step 2
  const matchingPairs = [
    {
      left: "Таргетинг",
      right: "Процесс определения и выбора определённой аудитории для рекламных или маркетинговых кампаний",
      id: "targeting",
    },
    {
      left: "Конверсия",
      right:
        "Процесс, при котором пользователи выполняют желаемое действие, которое определено в рамках маркетинговой или рекламной кампании",
      id: "conversion",
    },
    {
      left: "UTM-метка",
      right:
        "Это специальный фрагмент кода, который добавляется к URL-адресу для отслеживания эффективности онлайн-кампаний",
      id: "utm",
    },
  ]

  // Business options for step 4
  const businessOptions = [
    { id: "coffee", name: "Кофейня", image: "/02cdcce139b0065f2ccefcd994971a015dad6eb4 (1).png" },
    { id: "game-studio", name: "Игровая студия", image: "/13e6a378628c248ee8131a749f06a9bdd7f5bd8e.png" },
    { id: "flower-shop", name: "Цветочный магазин", image: "/87883e1958cb7515ebd00088b990dab050e4c5ed.png" },
  ]

  // Error messages for matching game
  const errorMessages = [
    "Нет, это не подходит. Попробуй еще!",
    "Не совсем так. Подумай еще раз!",
    "Нет, UTM-метка — это ссылка для отслеживания трафика. Попробуй еще!",
    "Это не верное соответствие. Попробуй другую пару!",
    "Неправильно. Внимательно прочитай определения!",
  ]

  // Show messages one by one with delay
  useEffect(() => {
    if (currentStep === 1) {
      const timers = messages.map((_, index) => 
        setTimeout(() => {
          setVisibleMessages((prev) => [...prev, index + 1])
        }, index * 1500)
      )
      
      return () => timers.forEach(clearTimeout)
    }

    // Show business hint after a delay in step 4
    if (currentStep === 4) {
      setTimeout(() => {
        setShowBusinessHint(true)
      }, 5000)
    }
  }, [currentStep])

  // Update progress based on current step
  useEffect(() => {
    switch (currentStep) {
      case 1:
        setProgress(0)
        break
      case 2:
        setProgress(50)
        break
      case 3:
        setProgress(75)
        break
      case 4:
        setProgress(75)
        break
      case 5:
        setProgress(100)
        break
    }
  }, [currentStep])

  // Check if all cards have been read
  useEffect(() => {
    if (expandedCards.length === infoCards.length) {
      setAllCardsRead(true)
    }
  }, [expandedCards])

  // Handle card expansion
  const toggleCard = (cardId: string) => {
    if (!expandedCards.includes(cardId)) {
      setExpandedCards((prev) => [...prev, cardId])
    }
  }

  // Handle matching game selection
  const handleLeftSelection = (item: string) => {
    // If this item is already matched, do nothing
    if (correctMatches.includes(item)) return

    setSelectedLeft(item)

    // If right side is already selected, check if it's a match
    if (selectedRight) {
      const matchingPair = matchingPairs.find((pair) => pair.left === item && pair.right === selectedRight)

      if (matchingPair) {
        // It's a match!
        setCorrectMatches((prev) => [...prev, item])
        setSelectedLeft(null)
        setSelectedRight(null)
      } else {
        // Not a match, show error
        const randomIndex = Math.floor(Math.random() * errorMessages.length)
        setErrorMessage(errorMessages[randomIndex])
        setShowError(true)

        setTimeout(() => {
          setShowError(false)
          setSelectedLeft(null)
          setSelectedRight(null)
        }, 2000)
      }
    }
  }

  const handleRightSelection = (item: string) => {
    // If this item is already matched, do nothing
    if (matchingPairs.some((pair) => pair.right === item && correctMatches.includes(pair.left))) return

    setSelectedRight(item)

    // If left side is already selected, check if it's a match
    if (selectedLeft) {
      const matchingPair = matchingPairs.find((pair) => pair.right === item && pair.left === selectedLeft)

      if (matchingPair) {
        // It's a match!
        setCorrectMatches((prev) => [...prev, selectedLeft])
        setSelectedLeft(null)
        setSelectedRight(null)
      } else {
        // Not a match, show error
        const randomIndex = Math.floor(Math.random() * errorMessages.length)
        setErrorMessage(errorMessages[randomIndex])
        setShowError(true)

        setTimeout(() => {
          setShowError(false)
          setSelectedLeft(null)
          setSelectedRight(null)
        }, 2000)
      }
    }
  }

  // Handle business selection
  const selectBusiness = (businessId: string) => {
    setSelectedBusiness(businessId)
  }

  // Navigate to next step
  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1)
  }

  // Render different content based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className={montserrat.variable + ' ' + unbounded.variable + ' flex flex-col gap-[20px] sm:gap-[40px] w-full'}>
            {/* Messages */}
            <div className="flex flex-row items-flex-end gap-[8px] sm:gap-[12px] w-full">
              <div className="w-[40px] h-[40px] sm:w-[51px] sm:h-[51px] rounded-[12px] border border-[#4B4B4B] overflow-hidden flex-shrink-0">
                <Image
                  src="/girl.png"
                  alt="Tutor"
                  width={51}
                  height={51}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center gap-[8px] sm:gap-[12px] w-full max-w-[369px]">
                {visibleMessages.includes(1) && (
                  <div className="box-border flex flex-col justify-flex-end items-flex-start p-[12px] sm:p-[20px] gap-[6px] sm:gap-[8px] w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[16px] sm:rounded-[20px] animate-fadeIn">
                    <h3 className="w-full font-['Montserrat'] font-semibold text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] text-white">
                      {messages[0].text}
                    </h3>
                    <p className="w-full font-['Montserrat'] font-normal text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] text-white whitespace-pre-line">
                      {messages[1].text}
                    </p>
                  </div>
                )}

                {visibleMessages.includes(3) && (
                  <div className="box-border flex flex-col justify-flex-end items-flex-start p-[12px] sm:p-[20px] gap-[6px] sm:gap-[8px] w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[16px] sm:rounded-[20px] animate-fadeIn">
                    <p className="w-full font-['Montserrat'] font-normal text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] text-white whitespace-pre-line">
                      {messages[2].text}
                    </p>
                  </div>
                )}

                {visibleMessages.includes(4) && (
                  <div className="box-border flex flex-col justify-flex-end items-flex-start p-[12px] sm:p-[20px] gap-[6px] sm:gap-[8px] w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[16px] sm:rounded-[20px] animate-fadeIn">
                    <h3 className="w-full font-['Montserrat'] font-semibold text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] text-white">
                      {messages[3].text}
                    </h3>
                    <p className="w-full font-['Montserrat'] font-normal text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] text-white whitespace-pre-line">
                      {messages[4].text}
                    </p>
                  </div>
                )}

                {visibleMessages.includes(6) && (
                  <div className="box-border flex flex-col justify-flex-end items-flex-start p-[12px] sm:p-[20px] gap-[6px] sm:gap-[8px] w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[16px] sm:rounded-[20px] animate-fadeIn">
                    <h3 className="w-full font-['Montserrat'] font-semibold text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] text-white">
                      {messages[5].text}
                    </h3>
                    <p className="w-full font-['Montserrat'] font-normal text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] text-white whitespace-pre-line">
                      {messages[6].text}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Info cards */}
            {visibleMessages.length === messages.length && (
              <div className="flex flex-col sm:flex-row justify-between items-start gap-[20px] sm:gap-[40px] w-full animate-fadeIn mt-[20px]">
                {infoCards.map((card, idx) => (
                  <div
                    key={card.id}
                    className={`flex flex-col items-start p-[12px] sm:p-[16px] gap-[12px] sm:gap-[16px] w-full sm:w-[240px] ${expandedCards.includes(card.id) ? 'min-h-[140px] sm:min-h-[159px]' : 'h-[120px] sm:h-[159px]'} ${card.bgColor} rounded-[12px] transition-all duration-300`}
                  >
                    <div className="flex flex-row items-center p-[8px] gap-[10px] w-[32px] h-[32px] bg-[#3C3C3C] rounded-[8px]">
                      <div className="w-[16px] h-[16px] bg-[#FFF4CA] border border-[#FFB619] rounded-full"></div>
                    </div>
                    <h3 className="w-full font-['Montserrat'] font-semibold text-[16px] sm:text-[18px] leading-[19px] sm:leading-[22px] text-[#353535]">
                      {card.title}
                    </h3>
                    {expandedCards.includes(card.id) ? (
                      <p className="w-full font-['Montserrat'] font-normal text-[12px] leading-[15px] text-[#5B5B5B]">
                        {card.content}
                      </p>
                    ) : (
                      <button
                        onClick={() => toggleCard(card.id)}
                        className="flex flex-row justify-center items-center p-[10px_16px] sm:p-[12px_20px] gap-[12px] w-[91px] h-[41px] bg-white rounded-[10px]"
                      >
                        <span className="font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#212121]">
                          Читать
                        </span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Next button */}
            <div className="flex flex-col gap-[16px] sm:gap-[20px] w-full">
              <div className="w-full h-0 opacity-40 border border-[#4B4B4B]"></div>
              <div className="flex flex-row justify-end items-center w-full h-[41px] gap-[20px] sm:gap-[40px]">
                <button
                  onClick={goToNextStep}
                  disabled={!allCardsRead}
                  className={`flex flex-row justify-center items-center p-[12px_16px] sm:p-[12px_20px] gap-[12px] w-full sm:w-[219px] h-[41px] bg-white rounded-[10px] ${!allCardsRead ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <span className="font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#212121]">
                    Отлично, давай начнем!
                  </span>
                </button>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="flex flex-col gap-[20px] sm:gap-[40px] w-full">
            {/* Game instructions */}
            <div className="flex flex-row items-end gap-[8px] sm:gap-[12px] w-full">
              <div className="w-[40px] h-[40px] sm:w-[51px] sm:h-[51px] rounded-[12px] border border-[#4B4B4B] overflow-hidden flex-shrink-0">
                <Image
                  src="/girl.png"
                  alt="Tutor"
                  width={51}
                  height={51}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="box-border flex flex-col justify-end items-start p-[12px] sm:p-[20px] gap-[6px] sm:gap-[8px] w-full max-w-[369px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[16px] sm:rounded-[20px]">
                <h3 className="w-full font-['Montserrat'] font-semibold text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] text-white">
                  Мини-игра "Собери SMM-пазл"
                </h3>
                <p className="w-full font-['Montserrat'] font-normal text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] text-white">
                  Соедини термины с их значениями
                </p>
              </div>
            </div>

            {/* Matching game */}
            <div className="w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[16px] sm:rounded-[20px] p-3 sm:p-4 relative">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                {/* Left column (terms) */}
                <div className="flex flex-col gap-2 w-full sm:w-1/2">
                  {matchingPairs.map((pair) => (
                    <button
                      key={`left-${pair.id}`}
                      onClick={() => handleLeftSelection(pair.left)}
                      className={`flex flex-row justify-center items-center p-[12px] sm:p-[16px_20px] gap-[8px] w-full h-[60px] sm:h-[100px] ${
                        correctMatches.includes(pair.left) 
                          ? "bg-[#417041] border-[#4C974C]" 
                          : selectedLeft === pair.left 
                          ? "bg-[#434343] border-[#6B6B6B] scale-[0.98] transition-transform duration-150" 
                          : "bg-[#3C3C3C] border-[#4B4B4B] hover:bg-[#434343] hover:border-[#6B6B6B] transition-all duration-150"
                      } border rounded-[12px] text-xs sm:text-[14px]`}
                      disabled={correctMatches.includes(pair.left)}
                    >
                      <span className="w-full font-['Montserrat'] font-medium text-xs sm:text-[14px] leading-[16px] sm:leading-[17px] text-center text-white">
                        {pair.left}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Right column (definitions) */}
                <div className="flex flex-col gap-2 w-full sm:w-1/2 mt-2 sm:mt-0">
                  {matchingPairs.map((pair) => (
                    <button
                      key={`right-${pair.id}`}
                      onClick={() => handleRightSelection(pair.right)}
                      className={`flex flex-row justify-center items-center p-[12px] sm:p-[16px_20px] gap-[8px] w-full h-[60px] sm:h-[100px] ${
                        matchingPairs.some((p) => p.right === pair.right && correctMatches.includes(p.left))
                          ? "bg-[#417041] border-[#4C974C]" 
                          : selectedRight === pair.right 
                          ? "bg-[#434343] border-[#6B6B6B] scale-[0.98] transition-transform duration-150" 
                          : "bg-[#3C3C3C] border-[#4B4B4B] hover:bg-[#434343] hover:border-[#6B6B6B] transition-all duration-150"
                      } border rounded-[12px] text-xs sm:text-[14px]`}
                      disabled={matchingPairs.some((p) => p.right === pair.right && correctMatches.includes(p.left))}
                    >
                      <span className="w-full font-['Montserrat'] font-medium text-xs sm:text-[14px] leading-[16px] sm:leading-[17px] text-center text-white">
                        {pair.right}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Error message - positioned in center of screen */}
              {showError && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                  <div className="flex flex-row justify-center items-center p-[16px_20px] sm:p-[20px_28px] gap-[12px] sm:gap-[16px] w-full max-w-[627px] min-h-[60px] bg-[#453232] border border-[#CD8989] rounded-[12px] animate-fadeIn shadow-lg">
                    <AlertTriangle className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] text-white flex-shrink-0" />
                    <span className="font-['Montserrat'] font-normal text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] text-white">
                      {errorMessage}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Next button */}
            <div className="flex flex-col gap-[16px] sm:gap-[20px] w-full">
              <div className="w-full h-0 opacity-40 border border-[#4B4B4B]"></div>
              <div className="flex flex-row justify-between items-center w-full h-[41px] gap-[20px] sm:gap-[40px]">
                <button
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="box-border flex flex-row items-center p-[8px] gap-[10px] w-[36px] h-[36px] border border-[#4B4B4B] rounded-[8px] flex-shrink-0"
                >
                  <ChevronLeft className="w-[20px] h-[20px] text-[#DDDDDD]" />
                </button>
                <button
                  onClick={goToNextStep}
                  disabled={correctMatches.length !== matchingPairs.length}
                  className={`flex flex-row justify-center items-center p-[12px_16px] sm:p-[12px_20px] gap-[12px] w-full sm:w-[87px] h-[41px] bg-white rounded-[10px] ${correctMatches.length !== matchingPairs.length ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <span className="font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#212121]">
                    Далее
                  </span>
                </button>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="flex flex-col items-center gap-[40px] w-full">
            {/* Achievement */}
            <div className="flex flex-col items-center gap-[20px] w-[215px] h-[302px] animate-fadeIn">
              <div className="w-[200px] h-[200px] relative">
                <div className="absolute w-[118px] h-[118px] left-[calc(50%-118px/2)] top-[calc(50%-118px/2)] bg-[#87EC00] filter blur-[47px]"></div>
                <Image
                  src="/030c3b794de5b15906f73f574f7c4e6003d16bf7 (1).png"
                  alt="Achievement"
                  width={200}
                  height={200}
                  className="absolute w-[200px] h-[200px] left-[calc(50%-200px/2)] top-[calc(50%-200px/2)] object-cover rounded-[16px]"
                />
              </div>
              <div className="flex flex-col items-center gap-[12px] w-[215px]">
                <h2 className="w-full font-['Montserrat'] font-extrabold text-[28px] leading-[34px] text-center text-white">
                  Новичок SMM
                </h2>
                <div className="flex flex-row justify-center items-center p-[8px_16px] gap-[10px] w-[115px] h-[36px] bg-[#417041] border border-[#4C974C] rounded-[110px]">
                  <span className="font-['Montserrat'] font-semibold text-[16px] leading-[20px] whitespace-nowrap text-white">
                    +10 опыта
                  </span>
                </div>
              </div>
            </div>

            {/* Next button */}
            <div className="flex flex-col gap-[20px] w-full">
              <div className="w-full h-0 opacity-40 border border-[#4B4B4B]"></div>
              <div className="flex flex-row justify-between items-center w-full h-[41px]">
                <button
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="box-border flex flex-row items-center p-[8px] gap-[10px] w-[36px] h-[36px] border border-[#4B4B4B] rounded-[8px]"
                >
                  <ChevronLeft className="w-[20px] h-[20px] text-[#DDDDDD]" />
                </button>
                <button
                  onClick={goToNextStep}
                  className="flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[87px] h-[41px] bg-white rounded-[10px]"
                >
                  <span className="font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#212121]">
                    Далее
                  </span>
                </button>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="flex flex-col gap-[40px] w-full">
            {/* Instructions */}
            <div className="flex flex-row items-end gap-[12px] w-full animate-fadeIn">
              <div className="w-[51px] h-[51px] rounded-[12px] border border-[#4B4B4B] overflow-hidden">
                <Image
                  src="/girl.png"
                  alt="Tutor"
                  width={51}
                  height={51}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="box-border flex flex-col justify-end items-start p-[20px] gap-[8px] w-[369px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                <h3 className="w-full font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                  Пора попробовать самому!
                </h3>
                <p className="w-full font-['Montserrat'] font-normal text-[14px] leading-[17px] text-white">
                  Выбери бизнес, для которого будешь создавать SMM-стратегию:
                </p>
              </div>
            </div>

            {/* Business options */}
            <div className="flex flex-row justify-between items-center gap-[40px] w-full animate-fadeIn delay-500">
              {businessOptions.map((business) => (
                <div
                  key={business.id}
                  onClick={() => selectBusiness(business.id)}
                  className={`box-border flex flex-col items-center p-[22px_0px] gap-[24px] w-[240px] h-[220px] ${
                    selectedBusiness === business.id 
                      ? "bg-[#386238] border-[#8BC58B]" 
                      : "bg-[#3C3C3C] border-[#4B4B4B] hover:bg-[#434343] hover:border-[#6B6B6B]"
                  } border rounded-[16px] cursor-pointer relative transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]`}
                >
                  <Image
                    src={business.image || "/placeholder.svg"}
                    alt={business.name}
                    width={130}
                    height={130}
                    className="rounded-[8px]"
                  />
                  <h3 className="w-full font-['Montserrat'] font-bold text-[18px] leading-[22px] text-center text-white">
                    {business.name}
                  </h3>
                  {selectedBusiness === business.id && (
                    <div className="absolute w-[36px] h-[36px] right-[8px] top-[8px] bg-white border border-[#8BC58B] rounded-[8px] flex items-center justify-center">
                      <Check className="w-[20px] h-[20px] text-[#386238]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Hint */}
            {showBusinessHint && (
              <div className="flex flex-row items-end gap-[12px] w-full animate-fadeIn">
                <div className="w-[51px] h-[51px] rounded-[12px] border border-[#4B4B4B] overflow-hidden">
                  <Image
                    src="/girl.png"
                    alt="Tutor"
                    width={51}
                    height={51}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="box-border flex flex-col justify-end items-start p-[20px] gap-[8px] w-[369px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                  <h3 className="w-full font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                    Не уверен?
                  </h3>
                  <p className="w-full font-['Montserrat'] font-normal text-[14px] leading-[17px] text-white">
                    Выбери кофейню — с ней проще!
                  </p>
                </div>
              </div>
            )}

            {/* Next button */}
            <div className="flex flex-col gap-[20px] w-full">
              <div className="w-full h-0 opacity-40 border border-[#4B4B4B]"></div>
              <div className="flex flex-row justify-between items-center w-full h-[41px]">
                <button
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="box-border flex flex-row items-center p-[8px] gap-[10px] w-[36px] h-[36px] border border-[#4B4B4B] rounded-[8px]"
                >
                  <ChevronLeft className="w-[20px] h-[20px] text-[#DDDDDD]" />
                </button>
                <button
                  onClick={goToNextStep}
                  disabled={!selectedBusiness}
                  className={`flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[87px] h-[41px] bg-white rounded-[10px] ${!selectedBusiness ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <span className="font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#212121]">
                    Далее
                  </span>
                </button>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="flex flex-col items-center gap-[40px] w-full">
            {/* Achievement */}
            <div className="flex flex-col items-center gap-[20px] w-[229px] h-[302px] animate-fadeIn">
              <div className="w-[200px] h-[200px] relative">
                <div className="absolute w-[118px] h-[118px] left-[calc(50%-118px/2)] top-[calc(50%-118px/2)] bg-[#F5202A] filter blur-[47px]"></div>
                <Image
                  src="/8bb4cd835cdf3e58859ed3955019394752726448.png"
                  alt="Achievement"
                  width={200}
                  height={200}
                  className="absolute w-[200px] h-[200px] left-[calc(50%-200px/2)] top-[calc(50%-200px/2)] object-cover rounded-[16px]"
                />
              </div>
              <div className="flex flex-col items-center gap-[12px] w-[229px]">
                <h2 className="w-full font-['Montserrat'] font-extrabold text-[28px] leading-[34px] text-center text-white">
                  Урок пройден!
                </h2>
                <div className="flex flex-row justify-center items-center p-[8px_16px] gap-[10px] w-[115px] h-[36px] bg-[#417041] border border-[#4C974C] rounded-[110px]">
                  <span className="font-['Montserrat'] font-semibold text-[16px] leading-[20px] whitespace-nowrap text-white">
                    +10 опыта
                  </span>
                </div>
              </div>
            </div>

            {/* Next button */}
            <div className="flex flex-col gap-[20px] w-full">
              <div className="w-full h-0 opacity-40 border border-[#4B4B4B]"></div>
              <div className="flex flex-row justify-between items-center w-full h-[41px]">
                <button
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="box-border flex flex-row items-center p-[8px] gap-[10px] w-[36px] h-[36px] border border-[#4B4B4B] rounded-[8px]"
                >
                  <ChevronLeft className="w-[20px] h-[20px] text-[#DDDDDD]" />
                </button>
                <Link
                  href="/courses/smm-start/lessons/lesson2"
                  className="flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[176px] h-[41px] bg-white rounded-[10px]"
                >
                  <span className="font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#212121]">
                    Перейти к 2 уроку
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-[#212121] flex justify-center px-4 sm:px-0">
      <Link
        href="/courses/smm-start"
        className="box-border flex flex-row items-center p-[8px] gap-[10px] absolute w-[36px] h-[36px] left-4 sm:left-[20px] top-[20px] border border-[#4B4B4B] rounded-[8px] z-10"
      >
        <ChevronLeft className="w-[20px] h-[20px] text-[#DDDDDD] transform rotate-90" />
      </Link>

      <div className="box-border flex flex-col items-start p-4 sm:p-[40px] gap-[100px] sm:gap-[200px] w-full max-w-[840px] min-h-[1163px] mt-[20px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
        <div className="flex flex-col items-start p-0 gap-[20px] sm:gap-[40px] w-full">
          {/* Header */}
          <div className="flex flex-col items-start p-0 gap-[20px] sm:gap-[40px] w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-0 gap-[12px] sm:gap-[134px] w-full min-h-[49px]">
              <div className="flex flex-col items-start p-0 gap-[8px] w-full sm:w-[368px] min-h-[49px]">
                <span className="w-full h-[17px] font-['Montserrat'] font-normal text-[14px] leading-[17px] text-[#B6B6B6]">
                  Урок 1
                </span>
                <h1 className="w-full font-['Montserrat'] font-semibold text-[18px] sm:text-[20px] leading-[22px] sm:leading-[24px] text-white">
                  Что такое SMM?
                </h1>
              </div>
              <div className="flex flex-row items-center p-0 gap-[12px] w-full sm:w-[258px] h-[20px]">
                <div className="flex-1 sm:w-[224px] h-[20px] relative">
                  <div className="absolute w-full h-[20px] left-0 top-0 bg-[#606060] rounded-[4px]"></div>
                  <div
                    className="absolute h-[20px] left-0 top-0 bg-white rounded-[4px] transition-all duration-500 ease-in-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className="w-[22px] h-[17px] font-['Montserrat'] font-medium text-[14px] leading-[17px] text-white">
                  {progress}%
                </span>
              </div>
            </div>
            <div className="w-full h-0 opacity-40 border border-[#4B4B4B]"></div>
          </div>

          {/* Content based on current step */}
          {renderStepContent()}
        </div>
      </div>
    </div>
  )
}
