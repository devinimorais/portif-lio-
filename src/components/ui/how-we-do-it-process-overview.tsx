import React from "react"
import { ArrowUpRight, type LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "./button"

type ProjectStatus = "Em produção" | "Em desenvolvimento"

// Interface for individual process card props
export interface ProcessCardProps {
  icon: LucideIcon
  title: string
  description: string
  /** Área do projeto, ex.: "Fintech · B2B" */
  category?: string
  status?: ProjectStatus
  /** Tecnologias principais, exibidas como chips no rodapé do card */
  stack?: string[]
  className?: string
}

// Status discreto: só um ponto pequeno de cor, o texto segue neutro
function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-text-muted">
      <span
        aria-hidden="true"
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "Em produção" ? "bg-emerald-500/80" : "bg-amber-400/80",
        )}
      />
      {status}
    </span>
  )
}

// Reusable Process Card Component
const ProcessCard: React.FC<ProcessCardProps> = ({
  icon: Icon,
  title,
  description,
  category,
  status,
  stack,
  className,
}) => (
  <div
    className={cn(
      "group relative flex w-full items-start gap-4 rounded-lg border border-border bg-bg p-4 transition-colors duration-300 hover:border-accent/50 sm:flex-col sm:items-stretch sm:gap-0 sm:p-6",
      className,
    )}
  >
    {/* Decorative Line - Visible on larger screens */}
    <div className="absolute -left-[1px] top-1/2 hidden h-1/2 w-px -translate-y-1/2 bg-border transition-colors group-hover:bg-accent/50 md:block" />

    {/* Icon + status */}
    <div className="flex shrink-0 items-center justify-between sm:mb-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent transition-colors duration-300 group-hover:border-accent/50 sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      {status ? (
        <span className="hidden sm:inline-flex">
          <StatusBadge status={status} />
        </span>
      ) : null}
    </div>

    {/* Content */}
    <div className="flex min-w-0 flex-1 flex-col">
      {category ? (
        <p className="mb-1 font-mono text-[11px] uppercase tracking-wider text-text-muted">
          {category}
        </p>
      ) : null}
      <h3 className="mb-1 font-display text-lg font-semibold text-text">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-text-muted">{description}</p>

      {status ? (
        <span className="mt-3 sm:hidden">
          <StatusBadge status={status} />
        </span>
      ) : null}

      {stack?.length ? (
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  </div>
)

// Interface for the main section props
interface ProcessSectionProps {
  subtitle: string
  title: string
  description: string
  buttonText: string
  items: ProcessCardProps[]
  id?: string
  buttonHref?: string
}

// Main Process Section Component
export const ProcessSection: React.FC<ProcessSectionProps> = ({
  subtitle,
  title,
  description,
  buttonText,
  items,
  id,
  buttonHref,
}) => {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-[2200px] scroll-mt-20 px-3 py-4 sm:px-6 sm:py-8 lg:px-12"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-surface py-10 sm:py-16 md:rounded-[2rem] md:py-24">
        <div className="grid grid-cols-1 gap-8 px-5 sm:gap-12 sm:px-8 md:grid-cols-3 md:gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center md:col-span-1">
          <span className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-accent">
            {subtitle}
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
            {title}
          </h2>
          <p className="mb-6 text-base leading-relaxed text-text-muted">
            {description}
          </p>
          {buttonHref ? (
            <Button
              asChild
              size="lg"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <a
                href={buttonHref}
                // Links externos (ex.: WhatsApp) abrem em nova aba
                {...(buttonHref.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {buttonText}
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          ) : (
            <Button
              size="lg"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            >
              {buttonText}
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Right Content - Grid of Process Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 md:col-span-2 lg:gap-8">
          {items.map((item, index) => (
            <ProcessCard key={index} {...item} />
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
