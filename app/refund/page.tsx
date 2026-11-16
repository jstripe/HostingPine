import { LegalLayout, LLink, LP, LUL, Mail } from "@/components/pages/LegalLayout";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata("Refund Policy", "Full refund on request within 14 days of payment, and a refund if the service does not work as described. Answers within 3 business days.", "/refund/");

export default function RefundPage() {
  const W = siteConfig.refundWindowDays;
  return (
    <LegalLayout path="/refund/" title="Refund Policy" intro="When you can get your money back, how to ask for it and how fast it is paid." sections={[
      { id: "summary", title: "In short", body: <LUL>
        <li><strong>Full refund</strong> if you ask within {W} days of payment.</li>
        <li><strong>Refund</strong> if we do not set up what you bought, or it does not work as described, and we cannot put it right.</li>
        <li>We answer within {siteConfig.refundDecisionDays} business days and pay approved refunds within {siteConfig.refundPayDays} business days.</li>
      </LUL> },
      { id: "window", title: `Within ${W} days of payment`, body: <LP>If you ask for a refund within {W} days of the day you paid, we refund the full amount you paid, whether or not the hosting has already been set up. After the refund, we end the plan and may remove the hosting account.</LP> },
      { id: "failure", title: "If we fail to deliver or it does not work as described", body: <LP>If we do not set up what you bought, or the hosting does not work as described on our site and we cannot put it right within a reasonable time after you tell us, you can ask for a refund at any time during the term. For a refund after the first {W} days we refund the part of the term that you could not use, calculated pro rata from the day you reported the problem.</LP> },
      { id: "after", title: "After the first 14 days", body: <LP>If the hosting works as described, there is no refund after the first {W} days. Because there is no automatic renewal, nothing is charged again and there is nothing to cancel.</LP> },
      { id: "how", title: "How to request a refund", body: <>
        <LP>Write to <Mail /> or use the <LLink href="/contact/">contact page</LLink> and choose &ldquo;Refund request&rdquo;. Please include the email you used and your payment reference.</LP>
        <LP>We answer within {siteConfig.refundDecisionDays} business days. Approved refunds are processed within {siteConfig.refundPayDays} business days, to the card used for the payment, through Airwallex. Your bank may need extra time to show it on your statement.</LP>
      </> },
      { id: "billing", title: "Billing errors and unauthorized charges", body: <LP>If you were charged the wrong amount, charged twice, or you did not authorize a payment, write to us straight away. We correct billing errors and refund amounts charged by mistake in full.</LP> },
      { id: "not", title: "What a refund does not cover", body: <LP>Domain names that you bought from another company are not ours to refund. If we end a plan because you broke the acceptable use rules in the <LLink href="/terms/">Terms</LLink>, there is no refund after the first {W} days.</LP> },
      { id: "statutory", title: "Your statutory rights", body: <LP>If you are a consumer, this policy does not reduce any right you have under mandatory consumer law, including, where it applies, the statutory right to withdraw from a contract within 14 days, subject to the conditions set by law. Nothing in this policy limits those rights.</LP> },
      { id: "disputes", title: "Chargebacks", body: <LP>Please contact us before you ask your bank for a chargeback. We answer quickly, and most problems can be solved faster by writing to us. We may share the facts of a purchase with our payment provider to respond to a dispute.</LP> },
      { id: "see", title: "Related pages", body: <LP>Read our <LLink href="/terms/">Terms of Service</LLink> for the full agreement and the <LLink href="/pricing/">pricing page</LLink> for what each plan includes.</LP> },
    ]} />
  );
}
