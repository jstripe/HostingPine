import { Icon } from "@/components/Icon";
import { Section, SectionHeading } from "@/components/layout/Section";
import { audiences, benefits } from "@/lib/data";
import { Media } from "@/components/media";

export function BuiltFor() {
  return (
    <div className="border-b bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-6 sm:px-6 md:flex-row md:justify-between">
        <p className="text-sm font-medium text-muted-foreground">Made for people who want a site online without running servers</p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {audiences.map((a) => <li key={a.label} className="flex items-center gap-2 text-sm font-medium"><Icon name={a.icon} className="h-4 w-4 text-primary" />{a.label}</li>)}
        </ul>
      </div>
    </div>
  );
}

export function Benefits() {
  return (
    <Section>
      <SectionHeading eyebrow="Why Hostavale" title="Hosting without the set-up work" sub="You choose a plan and send us your domain. We do the installation, and we tell you plainly what each plan includes and what it does not." />
      <div className="grid gap-5 md:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.title} className="surface surface-hover p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary"><Icon name={b.icon} className="h-6 w-6" /></span>
            <h3 className="mt-5 text-xl font-semibold">{b.title}</h3>
            <p className="mt-2 leading-7 text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const tiles = [
  { slug: "aud-business", title: "Small businesses", text: "A clear website for your company, set up once and ready to use." },
  { slug: "aud-shop", title: "Online shops", text: "A WordPress site for your products, installed so you can start adding them." },
  { slug: "aud-dev", title: "Developers and agencies", text: "A VPS or cloud server with root access, with the first set-up done for you." },
];

export function UseCases() {
  return (
    <Section className="defer">
      <SectionHeading eyebrow="Who it is for" title="From a first website to a server of your own" />
      <div className="grid gap-5 md:grid-cols-3">
        {tiles.map((t) => (
          <figure key={t.slug} className="surface overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden"><Media slug={t.slug} alt={t.title} sizes="(min-width: 768px) 33vw, 100vw" className="h-full w-full object-cover" /></div>
            <figcaption className="p-6"><h3 className="text-lg font-semibold">{t.title}</h3><p className="mt-1.5 text-sm leading-6 text-muted-foreground">{t.text}</p></figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
