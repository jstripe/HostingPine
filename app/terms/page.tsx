import { LegalLayout, LLink, LP, LUL, Mail } from "@/components/pages/LegalLayout";
import { Mandatory } from "@/components/sections/Mandatory";
import { buildMetadata } from "@/lib/metadata";
import { offers, usd } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata("Terms of Service", "The agreement between you and Hostingpine: the hosting plans, one-time payments, set-up and delivery, acceptable use, refunds, liability and governing law.", "/terms/");

export default function TermsPage() {
  const E = siteConfig.legalEntity;
  return (
    <LegalLayout path="/terms/" title="Terms of Service" intro={`The agreement between you and ${E} when you use ${siteConfig.name} or buy one of its hosting plans.`} sections={[
      { id: "who", title: "Who we are and who these terms apply to", body: <>
        <LP>{siteConfig.name} is operated by {E}, registration no. {siteConfig.registrationNumber}, registered office: {siteConfig.address} (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By buying a plan or sending us a form you agree to these Terms and to the <LLink href="/refund/">Refund Policy</LLink>.</LP>
        <LP>You must be 18 or older and, if you buy for a business, have the authority to act for it.</LP>
      </> },
      { id: "service", title: "The service and the plans", body: <>
        <LP>{siteConfig.name} is a 100% online service. We set up web hosting for you and you use it for {siteConfig.termMonths} months. We sell no physical products. The plans are:</LP>
        <LUL>{offers.map((o) => <li key={o.id}><strong>{o.name}</strong>, {usd(o.price)}: {o.highlights.join(", ")}.</li>)}<li><strong>Custom</strong>, on quote: dedicated servers, reseller hosting and migrations, agreed in writing before you pay.</li></LUL>
      </> },
      { id: "scope", title: "What is included and what is not", body: <>
        <Mandatory />
        <LP>Domain names are not included: you need a domain that you already own. Website design, content, bulk or marketing email services and management of a VPS or cloud server after the first set-up are not included. We do not publish an uptime percentage or a service level guarantee.</LP>
      </> },
      { id: "payment", title: "Prices and payment", body: <>
        <LP>Prices are in USD and are shown on the <LLink href="/pricing/">pricing page</LLink>. Taxes may apply. Each fixed plan is a one-off payment made by card through Airwallex. There is no automatic renewal, no subscription and nothing to cancel. When your {siteConfig.termMonths} months end, we do not charge you again. If you want to keep the hosting, you buy a new term.</LP>
        <LP>Before paying you must tick the box to accept these Terms and the Refund Policy. We never see or store your card number: card payments are handled by Airwallex under its own terms. A custom quote becomes binding only when you accept it in writing and pay the agreed price.</LP>
      </> },
      { id: "delivery", title: "Set-up and delivery", body: <>
        <LP>After you pay, you send us your details on the page that opens after payment: contact name, email, phone, the domain name you want to host, the plan you bought and your payment reference. We check the payment against our payment records, and we start the set-up within {siteConfig.startWithinDays} business days (Monday to Friday) of receiving your complete details.</LP>
        <LP>We then email you the access details. The {siteConfig.termMonths} months start on the day we send them, and the email states the start and end dates. If you are slow to answer our questions, the time counts from when we have what we need. You are responsible for pointing your domain to the hosting using the settings we give you.</LP>
      </> },
      { id: "yourduties", title: "Your content and your duties", body: <>
        <LP>You keep all rights to your website, files and data. You are responsible for them, for keeping your access details safe, for the software you install and for keeping it up to date. For VPS and cloud plans you are also responsible for the security settings of the server after we hand it over.</LP>
        <LP>You must have the right to use the domain name you give us and to publish what you host. We do not check the content of your website, but we may act on a valid complaint.</LP>
      </> },
      { id: "use", title: "Acceptable use", body: <>
        <LP>You agree not to use the hosting to:</LP>
        <LUL>
          <li>host or distribute unlawful content, malware, phishing pages or content that infringes the rights of others;</li>
          <li>send spam or run bulk or unsolicited email campaigns;</li>
          <li>attack, scan or disrupt other systems or networks, or run open proxies or similar services;</li>
          <li>use more resources than the plan was designed for in a way that harms other customers.</li>
        </LUL>
        <LP>We may suspend or remove content or an account that breaks this section, and in serious cases end the plan without a refund. If we can, we warn you first.</LP>
      </> },
      { id: "backups", title: "Backups and your data", body: <LP>Shared and WordPress plans include daily backups made for recovery by us. They are not a replacement for your own copies, and we cannot promise that every file can be restored. For VPS and cloud plans, backups are your responsibility unless we agree otherwise in writing. Keep your own copy of anything you cannot afford to lose.</LP> },
      { id: "third", title: "Third parties", body: <LP>We set up the hosting using infrastructure from a third-party hosting provider. Delays or problems at that provider can affect your hosting. We pass on what we know and work to put it right, but we cannot be responsible for the decisions of third parties beyond the limits of the law.</LP> },
      { id: "refunds", title: "Refunds", body: <LP>Our <LLink href="/refund/">Refund Policy</LLink> is part of these Terms. Nothing in these Terms limits any right you have under mandatory consumer law.</LP> },
      { id: "liability", title: "Liability", body: <>
        <LP>Nothing in these Terms excludes or limits liability that cannot be excluded or limited by law, including liability for death or personal injury caused by negligence, for fraud, or for intentional misconduct.</LP>
        <LP>Subject to that, our total liability to you for any claim linked to a purchase is limited to the amount you paid for it, and we are not liable for loss of profit, loss of business, loss of data or indirect loss. The service is provided with reasonable care and skill.</LP>
      </> },
      { id: "suspension", title: "Suspension and ending", body: <LP>We may suspend or end a plan if you break these Terms. You may stop using the service at any time. Because there is no renewal, there is nothing to cancel, and the plan simply ends on its end date. Please copy your files before then: we may delete the hosting account after the end date.</LP> },
      { id: "general", title: "General", body: <LUL>
        <li><strong>Entire agreement:</strong> these Terms, the Refund Policy and the plan you bought are the whole agreement between you and us about the service.</li>
        <li><strong>Severability:</strong> if a part of these Terms is found to be invalid, the rest stays in force.</li>
        <li><strong>Events outside our control:</strong> we are not responsible for a delay caused by something outside our reasonable control, such as a failure of a network, a hosting provider or a payment provider. We will tell you and carry on as soon as we can.</li>
        <li><strong>Transfer:</strong> we may transfer our rights and duties to another company that takes over the service, as long as your rights stay the same.</li>
        <li><strong>Language:</strong> these Terms are written in English.</li>
      </LUL> },
      { id: "law", title: "Governing law", body: <LP>These Terms are governed by {siteConfig.governingLaw}. If you are a consumer, you also keep the protection of the mandatory consumer rules of the country where you live. Please contact us first at <Mail /> so that we can try to solve any problem together.</LP> },
      { id: "changes", title: "Changes to these terms", body: <LP>We may update these Terms. The date at the top shows the latest version. A change does not affect a plan you have already paid for, unless the law requires it.</LP> },
      { id: "contact", title: "Contact", body: <LP>Questions about these Terms: <Mail />, or the <LLink href="/contact/">contact page</LLink>.</LP> },
    ]} />
  );
}
