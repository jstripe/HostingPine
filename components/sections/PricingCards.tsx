"use client";
import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, Lock } from "lucide-react";
import { customOffer, offers, usd, type Offer } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function PayCard({ o }: { o: Offer }) {
  const [ok, setOk] = React.useState(false);
  const [warn, setWarn] = React.useState(false);
  const link = siteConfig.payLinks[o.id] || "";
  const boxId = `terms-${o.id}`;
  const btn = "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground btn-glow transition-all hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  return (
    <div className={cn("surface surface-hover flex flex-col p-6", o.popular && "border-primary/50 ring-2 ring-primary/25")}>
      {o.popular && <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Most popular</span>}
      <h3 className="font-display text-xl font-semibold">{o.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{o.blurb}</p>
      <p className="mt-5 flex items-baseline gap-2"><span className="font-display text-4xl font-semibold tracking-tight">{usd(o.price)}</span><span className="text-sm text-muted-foreground">once, for {siteConfig.termMonths} months</span></p>
      <ul className="mt-5 space-y-2.5 text-sm">
        {o.highlights.map((h) => <li key={h} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /><span>{h}</span></li>)}
      </ul>
      <div className="mt-auto pt-6">
        <label htmlFor={boxId} className="flex cursor-pointer items-start gap-3 rounded-xl border bg-muted/40 p-3 text-sm leading-5">
          <input id={boxId} type="checkbox" required checked={ok} onChange={(e) => { setOk(e.target.checked); if (e.target.checked) setWarn(false); }} className="mt-0.5 h-5 w-5 shrink-0 accent-[hsl(17,90%,40%)]" aria-describedby={warn ? `${boxId}-warn` : undefined} />
          <span>I accept the <Link href="/terms/" className="font-medium text-primary underline underline-offset-4">Terms</Link> and the <Link href="/refund/" className="font-medium text-primary underline underline-offset-4">Refund Policy</Link></span>
        </label>
        {warn && <p id={`${boxId}-warn`} role="alert" className="mt-2 text-sm text-destructive">Please tick the box to continue.</p>}
        <div className="mt-3">
          {!link ? (
            <Button disabled size="lg" className="w-full">Checkout opens soon</Button>
          ) : ok ? (
            <a href={link} className={btn} aria-label={`Pay now: ${o.name}, ${usd(o.price)}`}><Lock className="h-4 w-4" aria-hidden />Pay now</a>
          ) : (
            <button type="button" className={cn(btn, "opacity-60 hover:translate-y-0")} aria-disabled="true" onClick={() => setWarn(true)}><Lock className="h-4 w-4" aria-hidden />Pay now</button>
          )}
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">Secure card payment via Stripe. One-off payment.</p>
      </div>
    </div>
  );
}

function CustomCard() {
  return (
    <div className="surface flex flex-col gap-6 bg-gradient-to-b from-accent/70 to-card p-6 sm:col-span-2 md:flex-row md:items-center md:justify-between xl:col-span-4">
      <div className="max-w-2xl">
        <h3 className="font-display text-xl font-semibold">{customOffer.name} <span className="ml-2 text-base font-normal text-muted-foreground">On quote</span></h3>
        <p className="mt-1 text-sm text-muted-foreground">{customOffer.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {customOffer.highlights.map((h) => <li key={h} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /><span>{h}</span></li>)}
        </ul>
      </div>
      <div className="md:w-64 md:shrink-0">
        <Button asChild size="lg" variant="outline" className="w-full bg-background"><Link href="/quote/">Request a quote <ArrowRight className="h-4 w-4" aria-hidden /></Link></Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">No payment on this site for custom work. We reply with a price first.</p>
      </div>
    </div>
  );
}

export function PricingCards() {
  return (
    <div>
      <div className="grid gap-6 pt-3 sm:grid-cols-2 xl:grid-cols-4">
        {offers.map((o) => <PayCard key={o.id} o={o} />)}
        <CustomCard />
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
        Pay once. No automatic renewal. Prices in USD. Taxes may apply. Set-up time counts from when we receive your complete details. All plans are one-time payments processed securely by Stripe. See our <Link href="/terms/" className="text-primary underline underline-offset-4">Terms</Link> and <Link href="/refund/" className="text-primary underline underline-offset-4">Refund Policy</Link>.
      </p>
    </div>
  );
}
