# Owner to-do (things the site promises that a person must do)

## Before the Pay links go live: confirm the supply
This site sells hosting. It does not run servers itself. Before any Payment Link is published the owner must have a real hosting supplier (reseller account or own servers) and confirm that EVERY spec on the site is true for what the supplier gives:
- Shared 10 GB SSD, WordPress 20 GB SSD, VPS 4 GB RAM / 4 vCPU / 80 GB SSD, Cloud 8 GB RAM / 8 vCPU / 160 GB SSD, cPanel, free SSL, daily backups, root access.
Change `lib/data.ts` and the Terms if a spec differs. Then fill the supplier line in `siteConfig.subProcessors` (name, location, transfer safeguard) and name the supplier in the Privacy Policy.

## Promises to staff (all in lib/site-config.ts, reused on every page)
- Set-up starts within 2 business days (Monday to Friday) of complete details.
- Replies to contact and quote messages within 3 business days.
- Refund: full refund on request within 14 days of payment; answer in 3 business days; payout in 10 business days.
- The 12 months start on the day access details are emailed; the email must state start and end dates.
- A reminder email before the end date (the FAQ says it is sent). Keep a list of end dates.
- Backups: shared and WordPress daily backups must really run at the supplier.

## Payment matching (by hand)
Payment Links send nothing back to the site. For each form in /admin: compare the payment reference and email with the Stripe dashboard, then set up the hosting and mark the item handled. Set the redirect URL on each Stripe link to https://<domain>/thank-you/?offer=<shared|wordpress|vps|cloud>.

## Data retention that the daily cron enforces
Contact messages 12 months, quotes 12 months, post-payment details 3 years. The cron trigger count on the Stripe Cloudflare account is limited (5 on the free plan): if deploy fails with a cron error, free one first.

## By hand
Worker secrets ADMIN_USERNAME and ADMIN_PASSWORD, domain on the Stripe Cloudflare account, Email Routing contact@<domain>, company details and Stripe links at STOP 2, Companies House status of the entity.
