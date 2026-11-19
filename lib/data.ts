import { OFFER_CATALOG, OFFER_ORDER, type OfferId } from "./api-types";
import { siteConfig } from "./site-config";

export interface Offer {
  id: OfferId;
  name: string;
  price: number;
  blurb: string;
  highlights: string[];
  popular?: boolean;
  /** Comparison table */
  storage: string;
  compute: string;
  access: string;
  forWho: string;
}

const P = (id: OfferId) => OFFER_CATALOG[id].amountCents / 100;
const term = `${siteConfig.termMonths} months of hosting`;

export const offers: Offer[] = [
  {
    id: "shared", name: OFFER_CATALOG.shared.name, price: P("shared"),
    blurb: "For a first website, a portfolio or a small business site.",
    highlights: [term, "1 website, 10 GB SSD storage", "Free SSL certificate, daily backups", "cPanel control panel", "We set it up and email your access details"],
    storage: "10 GB SSD", compute: "Shared resources", access: "cPanel", forWho: "Blogs, portfolios, small business sites",
  },
  {
    id: "wordpress", name: OFFER_CATALOG.wordpress.name, price: P("wordpress"), popular: true,
    blurb: "WordPress installed and ready, so you can start writing the day we hand it over.",
    highlights: [term, "WordPress installed for you, 1 website", "20 GB SSD storage", "Free SSL certificate, daily backups", "We set it up and email your access details"],
    storage: "20 GB SSD", compute: "Shared resources", access: "cPanel and WordPress admin", forWho: "WordPress sites, bloggers, small shops",
  },
  {
    id: "vps", name: OFFER_CATALOG.vps.name, price: P("vps"),
    blurb: "A virtual server of your own for applications that need more room and control.",
    highlights: [term, "4 GB RAM, 4 vCPU, 80 GB SSD", "Root access", "We do the first set-up of the server", "You manage it after hand-over"],
    storage: "80 GB SSD", compute: "4 GB RAM, 4 vCPU", access: "Root (SSH)", forWho: "Growing sites and custom applications",
  },
  {
    id: "cloud", name: OFFER_CATALOG.cloud.name, price: P("cloud"),
    blurb: "A larger cloud server for busy sites and heavier applications.",
    highlights: [term, "8 GB RAM, 8 vCPU, 160 GB SSD", "Root access", "We do the first set-up of the server", "You manage it after hand-over"],
    storage: "160 GB SSD", compute: "8 GB RAM, 8 vCPU", access: "Root (SSH)", forWho: "Busy sites and demanding applications",
  },
];

export const offerById = (id: string) => offers.find((o) => o.id === id);
export const offerOptions = OFFER_ORDER.map((id) => ({ id, name: OFFER_CATALOG[id].name }));
export const usd = (n: number) => `$${n}`;

export const customOffer = {
  name: "Custom",
  blurb: "For dedicated servers, reseller hosting and moving a site from another host.",
  highlights: ["Dedicated servers", "Reseller hosting", "Migration from another host", "A price agreed before you pay"],
};

export const benefits = [
  { icon: "wand", title: "Set up for you", text: "You do not install anything. After you pay and send your domain, we set the hosting up and email you the access details." },
  { icon: "tag", title: "Pay once, no surprises", text: "Each plan is 12 months of hosting for one price. Nothing renews automatically and there is nothing to cancel." },
  { icon: "life", title: "A person answers", text: "Write to us on a business day and a person replies. We say plainly what each plan includes and what it does not." },
] as const;

export const steps = [
  { title: "Choose a plan", text: "Pick the hosting plan that fits your site on the pricing page." },
  { title: "Pay securely", text: "Pay by card through Stripe. One-off payment, nothing renews." },
  { title: "Send your details", text: "After paying you land on a short form: your domain, contact details and your payment reference." },
  { title: `We set it up in ${siteConfig.startWithinDays} business days`, text: "We install your hosting and email you the access details. If something is missing, we ask." },
] as const;

