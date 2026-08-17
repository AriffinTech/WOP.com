"use client";

import { useState } from "react";
import { getWhatsAppLink } from "@/data/bouquets";
import { WhatsAppIcon } from "@/components/Icons";

const faqData = [
  {
    category: "Ordering & Payment",
    questions: [
      {
        q: "How do I place an order?",
        a: "Browse our collection, then DM us on Threads/IG or WhatsApp us. A 40% deposit or full payment is required to confirm your order.",
      },
      {
        q: "How much notice do you need for an order?",
        a: "We prefer orders to be placed at least 2 days in advance.",
      },
      {
        q: "Do you accept same-day orders?",
        a: "Possible, depending on availability. Reach out to us to check!",
      },
      {
        q: "Are there ready stocks bouquets available?",
        a: "Every weekend there will be extra blooms we’ll post on our page so stay tuned!",
      },
      {
        q: "What’s the price range for our bouquet?",
        a: "Our bouquets range from RM50 to RM300+.",
      },
      {
        q: "How does payment work?",
        a: "We accept payment via TnG QR.",
      },
    ],
  },
  {
    category: "Delivery & Pickup",
    questions: [
      {
        q: "Do you offer delivery? What areas?",
        a: "Yes! We deliver to Putrajaya, Cyberjaya, and the wider Klang Valley.",
      },
      {
        q: "Can I pick up my order?",
        a: "Yes, self-pickup is available in Putrajaya. The exact location will be shared after purchase.",
      },
    ],
  },
  {
    category: "Customisation & Add-ons",
    questions: [
      {
        q: "Do we accept custom orders?",
        a: "Yes, depending on availability! Do DM us for more info!",
      },
      {
        q: "Can bouquets be customised?",
        a: "Yes, you can customise both the flowers and the wrapping.",
      },
      {
        q: "Can I request specific flowers?",
        a: "Yes, subject to availability and if we can do it.",
      },
      {
        q: "Can I add on a wishcard?",
        a: "Every bouquet comes with a free wish card! Just send us your short note and we’ll include it in your blooms <3",
      },
      {
        q: "Can I add a letter?",
        a: "Yes! We can add a letter for you for an additional RM1 only.",
      },
    ],
  },
  {
    category: "Care & Quality",
    questions: [
      {
        q: "How long do the flowers last?",
        a: "We do add water at the bottom of our blooms, so in wrapping, it can last 1-2 days! Over a week with proper care.",
      },
      {
        q: "How do I make the flowers last longer?",
        a: "Take the flowers out of the wrapping, cut the stems at a 45° angle, and put them in a vase with cold water + flower food/sugar. Repeat steps every 2 days with fresh water.",
      },
      {
        q: "What happens if a particular flower is unavailable?",
        a: "Flower availability can vary seasonally. If a specific flower isn't available, we'll contact you with beautiful alternatives.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="pt-[120px] md:pt-[140px]">
      {/* Header */}
      <section className="bg-cream-dark border-b border-border-light py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-sage mb-3 block">Got Questions?</span>
          <h1 className="font-heading text-4xl md:text-6xl font-medium text-charcoal mb-4 md:mb-6">Frequently Asked Questions</h1>
          <p className="text-base md:text-lg lg:text-xl text-text-light leading-relaxed">
            Everything you need to know about ordering, delivery, and our bouquets.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col gap-12 md:gap-16">
            {faqData.map((section) => (
              <div key={section.category}>
                <h2 className="font-heading text-xl md:text-2xl font-medium text-charcoal mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-rose-light inline-block">
                  {section.category}
                </h2>
                <div className="flex flex-col">
                  {section.questions.map((item, i) => {
                    const key = `${section.category}-${i}`;
                    const isOpen = openItems[key];
                    return (
                      <div key={key} className="border-b border-border-light">
                        <button
                          className="w-full py-6 flex justify-between items-center text-left hover:text-rose transition-colors"
                          onClick={() => toggleItem(key)}
                        >
                          <span className={`text-base font-medium ${isOpen ? 'text-rose' : 'text-charcoal'}`}>{item.q}</span>
                          <span className="text-2xl text-text-muted ml-4 font-light leading-none">{isOpen ? "−" : "+"}</span>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                        >
                          <p className="text-sm text-text-light leading-relaxed pr-8">{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 md:mt-24 p-8 md:p-12 bg-cream-dark rounded-2xl text-center border border-border-light">
            <h3 className="font-heading text-xl md:text-2xl font-medium text-charcoal mb-3 md:mb-4">Still have questions?</h3>
            <p className="text-sm md:text-base text-text-light mb-6 md:mb-8">We're happy to help! Reach out to us directly.</p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-whatsapp text-white text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-whatsapp-hover transition-all hover:-translate-y-[1px] shadow-sm"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
