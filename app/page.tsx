"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  Camera,
  CarFront,
  CheckCircle2,
  CreditCard,
  FileText,
  HeartHandshake,
  PhoneCall,
  ScanSearch,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

const serviceHighlights = [
  {
    title: "Прозрачная диагностика",
    description: "Сначала понимаем причину, потом предлагаем работы.",
  },
  {
    title: "Согласование до начала",
    description: "Ничего не делаем молча и без вашего решения.",
  },
  {
    title: "Понятный итог",
    description: "После обслуживания остаются результат и гарантия.",
  },
]

const reasons = [
  {
    title: "Объясняем простыми словами",
    description: "Не нужно разбираться в ремонте, чтобы понять, что происходит с автомобилем.",
    icon: ScanSearch,
  },
  {
    title: "Фиксируем ключевые этапы",
    description: "Фото и история обслуживания помогают не возвращаться к догадкам.",
    icon: Camera,
  },
  {
    title: "Подтверждаем результат гарантией",
    description: "После работ остаются не обещания, а понятные обязательства сервиса.",
    icon: ShieldCheck,
  },
]

const requestScenarios = [
  {
    title: "Плановое обслуживание",
    description: "Когда нужно спокойно пройти очередное обслуживание и держать машину в порядке.",
  },
  {
    title: "Непонятный шум или ошибка",
    description: "Когда с автомобилем что-то не так и сначала нужна нормальная диагностика.",
  },
  {
    title: "Несколько автомобилей",
    description: "Когда важно обслуживать семейные или рабочие машины в одном месте.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Принимаем автомобиль",
    description: "Фиксируем задачу и объясняем план проверки.",
    icon: CarFront,
  },
  {
    step: "02",
    title: "Проводим диагностику",
    description: "Находим причину и показываем, что требует внимания.",
    icon: ScanSearch,
  },
  {
    step: "03",
    title: "Согласовываем работы",
    description: "До начала работ понятны объём, стоимость и результат.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Выполняем обслуживание",
    description: "Работы идут по единому стандарту сервиса.",
    icon: Wrench,
  },
  {
    step: "05",
    title: "Передаём автомобиль",
    description: "Передаём результат и сохраняем историю обслуживания.",
    icon: CheckCircle2,
  },
]

const vehicleTypes = [
  {
    title: "Легковые автомобили",
    description: "Плановое обслуживание, диагностика и ремонт на каждый день.",
    icon: CarFront,
    eyebrow: "Основной поток",
  },
  {
    title: "Коммерческий транспорт",
    description: "Когда простаивать машине нельзя и обслуживание должно быть предсказуемым.",
    icon: Truck,
    eyebrow: "Рабочий ритм",
  },
  {
    title: "Корпоративные автомобили",
    description: "Для компаний, которым важно держать рабочие машины в нормальном состоянии.",
    icon: BriefcaseBusiness,
    eyebrow: "Для бизнеса",
  },
  {
    title: "Несколько автомобилей в семье",
    description: "Когда удобно обслуживать две и более машины в одном месте.",
    icon: HeartHandshake,
    eyebrow: "Несколько машин",
  },
]

const payments = [
  {
    title: "Наличный расчёт",
    description: "Простой вариант для частных клиентов.",
    icon: Banknote,
  },
  {
    title: "Безналичная оплата",
    description: "Удобно, когда нужен перевод без наличных.",
    icon: CreditCard,
  },
  {
    title: "Оплата по расчётному счёту",
    description: "Подходит для компаний и регулярного обслуживания.",
    icon: FileText,
  },
  {
    title: "Обслуживание юридических лиц",
    description: "Можно вести рабочие автомобили в одном понятном формате.",
    icon: BriefcaseBusiness,
  },
]

