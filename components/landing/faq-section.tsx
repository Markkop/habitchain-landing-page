"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import type { Language } from "@/lib/language";
import { cn } from "@/lib/utils";

type FaqTab = "general" | "investors";

type FaqItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

type FaqSectionProps = {
  language?: Language;
  onJoinWaitlist: () => void;
};

const getFaqTabs = (language: Language): Array<{ id: FaqTab; label: string }> => {
  if (language === "pt-BR") {
    return [
      { id: "general", label: "Geral" },
      { id: "investors", label: "Investidores" },
    ];
  }

  return [
    { id: "general", label: "General" },
    { id: "investors", label: "Investors" },
  ];
};

const getGeneralFaqItems = (language: Language, onJoinWaitlist: () => void): FaqItem[] => {
  if (language === "pt-BR") {
    return [
      {
        id: "users-what-is",
        question: "O que e o HabitChain?",
        answer:
          "HabitChain e um app de auto-compromisso onde voce aposta nos seus proprios habitos, mantem responsabilidade com check-ins e desbloqueia recompensas ao ser consistente.",
      },
      {
        id: "users-who-for",
        question: "Para quem e isso?",
        answer:
          "Foi feito para quem quer mais responsabilidade do que rastreadores de habito comuns, especialmente builders, fundadores e criadores que valorizam compromisso mensuravel.",
      },
      {
        id: "users-problem",
        question: "Que problema ele resolve?",
        answer:
          "A maioria das pessoas perde consistencia porque a motivacao diminui e nao ha consequencias reais. O HabitChain adiciona compromisso real e rastreamento transparente para facilitar a execucao.",
      },
      {
        id: "users-how-work",
        question: "Como funciona (de forma simples)?",
        answer: (
          <div className="space-y-2">
            <p className="m-0">1. Comprometa-se com um habito e aposte USDC.</p>
            <p className="m-0">2. Faca check-in durante cada ciclo.</p>
            <p className="m-0">
              3. Se cumprir, desbloqueia valor e recompensas; se perder ciclos, sua aposta e cortada e vai para o tesouro,
              financiando o HabitChain.
            </p>
          </div>
        ),
      },
      {
        id: "use-flow",
        question: "Como eu uso o HabitChain?",
        answer:
          "O fluxo e simples: deposite USDC, crie um habito, faca check-in em cada ciclo e finalize o ciclo continuando sua sequencia ou realizando saque do sucesso.",
      },
      {
        id: "users-different",
        question: "O que torna o HabitChain diferente dos apps tradicionais?",
        answer: (
          <ul className="m-0 list-disc pl-5 space-y-1">
            <li>Foco em resultado: menos conversa, mais execucao consistente.</li>
            <li>Modelo de auto-compromisso: sua propria aposta reforca seu comportamento.</li>
            <li>Loop rapido: comprometer, check-in, finalizar e repetir.</li>
          </ul>
        ),
      },
      {
        id: "active-money",
        question: "O que acontece com meu dinheiro enquanto o habito esta ativo?",
        answer:
          "Seu dinheiro comprometido fica travado enquanto o habito esta ativo. Se voce concluir o ciclo, recebe recompensas de patrocinio (se houver), seu dinheiro segue rendendo e pode ser sacado. Se falhar, vai para o tesouro, apoiando o HabitChain.",
      },
      {
        id: "missed-checkin",
        question: "O que acontece se eu perder um check-in?",
        answer:
          "Perder um check-in significa que aquele ciclo falhou. Voce pode reiniciar e continuar, ou arquivar o habito. Se deixar habitos falhos sem resolver, os saques ficam pausados ate resolver.",
      },
      {
        id: "verification",
        question: "Como funciona a verificacao/checking?",
        answer:
          "HabitChain e baseado em auto-compromisso. Voce autoatesta seus check-ins, e essas acoes sao registradas on-chain para manter o historico transparente e consistente.",
      },
      {
        id: "money-goes",
        question: "Para onde vai o dinheiro?",
        answer:
          "Os fundos circulam entre seu saldo, compromissos ativos, recompensas e tesouro conforme seus resultados. O tesouro e usado para campanhas patrocinadas, novas funcionalidades e crescimento.",
      },
      {
        id: "users-setup",
        question: "Preciso de cripto, carteira ou configuracao especial?",
        answer:
          "O HabitChain foi desenhado para ser simples, com caminho nativo no Farcaster e caminho com carteira. Voce nao precisa de conhecimento avancado de cripto para comecar.",
      },
      {
        id: "users-integrations",
        question: "Quais integracoes voces suportam?",
        answer:
          "As integracoes centrais atuais incluem Base, Farcaster, campanhas Habit Sponsor e fluxos opcionais com paymaster.",
      },
      {
        id: "users-availability",
        question: "Onde o HabitChain esta disponivel?",
        answer:
          "O HabitChain esta disponivel como mini app web na Base, com distribuicao nativa no Farcaster.",
      },
      {
        id: "launch",
        question: "Quando o HabitChain sera lancado?",
        answer: (
          <>
            O HabitChain esta prestes a lancar. Qualquer pessoa pode{" "}
            <button
              type="button"
              onClick={onJoinWaitlist}
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              entrar na lista
            </button>{" "}
            agora, e o app de producao estara disponivel em{" "}
            <a
              href="https://app.habitchain.xyz"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              https://app.habitchain.xyz
            </a>
            .
          </>
        ),
      },
      {
        id: "users-pricing",
        question: "Quanto custa?",
        answer:
          "A mecanica central e apostar em Habitos, entao voce precisa colocar um valor que aceita perder. Pode variar de centavos a dezenas de dolares. E voce que decide.",
      },
      {
        id: "users-team",
        question: "Posso usar o HabitChain para meu time/empresa?",
        answer:
          "Hoje o foco e responsabilidade pessoal. Experiencias para times e grupos estao sendo desenvolvidas progressivamente.",
      },
      {
        id: "users-security",
        question: "E seguranca e privacidade?",
        answer:
          "Acoes on-chain sao transparentes por design. Mantemos o tratamento de dados no minimo, seguimos praticas de desenvolvimento seguro e nao vendemos dados de usuarios.",
      },
      {
        id: "users-support",
        question: "Como consigo suporte?",
        answer:
          "Entre na lista e responda pelas comunicacoes de onboarding, ou fale conosco pelos canais oficiais listados no rodape.",
      },
      {
        id: "sponsor-project",
        question: "Como posso patrocinar este projeto?",
        answer:
          "Atualmente, voce pode nos apoiar patrocinando um habito usando interacoes no smart contract + atualizacoes de UI. Fale com a gente!",
      },
    ];
  }

  return [
    {
      id: "users-what-is",
      question: "What is HabitChain?",
      answer:
        "HabitChain is a self-commitment app where you stake on your own habits, stay accountable through check-ins, and unlock rewards when you stay consistent.",
    },
    {
      id: "users-who-for",
      question: "Who is this for?",
      answer:
        "It is built for people who want stronger accountability than standard habit trackers, especially builders, founders, and creators who value measurable commitment.",
    },
    {
      id: "users-problem",
      question: "What problem does it solve?",
      answer:
        "Most people struggle with consistency because motivation fades and there are no real consequences. HabitChain adds real commitment and transparent tracking so following through becomes easier.",
    },
    {
      id: "users-how-work",
      question: "How does it work (in simple terms)?",
      answer: (
        <div className="space-y-2">
          <p className="m-0">1. Commit to a habit and stake USDC.</p>
          <p className="m-0">2. Check in during each cycle.</p>
          <p className="m-0">
            3. Succeed to unlock value and rewards; miss cycles and your stake will be slashed, going to the treasury and funding HabitChain.
          </p>
        </div>
      ),
    },
    {
      id: "use-flow",
      question: "How do I use HabitChain?",
      answer:
        "The flow is simple: deposit USDC, create a habit, check in during each cycle, and settle your cycle by continuing your streak or cashing out your success.",
    },
    {
      id: "users-different",
      question: "What makes HabitChain different from traditional apps?",
      answer: (
        <ul className="m-0 list-disc pl-5 space-y-1">
          <li>Outcome-first: less talk, more consistent follow-through.</li>
          <li>Self-commitment model: your own stake reinforces your behavior.</li>
          <li>Fast loop: commit, check in, settle, and repeat.</li>
        </ul>
      ),
    },
    {
      id: "active-money",
      question: "What happens with my money while a habit is active?",
      answer:
        "Your committed money stays locked while the habit is active. If you complete your cycle, you get sponsor rewards (if any available), your money stays yielding and can be withdrawn. If you fail, it goes to the treasury, supporting HabitChain.",
    },
    {
      id: "missed-checkin",
      question: "What happens if I miss a check-in?",
      answer:
        "Missing a check-in means that cycle counts as failed. You can choose to restart and keep going, or archive the habit. If you leave failed habits unresolved, withdrawals stay paused until you resolve them.",
    },
    {
      id: "verification",
      question: "How does verification/checking work?",
      answer:
        "HabitChain is built around self-commitment. You self-attest your check-ins, and those actions are recorded on-chain so your commitment history is transparent and consistent.",
    },
    {
      id: "money-goes",
      question: "Where does the money go?",
      answer:
        "Funds move between your balance, active commitments, rewards, and treasury based on your outcomes. Treasury funds are used to sponsor campaigns, build more product features, and invest in marketing and growth.",
    },
    {
      id: "users-setup",
      question: "Do I need crypto, a wallet, or special setup?",
      answer:
        "HabitChain is designed to be simple, with a Farcaster-native path and wallet-supported path. You do not need advanced crypto knowledge to get started.",
    },
    {
      id: "users-integrations",
      question: "What integrations do you support?",
      answer:
        "Current core integrations include Base, Farcaster, Habit Sponsor campaigns, and optional paymaster-enabled transaction flows.",
    },
    {
      id: "users-availability",
      question: "Where is HabitChain available?",
      answer:
        "HabitChain is available as a web mini app experience on Base, with Farcaster-native distribution.",
    },
    {
      id: "launch",
      question: "When is HabitChain launching?",
      answer: (
        <>
          HabitChain is about to launch. Anyone can{" "}
          <button
            type="button"
            onClick={onJoinWaitlist}
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            join the waitlist
          </button>{" "}
          now, and the production app will be available at{" "}
          <a
            href="https://app.habitchain.xyz"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            https://app.habitchain.xyz
          </a>
          .
        </>
      ),
    },
    {
      id: "users-pricing",
      question: "How much does it cost?",
      answer:
        "The core mechanic is stake in Habits, so you need to put money you're willing to lose. It can vary from just a few cents to dozens of dollars. It's up to you.",
    },
    {
      id: "users-team",
      question: "Can I use HabitChain for my team/company?",
      answer:
        "Today the focus is personal accountability. Team and group-oriented experiences are being developed progressively.",
    },
    {
      id: "users-security",
      question: "What about security and privacy?",
      answer:
        "On-chain actions are transparent by design. We keep product data handling minimal, follow secure development practices, and do not sell user data.",
    },
    {
      id: "users-support",
      question: "How do I get support?",
      answer:
        "Join the waitlist and reply through our onboarding communications, or reach out through our official social channels listed in the footer.",
    },
    {
      id: "sponsor-project",
      question: "How can I sponsor this project?",
      answer:
        "Currently, you can support us by sponsoring a habit using our smart contract interactions + ui updates. Talk to us!",
    },
  ];
};

