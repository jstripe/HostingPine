/**
 * Single source of truth for company identity and shared site settings.
 * Domain: hostingpine.com (working name, can change at STOP 1).
 */
const domain = "hostingpine.com";

export const siteConfig = {
  name: "Hostingpine",
  domain,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hostingpine.com",
  tagline: "Web hosting that is set up for you.",
  description:
    "Hostingpine sets up your web hosting for you: shared, WordPress, VPS or cloud hosting, paid once for 12 months. We install it and email your access details.",
  launchMonth: "November 2026",

  // Company identity supplied by the owner.
  legalEntity: "MEGAFLOW LLC",
  legalForm: "a limited liability company registered in Wyoming, USA",
  ein: "98-1935278",
  address: "30 N Gould St Ste R, Sheridan, WY 82801",
  governingLaw: "{{GOVERNING LAW}}",
  /** The exact legal notice the owner gives at STOP 2. Empty = built from the fields above. */
  legalNoticeOverride: "",

  contactEmail: "support@hostingpine.com",
  phone: "+447907830500",
  hours: "Monday to Friday, 9:00 to 17:00 (time zone of our registered office)",
  hoursNote: "Messages sent outside these hours are answered on the next business day.",

  // Service promises, reused by every page so they stay identical (the owner must staff them: see docs/OWNER-TODO.md)
  refundWindowDays: 14,
  refundDecisionDays: 3,
  refundPayDays: 10,
  startWithinDays: 2,
  replyDays: 3,
  termMonths: 12,

  social: {
    x: "https://x.com/hostingpine",
    instagram: "https://instagram.com/hostingpine",
    linkedin: "https://linkedin.com/company/hostingpine",
    facebook: "https://facebook.com/hostingpine",
  } as Record<string, string>,
  /** Only networks that really exist are shown. Hidden until the owner confirms them. */
  socialLive: { x: false, instagram: false, linkedin: false, facebook: false } as Record<string, boolean>,

  /** One-time Airwallex payment links, one per offer. Env vars override. Empty = disabled "Checkout opens soon" button. */
  payLinks: {
    shared: process.env.NEXT_PUBLIC_PAY_SHARED || "",
    wordpress: process.env.NEXT_PUBLIC_PAY_WORDPRESS || "",
    vps: process.env.NEXT_PUBLIC_PAY_VPS || "",
    cloud: process.env.NEXT_PUBLIC_PAY_CLOUD || "",
  } as Record<string, string>,

  /** Only what the site really uses. The hosting provider that runs the servers is added by the owner at STOP 2. */
  subProcessors: [
    { name: "Cloudflare, Inc.", purpose: "Hosting, content delivery, security and the database that stores the forms you send us", location: "United States and worldwide edge network", safeguard: "EU-US Data Privacy Framework and Standard Contractual Clauses" },
    { name: "Airwallex (UK) Limited and affiliates", purpose: "Card payment processing for the plans you buy", location: "United Kingdom, EEA, Hong Kong and Singapore", safeguard: "UK adequacy decisions and Standard Contractual Clauses" },
    { name: "{{HOSTING PROVIDER}}", purpose: "The company whose servers run the hosting you buy; it receives your domain name and contact email so that the hosting account can be created", location: "{{PROVIDER LOCATION}}", safeguard: "{{PROVIDER SAFEGUARD}}" },
  ],
};

/** Shown verbatim on Pricing and in the Terms. */
export const mandatoryText = "Each plan is hosting that we set up for you for 12 months, paid once. Domain names, email sending services and website design are not included, and we do not publish an uptime guarantee.";

export function legalNotice(): string {
  if (siteConfig.legalNoticeOverride) return siteConfig.legalNoticeOverride;
  return `${siteConfig.legalEntity}, ${siteConfig.legalForm} · Registered office: ${siteConfig.address} · EIN: ${siteConfig.ein}`;
}
