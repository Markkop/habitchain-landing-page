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

const FEATURE_ITEMS: FeatureItem[] = [
  {
    id: "stake",
    name: "Habit Stake",
    title: "Habit Stake",
    description:
      "Lock funds on your goals. Succeed to keep it plus yield, fail and it goes to the treasury. Real skin in the game means real results.",
    badgeLabel: "Core Mechanic",
    accent: "primary",
    icon: Coins,
    bullets: [
      {
        icon: ShieldCheck,
        text: "Your money is safe as long as you check in",
        colorClass: "text-success",
      },
      {
        icon: Trophy,
        text: "Earn yield while you build habits",
        colorClass: "text-accent",
      },
    ],
  },
  {
    id: "squad-goals",
    name: "Squad Goals",
    title: "Squad Goals",
    description:
      "Join invite-only squads to build habits together. The stakes are higher: if a member fails, their slashed stake is split among the survivors.",
    badgeLabel: "Coming Soon",
    accent: "accent",
    icon: Users,
  },
  {
    id: "sponsor-friend",
    name: "Sponsor a Friend",
    title: "Sponsor a Friend",
    description:
      "Create invite codes that fund a friend's first habit. You lock the stake for them, and they keep it only if they complete the full cycle.",
    badgeLabel: "Pay it Forward",
    accent: "success",
    icon: UserPlus,
    bullets: [
      {
        icon: ShieldCheck,
        text: "Onboard friends without them needing funds",
        colorClass: "text-success",
      },
      {
        icon: Zap,
        text: "If they fail, the sponsored stake is slashed",
        colorClass: "text-warning",
      },
    ],
  },
  {
    id: "streak-multiplier",
    name: "Streak Multiplier",
    title: "Streak Multiplier",
    description:
      "Turn consistency into compounding upside. Every successful streak level multiplies yielding rewards, giving disciplined builders a bigger payout over time.",
    badgeLabel: "Consistency Boost",
    accent: "accent",
    icon: Flame,
    bullets: [
      {
        icon: Zap,
        text: "Each completed cycle pushes your multiplier higher",
        colorClass: "text-accent",
      },
      {
        icon: Trophy,
        text: "Climb from 1x to 10x to maximize your yield upside",
        colorClass: "text-success",
      },
    ],
  },
  {
    id: "brand-rewards",
    name: "Brand Rewards",
    title: "Brand Rewards",
    description:
      "Top brands sponsor habits to encourage healthy lifestyles. Earn bonus crypto rewards on top of your stake yield when you complete sponsored challenges.",
    badgeLabel: "Earn More",
    accent: "warning",
    icon: Megaphone,
  },
];

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

export function FeaturesCarouselSection({ onJoinWaitlist }: { onJoinWaitlist?: () => void }) {
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
    const lastIndex = FEATURE_ITEMS.length - 1;
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

  const lastIndex = FEATURE_ITEMS.length - 1;
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That Keep You Consistent</h2>
        </div>

        <div className="mt-10">
          <div
            role="tablist"
            aria-label="HabitChain feature tabs"
            className="features-tabs flex-1 overflow-x-auto pb-2"
          >
            <div className="flex gap-3">
              {FEATURE_ITEMS.map((feature, index) => {
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
            {FEATURE_ITEMS.map((feature, index) => {
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
                      <FeatureDemo featureId={feature.id} onJoinWaitlist={onJoinWaitlist} />
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
            aria-label="Go to previous feature"
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
            aria-label="Go to next feature"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeatureDemo({ featureId, onJoinWaitlist }: { featureId: FeatureId; onJoinWaitlist?: () => void }) {
  if (featureId === "stake") {
    return (
      <InteractiveHabitDemo className="relative z-10 w-full max-w-sm shadow-2xl" onJoinWaitlist={onJoinWaitlist} />
    );
  }

  if (featureId === "squad-goals") {
    return (
      <Card className="relative z-10 w-full max-w-sm overflow-hidden border-2 border-border/50">
        <CardHeader className="pb-2">
          <div className="mb-2 flex items-center justify-between">
            <Badge variant="outline" className="border-accent/20 bg-accent/10 text-accent">
              Active Squad
            </Badge>
            <span className="text-xs text-muted-foreground">Members 4/5</span>
          </div>
          <CardTitle>Morning Runners</CardTitle>
          <CardDescription>Survivors split the pot</CardDescription>
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
                  alt={`Member ${index + 1}`}
                  className="inline-block h-10 w-10 rounded-full bg-muted object-cover ring-2 ring-background"
                />
              ))}
            </div>
            <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-3">
              <span className="text-sm font-medium">Current Pot</span>
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
          <CardTitle className="text-success">You&apos;ve been invited!</CardTitle>
          <CardDescription>Marcelo has funded your first habit</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="rounded-xl border border-success/20 bg-background/80 p-4 backdrop-blur">
            <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">Invite Code</p>
            <p className="font-mono text-2xl font-bold tracking-widest">BUILD-2026</p>
          </div>
          <div className="flex justify-between px-2 text-sm">
            <span className="text-muted-foreground">Sponsored Stake:</span>
            <span className="font-bold">$5.00</span>
          </div>
          <Button className="w-full bg-success text-white hover:bg-success/90">Accept &amp; Start Building</Button>
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
              <CardTitle>Current Multiplier</CardTitle>
              <CardDescription>Yielding rewards boost</CardDescription>
            </div>
            <div className="rounded-lg bg-accent/20 p-2 text-accent">
              <Flame className="h-5 w-5" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 text-center">
            <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">Live Streak</p>
            <p className="text-3xl font-bold text-accent">6x</p>
            <p className="text-xs text-muted-foreground">Multiplier applied to yielding rewards</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Progress to Max</span>
              <span>6/10</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[60%] rounded-full bg-accent" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Keep checking in to climb toward the full 10x multiplier.
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
            <CardTitle>Base Buildathon</CardTitle>
            <CardDescription>Sponsored Challenge</CardDescription>
          </div>
          <div className="rounded-lg bg-blue-600 p-2 text-white">
            <Zap className="h-5 w-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4 text-sm">
          <div className="flex-1 rounded-lg bg-secondary/50 p-3 text-center">
            <p className="mb-1 text-xs text-muted-foreground">Bonus</p>
            <p className="font-bold text-warning">+10% Yield</p>
          </div>
          <div className="flex-1 rounded-lg bg-secondary/50 p-3 text-center">
            <p className="mb-1 text-xs text-muted-foreground">Slots</p>
            <p className="font-bold">450/500</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Progress</span>
            <span>28/30 Days</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-secondary">
            <div className="h-full w-[93%] rounded-full bg-warning" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
