"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Flame, RotateCcw, Skull } from "lucide-react";
import confetti from "canvas-confetti";

type DemoState = "countdown" | "checked" | "slashed";

const DEFAULT_COUNTDOWN_SECONDS = 10;
const DEFAULT_CHECK_INS = 7;

interface InteractiveHabitDemoProps {
  className?: string;
  onJoinWaitlist?: () => void;
  habitName?: string;
  stake?: string;
  initialCheckIns?: number;
  initialCountdownSeconds?: number;
  countdownContextLabel?: string;
  showJoinWaitlistAction?: boolean;
}

export function InteractiveHabitDemo({
  className,
  onJoinWaitlist,
  habitName = "Daily Coding",
  stake = "$5.00",
  initialCheckIns = DEFAULT_CHECK_INS,
  initialCountdownSeconds = DEFAULT_COUNTDOWN_SECONDS,
  countdownContextLabel = "demo window",
  showJoinWaitlistAction = true,
}: InteractiveHabitDemoProps) {
  const [state, setState] = useState<DemoState>("countdown");
  const [secondsLeft, setSecondsLeft] = useState(initialCountdownSeconds);
  const [checkInCount, setCheckInCount] = useState(initialCheckIns);
  const cardRef = useRef<HTMLDivElement>(null);

  // Countdown timer
  useEffect(() => {
    if (state !== "countdown") return;
    if (secondsLeft <= 0) {
      return;
    }
    const timer = setTimeout(() => {
      setSecondsLeft((previous) => {
        if (previous <= 1) {
          setState("slashed");
          return 0;
        }
        return previous - 1;
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [state, secondsLeft]);

  const fireConfetti = useCallback(() => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // First burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x, y },
      colors: ["#22c55e", "#10b981", "#34d399", "#6ee7b7", "#a7f3d0"],
      startVelocity: 30,
      gravity: 0.8,
      ticks: 100,
      zIndex: 9999,
    });

    // Second burst after small delay
    setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 100,
        origin: { x, y: y - 0.05 },
        colors: ["#f59e0b", "#eab308", "#fbbf24", "#fcd34d"],
        startVelocity: 25,
        gravity: 0.9,
        ticks: 80,
        zIndex: 9999,
      });
    }, 150);
  }, []);

  const handleCheckIn = useCallback(() => {
    if (state !== "countdown") return;
    setState("checked");
    setCheckInCount((c) => c + 1);
    // Fire confetti after a tiny delay for the UI to update
    setTimeout(fireConfetti, 50);
  }, [state, fireConfetti]);

  const handleReset = useCallback(() => {
    setState("countdown");
    setSecondsLeft(initialCountdownSeconds);
    setCheckInCount(initialCheckIns);
  }, [initialCountdownSeconds, initialCheckIns]);

  const handleKeepStreak = useCallback(() => {
    setState("countdown");
    setSecondsLeft(initialCountdownSeconds);
  }, [initialCountdownSeconds]);

  const handleJoinWaitlist = useCallback(() => {
    onJoinWaitlist?.();
  }, [onJoinWaitlist]);

  const formatTime = (totalSeconds: number) => {
    const safeTotalSeconds = Math.max(0, totalSeconds);
    const hours = Math.floor(safeTotalSeconds / 3600);
    const mins = Math.floor((safeTotalSeconds % 3600) / 60);
    const secs = safeTotalSeconds % 60;

    if (hours > 0) {
      return `${hours}h ${mins.toString().padStart(2, "0")}min`;
    }

    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const isUrgent = state === "countdown" && secondsLeft <= 3 && secondsLeft > 0;

  return (
    <div
      ref={cardRef}
      className={cn(
        "rounded-xl bg-card border-2 p-4 transition-all duration-500 shadow-sm relative overflow-hidden",
        state === "checked"
          ? "border-success/30 bg-success/5"
          : state === "slashed"
            ? "border-destructive/50 bg-destructive/5"
            : "border-border",
        isUrgent && "border-warning/60 shadow-warning/20 shadow-lg",
        className
      )}
    >
      {/* Slashed overlay diagonal lines */}
      {state === "slashed" && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 12px)",
            }}
          />
        </div>
      )}

      {/* Header */}
      <div className="mb-3 relative">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3
              className={cn(
                "font-medium truncate transition-colors duration-300",
                state === "slashed"
                  ? "text-destructive/70 line-through"
                  : "text-foreground"
              )}
            >
              {habitName}
            </h3>
          </div>
          {/* Reset button */}
          {state !== "countdown" && (
            <Button
              variant="ghost"
              size="icon-xs"
              className="h-7 w-7 rounded-full text-muted-foreground hover:text-foreground"
              onClick={handleReset}
              title="Reset demo"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
        <div className="flex items-center justify-between mt-1">
          <p
            className={cn(
              "text-sm transition-colors duration-300",
              state === "slashed" ? "text-destructive/60" : "text-muted-foreground"
            )}
          >
            {state === "slashed" ? (
              <>
                <span className="line-through">{stake}</span>{" "}
                <span className="text-destructive font-medium">lost</span>
              </>
            ) : (
              `${stake} staked`
            )}
          </p>
          <DemoStatusBadge state={state} isUrgent={isUrgent} />
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden border border-border/50">
          <div
            className={cn(
              "h-full transition-all duration-500 rounded-full",
              state === "checked"
                ? "bg-gradient-to-r from-success to-success/80 shadow-sm"
                : state === "slashed"
                  ? "bg-destructive/40"
                  : "bg-muted-foreground/30"
            )}
            style={{
              width:
                state === "checked"
                  ? "100%"
                  : state === "slashed"
                    ? "0%"
                    : "30%",
            }}
          />
        </div>
        <span
          className={cn(
            "text-xs font-medium transition-colors",
            state === "slashed" ? "text-destructive/60" : "text-muted-foreground"
          )}
        >
          {checkInCount} check-ins
        </span>
      </div>

      {/* Time/Status row */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          {state === "countdown" ? (
            <>
              <span
                className={cn(
                  "font-mono tabular-nums transition-colors",
                  isUrgent && "text-warning font-semibold animate-pulse"
                )}
              >
                {formatTime(secondsLeft)} left
              </span>
              <span className="text-muted-foreground/60">{countdownContextLabel}</span>
            </>
          ) : state === "checked" ? (
            <>
              <span className="text-success font-medium">Streak preserved</span>
              <span className="text-success">Checked in</span>
            </>
          ) : (
            <>
              <span className="text-destructive font-medium">Missed window</span>
              <span className="text-destructive/70">Stake slashed</span>
            </>
          )}
        </div>

        {/* Action button */}
        {state === "countdown" && (
          <Button
            onClick={handleCheckIn}
            className="w-full h-11 rounded-xl bg-gradient-to-r from-success to-success/90 hover:from-success/90 hover:to-success text-white shadow-md hover:shadow-lg transition-all"
          >
            Check in
          </Button>
        )}

        {state === "checked" && (
          <div className="flex gap-2">
            <Button
              onClick={handleKeepStreak}
              className="flex-1 h-11 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-md hover:shadow-lg transition-all"
            >
              <Flame className="w-4 h-4 mr-1" />
              Keep streak
            </Button>
            {showJoinWaitlistAction && onJoinWaitlist ? (
              <Button
                onClick={handleJoinWaitlist}
                variant="outline"
                className="flex-1 h-11 rounded-xl border-2 border-border/60 bg-card text-foreground hover:bg-muted/50"
              >
                Join Waitlist
              </Button>
            ) : null}
          </div>
        )}

        {state === "slashed" && (
          <div className="flex gap-2">
            <Button
              disabled
              className="flex-1 h-11 rounded-xl border-2 border-destructive/40 bg-destructive/5 text-destructive cursor-default"
              variant="outline"
            >
              <Skull className="w-4 h-4 mr-1" />
              Slashed
            </Button>
            <Button
              onClick={handleReset}
              className="h-11 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-md px-4"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Retry
            </Button>
          </div>
        )}
      </div>

    </div>
  );
}

function DemoStatusBadge({
  state,
  isUrgent,
}: {
  state: DemoState;
  isUrgent: boolean;
}) {
  if (state === "checked") {
    return (
      <Badge className="shrink-0 bg-success/20 text-success border-2 border-success/50 font-semibold text-xs h-5">
        Done
      </Badge>
    );
  }
  if (state === "slashed") {
    return (
      <Badge
        variant="destructive"
        className="shrink-0 border-2 border-destructive/50 bg-destructive/20 text-xs font-semibold h-5"
      >
        Slashed
      </Badge>
    );
  }
  return (
    <Badge
      className={cn(
        "shrink-0 border-2 font-semibold text-xs h-5 transition-colors",
        isUrgent
          ? "bg-warning/30 text-warning border-warning/60 animate-pulse"
          : "bg-warning/20 text-warning border-warning/50"
      )}
    >
      Pending
    </Badge>
  );
}
