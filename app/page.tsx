"use client"

import { useState } from "react"
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
  Leaf,
  PhoneCall,
  ScanSearch,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
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
import { cn } from "@/lib/utils"

const trustPoints = [
  "Гарантия на выполненные работы",
  "Фотофиксация ключевых этапов",
  "Понятное согласование до начала работ",
]

const journeyMoments = [
  {
    label: "До визита",
    title: "Понимаете, с чем приезжаете",
    description: "Можно начать с простой диагностики без обязательства сразу делать всё.",
  },
  {
    label: "Во время обслуживания",
    title: "Остаётесь в курсе процесса",
    description: "Каждый этап объясняем и не добавляем работы молча.",
  },
  {
    label: "После обслуживания",
    title: "Получаете внятный итог",
    description: "Остаются результат, перечень работ и понятная ответственность.",
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
    description: "Плановое обслуживание и ремонт на каждый день.",
    icon: CarFront,
  },
  {
    title: "Коммерческий транспорт",
    description: "Когда простаивать машине просто нельзя.",
    icon: Truck,
  },
  {
    title: "Электромобили и гибриды",
    description: "Для современных машин с другой логикой обслуживания.",
    icon: Zap,
  },
  {
    title: "Семейные автомобили",
    description: "Когда важно держать в порядке сразу несколько машин.",
    icon: Leaf,
  },
]

