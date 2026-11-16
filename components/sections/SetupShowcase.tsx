import { Check, Globe, KeyRound, Mail, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Media } from "@/components/media";
import { siteConfig } from "@/lib/site-config";

const tasks = [
  { Icon: KeyRound, t: "We create your hosting account", d: "Your plan is installed on the servers of our hosting provider and set up for your domain." },
  { Icon: ShieldCheck, t: "We turn on the SSL certificate", d: "Shared and WordPress plans include a free SSL certificate, so your site opens with https." },
  { Icon: Globe, t: "We tell you how to point your domain", d: "You get the exact DNS settings to enter at your domain registrar. We do not sell domain names." },
  { Icon: Mail, t: "We email you everything", d: `Your login, the plan details and the start and end dates of your ${siteConfig.termMonths} months, in one message.` },
];

/** Photo plus the real tasks we do after payment. */
export function SetupShowcase() {
  return (
    <Section id="what-we-set-up" className="defer">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="relative">
          <div aria-hidden className="absolute -inset-4 -z-0 rounded-[2.2rem] bg-gradient-to-br from-primary/15 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border bg-background p-1.5 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.4)]">
            <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem]">
              <Media slug="setup-laptop" alt="A laptop showing an online shop website on a desk" sizes="(min-width: 1024px) 560px, 100vw" className="h-full w-full object-cover" />
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">Photo: an example website on a laptop.</p>
        </div>
        <div>
          <SectionHeading center={false} eyebrow="What we set up" title="After you pay, we do the technical part" sub="This is what happens between your payment and your first login." />
          <ul className="space-y-4">
            {tasks.map(({ Icon, t, d }) => (
              <li key={t} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary"><Icon className="h-5 w-5" aria-hidden /></span>
                <div><h3 className="text-lg font-semibold">{t}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{d}</p></div>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />We start within {siteConfig.startWithinDays} business days of receiving your complete details.</p>
        </div>
      </div>
    </Section>
  );
}
