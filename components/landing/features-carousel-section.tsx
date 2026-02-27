"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Coins,
  Flame,
  Megaphone,
  ShieldCheck,
  Trophy,
  UserPlus,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { InteractiveHabitDemo } from "@/components/landing/interactive-habit-demo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Language } from "@/lib/language";
import { cn } from "@/lib/utils";

type FeatureAccent = "primary" | "accent" | "success" | "warning";
type FeatureId = "stake" | "squad-goals" | "sponsor-friend" | "streak-multiplier" | "brand-rewards";

interface FeatureItem {
  id: FeatureId;
  name: string;
  title: string;
  description: string;
  badgeLabel: string;
  accent: FeatureAccent;
  icon: LucideIcon;
  bullets?: Array<{
    icon: LucideIcon;
    text: string;
    colorClass: string;
  }>;
}

const getFeatureItems = (language: Language): FeatureItem[] => {
  const isPt = language === "pt-BR";

  return [
    {
      id: "stake",
      name: isPt ? "Aposta no Hábito" : "Habit Stake",
      title: isPt ? "Aposta no Hábito" : "Habit Stake",
      description: isPt
        ? "Trave fundos nos seus objetivos. Se cumprir, você mantém o valor e o rendimento; se falhar, vai para o tesouro. Skin in the game gera resultado real."
        : "Lock funds on your goals. Succeed to keep it plus yield, fail and it goes to the treasury. Real skin in the game means real results.",
      badgeLabel: isPt ? "Mecânica Principal" : "Core Mechanic",
      accent: "primary",
      icon: Coins,
      bullets: [
        {
          icon: ShieldCheck,
          text: isPt ? "Seu dinheiro fica seguro enquanto você faz check-in" : "Your money is safe as long as you check in",
          colorClass: "text-success",
        },
        {
          icon: Trophy,
          text: isPt ? "Ganhe rendimento enquanto cria hábitos" : "Earn yield while you build habits",
          colorClass: "text-accent",
        },
      ],
    },
    {
      id: "squad-goals",
      name: isPt ? "Metas em Squad" : "Squad Goals",
      title: isPt ? "Metas em Squad" : "Squad Goals",
      description: isPt
        ? "Entre em squads por convite para criar hábitos juntos. As apostas sobem: se alguém falhar, a aposta cortada é dividida entre os sobreviventes."
        : "Join invite-only squads to build habits together. The stakes are higher: if a member fails, their slashed stake is split among the survivors.",
      badgeLabel: isPt ? "Em Breve" : "Coming Soon",
      accent: "accent",
      icon: Users,
    },
    {
      id: "sponsor-friend",
      name: isPt ? "Patrocine um Amigo" : "Sponsor a Friend",
      title: isPt ? "Patrocine um Amigo" : "Sponsor a Friend",
      description: isPt
        ? "Crie códigos de convite para financiar o primeiro hábito de um amigo. Você trava a aposta para ele, e ele só mantém se concluir o ciclo completo."
        : "Create invite codes that fund a friend's first habit. You lock the stake for them, and they keep it only if they complete the full cycle.",
      badgeLabel: isPt ? "Passe Adiante" : "Pay it Forward",
      accent: "success",
      icon: UserPlus,
      bullets: [
        {
          icon: ShieldCheck,
          text: isPt ? "Traga amigos sem precisar que eles tenham fundos" : "Onboard friends without them needing funds",
          colorClass: "text-success",
        },
        {
          icon: Zap,
          text: isPt ? "Se falharem, a aposta patrocinada é cortada" : "If they fail, the sponsored stake is slashed",
          colorClass: "text-warning",
        },
      ],
    },
    {
      id: "streak-multiplier",
      name: isPt ? "Multiplicador de Sequência" : "Streak Multiplier",
      title: isPt ? "Multiplicador de Sequência" : "Streak Multiplier",
      description: isPt
        ? "Transforme consistência em retorno composto. Cada nível de sequência multiplica recompensas de rendimento, aumentando o payout com o tempo."
        : "Turn consistency into compounding upside. Every successful streak level multiplies yielding rewards, giving disciplined builders a bigger payout over time.",
      badgeLabel: isPt ? "Impulso de Consistência" : "Consistency Boost",
      accent: "accent",
      icon: Flame,
      bullets: [
        {
          icon: Zap,
          text: isPt ? "Cada ciclo completo aumenta seu multiplicador" : "Each completed cycle pushes your multiplier higher",
          colorClass: "text-accent",
        },
        {
          icon: Trophy,
          text: isPt ? "Suba de 1x até 10x para maximizar rendimento" : "Climb from 1x to 10x to maximize your yield upside",
          colorClass: "text-success",
        },
      ],
    },
    {
      id: "brand-rewards",
      name: isPt ? "Recompensas de Marcas" : "Brand Rewards",
      title: isPt ? "Recompensas de Marcas" : "Brand Rewards",
      description: isPt
        ? "Marcas patrocinam hábitos para incentivar estilos de vida saudáveis. Ganhe bônus em cripto sobre seu rendimento ao concluir desafios patrocinados."
        : "Top brands sponsor habits to encourage healthy lifestyles. Earn bonus crypto rewards on top of your stake yield when you complete sponsored challenges.",
      badgeLabel: isPt ? "Ganhe Mais" : "Earn More",
      accent: "warning",
      icon: Megaphone,
    },
  ];
};

