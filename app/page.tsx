"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HabitPreviewCard } from "@/components/landing/habit-preview-card";
import { InteractiveHabitDemo } from "@/components/landing/interactive-habit-demo";
import { FeaturesCarouselSection } from "@/components/landing/features-carousel-section";
import { FaqSection } from "@/components/landing/faq-section";
import { BicepsFlexed, Flame, ShieldCheck, Trophy, Zap, ArrowRight } from "lucide-react";

export default function LandingPage() {
  const [isShiftHeld, setIsShiftHeld] = useState(false);
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Shift') setIsShiftHeld(true);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift') setIsShiftHeld(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `.formkit-form[data-uid="32b7963365"] *{box-sizing:border-box;}.formkit-form[data-uid="32b7963365"]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.formkit-form[data-uid="32b7963365"] legend{border:none;font-size:inherit;margin-bottom:10px;padding:0;position:relative;display:table;}.formkit-form[data-uid="32b7963365"] fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0;}.formkit-form[data-uid="32b7963365"] body:not(:-moz-handler-blocked) fieldset{display:table-cell;}.formkit-form[data-uid="32b7963365"] h1,.formkit-form[data-uid="32b7963365"] h2,.formkit-form[data-uid="32b7963365"] h3,.formkit-form[data-uid="32b7963365"] h4,.formkit-form[data-uid="32b7963365"] h5,.formkit-form[data-uid="32b7963365"] h6{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="32b7963365"] h2{font-size:1.5em;margin:1em 0;}.formkit-form[data-uid="32b7963365"] h3{font-size:1.17em;margin:1em 0;}.formkit-form[data-uid="32b7963365"] p{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="32b7963365"] ol:not([template-default]),.formkit-form[data-uid="32b7963365"] ul:not([template-default]),.formkit-form[data-uid="32b7963365"] blockquote:not([template-default]){text-align:left;}.formkit-form[data-uid="32b7963365"] p:not([template-default]),.formkit-form[data-uid="32b7963365"] hr:not([template-default]),.formkit-form[data-uid="32b7963365"] blockquote:not([template-default]),.formkit-form[data-uid="32b7963365"] ol:not([template-default]),.formkit-form[data-uid="32b7963365"] ul:not([template-default]){color:inherit;font-style:initial;}.formkit-form[data-uid="32b7963365"] .ordered-list,.formkit-form[data-uid="32b7963365"] .unordered-list{list-style-position:outside !important;padding-left:1em;}.formkit-form[data-uid="32b7963365"] .list-item{padding-left:0;}.formkit-form[data-uid="32b7963365"][data-format="modal"]{display:none;}.formkit-form[data-uid="32b7963365"][data-format="slide in"]{display:none;}.formkit-form[data-uid="32b7963365"][data-format="sticky bar"]{display:none;}.formkit-sticky-bar .formkit-form[data-uid="32b7963365"][data-format="sticky bar"]{display:block;}.formkit-form[data-uid="32b7963365"] .formkit-input,.formkit-form[data-uid="32b7963365"] .formkit-select,.formkit-form[data-uid="32b7963365"] .formkit-checkboxes{width:100%;}.formkit-form[data-uid="32b7963365"] .formkit-button,.formkit-form[data-uid="32b7963365"] .formkit-submit{border:0;border-radius:5px;color:#ffffff;cursor:pointer;display:inline-block;text-align:center;font-size:15px;font-weight:500;cursor:pointer;margin-bottom:15px;overflow:hidden;padding:0;position:relative;vertical-align:middle;}.formkit-form[data-uid="32b7963365"] .formkit-button:hover,.formkit-form[data-uid="32b7963365"] .formkit-submit:hover,.formkit-form[data-uid="32b7963365"] .formkit-button:focus,.formkit-form[data-uid="32b7963365"] .formkit-submit:focus{outline:none;}.formkit-form[data-uid="32b7963365"] .formkit-button:hover > span,.formkit-form[data-uid="32b7963365"] .formkit-submit:hover > span,.formkit-form[data-uid="32b7963365"] .formkit-button:focus > span,.formkit-form[data-uid="32b7963365"] .formkit-submit:focus > span{background-color:rgba(0,0,0,0.1);}.formkit-form[data-uid="32b7963365"] .formkit-button > span,.formkit-form[data-uid="32b7963365"] .formkit-submit > span{display:block;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;padding:12px 24px;}.formkit-form[data-uid="32b7963365"] .formkit-input{background:transparent !important;font-size:15px;padding:12px;border:none !important;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;line-height:1.4;margin:0;-webkit-transition:border-color ease-out 300ms;transition:border-color ease-out 300ms;}.formkit-form[data-uid="32b7963365"] .formkit-input:focus{outline:none !important;border:none !important;-webkit-transition:border-color ease 300ms;transition:border-color ease 300ms;}.formkit-form[data-uid="32b7963365"] .formkit-input::-webkit-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="32b7963365"] .formkit-input::-moz-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="32b7963365"] .formkit-input:-ms-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="32b7963365"] .formkit-input::placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="32b7963365"] .formkit-alert{background:#f9fafb;border:1px solid #e3e3e3;border-radius:5px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;list-style:none;margin:25px auto;padding:12px;text-align:center;width:100%;}.formkit-form[data-uid="32b7963365"] .formkit-alert:empty{display:none;}.formkit-form[data-uid="32b7963365"] .formkit-alert-success{background:#d3fbeb;border-color:#10bf7a;color:#0c905c;}.formkit-form[data-uid="32b7963365"] .formkit-alert-error{background:#fde8e2;border-color:#f2643b;color:#ea4110;}.formkit-form[data-uid="32b7963365"] .formkit-spinner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:0px;width:0px;margin:0 auto;position:absolute;top:0;left:0;right:0;width:0px;overflow:hidden;text-align:center;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;}.formkit-form[data-uid="32b7963365"] .formkit-spinner > div{margin:auto;width:12px;height:12px;background-color:#fff;opacity:0.3;border-radius:100%;display:inline-block;-webkit-animation:formkit-bouncedelay-formkit-form-data-uid-32b7963365- 1.4s infinite ease-in-out both;animation:formkit-bouncedelay-formkit-form-data-uid-32b7963365- 1.4s infinite ease-in-out both;}.formkit-form[data-uid="32b7963365"] .formkit-spinner > div:nth-child(1){-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.formkit-form[data-uid="32b7963365"] .formkit-spinner > div:nth-child(2){-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}.formkit-form[data-uid="32b7963365"] .formkit-submit[data-active] .formkit-spinner{opacity:1;height:100%;width:50px;}.formkit-form[data-uid="32b7963365"] .formkit-submit[data-active] .formkit-spinner ~ span{opacity:0;}.formkit-form[data-uid="32b7963365"] .formkit-powered-by[data-active="false"]{opacity:0.35;}.formkit-form[data-uid="32b7963365"] .formkit-powered-by-convertkit-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;margin:10px 0;position:relative;}.formkit-form[data-uid="32b7963365"] .formkit-powered-by-convertkit-container[data-active="false"]{opacity:0.35;}@-webkit-keyframes formkit-bouncedelay-formkit-form-data-uid-32b7963365-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes formkit-bouncedelay-formkit-form-data-uid-32b7963365-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}.formkit-form[data-uid="32b7963365"] blockquote{padding:10px 20px;margin:0 0 20px;border-left:5px solid #e1e1e1;}.formkit-form[data-uid="32b7963365"] .seva-custom-content{padding:15px;font-size:16px;color:#fff;mix-blend-mode:difference;}.formkit-form[data-uid="32b7963365"] .formkit-modal.guard{max-width:420px;width:100%;}.formkit-form[data-uid="32b7963365"]{max-width:700px;}.formkit-form[data-uid="32b7963365"] [data-style="clean"]{width:100%;}.formkit-form[data-uid="32b7963365"] .formkit-fields{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 auto;}.formkit-form[data-uid="32b7963365"] .formkit-field,.formkit-form[data-uid="32b7963365"] .formkit-submit{margin:0 0 15px 0;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;}.formkit-form[data-uid="32b7963365"] .formkit-powered-by-convertkit-container{margin:0;}.formkit-form[data-uid="32b7963365"] .formkit-submit{position:static;}.formkit-form[data-uid="32b7963365"][min-width~="700"] [data-style="clean"],.formkit-form[data-uid="32b7963365"][min-width~="800"] [data-style="clean"]{padding:10px;padding-top:56px;}.formkit-form[data-uid="32b7963365"][min-width~="700"] .formkit-fields[data-stacked="false"],.formkit-form[data-uid="32b7963365"][min-width~="800"] .formkit-fields[data-stacked="false"]{margin-left:-5px;margin-right:-5px;}.formkit-form[data-uid="32b7963365"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="32b7963365"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="32b7963365"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-submit,.formkit-form[data-uid="32b7963365"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-submit{margin:0 5px 15px 5px;}.formkit-form[data-uid="32b7963365"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="32b7963365"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-field{-webkit-flex:100 1 auto;-ms-flex:100 1 auto;flex:100 1 auto;}.formkit-form[data-uid="32b7963365"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-submit,.formkit-form[data-uid="32b7963365"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-submit{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}`}} />
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
          <Link href="#faq" className="hover:text-foreground transition-colors">FAQ</Link>
        </nav>
        {isShiftHeld ? (
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="https://app.habitchain.xyz">Launch App</a>
          </Button>
        ) : (
          <Button size="sm" className="rounded-full px-5" onClick={() => setShowWaitlistForm(true)}>
            Join Waitlist
          </Button>
        )}
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
            self-attest your check-ins recorded on-chain, and earn rewards for your consistency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {isShiftHeld ? (
              <Button asChild size="lg" className="rounded-full text-lg px-8 h-14 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl shadow-primary/20">
                <a href="https://app.habitchain.xyz" className="flex items-center gap-2">
                  Start Building Today <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            ) : (
              <Button size="lg" className="rounded-full text-lg px-8 h-14 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl shadow-primary/20" onClick={() => setShowWaitlistForm(true)}>
                Join Waitlist
              </Button>
            )}
            <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 h-14 border-2">
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="scroll-mt-24 px-6 py-24 bg-secondary/30 border-y border-border/40">
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
                    Create a habit and stake a small amount of money. This &quot;skin in the game&quot; creates immediate accountability.
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

        <FeaturesCarouselSection onJoinWaitlist={() => setShowWaitlistForm(true)} />

        {/* Showcase / Preview */}
        <section id="showcase" className="px-6 py-24 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                A simple dashboard for <br />
                <span className="text-primary">consistent results.</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Self-attested check-ins recorded on-chain",
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
                <InteractiveHabitDemo
                  habitName="Morning Meditation"
                  stake="$5.00"
                  initialCheckIns={12}
                  initialCountdownSeconds={14 * 60 * 60 + 23 * 60}
                  countdownContextLabel="check-in window"
                  showJoinWaitlistAction={false}
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
            {isShiftHeld ? (
              <Button asChild size="lg" className="rounded-full text-lg px-10 h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                <a href="https://app.habitchain.xyz">Launch the App Now</a>
              </Button>
            ) : (
              <Button size="lg" className="rounded-full text-lg px-10 h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" onClick={() => setShowWaitlistForm(true)}>
                Join Waitlist
              </Button>
            )}
          </div>
        </section>

        <FaqSection onJoinWaitlist={() => setShowWaitlistForm(true)} />
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

      {/* Waitlist Form Modal */}
      {showWaitlistForm && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowWaitlistForm(false)}
        >
          <div 
            className="relative bg-card border border-border rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowWaitlistForm(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Join the Waitlist</h2>
            <p className="text-muted-foreground mb-6">Be the first to know when we launch!</p>
            <form 
              action="https://app.kit.com/forms/9066963/subscriptions" 
              className="seva-form formkit-form" 
              method="post" 
              data-sv-form="9066963" 
              data-uid="32b7963365" 
              data-format="inline"
              data-version="5"
            >
              <div data-style="clean">
                <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields">
                  <div className="formkit-field">
                    <input 
                      className="formkit-input w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" 
                      name="email_address" 
                      aria-label="Email Address" 
                      placeholder="Email Address" 
                      required 
                      type="email"
                      style={{ color: 'inherit' }}
                    />
                  </div>
                  <button 
                    data-element="submit" 
                    className="formkit-submit w-full mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    type="submit"
                  >
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
