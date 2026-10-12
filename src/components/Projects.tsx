import {
  Bot,
  CreditCard,
  Gamepad2,
  Megaphone,
  Phone,
  Radar,
} from "lucide-react"
import {
  ProcessSection,
  type ProcessCardProps,
} from "./ui/how-we-do-it-process-overview"
import { WHATSAPP_URL } from "./Footer"

const PROJECTS: ProcessCardProps[] = [
  {
    icon: Phone,
    title: "calls.so",
    category: "IA conversacional · B2B",
    status: "Em produção",
    stack: ["React", "Node.js", "WebRTC", "Socket.io"],
    description:
      "Plataforma B2B de ligações com IA conversacional em português: agentes configuráveis, chamadas em tempo real via WebRTC e campanhas em lote.",
  },
  {
    icon: Bot,
    title: "Jarvis",
    category: "Assistente pessoal · IA",
    status: "Em desenvolvimento",
    stack: ["Python", "NLP", "Automação"],
    description:
      "Assistente pessoal inteligente (estilo Jarvis) em desenvolvimento, construído em Python para automação de tarefas e interação por linguagem natural.",
  },
  {
    icon: Radar,
    title: "tracelapse",
    category: "Observabilidade · Open Source",
    status: "Publicado no npm",
    stack: ["TypeScript", "Node.js", "NestJS", "OpenTelemetry"],
    description:
      "Biblioteca Node.js de rastreamento de requisições: um traceId por request ligando o que entrou (HTTP), tudo que mudou no banco (antes/depois de cada linha) e o que saiu — com auditoria e time-travel de dados. Publicada no npm.",
  },
  {
    icon: CreditCard,
    title: "Gestão de Pagamentos",
    category: "Pagamentos · Fintech",
    status: "Em produção",
    stack: ["React", "NestJS", "PostgreSQL"],
    description:
      "Plataforma de gerenciamento de pagamentos, para controle de cobranças e transações de ponta a ponta.",
  },
  {
    icon: Gamepad2,
    title: "Anymarket",
    category: "Jogos de previsão",
    status: "Em produção",
    stack: ["React", "TypeScript", "Capacitor"],
    description:
      "Plataforma de jogos de previsão, em que usuários fazem palpites sobre eventos e acompanham os resultados — com app mobile via Capacitor.",
  },
  {
    icon: Megaphone,
    title: "Ntomarketing",
    category: "Automação de marketing",
    status: "Em produção",
    stack: ["React Router", "TypeScript", "Capacitor"],
    description:
      "Plataforma de automação de marketing com interface rica, construída em React Router e empacotada também para mobile.",
  },
]

export default function Projects() {
  return (
    <ProcessSection
      id="projetos"
      subtitle="Projetos"
      title="O que já construí"
      description="Produtos reais que levei da ideia à produção — de IA conversacional a backends distribuídos e integrações em escala."
      buttonText="Vamos conversar"
      buttonHref={WHATSAPP_URL}
      items={PROJECTS}
    />
  )
}