const ACCENT_STYLES: Record<
  FeatureAccent,
  {
    badge: string;
    tabActive: string;
    glow: string;
  }
> = {
  primary: {
    badge: "bg-primary/10 text-primary",
    tabActive: "border-primary/40 bg-primary/10 text-primary",
    glow: "bg-primary/20",
  },
  accent: {
    badge: "bg-accent/10 text-accent",
    tabActive: "border-accent/40 bg-accent/10 text-accent",
    glow: "bg-accent/20",
  },
  success: {
    badge: "bg-success/10 text-success",
    tabActive: "border-success/40 bg-success/10 text-success",
    glow: "bg-success/20",
  },
  warning: {
    badge: "bg-warning/10 text-warning",
    tabActive: "border-warning/40 bg-warning/10 text-warning",
    glow: "bg-warning/20",
  },
};

export function FeaturesCarouselSection({
  language = "en",
  onJoinWaitlist,
}: {
  language?: Language;
  onJoinWaitlist?: () => void;
}) {
  const isPt = language === "pt-BR";
  const featureItems = getFeatureItems(language);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const getClosestSlideIndex = useCallback((scrollLeft: number, clientWidth: number) => {
    const viewportCenter = scrollLeft + clientWidth / 2;
    let nextIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) {
        return;
      }

      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        nextIndex = index;
      }
    });

    return nextIndex;
  }, []);

  const syncActiveFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const nextIndex = getClosestSlideIndex(track.scrollLeft, track.clientWidth);
    setActiveIndex((previous) => (previous === nextIndex ? previous : nextIndex));
  }, [getClosestSlideIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    let frameId = 0;

    const handleScroll = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(syncActiveFromScroll);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      track.removeEventListener("scroll", handleScroll);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [syncActiveFromScroll]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobileViewport) {
      return;
    }

    const activeTab = tabRefs.current[activeIndex];
    if (!activeTab) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    activeTab.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex]);

  const scrollToFeature = (index: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    const slide = slideRefs.current[index];

    if (!track || !slide) {
      return;
    }

    tabRefs.current[index]?.scrollIntoView({
      behavior,
      block: "nearest",
      inline: "center",
    });

    track.scrollTo({
      left: slide.offsetLeft,
      behavior,
    });

    setActiveIndex(index);
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = featureItems.length - 1;
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextIndex = index === lastIndex ? 0 : index + 1;
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      nextIndex = index === 0 ? lastIndex : index - 1;
    } else if (event.key === "Home") {
      event.preventDefault();
      nextIndex = 0;
    } else if (event.key === "End") {
      event.preventDefault();
      nextIndex = lastIndex;
    } else {
      return;
    }

    tabRefs.current[nextIndex]?.focus();
    scrollToFeature(nextIndex);
  };

  const lastIndex = featureItems.length - 1;
  const canGoPrevious = activeIndex > 0;
  const canGoNext = activeIndex < lastIndex;

  const goToPrevious = () => {
    if (!canGoPrevious) {
      return;
    }
    scrollToFeature(activeIndex - 1);
  };

  const goToNext = () => {
    if (!canGoNext) {
      return;
    }
    scrollToFeature(activeIndex + 1);
  };

  return (
    <section id="features" className="scroll-mt-24 px-6 py-12 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isPt ? "Recursos que Mantêm sua Consistência" : "Features That Keep You Consistent"}
          </h2>
        </div>

        <div className="mt-10">
          <div
            role="tablist"
            aria-label={isPt ? "Abas de recursos do HabitChain" : "HabitChain feature tabs"}
            className="features-tabs flex-1 overflow-x-auto pb-2"
          >
            <div className="flex gap-3">
              {featureItems.map((feature, index) => {
                const isActive = index === activeIndex;
                const Icon = feature.icon;

                return (
                  <button
                    key={feature.id}
                    id={`feature-tab-${feature.id}`}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`feature-panel-${feature.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => scrollToFeature(index)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                    className={cn(
                      "flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      isActive
                        ? ACCENT_STYLES[feature.accent].tabActive
                        : "border-border/50 bg-card/40 text-muted-foreground hover:border-border hover:text-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{feature.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative mt-8">
          <div
            ref={trackRef}
            className="features-carousel-track flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth"
          >
            {featureItems.map((feature, index) => {
              const styles = ACCENT_STYLES[feature.accent];
              const Icon = feature.icon;

              return (
                <article
                  key={feature.id}
                  id={`feature-panel-${feature.id}`}
                  ref={(node) => {
                    slideRefs.current[index] = node;
                  }}
                  role="tabpanel"
                  aria-labelledby={`feature-tab-${feature.id}`}
                  tabIndex={-1}
                  className="w-full shrink-0 basis-full snap-start px-1"
                >
                  <div className="grid min-h-[400px] grid-cols-1 items-center gap-8 rounded-3xl border border-border/50 bg-card/60 px-6 py-8 md:min-h-[460px] md:grid-cols-2 md:gap-10 md:px-10 md:py-14">
                    <div className="order-1 min-w-0">
                      <div className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold", styles.badge)}>
                        <Icon className="h-3 w-3" />
                        <span>{feature.badgeLabel}</span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-4">{feature.title}</h3>
                      <p className="text-lg text-muted-foreground">{feature.description}</p>

                      {feature.bullets && feature.bullets.length > 0 ? (
                        <ul className="mt-6 space-y-3">
                          {feature.bullets.map((bullet) => {
                            const BulletIcon = bullet.icon;

                            return (
                              <li key={bullet.text} className="flex items-center gap-2">
                                <BulletIcon className={cn("h-5 w-5", bullet.colorClass)} />
                                <span>{bullet.text}</span>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </div>

                    <div className="relative order-2 flex w-full min-w-0 min-h-[280px] items-center justify-center md:min-h-[320px]">
                      <div className={cn("absolute inset-0 rounded-full blur-3xl opacity-20", styles.glow)} />
                      <FeatureDemo featureId={feature.id} language={language} onJoinWaitlist={onJoinWaitlist} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="absolute left-3 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border-2 border-border/60 bg-background/80 backdrop-blur hover:bg-background"
            onClick={goToPrevious}
            disabled={!canGoPrevious}
            aria-label={isPt ? "Ir para recurso anterior" : "Go to previous feature"}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="absolute right-3 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border-2 border-border/60 bg-background/80 backdrop-blur hover:bg-background"
            onClick={goToNext}
            disabled={!canGoNext}
            aria-label={isPt ? "Ir para próximo recurso" : "Go to next feature"}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeatureDemo({
  featureId,
  language = "en",
  onJoinWaitlist,
}: {
  featureId: FeatureId;
  language?: Language;
  onJoinWaitlist?: () => void;
}) {
  const isPt = language === "pt-BR";

  if (featureId === "stake") {
    return (
      <InteractiveHabitDemo
        className="relative z-10 w-full max-w-sm shadow-2xl"
        language={language}
        onJoinWaitlist={onJoinWaitlist}
      />
    );
  }

  if (featureId === "squad-goals") {
    return (
      <Card className="relative z-10 w-full max-w-sm overflow-hidden border-2 border-border/50">
        <CardHeader className="pb-2">
          <div className="mb-2 flex items-center justify-between">
            <Badge variant="outline" className="border-accent/20 bg-accent/10 text-accent">
              {isPt ? "Squad Ativo" : "Active Squad"}
            </Badge>
            <span className="text-xs text-muted-foreground">{isPt ? "Membros 4/5" : "Members 4/5"}</span>
          </div>
          <CardTitle>{isPt ? "Corredores da Manha" : "Morning Runners"}</CardTitle>
          <CardDescription>{isPt ? "Sobreviventes dividem o pote" : "Survivors split the pot"}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex -space-x-3 overflow-hidden py-2">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&q=80&crop=faces&fit=crop",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&q=80&crop=faces&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&q=80&crop=faces&fit=crop",
              ].map((src, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={isPt ? `Membro ${index + 1}` : `Member ${index + 1}`}
                  className="inline-block h-10 w-10 rounded-full bg-muted object-cover ring-2 ring-background"
                />
              ))}
            </div>
            <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-3">
              <span className="text-sm font-medium">{isPt ? "Pote Atual" : "Current Pot"}</span>
              <span className="text-lg font-bold text-success">$45.00</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (featureId === "sponsor-friend") {
    return (
      <Card className="relative z-10 w-full max-w-sm border-2 border-dashed border-success/30 bg-success/5">
        <CardHeader className="pb-2 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success/20">
            <UserPlus className="h-6 w-6 text-success" />
          </div>
          <CardTitle className="text-success">{isPt ? "Você foi convidado!" : "You&apos;ve been invited!"}</CardTitle>
          <CardDescription>
            {isPt ? "Marcelo financiou seu primeiro hábito" : "Marcelo has funded your first habit"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="rounded-xl border border-success/20 bg-background/80 p-4 backdrop-blur">
            <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">{isPt ? "Código de Convite" : "Invite Code"}</p>
            <p className="font-mono text-2xl font-bold tracking-widest">BUILD-2026</p>
          </div>
          <div className="flex justify-between px-2 text-sm">
            <span className="text-muted-foreground">{isPt ? "Aposta Patrocinada:" : "Sponsored Stake:"}</span>
            <span className="font-bold">$5.00</span>
          </div>
          <Button className="w-full bg-success text-white hover:bg-success/90">
            {isPt ? "Aceitar e Começar" : "Accept &amp; Start Building"}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (featureId === "streak-multiplier") {
    return (
      <Card className="relative z-10 w-full max-w-sm border-2 border-accent/20">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>{isPt ? "Multiplicador Atual" : "Current Multiplier"}</CardTitle>
              <CardDescription>{isPt ? "Impulso nas recompensas de rendimento" : "Yielding rewards boost"}</CardDescription>
            </div>
            <div className="rounded-lg bg-accent/20 p-2 text-accent">
              <Flame className="h-5 w-5" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 text-center">
            <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">{isPt ? "Sequência Ativa" : "Live Streak"}</p>
            <p className="text-3xl font-bold text-accent">6x</p>
            <p className="text-xs text-muted-foreground">
              {isPt ? "Multiplicador aplicado nas recompensas de rendimento" : "Multiplier applied to yielding rewards"}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>{isPt ? "Progresso até o Máximo" : "Progress to Max"}</span>
              <span>6/10</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[60%] rounded-full bg-accent" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {isPt ? "Continue fazendo check-in para chegar ao multiplicador total de 10x." : "Keep checking in to climb toward the full 10x multiplier."}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="relative z-10 w-full max-w-sm border-2 border-warning/20">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{isPt ? "Buildathon da Base" : "Base Buildathon"}</CardTitle>
            <CardDescription>{isPt ? "Desafio Patrocinado" : "Sponsored Challenge"}</CardDescription>
          </div>
          <div className="rounded-lg bg-blue-600 p-2 text-white">
            <Zap className="h-5 w-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4 text-sm">
          <div className="flex-1 rounded-lg bg-secondary/50 p-3 text-center">
            <p className="mb-1 text-xs text-muted-foreground">{isPt ? "Bônus" : "Bonus"}</p>
            <p className="font-bold text-warning">{isPt ? "+10% Rendimento" : "+10% Yield"}</p>
          </div>
          <div className="flex-1 rounded-lg bg-secondary/50 p-3 text-center">
            <p className="mb-1 text-xs text-muted-foreground">{isPt ? "Vagas" : "Slots"}</p>
            <p className="font-bold">450/500</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>{isPt ? "Progresso" : "Progress"}</span>
            <span>{isPt ? "28/30 Dias" : "28/30 Days"}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-secondary">
            <div className="h-full w-[93%] rounded-full bg-warning" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
