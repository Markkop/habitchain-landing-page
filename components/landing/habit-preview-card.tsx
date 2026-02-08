"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Flame, RotateCw } from "lucide-react";

interface HabitPreviewCardProps {
  name: string;
  stake: string;
  checkIns: number;
  timeLeft: string;
  status: "done" | "pending" | "ready";
  className?: string;
}

export function HabitPreviewCard({
  name,
  stake,
  checkIns,
  timeLeft,
  status,
  className,
}: HabitPreviewCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-card border-2 p-4 transition-all shadow-sm",
        status === "done"
          ? "border-success/30 bg-success/5"
          : "border-border",
        className
      )}
    >
      <div className="mb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-medium truncate text-foreground">{name}</h3>
          </div>
          <Button
            variant="ghost"
            size="icon-xs"
            className="h-8 w-8 rounded-full text-muted-foreground"
          >
            <RotateCw className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-muted-foreground">
            {stake} staked
          </p>
          <div className="flex items-center gap-2">
            <StatusBadge status={status} />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden border border-border/50">
          <div
            className={cn(
              "h-full transition-all rounded-full",
              status === "done" ? "bg-gradient-to-r from-success to-success/80" : "bg-muted-foreground/30"
            )}
            style={{ width: status === "done" ? "100%" : "30%" }}
          />
        </div>
        <span className="text-xs text-muted-foreground font-medium">
          {checkIns} check-ins
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{timeLeft} left</span>
          {status === "done" && <span>Checked in</span>}
        </div>

        <Button
          className={cn(
            "w-full h-11 rounded-xl text-white shadow-md transition-all",
            status === "ready" 
              ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90" 
              : status === "done"
              ? "bg-success/20 text-success hover:bg-success/30 border-success/50"
              : "bg-success hover:bg-success/90"
          )}
          variant={status === "done" ? "outline" : "default"}
        >
          {status === "ready" ? (
            <>
              <Flame className="w-4 h-4 mr-1" />
              Continue streak
            </>
          ) : status === "done" ? (
            "Checked"
          ) : (
            "Check in"
          )}
        </Button>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: "done" | "pending" | "ready" }) {
  switch (status) {
    case "done":
      return (
        <Badge
          className="shrink-0 bg-success/20 text-success border-2 border-success/50 font-semibold text-xs h-5"
        >
          Done
        </Badge>
      );
    case "ready":
      return (
        <Badge
          className="shrink-0 bg-primary/20 text-primary border-2 border-primary/50 font-semibold text-xs h-5"
        >
          Ready
        </Badge>
      );
    case "pending":
      return (
        <Badge
          className="shrink-0 bg-warning/20 text-warning border-2 border-warning/50 font-semibold text-xs h-5"
        >
          Pending
        </Badge>
      );
  }
}
