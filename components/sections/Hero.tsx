import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/media";
import { offers, usd } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

/**
 * Right side is a stacked composition: the photo keeps its own space (subject fully visible),
 * the example card overlaps only its empty bottom edge, and two small pills sit on plain areas.
 */
export function Hero() {
  const from = Math.min(...offers.map((o) => o.price));
  return (
    <section className="relative overflow-hidden border-b hero-gradient">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[1fr_1.08fr] lg:gap-14 lg:pb-20 lg:pt-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm">Shared, WordPress, VPS and cloud hosting</p>
          <h1 className="mt-5 text-balance text-[2.5rem] font-semibold leading-[1.05] sm:text-6xl">Web hosting that is <span className="text-gradient">set up for you.</span></h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">Pick a plan, pay once for {siteConfig.termMonths} months, and send us your domain. We install the hosting and email you the access details. No servers to configure, nothing that renews on its own.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg"><Link href="/pricing/">See pricing <ArrowRight className="h-4 w-4" aria-hidden /></Link></Button>
            <Button asChild size="lg" variant="outline" className="bg-background"><Link href="/hosting/">Compare the plans</Link></Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">From {usd(from)} for {siteConfig.termMonths} months. One-time payment. No automatic renewal.</p>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute -inset-6 -z-0 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-transparent to-primary/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border bg-background p-1.5 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.45)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
              <Media slug="hero-servers" alt="A server room with rows of racks lit in blue" priority sizes="(min-width: 1024px) 620px, 100vw" className="h-full w-full object-cover object-[50%_50%]" />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/25 to-transparent" />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/95 px-3 py-1.5 text-xs font-semibold shadow-md sm:left-5 sm:top-5"><CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden />We install it for you</span>
              <span className="absolute right-3 top-3 hidden items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-md sm:inline-flex sm:right-5 sm:top-5"><Mail className="h-3.5 w-3.5" aria-hidden />Access details by email</span>
            </div>
          </div>
          <div className="relative z-10 mx-auto -mt-10 w-[94%] sm:-mt-12 sm:w-[88%] lg:ml-auto lg:mr-4 lg:w-[84%]">
            <div className="surface p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Illustrative example: your order</p>
              <div className="mt-2 flex items-baseline justify-between gap-3">
                <p className="font-display text-lg font-semibold">WordPress Hosting</p>
                <p className="font-display text-lg font-semibold">{usd(offers.find((o) => o.popular)?.price ?? from)}</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{siteConfig.termMonths} months, paid once. Set-up starts within {siteConfig.startWithinDays} business days of your details.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
