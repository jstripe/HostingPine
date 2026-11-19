import Link from "next/link";
import { Check, X } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero, Section, SectionHeading } from "@/components/layout/Section";
import { Mandatory } from "@/components/sections/Mandatory";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { offers, usd } from "@/lib/data";
import { breadcrumbLd } from "@/lib/seo";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata("Hosting plans: what is included and what is not", "Shared, WordPress, VPS and cloud hosting plans from Hostingpine: storage, resources, access and who each plan is for. We also say what is not included.", "/hosting/");

const notIncluded = [
  "Domain names. You need a domain that you already own.",
  "Website design, content or development.",
  "Email sending services. Plans do not include a bulk or marketing email service.",
  "An uptime percentage or a service level guarantee. We do not publish one.",
  "Management of a VPS or cloud server after the first set-up. You manage it once we hand it over.",
];

export default function HostingPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Hosting" title="Pick the hosting that fits your site" sub={`Four plans, each ${siteConfig.termMonths} months of hosting paid once. We set it up and email you the access details.`} />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {offers.map((o) => (
            <article key={o.id} className="surface flex flex-col p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-semibold">{o.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{o.forWho}</p>
                </div>
                <p className="font-display text-3xl font-semibold">{usd(o.price)}</p>
              </div>
              <p className="mt-4 text-muted-foreground">{o.blurb}</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {o.highlights.map((h) => <li key={h} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /><span>{h}</span></li>)}
              </ul>
              <div className="mt-auto pt-6"><Button asChild variant="outline" className="bg-background"><Link href="/pricing/">Buy on the pricing page</Link></Button></div>
            </article>
          ))}
        </div>
      </Section>
      <Section className="bg-muted/50">
        <SectionHeading eyebrow="Be clear before you buy" title="What is not included" />
        <ul className="mx-auto max-w-3xl space-y-3">
          {notIncluded.map((t) => <li key={t} className="surface flex gap-3 p-4 text-base"><X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden /><span>{t}</span></li>)}
        </ul>
        <div className="mt-10"><Mandatory /></div>
      </Section>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold">How the hand-over works</h2>
          <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg leading-8 text-muted-foreground marker:font-semibold marker:text-primary">
            <li>You pay on the pricing page and land on a short form.</li>
            <li>You send your domain, contact details and the payment reference from your Stripe receipt.</li>
            <li>We check the payment, then set up your hosting within {siteConfig.startWithinDays} business days of receiving complete details (Monday to Friday).</li>
            <li>We email your access details and the start and end dates of your {siteConfig.termMonths} months. You point your domain to the hosting using the settings we give you.</li>
          </ol>
        </div>
      </Section>
      <CtaBanner />
      <JsonLd data={breadcrumbLd([{ name: "Hosting", path: "/hosting/" }])} />
    </SiteShell>
  );
}
