import { motion } from "framer-motion"
import {
  SiCapacitor,
  SiDocker,
  SiExpress,
  SiGit,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReactrouter,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebauthn,
  SiWebrtc,
} from "react-icons/si"
import { PrismaBackground } from "./ui/prisma-background"

// Cores das marcas; as monocromáticas usam branco (o fundo do hero é
// sempre escuro, em qualquer tema)
const GROUPS = [
  {
    title: "Frontend",
    description:
      "Interfaces responsivas e performáticas, do protótipo ao deploy.",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "React Router", icon: SiReactrouter, color: "#F44250" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", icon: SiVite, color: "#9F7AEA" },
    ],
  },
  {
    title: "Backend",
    description:
      "APIs e serviços escaláveis, com foco em código limpo e manutenível.",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "Python", icon: SiPython, color: "#FFD43B" },
      { name: "PHP", icon: SiPhp, color: "#8892BF" },
    ],
  },
  {
    title: "Dados & Infra",
    description:
      "Persistência, cache e contêineres para rodar em produção com confiança.",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#6B9BE8" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
  },
  {
    title: "Tempo real & Segurança",
    description:
      "Experiências ao vivo e autenticação forte quando o projeto pede.",
    items: [
      { name: "Socket.io", icon: SiSocketdotio, color: "#FFFFFF" },
      { name: "WebRTC", icon: SiWebrtc, color: "#FFFFFF" },
      { name: "WebAuthn / 2FA", icon: SiWebauthn, color: "#A99CFF" },
      { name: "Capacitor", icon: SiCapacitor, color: "#119EFF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto w-full max-w-[2200px] px-3 pt-3 pb-8 sm:px-6 sm:pt-6 sm:pb-16 lg:px-12 lg:pt-8"
    >
      <PrismaBackground className="rounded-2xl md:rounded-[2rem]">
        <div className="flex min-h-[calc(100svh-24px)] flex-col justify-between gap-12 px-5 py-12 sm:min-h-[calc(100svh-120px)] sm:gap-16 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          {/* ---- Intro (ex-Hero) ---- */}
          <div className="max-w-3xl">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-accent sm:text-sm sm:tracking-[0.3em]"
            >
              Desenvolvedor Fullstack
            </motion.p>

            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="mt-5 whitespace-nowrap font-display text-[clamp(1.75rem,10.5vw,3rem)] font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Vinicius Morais
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-white/95 sm:mt-6 sm:text-xl lg:text-2xl lg:leading-relaxed"
            >
              {/* Versão resumida no mobile */}
              <span className="sm:hidden">
                Construo produtos de ponta a ponta — do frontend à
                infraestrutura — que funcionam em produção.
              </span>
              <span className="hidden sm:inline">
                Construo produtos de ponta a ponta — de interfaces responsivas a
                sistemas distribuídos — transformando problemas reais em
                software que funciona em produção.
              </span>
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contato"
                className="font-mono text-sm text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
              >
                Fale comigo
              </a>
            </motion.div>
          </div>

          {/* ---- Tecnologias (ex-Skills) ---- */}
          <div id="skills" className="scroll-mt-24">
            <div className="flex flex-col gap-2">
              <p className="font-mono text-sm font-medium tracking-wide text-blue-300">
                Com o que eu trabalho
              </p>
            </div>

            {/* Mobile: carrossel horizontal; sm+: grid escalonado (staggered) */}
            <div className="no-scrollbar -mx-5 mt-6 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-1 sm:mx-0 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
              {GROUPS.map((g, i) => (
                <div
                  key={g.title}
                  className={`flex w-[80%] shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:h-full sm:w-auto sm:p-6 transition-colors hover:border-white/30 hover:bg-white/10 ${
                    i % 2 === 1 ? "lg:mt-10" : ""
                  }`}
                >
                  <h3 className="font-display text-lg font-semibold text-white">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {g.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {g.items.map((item) => (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-black/20 px-2.5 py-1.5 font-mono text-xs text-white/85"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="h-3.5 w-3.5 shrink-0"
                          style={{ color: item.color }}
                        />
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PrismaBackground>
    </section>
  )
}
