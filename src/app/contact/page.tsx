import {
  getWhatsAppLink,
  getInstagramLink,
  getWhatsAppCustomLink,
} from "@/data/bouquets";
import { WhatsAppIcon, InstagramIcon } from "@/components/Icons";

export const metadata = {
  title: "Contact Us | Wisp of Petals — Enquire About Bouquets",
  description:
    "Get in touch with Wisp of Petals via WhatsApp or Instagram. Enquire about bouquets, custom arrangements, and delivery.",
};

export default function ContactPage() {
  return (
    <div className="pt-[104px]">
      {/* Header */}
      <section className="bg-cream-dark border-b border-border-light py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-sage mb-3 block">Get in Touch</span>
          <h1 className="font-heading text-4xl md:text-6xl font-medium text-charcoal mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-text-light leading-relaxed">
            We'd love to hear from you! Reach out through WhatsApp or Instagram to
            place an order or ask any questions.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* WhatsApp Card */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-12 rounded-2xl border border-border-light transition-all hover:-translate-y-1 hover:shadow-lg bg-gradient-to-br from-[#25d366]/5 to-[#25d366]/[0.02] hover:border-[#25d366]"
            >
              <div className="text-[#25d366] mb-8">
                <WhatsAppIcon className="w-12 h-12" />
              </div>
              <h3 className="font-heading text-3xl font-medium text-charcoal mb-4">WhatsApp</h3>
              <p className="text-sm text-text-light leading-relaxed max-w-[320px] mb-8">
                The fastest way to reach us. Tap to start a chat and we'll respond within minutes during business hours.
              </p>
              <span className="text-sm font-semibold tracking-wider uppercase text-charcoal">Chat Now →</span>
            </a>

            {/* Instagram Card */}
            <a
              href={getInstagramLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-12 rounded-2xl border border-border-light transition-all hover:-translate-y-1 hover:shadow-lg bg-gradient-to-br from-[#bc1888]/5 to-[#f09433]/[0.02] hover:border-[#bc1888]"
            >
              <div className="text-[#bc1888] mb-8">
                <InstagramIcon className="w-12 h-12" />
              </div>
              <h3 className="font-heading text-3xl font-medium text-charcoal mb-4">Instagram</h3>
              <p className="text-sm text-text-light leading-relaxed max-w-[320px] mb-8">
                Follow us for daily inspiration and behind-the-scenes content. DM us to enquire about any bouquet.
              </p>
              <span className="text-sm font-semibold tracking-wider uppercase text-charcoal">Follow & DM →</span>
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="p-8 bg-cream-dark rounded-xl text-center">
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-charcoal mb-4">🕐 Business Hours</h4>
              <div className="text-sm text-text-light leading-relaxed">
                <p>Thursday – Sunday</p>
                <p className="font-medium text-charcoal">+ Special Occasions</p>
                <p className="text-xs text-text-muted mt-2">Other days subject to availability</p>
              </div>
            </div>
            <div className="p-8 bg-cream-dark rounded-xl text-center">
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-charcoal mb-4">📍 Coverage Area</h4>
              <div className="text-sm text-text-light leading-relaxed">
                <p>Delivery available within</p>
                <p className="font-medium text-charcoal">Putrajaya · Cyberjaya</p>
                <p>KL & Selangor</p>
                <p className="text-xs text-text-muted mt-2">Self-pickup available in Putrajaya</p>
              </div>
            </div>
            <div className="p-8 bg-cream-dark rounded-xl text-center">
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-charcoal mb-4">📦 How to Order</h4>
              <div className="text-sm text-text-light leading-relaxed">
                <p>1. Browse our collection</p>
                <p>2. Tap "Enquire on WhatsApp"</p>
                <p>3. Pay via TnG QR to confirm</p>
                <p>4. Receive your bouquet!</p>
              </div>
            </div>
          </div>

          {/* Custom Bouquet CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-12 bg-gradient-to-br from-rose-bg to-sage-bg rounded-2xl">
            <div className="max-w-[480px] text-center md:text-left">
              <h2 className="font-heading text-3xl font-medium text-charcoal mb-4">Looking for Something Custom?</h2>
              <p className="text-text-light leading-relaxed">
                Tell us your occasion, preferred colours, budget, and any specific flowers
                you'd love — and we'll craft a bespoke arrangement just for you.
              </p>
            </div>
            <a
              href={getWhatsAppCustomLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp text-white text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-whatsapp-hover transition-all shadow-md shrink-0"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Enquire About Custom Bouquet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