const contactInfo = {
  phoneDisplay: "+7 (800) 000 00 00",
  phoneHref: "+78000000000",
  workHours: "Ежедневно, 09:00-19:00",
  bookingHint:
    "Для записи достаточно позвонить. Сразу подскажем, с чего начать, и поможем выбрать удобное время.",
}

const pricingHighlights = [
  {
    title: "Диагностика автомобиля",
    priceFrom: "от 1 500 ₽",
    description: "Первичная проверка состояния автомобиля.",
  },
  {
    title: "Диагностика двигателя",
    priceFrom: "от 2 500 ₽",
    description: "Если мотор работает неровно или появилась ошибка.",
  },
  {
    title: "Обслуживание двигателя",
    priceFrom: "от 4 000 ₽",
    description: "Базовые работы по моторной части.",
  },
  {
    title: "Ремонт двигателя",
    priceFrom: "от 12 000 ₽",
    description: "Когда проблема уже требует ремонта.",
  },
]

const faqItems = [
  {
    value: "diagnostics",
    title: "Можно ли приехать только на диагностику?",
    description:
      "Да. Можно начать только с проверки состояния автомобиля и уже потом решать, какие работы действительно нужны.",
  },
  {
    value: "approval",
    title: "Нужно ли сразу соглашаться на весь список работ?",
    description:
      "Нет. Сначала показываем, что нашли, объясняем приоритеты и только потом согласовываем объём работ.",
  },
  {
    value: "multi",
    title: "Работаете ли вы с несколькими автомобилями?",
    description:
      "Да. Это подходит и для семей, и для компаний, которым важно вести несколько машин в одном месте.",
  },
  {
    value: "price",
    title: "Когда будет понятна стоимость работ?",
    description:
      "После диагностики и осмотра. Сначала объясняем, что нашли, и только потом согласовываем стоимость и перечень работ.",
  },
  {
    value: "timeline",
    title: "Можно ли заранее понять сроки обслуживания?",
    description:
      "Да. После осмотра и согласования работ мы можем сориентировать по срокам и объяснить, от чего они зависят.",
  },
  {
    value: "parts",
    title: "Вы работаете со своими запчастями или можно привезти свои?",
    description:
      "Это обсуждается заранее. Важно, чтобы запчасти подходили под задачу и не создавали проблем в дальнейшем обслуживании.",
  },
  {
    value: "warranty",
    title: "Есть ли гарантия на выполненные работы?",
    description:
      "Да. Выполненные работы сопровождаются гарантией, а результат не остаётся только на словах.",
  },
  {
    value: "booking",
    title: "Нужно ли записываться заранее?",
    description:
      "Лучше записаться заранее, чтобы приехать в удобное время и не тратить день на ожидание.",
  },
  {
    value: "inspection",
    title: "Можно ли сначала показать автомобиль и ничего не делать в тот же день?",
    description:
      "Да. Можно начать с осмотра, диагностики и понимания объёма работ, а решение по ремонту принять отдельно.",
  },
]

const branchLocation = {
  title: "URBIO.AUTO Черкесск",
  address: "Пятигорское шоссе, 13В, бокс 20.",
  schedule: contactInfo.workHours,
  city: "Черкесск",
  coordinates: [44.24997, 42.071509] as [number, number],
  mapCenter: [44.2269, 42.0488] as [number, number],
}

declare global {
  interface Window {
    ymaps: {
      ready: (callback: () => void) => void
      Map: new (
        element: HTMLElement,
        state: {
          center: [number, number]
          zoom: number
          controls?: string[]
        },
        options?: Record<string, unknown>
      ) => {
        setCenter: (
          center: [number, number],
          zoom?: number,
          options?: Record<string, unknown>
        ) => void
        geoObjects: {
          add: (geoObject: unknown) => void
        }
        destroy: () => void
      }
      Placemark: new (
        coordinates: [number, number],
        properties?: Record<string, unknown>,
        options?: {
          preset?: string
          iconColor?: string
        }
      ) => {
        options: {
          set: (key: string, value: unknown) => void
        }
        balloon: {
          open: () => void
          close: () => void
        }
        events: {
          add: (event: string, callback: () => void) => void
        }
      }
    }
  }
}

