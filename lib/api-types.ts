/**
 * Contract between the Worker API (worker/**) and the website (components/**, app/**).
 * Change here first, then in both sides. No runtime imports from Next-only modules.
 */

export type OfferId = "shared" | "wordpress" | "vps" | "cloud";

/** Fixed offers sold through one-time Stripe Payment Links. amountCents must equal the amount on the link (USD). */
export const OFFER_CATALOG: Record<OfferId, { name: string; amountCents: number }> = {
  shared: { name: "Shared Hosting", amountCents: 7900 },
  wordpress: { name: "WordPress Hosting", amountCents: 11900 },
  vps: { name: "VPS Hosting", amountCents: 27900 },
  cloud: { name: "Cloud Hosting", amountCents: 59900 },
};
export const OFFER_ORDER: OfferId[] = ["shared", "wordpress", "vps", "cloud"];
export const CURRENCY = "USD";

export const CONTACT_SUBJECTS = ["Question before buying", "Help with my hosting set-up", "Refund request", "Privacy request", "Something else"] as const;
export const QUOTE_NEEDS = ["Dedicated server", "Reseller hosting", "Move my site from another host", "Something else"] as const;

export interface ApiError { error: string; message: string }

export interface ContactRequest { name: string; email: string; subject: string; message: string; /** honeypot, must stay empty */ website?: string }
export interface IntakeRequest {
  business: string; contactName: string; email: string; phone: string; domainName: string;
  /** an OfferId */ offer: string; paymentRef: string; notes?: string; website?: string;
}
export interface QuoteRequest {
  business: string; contactName: string; email: string; websites: string; need: string; message: string; website?: string;
}

export interface Capabilities { ok: boolean }

export interface AdminContact { id: string; name: string; email: string; subject: string; message: string; createdAt: number; handledAt: number | null }
export interface AdminIntake { id: string; business: string; contactName: string; email: string; phone: string; domainName: string; offer: string; paymentRef: string; notes: string; createdAt: number; handledAt: number | null }
export interface AdminQuote { id: string; business: string; contactName: string; email: string; websites: string; need: string; message: string; createdAt: number; handledAt: number | null }
export interface AdminOverview { intakes: AdminIntake[]; quotes: AdminQuote[]; messages: AdminContact[] }
export type AdminKind = "intake" | "quote" | "message";
