import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HabitPreviewCard } from "@/components/landing/habit-preview-card";
import { BicepsFlexed, Flame, ShieldCheck, Trophy, Zap, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="px-6 h-16 flex items-center justify-between border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Flame className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">HabitChain</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</Link>
          <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
          <Link href="#showcase" className="hover:text-foreground transition-colors">Preview</Link>
        </nav>
        <Button asChild size="sm" className="rounded-full px-5">
          <a href="https://app.habitchain.xyz">Launch App</a>
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6 animate-fade-in">
            <Zap className="w-3 h-3" />
            <span>The Web3 Habit Builder</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Stake on Yourself.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Build lasting habits with real financial stakes. Commit to your goals, 
            verify your progress on-chain, and earn rewards for your consistency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="rounded-full text-lg px-8 h-14 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl shadow-primary/20">
              <a href="https://app.habitchain.xyz" className="flex items-center gap-2">
                Start Building Today <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 h-14 border-2">
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="px-6 py-24 bg-secondary/30 border-y border-border/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Discipline in Three Steps</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We combine the psychology of loss aversion with blockchain transparency to make sure you stick to your goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 border-2 border-border/50 hover:border-primary/30 transition-all group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>1. Commit & Stake</CardTitle>
                  <CardDescription className="text-base pt-2">
                    Create a habit and stake a small amount of ETH. This "skin in the game" creates immediate accountability.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 border-2 border-border/50 hover:border-primary/30 transition-all group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Flame className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle>2. Daily Check-in</CardTitle>
                  <CardDescription className="text-base pt-2">
                    Log your daily progress. Each successful check-in keeps your streak alive and your stake safe.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 border-2 border-border/50 hover:border-primary/30 transition-all group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Trophy className="w-6 h-6 text-success" />
                  </div>
                  <CardTitle>3. Earn & Grow</CardTitle>
                  <CardDescription className="text-base pt-2">
                    Complete your cycle to reclaim your stake and earn bonus rewards from sponsored pools.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Showcase / Preview */}
        <section id="showcase" className="px-6 py-24 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                A simple dashboard for <br />
                <span className="text-primary">consistent results.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Designed for speed and clarity. Track your streaks, manage your stakes, 
                and see your rewards grow in real-time. Built as a Farcaster mini-app 
                for seamless social integration.
              </p>
              <ul className="space-y-4">
                {[
                  "On-chain verification of every check-in",
                  "Loss aversion mechanics to boost consistency",
                  "Sponsored pools with bonus yield",
                  "Farcaster native experience"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <ShieldCheck className="w-3 h-3 text-success" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl rounded-3xl" />
              <div className="relative space-y-4">
                <HabitPreviewCard 
                  name="Morning Meditation" 
                  stake="0.01 ETH" 
                  checkIns={12} 
                  timeLeft="14h 22m" 
                  status="pending"
                  className="scale-105 shadow-2xl z-10"
                />
                <HabitPreviewCard 
                  name="Daily Workout" 
                  stake="0.05 ETH" 
                  checkIns={24} 
                  timeLeft="0s" 
                  status="done"
                  className="opacity-80 scale-95 translate-x-4"
                />
                <HabitPreviewCard 
                  name="Read 20 Pages" 
                  stake="0.005 ETH" 
                  checkIns={5} 
                  timeLeft="Ready" 
                  status="ready"
                  className="opacity-60 scale-90 translate-x-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24 bg-gradient-to-b from-transparent to-primary/5">
          <div className="max-w-4xl mx-auto text-center rounded-3xl p-12 border-2 border-primary/20 bg-card/50 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <BicepsFlexed className="w-32 h-32" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Ready to change your life?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Join hundreds of builders who are using HabitChain to master their discipline and earn rewards.
            </p>
            <Button asChild size="lg" className="rounded-full text-lg px-10 h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
              <a href="https://app.habitchain.xyz">Launch the App Now</a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border/40 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flame className="w-4 h-4 text-primary" />
          <span className="font-bold text-foreground">HabitChain</span>
        </div>
        <p>&copy; {new Date().getFullYear()} HabitChain. Built on Base.</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="hover:text-foreground">Twitter</a>
          <a href="#" className="hover:text-foreground">Farcaster</a>
          <a href="#" className="hover:text-foreground">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