const audiences = [
  {
    title: "Частным клиентам",
    description: "Когда нужен нормальный сервис без лишней нервотрёпки.",
    icon: HeartHandshake,
    points: [
      "Понятная диагностика без лишних терминов.",
      "Согласование работ до начала обслуживания.",
      "Один сервис для регулярного ухода за автомобилем.",
    ],
  },
  {
    title: "Семьям",
    description: "Когда удобно обслуживать несколько автомобилей в одном месте.",
    icon: CarFront,
    points: [
      "Можно вести несколько машин в одном сервисе.",
      "Проще планировать обслуживание заранее.",
      "Одинаковый подход независимо от автомобиля.",
    ],
  },
  {
    title: "Бизнесу",
    description: "Когда важно держать рабочие автомобили в порядке и под контролем.",
    icon: BriefcaseBusiness,
    points: [
      "Подходит для рабочих автомобилей и небольших парков.",
      "Есть безналичная оплата и расчётный счёт.",
      "Меньше хаоса в обслуживании транспорта.",
    ],
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
]

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
  const [activeAudience, setActiveAudience] = useState(audiences[0])

  return (
    <main className="bg-background">
      <div className="mx-auto max-w-[1320px] px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
        <div className="space-y-4">
          <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-card">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
              <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-10">
                <div className="space-y-7 sm:space-y-8">
                  <div className="space-y-2">
                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/70">
                      URBIO.AUTO
                    </div>
                    <div className="max-w-sm text-sm leading-6 text-muted-foreground">
                      Современный сервис для понятного обслуживания автомобиля
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h1 className="max-w-[11ch] text-[clamp(2.1rem,8vw,4.6rem)] leading-[0.95] font-semibold tracking-[-0.06em] [font-family:var(--font-heading-source)] text-foreground">
                      Современный автосервис с прозрачным обслуживанием
                    </h1>
                    <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                      Диагностика, ремонт и обслуживание автомобилей с понятными
                      этапами, гарантией и единым стандартом сервиса.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

                <div className="mt-8 flex flex-wrap gap-2 border-t border-border/80 pt-6">
                  {trustPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-full border border-border/80 bg-background px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-muted/40"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border/80 bg-muted/20 lg:border-t-0 lg:border-l">
                <div className="flex h-full flex-col justify-between">
                  {journeyMoments.map((item, index) => (
                    <div key={item.label}>
                      <div className="group px-5 py-5 transition-colors duration-200 hover:bg-background/50 sm:px-7 sm:py-6 lg:px-8">
                        <div className="space-y-2">
                          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="text-xl leading-tight font-medium tracking-[-0.04em] [font-family:var(--font-heading-source)] text-foreground">
                            {item.title}
                          </div>
                          <div className="max-w-md text-sm leading-6 text-muted-foreground">
                            {item.description}
                          </div>
                        </div>
                      </div>
                      {index < journeyMoments.length - 1 ? <Separator /> : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-border/80 bg-card p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:gap-10">
              <SectionIntro
                label="Почему это удобно"
                title="Мы убрали из обслуживания всё мутное и раздражающее"
                description="Каждое преимущество ниже относится к одному подходу: объяснять, фиксировать и подтверждать результат."
              />

              <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-background">
                {reasons.map(({ title, description, icon: Icon }, index) => (
                  <div key={title}>
                    <div className="grid gap-5 px-5 py-5 transition-colors duration-200 hover:bg-muted/20 sm:px-6 sm:py-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-6">
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
              <div className="p-6 sm:p-8 lg:p-10">
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
                    className="px-5 py-5 transition-colors duration-200 hover:bg-background/5 sm:px-6 sm:py-6"
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
            className="rounded-[2rem] border border-border/80 bg-card p-6 sm:p-8 lg:p-10"
          >
            <SectionIntro
              label="Как проходит обслуживание"
              title="Пять шагов, в которых всё ясно заранее"
              description="Без неожиданностей и без работ, о которых клиент узнаёт постфактум."
            />

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-border/80 bg-background">
              {processSteps.map(({ step, title, description, icon: Icon }, index) => (
                <div key={step}>
                  <div className="grid gap-5 px-5 py-5 transition-colors duration-200 hover:bg-muted/20 sm:px-6 sm:py-6 lg:grid-cols-[6rem_minmax(0,1fr)_auto] lg:items-center lg:gap-8">
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

          <section className="grid gap-4 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
            <Card className="rounded-[2rem] border-border/80 shadow-none">
              <CardHeader className="p-6 sm:p-8">
                <SectionIntro
                  label="С какими авто работаем"
                  title="Подходим для разных автомобилей и разных сценариев"
                  description="Можно приехать с личным автомобилем, семейной машиной или рабочим транспортом."
                />
              </CardHeader>
              <CardContent className="grid gap-3 px-6 pb-6 sm:grid-cols-2 sm:px-8 sm:pb-8">
                {vehicleTypes.map(({ title, description, icon: Icon }, index) => (
                  <div
                    key={title}
                    className={cn(
                      "rounded-[1.5rem] border p-4 transition-all duration-200 hover:-translate-y-0.5",
                      index === 0
                        ? "border-foreground bg-foreground text-background sm:col-span-2"
                        : "border-border/80 bg-muted/20"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "flex size-10 shrink-0 items-center justify-center rounded-2xl border",
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
                      <div className="space-y-1">
                        <div
                          className={cn(
                            "text-base font-medium tracking-[-0.03em]",
                            index === 0 ? "text-background" : "text-foreground"
                          )}
                        >
                          {title}
                        </div>
                        <div
                          className={cn(
                            "text-sm leading-6",
                            index === 0
                              ? "text-background/72"
                              : "text-muted-foreground"
                          )}
                        >
                          {description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-border/80 shadow-none">
              <CardHeader className="p-6 sm:p-8">
                <SectionIntro
                  label="Для кого подходит"
                  title="Подходит тем, кто хочет нормальный сервис без бардака"
                  description="Один и тот же понятный подход для разных задач."
                />
              </CardHeader>
              <CardContent className="grid gap-4 px-6 pb-6 sm:px-8 sm:pb-8">
                <div className="grid gap-2">
                  {audiences.map((audience) => {
                    const Icon = audience.icon
                    const isActive = audience.title === activeAudience.title

                    return (
                      <button
                        key={audience.title}
                        type="button"
                        onClick={() => setActiveAudience(audience)}
                        className={cn(
                          "rounded-[1.25rem] border px-4 py-4 text-left transition-all duration-200",
                          isActive
                            ? "border-foreground bg-foreground text-background"
                            : "border-border/80 bg-muted/20 hover:bg-muted/35"
                        )}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={cn(
                              "flex size-10 shrink-0 items-center justify-center rounded-2xl border",
                              isActive
                                ? "border-background/15 bg-background/8"
                                : "border-border/80 bg-background"
                            )}
                          >
                            <Icon
                              className={cn(
                                "size-4",
                                isActive ? "text-background" : "text-foreground"
                              )}
                            />
                          </div>
                          <div className="space-y-1">
                            <div className="text-base font-medium tracking-[-0.03em]">
                              {audience.title}
                            </div>
                            <div
                              className={cn(
                                "text-sm leading-6",
                                isActive
                                  ? "text-background/72"
                                  : "text-muted-foreground"
                              )}
                            >
                              {audience.description}
                            </div>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className="rounded-[1.5rem] border border-border/80 bg-background p-5 sm:p-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {activeAudience.title}
                  </div>
                  <div className="mt-3 grid gap-3">
                    {activeAudience.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-[1rem] border border-border/80 bg-muted/20 px-4 py-3 text-sm leading-6 text-foreground"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <Card className="rounded-[2rem] border-border/80 shadow-none">
              <CardHeader className="p-6 sm:p-8">
                <SectionIntro
                  label="Оплата"
                  title="Оплатить можно так, как удобно вам"
                  description="Обычные понятные способы оплаты для частных клиентов и компаний."
                />
              </CardHeader>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {payments.map(({ title, description, icon: Icon }) => (
                <Card
                  key={title}
                  className="rounded-[2rem] border-border/80 shadow-none transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <CardHeader className="gap-5 p-6">
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-border/80 bg-muted/40">
                      <Icon className="size-4 text-foreground" />
                    </div>
                    <div className="space-y-1.5">
                      <CardTitle className="text-base leading-6 font-medium tracking-[-0.03em] [font-family:var(--font-heading-source)]">
                        {title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-6 text-muted-foreground">
                        {description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <Card className="rounded-[2rem] border-border/80 shadow-none">
              <CardHeader className="p-6 sm:p-8">
                <SectionIntro
                  label="Частые вопросы"
                  title="Что обычно хотят понять до записи"
                  description="Короткие ответы на основные вопросы до первого обращения."
                />
              </CardHeader>
            </Card>

            <Card className="rounded-[2rem] border-border/80 shadow-none">
              <CardContent className="px-6 py-4 sm:px-8 sm:py-5">
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
            <Card className="rounded-[2rem] border-border/80 shadow-none">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                  <div className="space-y-3">
                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      Запись
                    </div>
                    <h2 className="max-w-[15ch] text-3xl leading-[0.96] font-semibold tracking-[-0.05em] [font-family:var(--font-heading-source)] text-foreground sm:text-4xl">
                      Запишитесь на обслуживание в URBIO.AUTO
                    </h2>
                    <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                      Оставьте заявку или позвоните. Дальше проведём по процессу
                      спокойно и без лишних слов.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="h-11 rounded-2xl border border-foreground bg-foreground px-5 text-background transition-transform duration-200 hover:-translate-y-0.5 hover:bg-foreground/90"
                    >
                      <a href="https://auto.urbio.tech">
                        Оставить заявку
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="h-11 rounded-2xl border-border/80 bg-background px-5 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <a href="tel:+78000000000">
                        <PhoneCall className="size-4" />
                        Позвонить
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <footer className="rounded-[2rem] border border-border/80 bg-card px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1.5">
                <div className="text-sm font-medium text-foreground">
                  URBIO.AUTO — современная инфраструктура автомобильного обслуживания.
                </div>
                <div className="text-sm text-muted-foreground">
                  Понятный процесс, гарантия и единый стандарт сервиса.
                </div>
              </div>

              <Separator className="md:hidden" />

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <a href="https://auto.urbio.tech" className="hover:text-foreground">
                  auto.urbio.tech
                </a>
                <a href="https://urbio.tech" className="hover:text-foreground">
                  urbio.tech
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}
