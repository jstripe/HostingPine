import { CalendarDays, Lock, Server } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { siteConfig } from "@/lib/site-config";

/** A mock of the hand-over email. Clearly labelled as an illustration; every value is made up. */
export function HandoverDemo() {
  return (
    <Section id="handover" className="defer bg-muted/50">
      <SectionHeading eyebrow="The hand-over" title="What your hosting email looks like" sub="This is the message you receive when your hosting is ready. The details below are an illustration." />
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.25fr_1fr]">
        <div className="surface overflow-hidden">
          <div className="flex items-center justify-between border-b bg-muted/60 px-4 py-2.5">
            <div className="flex gap-1.5" aria-hidden><span className="h-2.5 w-2.5 rounded-full bg-destructive/50" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /></div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Illustrative example</p>
          </div>
          <div className="space-y-4 p-5 text-sm leading-6 sm:p-7 sm:text-base">
            <div className="border-b pb-3 text-sm"><p><span className="text-muted-foreground">From:</span> {siteConfig.contactEmail}</p><p><span className="text-muted-foreground">Subject:</span> <strong>Your WordPress Hosting is ready</strong></p></div>
            <p>Hello Sam,</p>
            <p>Your hosting for <strong>example.com</strong> is set up. Here is what you need:</p>
            <dl className="grid gap-x-6 gap-y-2 rounded-xl border bg-muted/40 p-4 text-sm sm:grid-cols-[auto_1fr]">
              <dt className="text-muted-foreground">Control panel</dt><dd className="font-medium">Link and username, sent in this email</dd>
              <dt className="text-muted-foreground">Plan</dt><dd className="font-medium">WordPress Hosting</dd>
              <dt className="text-muted-foreground">Starts</dt><dd className="font-medium">1 December</dd>
              <dt className="text-muted-foreground">Ends</dt><dd className="font-medium">30 November, {siteConfig.termMonths} months later</dd>
              <dt className="text-muted-foreground">DNS settings</dt><dd className="font-medium">Listed below, to enter at your registrar</dd>
            </dl>
            <p>Reply to this email if anything does not work and we will help you.</p>
            <p className="text-muted-foreground">The Hostavale team</p>
          </div>
        </div>
        <ol className="space-y-4 self-center">
          {[
            { Icon: Lock, t: "Your login arrives by email", d: "Change the password the first time you sign in." },
            { Icon: Server, t: "Point your domain", d: "Enter the DNS settings at your registrar. Changes can take time to spread." },
            { Icon: CalendarDays, t: "Dates are written down", d: "The email states when your term starts and ends." },
          ].map(({ Icon, t, d }, i) => (
            <li key={t} className="surface flex gap-4 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-display font-semibold text-primary-foreground">{i + 1}</span>
              <div><h3 className="flex items-center gap-2 font-semibold"><Icon className="h-4 w-4 text-primary" aria-hidden />{t}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{d}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