const getInvestorFaqItems = (language: Language): FaqItem[] => {
  if (language === "pt-BR") {
    return [
      {
        id: "inv-one-liner",
        question: "O que o HabitChain faz em uma frase?",
        answer:
          "HabitChain transforma disciplina pessoal em um loop de compromisso on-chain, onde usuarios apostam em habitos e ganham quando sao consistentes.",
      },
      {
        id: "inv-wedge",
        question: "Qual e a wedge / cliente inicial?",
        answer:
          "A wedge sao usuarios cripto nativos focados em responsabilidade, que ja valorizam mecanismos transparentes de compromisso, com expansao para audiencias mais amplas de autodesenvolvimento ao longo do tempo.",
      },
      {
        id: "inv-insight",
        question: "Qual e o insight unico?",
        answer:
          "A maioria dos produtos de habito depende apenas de motivacao; o HabitChain trata compromisso como infraestrutura de comportamento, onde autoatesto registrado e consequencia economica impulsionam consistencia.",
      },
      {
        id: "inv-traction",
        question: "Que tracao voces tem?",
        answer:
          "Estamos em preparacao ativa de lancamento com produto ja disponivel e captacao de lista. Metricas detalhadas de tracao e cohort sao compartilhadas diretamente com investidores qualificados.",
      },
      {
        id: "inv-revenue",
        question: "Como voces ganham dinheiro (ou planejam ganhar)?",
        answer:
          "O modelo e centrado em monetizacao alinhada a valor por uso da plataforma e economia de campanhas patrocinadas.",
      },
      {
        id: "inv-market",
        question: "Qual e o tamanho de mercado?",
        answer: (
          <ul className="m-0 list-disc pl-5 space-y-1">
            <li>
              Mercado global de wellness: US$ 6,8T hoje, projetado para US$ 9,8T ate 2029 ({" "}
              <a
                href="https://globalwellnessinstitute.org/global-wellness-institute-blog/2025/11/25/wellness-market-hits-record-6-8-trillion-will-reach-nearly-10-trillion-by-2029/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Global Wellness Institute
              </a>
              ).
            </li>
            <li>
              Segmento de apps de habit tracker: US$ 1,7B em 2024, CAGR de 14,2% ate US$ 5,5B em 2033 ({" "}
              <a
                href="https://straitsresearch.com/report/habit-tracking-apps-market"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Straits Research
              </a>
              ).
            </li>
          </ul>
        ),
      },
      {
        id: "inv-competition",
        question: "Quem sao os concorrentes e por que voces vencem?",
        answer: (
          <ul className="m-0 list-disc pl-5 space-y-1">
            <li>
              Habitica (Web2): produtividade gamificada com XP/moedas simbolicas, enquanto o HabitChain usa valor real em risco e
              resultados on-chain mensuraveis.
            </li>
            <li>
              Streaks (Web2): rastreamento premium de sequencia focado em checklists pessoais, enquanto o HabitChain adiciona
              responsabilidade com aposta e consequencia.
            </li>
            <li>
              Productive (Web2): planejamento de rotina e lembretes, enquanto o HabitChain conecta conclusao a compromisso
              financeiro e fluxo transparente de recompensas.
            </li>
            <li>
              Habitify (Web2): analytics cross-platform de habitos, enquanto o HabitChain adiciona incentivos programaveis
              (patrocinadores, tesouro, hooks de rendimento) alem do tracking.
            </li>
            <li>
              Way of Life (Web2): diario de comportamento, enquanto o HabitChain transforma consistencia em loop de compromisso
              aplicavel.
            </li>
            <li>
              Strava (Web2): tracking social focado em fitness, enquanto o HabitChain suporta qualquer habito autoatestado e
              mecanicas de redistribuicao em grupo.
            </li>
            <li>
              Resumo: trackers Web2 otimizam lembretes e visualizacao; o HabitChain fecha a lacuna de motivacao com apostas reais,
              transparencia on-chain e incentivos programaveis.
            </li>
          </ul>
        ),
      },
      {
        id: "inv-why-now",
        question: "Por que agora?",
        answer:
          "Isso e viavel por UX de carteira melhor, distribuicao por mini app no Farcaster e infraestrutura de baixo custo da Base, tornando mecanicas de compromisso usaveis em produtos do dia a dia.",
      },
      {
        id: "inv-risks",
        question: "Quais sao os principais riscos / premissas?",
        answer: (
          <ul className="m-0 list-disc pl-5 space-y-1">
            <li>Usuarios sustentam comportamento de check-in no longo prazo.</li>
            <li>Conversao da lista e cohorts de lancamento permanece forte.</li>
            <li>Demanda de patrocinadores cresce junto com a consistencia dos usuarios.</li>
            <li>Retencao melhora conforme os loops de produto amadurecem.</li>
          </ul>
        ),
      },
      {
        id: "inv-gtm",
        question: "Qual e o go-to-market?",
        answer:
          "O GTM combina distribuicao nativa no Farcaster, crescimento via comunidade, campanhas alinhadas a patrocinadores e amplificacao com criadores/parceiros ligada a resultados de responsabilidade.",
      },
      {
        id: "inv-team",
        question: "Por que este time e qualificado de forma unica?",
        answer:
          "Marcelo, Gustavo e Henrique - o time fundador soma mais de 20 anos de experiencia em desenvolvimento de software. Ficamos em segundo no StarkNet Hackathon e em primeiro no Polkadot Latin Hackathon. Nosso compromisso com o HabitChain esta totalmente apostado neste projeto.",
      },
      {
        id: "inv-raise",
        question: "O que voces estao captando e o que isso destrava?",
        answer:
          "Estamos abertos a conversas com investidores para acelerar profundidade de produto, execucao de go-to-market e expansao de time. Metas especificas de rodada e marcos sao compartilhados em conversas com investidores.",
      },
      {
        id: "inv-contact",
        question: "Como investidores podem entrar em contato?",
        answer:
          "Entre em contato pelo fluxo de lista/contato e canais oficiais, e podemos compartilhar deck e data room como parte da qualificacao de investidor.",
      },
    ];
  }

  return [
    {
      id: "inv-one-liner",
      question: "What does HabitChain do in one sentence?",
      answer:
        "HabitChain turns personal discipline into an on-chain commitment loop where users stake on habits and earn when they stay consistent.",
    },
    {
      id: "inv-wedge",
      question: "What’s the wedge / initial customer?",
      answer:
        "The wedge is accountability-focused crypto-native users who already value transparent commitment mechanics, with expansion into broader self-improvement audiences over time.",
    },
    {
      id: "inv-insight",
      question: "What’s the unique insight?",
      answer:
        "Most habit products rely on motivation alone; HabitChain treats commitment as behavior infrastructure, where recorded self-attestation plus economic consequence drives consistency.",
    },
    {
      id: "inv-traction",
      question: "What traction do you have?",
      answer:
        "We are in active launch preparation with a live product surface and waitlist intake. Detailed traction metrics and cohort data are shared directly with qualified investors.",
    },
    {
      id: "inv-revenue",
      question: "How do you make money (or plan to)?",
      answer:
        "The model centers on value-aligned monetization through platform usage and sponsor campaign economics",
    },
    {
      id: "inv-market",
      question: "What’s the market size?",
      answer: (
        <ul className="m-0 list-disc pl-5 space-y-1">
          <li>
            Global wellness market: $6.8T today, projected to reach $9.8T by 2029 (
            <a
              href="https://globalwellnessinstitute.org/global-wellness-institute-blog/2025/11/25/wellness-market-hits-record-6-8-trillion-will-reach-nearly-10-trillion-by-2029/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Global Wellness Institute
            </a>
            ).
          </li>
          <li>
            Habit tracker app segment: $1.7B in 2024, 14.2% CAGR to $5.5B by 2033 (
            <a
              href="https://straitsresearch.com/report/habit-tracking-apps-market"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Straits Research
            </a>
            ).
          </li>
        </ul>
      ),
    },
    {
      id: "inv-competition",
      question: "Who are your competitors, and why do you win?",
      answer: (
        <ul className="m-0 list-disc pl-5 space-y-1">
          <li>
            Habitica (Web2): gamified productivity with symbolic XP/coins, while HabitChain uses real value at risk and measurable
            on-chain outcomes.
          </li>
          <li>
            Streaks (Web2): premium streak tracking focused on personal checklists, while HabitChain adds stake-backed accountability
            and consequence.
          </li>
          <li>
            Productive (Web2): routine planning and reminders, while HabitChain ties completion to financial commitment and
            transparent reward flow.
          </li>
          <li>
            Habitify (Web2): cross-platform habit analytics, while HabitChain adds programmable incentives (sponsors, treasury, yield
            hooks) beyond tracking.
          </li>
          <li>
            Way of Life (Web2): journal-style behavior logging, while HabitChain turns consistency into an enforceable commitment
            loop.
          </li>
          <li>
            Strava (Web2): fitness-specific social tracking, while HabitChain supports any self-attested habit and group
            redistribution mechanics.
          </li>
          <li>
            Combined summary: Web2 trackers optimize reminders and visualization; HabitChain closes the motivation gap with real
            stakes, on-chain transparency, and programmable incentives.
          </li>
        </ul>
      ),
    },
    {
      id: "inv-why-now",
      question: "Why now?",
      answer:
        "This is enabled by better wallet UX, Farcaster mini app distribution, and low-cost Base infrastructure, making commitment mechanics usable in everyday behavior products.",
    },
    {
      id: "inv-risks",
      question: "What are the key risks / assumptions?",
      answer: (
        <ul className="m-0 list-disc pl-5 space-y-1">
          <li>Users sustain long-term check-in behavior.</li>
          <li>Conversion from waitlist and launch cohorts remains strong.</li>
          <li>Sponsor demand grows alongside user consistency.</li>
          <li>Retention improves as product loops mature.</li>
        </ul>
      ),
    },
    {
      id: "inv-gtm",
      question: "What’s your go-to-market?",
      answer:
        "GTM combines Farcaster-native distribution, community-led growth, sponsor-aligned campaigns, and creator/partner amplification tied to accountability outcomes.",
    },
    {
      id: "inv-team",
      question: "Why is this team uniquely qualified?",
      answer:
        "Marcelo, Gustavo, Henrique - the founding team bring over 20 years of combined software development experience. We placed second at the StarkNet Hackathon and first at the Polkadot Latin Hackathon. Our commitment to HabitChain is fully staked in this project.",
    },
    {
      id: "inv-raise",
      question: "What are you raising and what will it unlock?",
      answer:
        "We are open to investor conversations to accelerate product depth, go-to-market execution, and team expansion. Specific raise targets and milestone plans are shared in investor discussions.",
    },
    {
      id: "inv-contact",
      question: "How can investors get in touch?",
      answer:
        "Reach out through our waitlist/contact flow and official channels, and we can share deck and data-room materials as part of investor qualification.",
    },
  ];
};

