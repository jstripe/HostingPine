import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero, Section, SectionHeading } from "@/components/layout/Section";
import { PricingCards } from "@/components/sections/PricingCards";
import { Mandatory } from "@/components/sections/Mandatory";
import { JsonLd } from "@/components/json-ld";
import { Table, TBody, TD, TH, THead, TR } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { billingFaqs, offers, usd } from "@/lib/data";
import { breadcrumbLd, faqLd, serviceLd } from "@/lib/seo";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata("Pricing: hosting plans paid once for 12 months", "Four one-time hosting plans from $79 for 12 months plus a custom quote. Shared, WordPress, VPS and cloud hosting, set up for you. No automatic renewal.", "/pricing/");

export default function PricingPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Pricing" title="Simple one-time prices" sub="Choose a plan, tick the box to accept the Terms and the Refund Policy, and pay by card. Prices are in USD. Taxes may apply." />
      <Section>
        <div className="mb-10"><Mandatory /></div>
        <PricingCards />
      </Section>
      <Section className="defer bg-muted/50">
        <SectionHeading title="Compare the plans" />
        <p className="mb-2 text-xs text-muted-foreground md:hidden">Swipe sideways to see all columns.</p>
        <div className="overflow-x-auto rounded-2xl border bg-background">
          <Table className="min-w-[820px]">
            <THead><TR><TH>Plan</TH><TH>Price (once, {siteConfig.termMonths} months)</TH><TH>Storage</TH><TH>Resources</TH><TH>Access</TH></TR></THead>
            <TBody>
              {offers.map((o) => <TR key={o.id}><TD className="font-semibold">{o.name}</TD><TD>{usd(o.price)}</TD><TD>{o.storage}</TD><TD>{o.compute}</TD><TD>{o.access}</TD></TR>)}
              <TR><TD className="font-semibold">Custom</TD><TD>On quote</TD><TD colSpan={3}>Dedicated servers, reseller hosting, migrations</TD></TR>
            </TBody>
          </Table>
        </div>
        <ul className="mx-auto mt-8 max-w-3xl list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>Every plan is paid once. Nothing renews and there is nothing to cancel.</li>
          <li>The {siteConfig.termMonths} months start on the day we hand over your access details.</li>
          <li>We start the set-up within {siteConfig.startWithinDays} business days of receiving your complete details.</li>
          <li>Domain names are not included. You need a domain that you already own.</li>
          <li>Refunds follow our <Link href="/refund/" className="text-primary underline underline-offset-4">Refund Policy</Link>.</li>
        </ul>
      </Section>
      <Section className="defer">
        <SectionHeading eyebrow="Billing" title="Billing questions" />
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {billingFaqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="min-h-[56px] text-left text-base font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
      <Section className="defer pt-0">
        <div className="surface mx-auto flex max-w-3xl flex-col items-center gap-4 bg-gradient-to-b from-accent/60 to-card p-8 text-center">
          <h2 className="font-display text-2xl font-semibold">Need a dedicated server, reseller hosting or a migration?</h2>
          <p className="text-muted-foreground">Tell us what you need and we reply with a price before you pay anything.</p>
          <Button asChild size="lg"><Link href="/quote/">Request a quote</Link></Button>
        </div>
      </Section>
      <JsonLd data={[serviceLd(), faqLd(billingFaqs), breadcrumbLd([{ name: "Pricing", path: "/pricing/" }])]} />
    </SiteShell>
  );
}
