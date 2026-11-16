"use client";
import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { offerById, offers, usd } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const choices = [
  { id: "blog", label: "A blog, portfolio or small business site", plan: "shared", why: "One website with room to spare, and a control panel that is easy to learn." },
  { id: "wp", label: "A WordPress site or a small online shop", plan: "wordpress", why: "WordPress is installed for you, so you can start adding pages and products on day one." },
  { id: "app", label: "A custom application or a developer project", plan: "vps", why: "Your own virtual server with root access, so you can install what you need." },
  { id: "busy", label: "A busy site or a heavier application", plan: "cloud", why: "Twice the memory, processors and storage of the VPS plan, with root access." },
  { id: "many", label: "Many sites, reselling or a dedicated server", plan: "custom", why: "These are quoted one by one, so you know the price before you pay anything." },
] as const;

/** Interactive helper: picks a plan from what the visitor wants to host. No data leaves the browser. */
export function PlanFinder() {
  const [pick, setPick] = React.useState<(typeof choices)[number]["id"]>("wp");
  const c = choices.find((x) => x.id === pick)!;
  const offer = c.plan === "custom" ? null : offerById(c.plan);
  return (
    <Section id="plan-finder" className="defer bg-muted/50">
      <SectionHeading eyebrow="Plan finder" title="Not sure which plan fits? Tell us what you are building" sub="Pick the closest match. Nothing is sent anywhere." />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_1fr]">
        <fieldset className="min-w-0">
          <legend className="sr-only">What do you want to host?</legend>
          <div className="grid gap-3">
            {choices.map((x) => (
              <label key={x.id} className={cn("surface flex min-h-[60px] cursor-pointer items-center gap-4 p-4 transition-colors", pick === x.id && "border-primary/60 bg-accent/60 ring-2 ring-primary/25")}>
                <input type="radio" name="build" value={x.id} checked={pick === x.id} onChange={() => setPick(x.id)} className="h-5 w-5 shrink-0 accent-[hsl(17,90%,40%)]" />
                <span className="text-base font-medium">{x.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="surface flex flex-col p-6 sm:p-8" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">We would suggest</p>
          <h3 className="mt-2 font-display text-3xl font-semibold">{offer ? offer.name : "A custom quote"}</h3>
          <p className="mt-1 font-display text-xl text-muted-foreground">{offer ? <>{usd(offer.price)} <span className="text-sm font-normal">once, for {siteConfig.termMonths} months</span></> : "Price agreed before you pay"}</p>
          <p className="mt-4 text-muted-foreground">{c.why}</p>
          {offer && (
            <ul className="mt-5 space-y-2 text-sm">
              {offer.highlights.slice(1, 4).map((h) => <li key={h} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /><span>{h}</span></li>)}
            </ul>
          )}
          <div className="mt-auto pt-7">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={offer ? "/pricing/" : "/quote/"}>{offer ? `See ${offer.name} on the pricing page` : "Request a quote"} <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">A suggestion based on your answer, not a guarantee that it fits every case. Plans: {offers.map((o) => o.name).join(", ")}.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