export function FaqSection({ language = "en", onJoinWaitlist }: FaqSectionProps) {
  const [activeTab, setActiveTab] = useState<FaqTab>("general");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isPt = language === "pt-BR";
  const faqTabs = getFaqTabs(language);

  const faqByTab: Record<FaqTab, FaqItem[]> = {
    general: getGeneralFaqItems(language, onJoinWaitlist),
    investors: getInvestorFaqItems(language),
  };
  const faqItems = faqByTab[activeTab];

  const handleTabChange = (tab: FaqTab) => {
    setActiveTab(tab);
    setOpenIndex(null);
  };

  return (
    <section id="faq" className="scroll-mt-24 px-6 py-24 border-t border-border/40 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isPt ? "Perguntas Frequentes" : "Frequently Asked Questions"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {isPt
              ? "Veja respostas rapidas para perguntas gerais e de investidores."
              : "Browse quick answers for general and investor questions."}
          </p>
        </div>

        <div className="mb-8 flex items-center justify-center gap-2" role="tablist" aria-label={isPt ? "Categorias do FAQ" : "FAQ categories"}>
          {faqTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`faq-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`faq-tabpanel-${tab.id}`}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border/50 bg-card/40 text-muted-foreground hover:border-primary/30 hover:text-foreground",
                )}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-3" role="tabpanel" id={`faq-tabpanel-${activeTab}`} aria-labelledby={`faq-tab-${activeTab}`}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-trigger-${activeTab}-${item.id}`;
            const panelId = `faq-panel-${activeTab}-${item.id}`;

            return (
              <div
                key={item.id}
                className={cn(
                  "rounded-2xl border-2 bg-card/50 transition-all",
                  isOpen ? "border-primary/40" : "border-border/50 hover:border-primary/30",
                )}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  >
                    <span className="font-semibold text-foreground">{item.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                        isOpen && "rotate-180 text-primary",
                      )}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-all duration-200 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed">{item.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
