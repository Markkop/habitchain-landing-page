import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HabitPreviewCard } from "@/components/landing/habit-preview-card";
import { BicepsFlexed, Flame, ShieldCheck, Trophy, Zap, ArrowRight, Coins, Users, UserPlus, Megaphone } from "lucide-react";

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
                    Create a habit and stake a small amount of money. This "skin in the game" creates immediate accountability.
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

        {/* Features Section */}
        <section id="features" className="px-6 py-24 bg-card/30 space-y-32">
          
          {/* Feature 1: Habit Stake */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                <Coins className="w-3 h-3" />
                <span>Core Mechanic</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Habit Stake</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Lock funds on your goals. Succeed to keep it plus yield, fail and it goes to the treasury. Real skin in the game means real results.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-success" />
                  <span>Your money is safe as long as you check in</span>
                </li>
                <li className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  <span>Earn yield while you build habits</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative flex justify-center">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20" />
              <HabitPreviewCard 
                name="Daily Coding" 
                stake="$5.00" 
                checkIns={7} 
                timeLeft="12h 30m" 
                status="pending"
                className="relative z-10 w-full max-w-sm shadow-2xl scale-110"
              />
            </div>
          </div>

          {/* Feature 2: Groups */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
                <Users className="w-3 h-3" />
                <span>Coming Soon</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Squad Goals</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join invite-only squads to build habits together. The stakes are higher: if a member fails, their slashed stake is split among the survivors.
              </p>
              <Button variant="outline" className="gap-2">
                Join Waitlist <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="order-1 relative flex justify-center">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full opacity-20" />
              <Card className="w-full max-w-sm relative z-10 overflow-hidden border-2 border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">Active Squad</Badge>
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
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&q=80&crop=faces&fit=crop"
                      ].map((src, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img 
                          key={i} 
                          src={src} 
                          alt={`Member ${i+1}`}
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover bg-muted" 
                        />
                      ))}
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg flex justify-between items-center">
                      <span className="text-sm font-medium">Current Pot</span>
                      <span className="text-lg font-bold text-success">$45.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Feature 3: Invite System */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold mb-4">
                <UserPlus className="w-3 h-3" />
                <span>Pay it Forward</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sponsor a Friend</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Create invite codes that fund a friend&apos;s first habit. You lock the stake for them - they only get to keep it if they complete the habit.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-success" />
                  <span>Onboard friends without them needing funds</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-warning" />
                  <span>If they fail, the stake is slashed (motivating!)</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative flex justify-center">
              <div className="absolute inset-0 bg-success/20 blur-3xl rounded-full opacity-20" />
              <Card className="w-full max-w-sm relative z-10 border-2 border-dashed border-success/30 bg-success/5">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mb-4">
                    <UserPlus className="w-6 h-6 text-success" />
                  </div>
                  <CardTitle className="text-success">You&apos;ve been invited!</CardTitle>
                  <CardDescription>Marcelo has funded your first habit</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="p-4 bg-background/80 backdrop-blur rounded-xl border border-success/20">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Invite Code</p>
                    <p className="text-2xl font-mono font-bold tracking-widest">BUILD-2026</p>
                  </div>
                  <div className="flex justify-between text-sm px-2">
                    <span className="text-muted-foreground">Sponsored Stake:</span>
                    <span className="font-bold">$5.00</span>
                  </div>
                  <Button className="w-full bg-success hover:bg-success/90 text-white">
                    Accept & Start Building
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Feature 4: Habit Sponsor */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-semibold mb-4">
                <Megaphone className="w-3 h-3" />
                <span>Earn More</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Brand Rewards</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Top brands sponsor habits to encourage healthy lifestyles. Earn bonus crypto rewards on top of your stake yield when you complete sponsored challenges.
              </p>
            </div>
            <div className="order-1 relative flex justify-center">
              <div className="absolute inset-0 bg-warning/20 blur-3xl rounded-full opacity-20" />
              <Card className="w-full max-w-sm relative z-10 border-2 border-warning/20">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Base Buildathon</CardTitle>
                      <CardDescription>Sponsored Challenge</CardDescription>
                    </div>
                    <div className="bg-blue-600 text-white p-2 rounded-lg">
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4 text-sm">
                    <div className="flex-1 p-3 bg-secondary/50 rounded-lg text-center">
                      <p className="text-muted-foreground text-xs mb-1">Bonus</p>
                      <p className="font-bold text-warning">+10% Yield</p>
                    </div>
                    <div className="flex-1 p-3 bg-secondary/50 rounded-lg text-center">
                      <p className="text-muted-foreground text-xs mb-1">Slots</p>
                      <p className="font-bold">450/500</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span>28/30 Days</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-[93%] bg-warning rounded-full" />
                    </div>
                  </div>
                </CardContent>
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
                  stake="$5.00" 
                  checkIns={12} 
                  timeLeft="14h 22m" 
                  status="pending"
                  className="scale-105 shadow-2xl z-10"
                />
                <HabitPreviewCard 
                  name="Daily Workout" 
                  stake="$15.00" 
                  checkIns={24} 
                  timeLeft="0s" 
                  status="done"
                  className="opacity-80 scale-95 translate-x-4"
                />
                <HabitPreviewCard 
                  name="Read 20 Pages" 
                  stake="$2.50" 
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
