import { HttpError } from "./util";

export const EMAIL_RE = /^[^\s@]{1,64}@[^\s@.]+(\.[^\s@.]+)+$/;

export const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

/** Required single-line text, whitespace collapsed. */
export function text(v: unknown, field: string, label: string, max: number): string {
  const s = str(v).replace(/\s+/g, " ");
  if (!s || s.length > max) throw new HttpError(400, `invalid_${field}`, `Enter ${label} (max ${max} characters).`);
  return s;
}

export function email(v: unknown): string {
  const s = str(v).toLowerCase();
  if (!EMAIL_RE.test(s) || s.length > 254) throw new HttpError(400, "invalid_email", "Enter a valid email address.");
  return s;
}

/** Optional multi-line text. */
export function longText(v: unknown, field: string, label: string, max: number, required = true): string {
  const s = str(v);
  if (required && !s) throw new HttpError(400, `invalid_${field}`, `Enter ${label}.`);
  if (s.length > max) throw new HttpError(400, `invalid_${field}`, `${label[0].toUpperCase()}${label.slice(1)} is too long (max ${max} characters).`);
  return s;
}

export function oneOf<T extends string>(v: unknown, field: string, label: string, allowed: readonly T[]): T {
  const s = str(v) as T;
  if (!allowed.includes(s)) throw new HttpError(400, `invalid_${field}`, `Please choose ${label}.`);
  return s;
}

/** The domain name the customer wants to host, e.g. example.com. Accepts a pasted URL and keeps only the host name. */
export function domain(v: unknown): string {
  let s = str(v).toLowerCase();
  if (!s || s.length > 253) throw new HttpError(400, "invalid_domain", "Enter the domain name you want to host, for example example.com.");
  s = s.replace(/^https?:\/\//, "").replace(/\/.*$/, "").replace(/^www\./, "");
  if (!/^(?=.{4,253}$)([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,24}$/.test(s)) throw new HttpError(400, "invalid_domain", "Enter the domain name you want to host, for example example.com.");
  return s;
}

export function phone(v: unknown): string {
  const s = str(v);
  if (s.length < 6 || s.length > 30 || !/^[0-9+()\-.\s]+$/.test(s)) throw new HttpError(400, "invalid_phone", "Enter a valid phone number.");
  return s;
}