export const audiences = [
  { icon: "store", label: "Small businesses" },
  { icon: "user", label: "Freelancers" },
  { icon: "pen", label: "Bloggers" },
  { icon: "brief", label: "Agencies" },
  { icon: "cart", label: "Online shops" },
] as const;

export const faqs = [
  { q: "What exactly do you sell?", a: `Hosting for your website, set up for you. Each plan is ${siteConfig.termMonths} months of shared, WordPress, VPS or cloud hosting, paid once. After you pay, you send us your domain name and we set the hosting up and email your access details.` },
  { q: "Is a domain name included?", a: "No. You need a domain name that you already own. We point the hosting to it and tell you which settings to change at your registrar." },
  { q: "How long until my hosting is ready?", a: `We start within ${siteConfig.startWithinDays} business days of receiving your complete details (Monday to Friday). We do not promise a faster time. If something is missing we write to you, and the time counts from when we have it.` },
  { q: "What happens after 12 months?", a: "The term ends. Nothing renews automatically and we do not charge you again. Before the end date we write to you by email so you can buy a new term if you want to keep the hosting." },
  { q: "Do you guarantee uptime?", a: "We do not publish an uptime percentage or a service level guarantee. If the service you bought does not work as described, you can ask for a refund under the Refund Policy." },
  { q: "Can I get a refund?", a: `Yes. You can ask for a full refund within ${siteConfig.refundWindowDays} days of payment, as set out in the Refund Policy. We answer within ${siteConfig.refundDecisionDays} business days and pay approved refunds within ${siteConfig.refundPayDays} business days.` },
  { q: "Can you move my existing website?", a: "For migrations, request a quote. We look at your site, tell you what we would do and give you a price before you pay anything." },
  { q: "Is my data safe?", a: "We collect only what we need to set up your hosting: the details you send us. This website runs on Cloudflare and card payments are handled by Stripe, so we never see or store your card number. Read the Privacy Policy for what we keep and for how long." },
] as const;

export const navLinks = [
  { label: "Hosting", href: "/hosting/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "FAQ", href: "/faq/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const footerColumns = [
  { title: "Hosting", links: [{ label: "Hosting plans", href: "/hosting/" }, { label: "Pricing", href: "/pricing/" }, { label: "Request a quote", href: "/quote/" }, { label: "FAQ", href: "/faq/" }] },
  { title: "Company", links: [{ label: "About", href: "/about/" }, { label: "Contact", href: "/contact/" }, { label: "After payment", href: "/thank-you/" }] },
  { title: "Legal", links: [
    { label: "Legal Notice", href: "/legal-notice/" }, { label: "Terms of Service", href: "/terms/" }, { label: "Refund Policy", href: "/refund/" },
    { label: "Privacy Policy", href: "/privacy/" }, { label: "Cookie Policy", href: "/cookies/" },
  ] },
];

export const SELECT_SITES = ["1 to 5", "6 to 20", "More than 20"] as const;

export const billingFaqs = [
  { q: "Does anything renew automatically?", a: "No. Every plan is a one-off payment for 12 months of hosting. Nothing renews automatically and there is nothing to cancel." },
  { q: "Can I buy more than one plan?", a: "Yes. Each purchase is separate and has its own set-up. For many websites, request a quote." },
  { q: "When do the 12 months start?", a: "The 12 months start on the day we hand over your access details, not on the day you pay. We write the start and end dates in the email." },
  { q: "Which payment methods can I use?", a: "You pay by card on a secure Stripe page. Stripe shows the card options available for your payment." },
  { q: "Can I get a refund?", a: `Yes. You can ask within ${siteConfig.refundWindowDays} days of payment, as set out in the Refund Policy.` },
  { q: "Are prices final?", a: "Prices are in USD. Taxes may apply depending on where you are, and are shown on the payment page if they do." },
] as const;

export const marqueeRows = [
  ["Portfolio sites", "Small business websites", "WordPress blogs", "Landing pages", "Online shops", "Agency client sites", "Documentation sites", "Photography sites"],
  ["Custom applications", "Staging servers", "Booking sites", "Restaurant websites", "Membership sites", "Newsletter archives", "Event pages", "Freelancer sites"],
] as const;
