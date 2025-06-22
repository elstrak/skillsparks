"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronLeft, Check, AlertTriangle, Sparkles } from "lucide-react"
import Link from "next/link"
import { Montserrat, Unbounded } from "next/font/google"

// Add CSS animation for fadeIn
const fadeInAnimation = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
`

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
})

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  weight: ["900"],
})

// Define content types and their correct platforms
const contentTypes = [
  { id: "short-survey", name: "Короткий опрос", correctPlatform: "vk" },
  { id: "coffee-story", name: "Лонгрид про историю кофе", correctPlatform: "dzen" },
  { id: "cat-meme", name: "Мем с котиком", correctPlatform: "vk" },
  { id: "smm-webinar", name: "Вебинар по SMM", correctPlatform: "telegram" },
  { id: "infographic", name: "Инфографика", correctPlatform: "all" },
  { id: "podcast", name: "Подкаст", correctPlatform: "telegram" },
  { id: "video-review", name: "Видеообзор", correctPlatform: "vk" },
]

// Define platforms
const platforms = [
  { id: "dzen", name: "Дзен", icon: "/placeholder.svg?height=24&width=24" },
  { id: "telegram", name: "Telegram", icon: "/placeholder.svg?height=24&width=24" },
  { id: "ok", name: "OK", icon: "/placeholder.svg?height=24&width=24" },
  { id: "vk", name: "ВКонтакте", icon: "/placeholder.svg?height=24&width=24" },
]

// AI-generated headlines for coffee shop
const aiGeneratedHeadlines = [
  "Кофе, который разбудит лучше будильника!",
  "Утренний заряд энергии: кофе, который изменит ваше утро!",
  "Забудьте о сонливости с нашим фирменным кофе!",
  "Ваш идеальный старт дня: кофе с характером!",
]

export default function Lesson2() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [progress, setProgress] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [allMessagesShown, setAllMessagesShown] = useState(false)

  // For step 2 (sorting game)
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [droppedItems, setDroppedItems] = useState<{ [key: string]: string[] }>({
    dzen: [],
    telegram: [],
    ok: [],
    vk: [],
  })
  const [correctMatches, setCorrectMatches] = useState<string[]>([])
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [gameCompleted, setGameCompleted] = useState(false)

  // For step 4 (AI headline generation)
  const [generatedHeadlines, setGeneratedHeadlines] = useState<string[]>([])
  const [generationComplete, setGenerationComplete] = useState(false)

  // Messages for step 1
  const messages = [
    { id: 1, text: "Привет! Теперь начнем урок №2", isTitle: true },
    { id: 2, text: "В России есть 4 главные площадки для SMM:", isTitle: false },
    {
      id: 3,
      text: "ВКонтакте — здесь тусуется молодежь. Идеально для:",
      isTitle: true,
      bullets: ["Видео (клипы, обзоры)", "Продажи через сообщества"],
    },
    {
      id: 4,
      text: "Telegram — каналы для экспертов. Подходит для:",
      isTitle: true,
      bullets: ["Новостей без спама", "Обучающих курсов"],
    },
    {
      id: 5,
      text: "Одноклассники — аудитория 35+. Здесь любят:",
      isTitle: true,
      bullets: ["Ностальгический контент (ретро-музыка, конкурсы)"],
    },
    {
      id: 6,
      text: "Яндекс.Дзен — лента статей. Хорошо для:",
      isTitle: true,
      bullets: ["Длинных текстов (лайфхаки, истории)"],
    },
  ]

  // Show messages one by one with delay
  useEffect(() => {
    if (currentStep === 1) {
      const showNextMessage = (index: number) => {
        if (index < messages.length) {
          setTimeout(() => {
            setVisibleMessages((prev) => [...prev, messages[index].id])
            showNextMessage(index + 1)
          }, 1000) // 1 second delay between messages
        } else {
          setAllMessagesShown(true)
        }
      }

      showNextMessage(0)
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

  // Handle drag start
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, itemId: string) => {
    setDraggedItem(itemId)
    // Make the drag image transparent
    const img = new window.Image()
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    e.dataTransfer.setDragImage(img, 0, 0)
  }

  // Handle drag over
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  // Handle drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, platformId: string) => {
    e.preventDefault()

    if (!draggedItem) return

    const contentItem = contentTypes.find((item) => item.id === draggedItem)
    if (!contentItem) return

    // Check if this is a correct match
    const isCorrect = contentItem.correctPlatform === platformId || contentItem.correctPlatform === "all"

    if (isCorrect) {
      // Add to correct matches
      setCorrectMatches((prev) => [...prev, draggedItem])

      // Add to dropped items
      setDroppedItems((prev) => ({
        ...prev,
        [platformId]: [...prev[platformId], draggedItem],
      }))

      // Check if game is completed
      if (correctMatches.length + 1 === contentTypes.length) {
        setGameCompleted(true)
      }
    } else {
      // Show error
      setErrorMessage("Этот контент не подходит для данной платформы. Попробуй еще раз!")
      setShowError(true)

      setTimeout(() => {
        setShowError(false)
      }, 2000)
    }

    setDraggedItem(null)
  }

  // Generate AI headline
  const generateHeadline = () => {
    const currentCount = generatedHeadlines.length

    if (currentCount < aiGeneratedHeadlines.length) {
      // Simulate AI generation with a loading state
      setTimeout(() => {
        setGeneratedHeadlines((prev) => [...prev, aiGeneratedHeadlines[currentCount]])

        // Check if all headlines are generated
        if (currentCount + 1 === aiGeneratedHeadlines.length) {
          setGenerationComplete(true)
        }
      }, 1000)
    }
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
          <div className={montserrat.variable + ' ' + unbounded.variable + ' flex flex-col gap-[40px] w-full'}>
            {/* Messages */}
            <div className="flex flex-row items-flex-end gap-[12px] w-full">
              <div className="w-[51px] h-[51px] rounded-[12px] border border-[#4B4B4B] overflow-hidden">
                <Image
                  src="/girl.png"
                  alt="Tutor"
                  width={51}
                  height={51}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center gap-[12px] w-[369px]">
                {visibleMessages.includes(1) && (
                  <div className="box-border flex flex-col justify-flex-end items-flex-start p-[20px] gap-[8px] w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px] animate-fadeIn">
                    <h3 className="w-full font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                      {messages[0].text}
                    </h3>
                    <p className="w-full font-['Montserrat'] font-normal text-[14px] leading-[17px] text-white whitespace-pre-line">
                      {messages[1].text}
                    </p>
                  </div>
                )}

                {visibleMessages.includes(3) && (
                  <div className="box-border flex flex-col justify-flex-end items-flex-start p-[20px] gap-[8px] w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px] animate-fadeIn">
                    <h3 className="w-full font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                      {messages[2].text}
                    </h3>
                    <ul className="w-full font-['Montserrat'] font-normal text-[14px] leading-[17px] text-white list-disc pl-5">
                      {messages[2].bullets?.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {visibleMessages.includes(4) && (
                  <div className="box-border flex flex-col justify-flex-end items-flex-start p-[20px] gap-[8px] w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px] animate-fadeIn">
                    <h3 className="w-full font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                      {messages[3].text}
                    </h3>
                    <ul className="w-full font-['Montserrat'] font-normal text-[14px] leading-[17px] text-white list-disc pl-5">
                      {messages[3].bullets?.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {visibleMessages.includes(5) && (
                  <div className="box-border flex flex-col justify-flex-end items-flex-start p-[20px] gap-[8px] w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px] animate-fadeIn">
                    <h3 className="w-full font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                      {messages[4].text}
                    </h3>
                    <ul className="w-full font-['Montserrat'] font-normal text-[14px] leading-[17px] text-white list-disc pl-5">
                      {messages[4].bullets?.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {visibleMessages.includes(6) && (
                  <div className="box-border flex flex-col justify-flex-end items-flex-start p-[20px] gap-[8px] w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px] animate-fadeIn">
                    <h3 className="w-full font-['Montserrat'] font-semibold text-[14px] leading-[17px] text-white">
                      {messages[5].text}
                    </h3>
                    <ul className="w-full font-['Montserrat'] font-normal text-[14px] leading-[17px] text-white list-disc pl-5">
                      {messages[5].bullets?.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Next button */}
            <div className="flex flex-col gap-[20px] w-full">
              <div className="w-full h-0 opacity-40 border border-[#4B4B4B]"></div>
              <div className="flex flex-row justify-end items-center w-full h-[41px]">
                <button
                  onClick={goToNextStep}
                  disabled={!allMessagesShown}
                  className={`flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[219px] h-[41px] bg-white rounded-[10px] ${!allMessagesShown ? "opacity-50 cursor-not-allowed" : ""}`}
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
          <div className="flex flex-col gap-[40px] w-full">
            {/* Game instructions */}
            <div className="flex flex-row items-end gap-[12px] w-full">
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
                  Мини-игра "Сортировка контента"
                </h3>
                <p className="w-full font-['Montserrat'] font-normal text-[14px] leading-[17px] text-white">
                  Распредели контент по платформам
                </p>
              </div>
            </div>

            {/* Sorting game */}
            <div className="w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px] p-4 relative">
              <div className="flex flex-row gap-0 mb-4 relative">
                {/* Content column */}
                <div className="w-1/5 bg-[#2C2C2C] p-2 rounded-[12px] border-r border-[#4B4B4B]">
                  <h3 className="text-white text-center font-medium mb-2 bg-[#3C3C3C] p-2 rounded-[8px]">Контент</h3>
                  <div className="flex flex-col gap-2">
                    {contentTypes.map((item) => {
                      // Skip if already matched
                      if (correctMatches.includes(item.id)) return null

                      return (
                        <div
                          key={item.id}
                          className="bg-[#3C3C3C] p-2 rounded-[8px] text-white text-sm cursor-move hover:bg-[#434343] hover:border-[#6B6B6B] border border-transparent transition-all duration-150 active:scale-[0.98]"
                          draggable
                          onDragStart={(e) => handleDragStart(e, item.id)}
                        >
                          {item.name}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Platform columns */}
                {platforms.map((platform, index) => (
                  <div
                    key={platform.id}
                    className={`w-1/5 bg-[#2C2C2C] p-2 rounded-[12px] ${
                      index < platforms.length - 1 ? 'border-r border-[#4B4B4B]' : ''
                    }`}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, platform.id)}
                  >
                    <div className="flex items-center justify-center gap-2 mb-2 bg-[#3C3C3C] p-2 rounded-[8px]">
                      <Image
                        src={platform.icon || "/placeholder.svg"}
                        alt={platform.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <h3 className="text-white font-medium">{platform.name}</h3>
                    </div>

                    <div className="flex flex-col gap-2 min-h-[200px]">
                      {droppedItems[platform.id].map((itemId) => {
                        const item = contentTypes.find((c) => c.id === itemId)
                        if (!item) return null

                        return (
                          <div
                            key={itemId}
                            className="bg-[#417041] border border-[#4C974C] p-2 rounded-[8px] text-white text-sm animate-fadeIn"
                          >
                            {item.name}
                            <Check className="inline-block ml-2 w-4 h-4" />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Error message - positioned in center of screen */}
              {showError && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="flex flex-row justify-center items-center p-[20px_28px] gap-[16px] w-[627px] h-[60px] bg-[#453232] border border-[#CD8989] rounded-[12px] animate-fadeIn shadow-lg">
                    <AlertTriangle className="w-[20px] h-[20px] text-white" />
                    <span className="font-['Montserrat'] font-normal text-[14px] leading-[17px] text-white">
                      {errorMessage}
                    </span>
                  </div>
                </div>
              )}
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
                  disabled={!gameCompleted}
                  className={`flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[87px] h-[41px] bg-white rounded-[10px] ${!gameCompleted ? "opacity-50 cursor-not-allowed" : ""}`}
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
                  src="/312b920f786de034f08286d0f6c72aa9e56a8901 (1).png"
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
                    +15 опыта
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
                  Создай первый пост
                </h3>
                <p className="w-full font-['Montserrat'] font-normal text-[14px] leading-[17px] text-white">
                  Пора написать пост для твоей кофейни! Используй шаблон:
                </p>
                <ul className="w-full font-['Montserrat'] font-normal text-[14px] leading-[17px] text-white">
                  <li>🔥 Заголовок (например: «Скидка 50% на весь кофе!»)</li>
                  <li>❓ Проблема («Устал от серых будней?»)</li>
                  <li>🎯 Решение («Попробуй капучино с карамелью»)</li>
                  <li>👉 CTA («Жми→Забронировать столик + получи скидку!»)</li>
                </ul>
              </div>
            </div>

            {/* AI headline generation */}
            <div className="flex flex-col gap-4 w-full">
              {/* First headline (always visible) */}
              <div className="box-border flex flex-col justify-center items-center p-[20px] w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
                <p className="w-full font-['Montserrat'] font-medium text-[16px] leading-[19px] text-white text-center">
                  Кофе, который разбудит лучше будильника!
                </p>
              </div>

              {/* Generate button */}
              <button
                onClick={generateHeadline}
                disabled={generatedHeadlines.length >= aiGeneratedHeadlines.length}
                className={`flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-full h-[41px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[10px] ${generatedHeadlines.length >= aiGeneratedHeadlines.length ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <Sparkles className="w-[20px] h-[20px] text-white" />
                <span className="font-['Montserrat'] font-medium text-[14px] leading-[17px] text-white">
                  Сгенерировать заголовок с помощью AI
                </span>
              </button>

              {/* Generated headlines */}
              {generatedHeadlines.map((headline, index) => (
                <div
                  key={index}
                  className="box-border flex flex-col justify-center items-center p-[20px] w-full bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px] animate-fadeIn"
                >
                  <p className="w-full font-['Montserrat'] font-medium text-[16px] leading-[19px] text-white text-center">
                    {headline}
                  </p>
                </div>
              ))}

              {/* Generate button for each headline (except the last one) */}
              {generatedHeadlines.length > 0 && generatedHeadlines.length < aiGeneratedHeadlines.length && (
                <button
                  onClick={generateHeadline}
                  className="flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-full h-[41px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[10px] animate-fadeIn"
                >
                  <Sparkles className="w-[20px] h-[20px] text-white" />
                  <span className="font-['Montserrat'] font-medium text-[14px] leading-[17px] text-white">
                    Сгенерировать заголовок с помощью AI
                  </span>
                </button>
              )}
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
                  disabled={!generationComplete}
                  className={`flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[87px] h-[41px] bg-white rounded-[10px] ${!generationComplete ? "opacity-50 cursor-not-allowed" : ""}`}
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
                  src="/010370c10e67ef0cacaee96ec3b76727fc1a5499 (1).png"
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
                  href="/courses/smm-start"
                  className="flex flex-row justify-center items-center p-[12px_20px] gap-[12px] w-[176px] h-[41px] bg-white rounded-[10px]"
                >
                  <span className="font-['Montserrat'] font-medium text-[14px] leading-[17px] text-[#212121]">
                    На главную
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-[#212121] flex justify-center">
      <style jsx global>{fadeInAnimation}</style>
      <Link
        href="/courses/smm-start"
        className="box-border flex flex-row items-center p-[8px] gap-[10px] absolute w-[36px] h-[36px] left-[20px] top-[20px] border border-[#4B4B4B] rounded-[8px] z-10"
      >
        <ChevronLeft className="w-[20px] h-[20px] text-[#DDDDDD] transform rotate-90" />
      </Link>

      <div className="box-border flex flex-col items-start p-[40px] gap-[200px] w-[840px] min-h-[1163px] mt-[20px] bg-[#3C3C3C] border border-[#4B4B4B] rounded-[20px]">
        <div className="flex flex-col items-start p-0 gap-[40px] w-[760px]">
          {/* Header */}
          <div className="flex flex-col items-start p-0 gap-[40px] w-full">
            <div className="flex flex-row justify-between items-center p-0 gap-[134px] w-full h-[49px]">
              <div className="flex flex-col items-start p-0 gap-[8px] w-[368px] h-[49px]">
                <span className="w-full h-[17px] font-['Montserrat'] font-normal text-[14px] leading-[17px] text-[#B6B6B6]">
                  Урок 2
                </span>
                <h1 className="w-[368px] h-[24px] font-['Montserrat'] font-semibold text-[20px] leading-[24px] text-white">
                  Платформы для продвижения в России
                </h1>
              </div>
              <div className="flex flex-row items-center p-0 gap-[12px] w-[258px] h-[20px]">
                <div className="w-[224px] h-[20px] relative">
                  <div className="absolute w-[224px] h-[20px] left-0 top-0 bg-[#606060] rounded-[4px]"></div>
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