function SectionIntro({
  label,
  title,
  description,
  className,
}: {
  label: string
  title: string
  description: string
  className?: string
}) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        {label}
      </div>
      <div className="space-y-2">
        <h2 className="max-w-3xl text-3xl leading-[0.96] font-semibold tracking-[-0.05em] [font-family:var(--font-heading-source)] text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function Page() {
  const [isYandexMapLoaded, setIsYandexMapLoaded] = useState(false)
  const [hasYandexMapError, setHasYandexMapError] = useState(false)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<null | {
    setCenter: (
      center: [number, number],
      zoom?: number,
      options?: Record<string, unknown>
    ) => void
    geoObjects: { add: (geoObject: unknown) => void }
    destroy: () => void
  }>(null)
  const yandexApiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY

  useEffect(() => {
    if (
      !yandexApiKey ||
      !isYandexMapLoaded ||
      hasYandexMapError ||
      !mapContainerRef.current ||
      !window.ymaps
    ) {
      return
    }

    let isCancelled = false

    window.ymaps.ready(() => {
      if (isCancelled || mapRef.current || !mapContainerRef.current) {
        return
      }

      const map = new window.ymaps.Map(
        mapContainerRef.current,
        {
          center: branchLocation.mapCenter,
          zoom: 12,
          controls: ["zoomControl"],
        },
        {
          suppressMapOpenBlock: true,
          yandexMapDisablePoiInteractivity: true,
        }
      )

      const placemark = new window.ymaps.Placemark(
        branchLocation.coordinates,
        {
          balloonContentHeader: branchLocation.title,
          balloonContentBody: branchLocation.address,
          balloonContentFooter: branchLocation.schedule,
        },
        {
          preset: "islands#blackCircleDotIcon",
        }
      )

      map.geoObjects.add(placemark)

      mapRef.current = map

      if (!isCancelled) {
        map.setCenter(branchLocation.coordinates, 14, { duration: 250 })
        placemark.balloon.open()
      }
    })

    return () => {
      isCancelled = true
    }
  }, [hasYandexMapError, isYandexMapLoaded, yandexApiKey])

  useEffect(() => {
    return () => {
      mapRef.current?.destroy()
      mapRef.current = null
    }
  }, [])

  return (
    <main className="bg-background">
      {yandexApiKey ? (
        <Script
          src={`https://api-maps.yandex.ru/2.1/?apikey=${yandexApiKey}&lang=ru_RU`}
          strategy="afterInteractive"
          onLoad={() => setIsYandexMapLoaded(true)}
          onError={() => setHasYandexMapError(true)}
        />
      ) : null}

      <div className="mx-auto max-w-[1320px] px-3 py-3 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
        <div className="space-y-4">
          <section className="min-h-[calc(90svh-2rem)]">
            <div className="flex min-h-[calc(90svh-1.5rem)] items-center justify-center px-3 py-6 sm:min-h-[calc(90svh-2rem)] sm:px-7 sm:py-10 lg:px-10">
              <div className="w-full max-w-4xl space-y-6 text-center">
                <div className="inline-flex rounded-full border border-border/80 bg-background px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground">
                  URBIO.AUTO
                </div>

                <div className="space-y-3">
                  <h1 className="mx-auto max-w-[16ch] text-[clamp(2rem,7vw,4rem)] leading-[0.96] font-semibold tracking-[-0.06em] [font-family:var(--font-heading-source)] text-foreground">
                    Современный автосервис с прозрачным обслуживанием
                  </h1>
                  <p className="mx-auto max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
                    Диагностика, ремонт и обслуживание с понятным подходом и
                    уважением к вашему времени.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    asChild
                    size="lg"
                    className="h-11 rounded-2xl border border-foreground bg-foreground px-5 text-background transition-transform duration-200 hover:-translate-y-0.5 hover:bg-foreground/90"
                  >
                    <a href="#cta">
                      Записаться
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-11 rounded-2xl border-border/80 bg-background px-5 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <a href="#process">Как это работает</a>
                    </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-border/80 bg-card p-4 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-8">
              <SectionIntro
                label="Что получит клиент"
                title="Понятный сервис без лишней нервотрёпки"
                description="Коротко о том, на чём держится подход URBIO.AUTO."
              />

              <div className="grid gap-3 sm:grid-cols-3">
                {serviceHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-border/80 bg-muted/20 p-3.5 sm:p-4 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <div className="space-y-2">
                      <div className="text-base font-medium tracking-[-0.03em] text-foreground">
                        {item.title}
                      </div>
                      <div className="text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-border/80 bg-card p-4 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,1.44fr)] lg:gap-10">
              <SectionIntro
                label="С какими авто работаем"
                title="Подходим для разных автомобилей и разных сценариев"
                description="Можно приехать с личным автомобилем, рабочей машиной или вести в одном месте сразу несколько автомобилей."
              />

              <div className="grid gap-3 sm:grid-cols-2 sm:auto-rows-[minmax(12rem,1fr)]">
                {vehicleTypes.map(({ title, description, icon: Icon, eyebrow }, index) => (
                  <div
                    key={title}
                    className={cn(
                      "group rounded-[1.5rem] border p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1",
                      index === 0
                        ? "border-foreground bg-foreground text-background sm:col-span-2"
                        : index === 1
                          ? "border-border/80 bg-muted/20 sm:row-span-2"
                          : "border-border/80 bg-muted/20"
                    )}
                  >
                    <div className="flex h-full flex-col justify-between gap-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            "flex size-10 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-200 group-hover:scale-105",
                            index === 0
                              ? "border-background/15 bg-background/8"
                              : "border-border/80 bg-background"
                          )}
                        >
                          <Icon
                            className={cn(
                              "size-4",
                              index === 0 ? "text-background" : "text-foreground"
                            )}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div
                            className={cn(
                              "font-mono text-[11px] uppercase tracking-[0.22em]",
                              index === 0
                                ? "text-background/55"
                                : "text-muted-foreground"
                            )}
                          >
                            {eyebrow}
                          </div>
                          <div
                            className={cn(
                              "text-lg font-medium tracking-[-0.03em]",
                              index === 0 ? "text-background" : "text-foreground"
                            )}
                          >
                            {title}
                          </div>
                        </div>
                      </div>

                      <div
                        className={cn(
                          "max-w-sm text-sm leading-6",
                          index === 0 ? "text-background/72" : "text-muted-foreground"
                        )}
                      >
                        {description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-border/80 bg-card p-4 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:gap-10">
              <SectionIntro
                label="Почему это удобно"
                title="Мы убрали из обслуживания всё мутное и раздражающее"
                description="Каждое преимущество ниже относится к одному подходу: объяснять, фиксировать и подтверждать результат."
              />

              <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-background">
                {reasons.map(({ title, description, icon: Icon }, index) => (
                  <div key={title}>
                    <div className="grid gap-4 px-4 py-4 transition-colors duration-200 hover:bg-muted/20 sm:px-6 sm:py-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-6">
                      <div className="flex size-11 items-center justify-center rounded-2xl border border-border/80 bg-muted/40">
                        <Icon className="size-4 text-foreground" />
                      </div>
                      <div className="space-y-1.5">
                        <CardTitle className="text-xl leading-tight font-medium tracking-[-0.04em] [font-family:var(--font-heading-source)]">
                          {title}
                        </CardTitle>
                        <CardDescription className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                          {description}
                        </CardDescription>
                      </div>
                    </div>
                    {index < reasons.length - 1 ? <Separator /> : null}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-foreground text-background">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
              <div className="p-4 sm:p-8 lg:p-10">
                <SectionIntro
                  label="С чем обращаются"
                  title="Обычно приезжают не с идеальным описанием проблемы, а с реальной ситуацией"
                  description="Это нормально. Важнее не правильно назвать поломку, а спокойно понять, что с автомобилем происходит на самом деле."
                  className="text-background [&_div:first-child]:text-background/60 [&_h2]:text-background [&_p]:text-background/72"
                />
              </div>

              <div className="grid divide-y divide-background/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {requestScenarios.map((scenario) => (
                  <div
                    key={scenario.title}
                    className="px-4 py-4 transition-colors duration-200 hover:bg-background/5 sm:px-6 sm:py-6"
                  >
                    <div className="space-y-2">
                      <div className="text-base font-medium tracking-[-0.03em] text-background">
                        {scenario.title}
                      </div>
                      <div className="text-sm leading-6 text-background/72">
                        {scenario.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="process"
            className="rounded-[2rem] border border-border/80 bg-card p-4 sm:p-8 lg:p-10"
          >
            <SectionIntro
              label="Как проходит обслуживание"
              title="Пять шагов, в которых всё ясно заранее"
              description="Без неожиданностей и без работ, о которых клиент узнаёт постфактум."
            />

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-border/80 bg-background">
              {processSteps.map(({ step, title, description, icon: Icon }, index) => (
                <div key={step}>
                  <div className="grid gap-4 px-4 py-4 transition-colors duration-200 hover:bg-muted/20 sm:px-6 sm:py-6 lg:grid-cols-[6rem_minmax(0,1fr)_auto] lg:items-center lg:gap-8">
                    <div className="text-2xl leading-none font-semibold tracking-[-0.06em] [font-family:var(--font-heading-source)] text-foreground sm:text-3xl">
                      {step}
                    </div>

                    <div className="space-y-1.5">
                      <CardTitle className="text-xl leading-tight font-medium tracking-[-0.04em] [font-family:var(--font-heading-source)]">
                        {title}
                      </CardTitle>
                      <CardDescription className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                        {description}
                      </CardDescription>
                    </div>

                    <div className="hidden lg:flex size-12 items-center justify-center rounded-2xl border border-border/80 bg-muted/40">
                      <Icon className="size-4 text-foreground" />
                    </div>
                  </div>
                  {index < processSteps.length - 1 ? <Separator /> : null}
                </div>
              ))}
            </div>
          </section>

          <section>
            <Card className="rounded-[2rem] border-border/80 shadow-none">
              <CardHeader className="p-4 sm:p-8">
                <SectionIntro
                  label="Оплата"
                  title="Оплатить можно так, как удобно вам"
                  description="Обычные понятные способы оплаты для частных клиентов и компаний."
                />
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-8 sm:pb-8">
                <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-background">
                  <div className="grid sm:grid-cols-2">
                    {payments.map(({ title, description, icon: Icon }, index) => (
                      <div key={title}>
                        <div className="flex h-full gap-4 px-4 py-4 transition-colors duration-200 hover:bg-muted/20 sm:px-6 sm:py-6">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-muted/40">
                            <Icon className="size-4 text-foreground" />
                          </div>
                          <div className="space-y-1.5">
                            <CardTitle className="text-base leading-6 font-medium tracking-[-0.03em] [font-family:var(--font-heading-source)]">
                              {title}
                            </CardTitle>
                            <CardDescription className="max-w-sm text-sm leading-6 text-muted-foreground">
                              {description}
                            </CardDescription>
                          </div>
                        </div>
                        {index === 0 || index === 2 ? null : null}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="rounded-[2rem] border border-border/80 bg-card p-4 sm:p-8 lg:p-10">
            <div className="space-y-6 lg:space-y-8">
              <SectionIntro
                label="Стоимость"
                title="Ориентир по стоимости до визита"
                description="Ниже несколько базовых ориентиров по стоимости. Это не весь перечень услуг, а самые частые сценарии обращения."
              />

              <div className="space-y-3">
                <div className="rounded-[1.75rem] border border-foreground bg-foreground p-5 text-background sm:p-6">
                  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                    <div className="space-y-3">
                      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/55">
                        Основной запрос
                      </div>
                      <div className="max-w-2xl text-2xl leading-tight font-medium tracking-[-0.04em] [font-family:var(--font-heading-source)] sm:text-3xl">
                        Чаще всего к нам приезжают с вопросами по двигателю, обслуживанию иномарок и автомобилей АвтоВАЗ.
                      </div>
                      <div className="max-w-2xl text-sm leading-6 text-background/72 sm:text-base">
                        По телефону даём предварительное понимание, а после осмотра уже называем точную сумму.
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="h-11 rounded-2xl border-background/15 bg-transparent px-5 text-background transition-transform duration-200 hover:-translate-y-0.5 hover:border-background/25 hover:bg-background/8 hover:text-background"
                    >
                      <a href={`tel:${contactInfo.phoneHref}`}>
                        Уточнить по телефону
                        <PhoneCall className="size-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-background">
                  <Table className="min-w-[42rem]">
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="min-w-[14rem] px-4 sm:px-6">Услуга</TableHead>
                        <TableHead className="min-w-[9rem] px-4 sm:px-6">Стоимость</TableHead>
                        <TableHead className="min-w-[19rem] px-4 sm:px-6">Что входит</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pricingHighlights.map(({ title, priceFrom, description }) => (
                        <TableRow key={title}>
                          <TableCell className="px-4 py-4 font-medium whitespace-normal text-foreground sm:px-6">
                            {title}
                          </TableCell>
                          <TableCell className="px-4 py-4 font-mono text-[11px] uppercase tracking-[0.22em] whitespace-normal text-muted-foreground sm:px-6">
                            {priceFrom}
                          </TableCell>
                          <TableCell className="px-4 py-4 whitespace-normal text-muted-foreground sm:px-6">
                            {description}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="rounded-[1.25rem] border border-border/80 bg-background px-4 py-3 text-sm leading-6 text-muted-foreground">
                  Это только часть услуг и базовые ориентиры по стоимости. Финальная сумма зависит от автомобиля, его состояния и объёма работ.
                </div>
              </div>
            </div>
          </section>

          <section>
            <Card className="rounded-[2rem] border-border/80 shadow-none">
              <CardHeader className="p-4 sm:p-8">
                <SectionIntro
                  label="Частые вопросы"
                  title="Что обычно хотят понять до записи"
                  description="Короткие ответы на основные вопросы до первого обращения."
                />
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-8 sm:pb-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                      <AccordionTrigger>{item.title}</AccordionTrigger>
                      <AccordionContent>{item.description}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>

          <section id="cta">
            <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-foreground text-background">
              <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
                <div className="p-4 sm:p-8 lg:p-10">
                  <div className="space-y-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-background/60">
                      Запись
                    </div>
                    <h2 className="max-w-[14ch] text-3xl leading-[0.96] font-semibold tracking-[-0.05em] [font-family:var(--font-heading-source)] sm:text-4xl">
                      Запишитесь на обслуживание без лишних звонков и догадок
                    </h2>
                    <p className="max-w-2xl text-sm leading-6 text-background/72 sm:text-base">
                      По телефону спокойно объясним, с чего начать, на что
                      обратить внимание и как будет проходить обслуживание.
                    </p>
                  </div>
                </div>

                <div className="border-t border-background/10 bg-background/4 lg:border-t-0 lg:border-l">
                  <div className="flex h-full flex-col justify-between p-4 sm:p-8 lg:p-10">
                    <div className="space-y-3">
                      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/55">
                        Связь
                      </div>
                      <div className="text-sm leading-6 text-background/72">
                        {contactInfo.bookingHint}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-11 w-full rounded-2xl border-background/15 bg-transparent px-5 text-background transition-transform duration-200 hover:-translate-y-0.5 hover:border-background/25 hover:bg-background/8 hover:text-background"
                      >
                        <a href={`tel:${contactInfo.phoneHref}`}>
                          <PhoneCall className="size-4" />
                          Позвонить
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <Card className="rounded-[2rem] border-border/80 shadow-none">
              <CardHeader className="p-4 sm:p-8">
                <SectionIntro
                  label="Филиалы"
                  title="Наши точки обслуживания"
                  description="Показываем, где находится сервис и как к нам удобнее приехать."
                />
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-8 sm:pb-8">
                <div className="space-y-4">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[1.5rem] border border-border/80 bg-muted/20 p-4">
                      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        Точка
                      </div>
                      <div className="mt-2 text-base font-medium tracking-[-0.03em] text-foreground">
                        {branchLocation.title}
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-border/80 bg-muted/20 p-4 sm:col-span-2">
                      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        Адрес
                      </div>
                      <div className="mt-2 text-base font-medium tracking-[-0.03em] text-foreground">
                        {branchLocation.address}
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-muted/20">
                    {yandexApiKey && !hasYandexMapError ? (
                      <div
                        ref={mapContainerRef}
                        className="h-[26rem] w-full sm:h-[32rem]"
                      />
                    ) : hasYandexMapError ? (
                      <div className="flex h-[26rem] items-center justify-center px-6 text-center text-sm leading-6 text-muted-foreground sm:h-[32rem]">
                        Карта не загрузилась. Обычно это значит, что нужно
                        перезапустить `next dev` после добавления ключа или
                        проверить доступность Яндекс.Карт.
                      </div>
                    ) : (
                      <div className="flex h-[26rem] items-center justify-center px-6 text-center text-sm leading-6 text-muted-foreground sm:h-[32rem]">
                        Для отображения карты добавьте ключ Яндекс.Карт в
                        `NEXT_PUBLIC_YANDEX_MAPS_API_KEY`.
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <div>{branchLocation.city}</div>
                    <div>{branchLocation.schedule}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <footer className="space-y-4">
            <a
              href="https://dev.urbio.tech"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-3 rounded-[2rem] border border-border/80 bg-card px-4 py-4 transition-colors duration-200 hover:border-foreground/20 hover:bg-muted/20 sm:px-8 sm:py-5 md:flex-row md:items-center md:justify-between"
            >
              <div className="space-y-1">
                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  URBIO
                </div>
                <div className="text-sm text-foreground sm:text-[15px]">
                  Создано внутри экосистемы URBIO.
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <span>Перейти на страницу разработки</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </a>

            <div className="rounded-[2rem] border border-border/80 bg-card px-4 py-4 sm:px-8 sm:py-5">
              <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-end">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">
                    URBIO.AUTO
                  </div>
                  <div className="max-w-md text-sm leading-6 text-muted-foreground">
                    Автосервис с понятным подходом к диагностике, ремонту и регулярному обслуживанию.
                  </div>
                </div>

                <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em]">
                      Контакты
                    </div>
                    <a
                      href={`tel:${contactInfo.phoneHref}`}
                      className="block text-foreground transition-colors hover:text-muted-foreground"
                    >
                      {contactInfo.phoneDisplay}
                    </a>
                  </div>

                  <div className="space-y-1.5">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em]">
                      Режим работы
                    </div>
                    <div className="text-foreground">{contactInfo.workHours}</div>
                    <div>По предварительной записи</div>
                  </div>
                </div>
              </div>

              <Separator className="my-5" />

              <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                <div>© {new Date().getFullYear()} URBIO.AUTO. Все права защищены.</div>
                <div>URBIO.AUTO является частью экосистемы URBIO.</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}
