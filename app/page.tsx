import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Hero } from "@/components/sections/Hero";
import { Benefits, BuiltFor, UseCases } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingCards } from "@/components/sections/PricingCards";
import { FaqList } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Marquee } from "@/components/sections/Marquee";
import { PlanFinder } from "@/components/sections/PlanFinder";
import { SetupShowcase } from "@/components/sections/SetupShowcase";
import { HandoverDemo } from "@/components/sections/HandoverDemo";
import { Mandatory } from "@/components/sections/Mandatory";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { faqs } from "@/lib/data";
import { faqLd, serviceLd } from "@/lib/seo";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Hostingpine: web hosting that is set up for you",
  "Shared, WordPress, VPS and cloud hosting, set up for you and paid once for 12 months. We install it and email your access details. Plans from $79, no automatic renewal.",
  "/",
);

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <BuiltFor />
      <Benefits />
      <HowItWorks />
      <PlanFinder />
      <SetupShowcase />
      <HandoverDemo />
      <Section id="pricing" className="defer">
        <SectionHeading eyebrow="Pricing" title="Four hosting plans and a custom option" sub="Pay once for 12 months. Nothing renews." />
        <PricingCards />
        <div className="mt-10"><Mandatory /></div>
        <div className="mt-8 text-center"><Button asChild variant="outline" size="lg" className="bg-background"><Link href="/hosting/">What is in each plan <ArrowRight className="h-4 w-4" aria-hidden /></Link></Button></div>
      </Section>
      <UseCases />
      <Marquee />
      <Section id="faq" className="defer">
        <SectionHeading eyebrow="FAQ" title="Questions before you buy" />
        <FaqList />
      </Section>
      <CtaBanner />
      <JsonLd data={[serviceLd(), faqLd(faqs)]} />
    </SiteShell>
  );
}
