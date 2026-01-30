import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      category: "Orders & Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secured with SSL encryption for your safety.",
        },
        {
          q: "How do I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.",
        },
        {
          q: "Can I cancel or modify my order?",
          a: "Orders can be cancelled or modified within 2 hours of placement. After that, the order enters processing and cannot be changed. Please contact us immediately if you need to make changes.",
        },
      ],
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "What are your shipping options?",
          a: "We offer free worldwide shipping on orders over $100. For Dubai, we provide 4-hour express delivery. UAE customers can choose same-day or next-day delivery. International orders typically arrive within 5-10 business days.",
        },
        {
          q: "Do you ship internationally?",
          a: "Yes! We ship to over 150 countries worldwide. Shipping costs and delivery times vary by location. International orders may be subject to customs duties and taxes.",
        },
        {
          q: "What if my package is lost or damaged?",
          a: "All shipments are fully insured. If your package is lost or arrives damaged, please contact us within 48 hours and we'll arrange a replacement or full refund.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy on all items. Products must be unworn, in original condition, and include all original packaging. Contact us to initiate a return.",
        },
        {
          q: "How do I return an item?",
          a: "Contact our customer service team to request a return authorization. We'll provide you with a prepaid return label. Once we receive and inspect the item, we'll process your refund within 5-7 business days.",
        },
        {
          q: "Can I exchange an item?",
          a: "Yes! We offer free exchanges within 30 days of purchase. Contact us with your order number and the item you'd like to exchange, and we'll guide you through the process.",
        },
      ],
    },
    {
      category: "Product Information",
      questions: [
        {
          q: "Are your products authentic?",
          a: "Absolutely! All our jewelry is 100% authentic and comes with a certificate of authenticity. We guarantee the quality and genuineness of every piece we sell.",
        },
        {
          q: "How do I care for my jewelry?",
          a: "Store jewelry in a cool, dry place away from direct sunlight. Clean with a soft cloth and avoid harsh chemicals. For specific care instructions, refer to the care card included with your purchase.",
        },
        {
          q: "Do you offer warranty on your products?",
          a: "Yes, all our jewelry comes with a 1-year warranty against manufacturing defects. We also offer lifetime repair services for a nominal fee.",
        },
      ],
    },
    {
      category: "Size & Fit",
      questions: [
        {
          q: "How do I determine my ring size?",
          a: "We recommend visiting a local jeweler for professional sizing. Alternatively, you can download our printable ring sizer from our website or order a free ring sizer to be delivered to your home.",
        },
        {
          q: "Are necklace lengths adjustable?",
          a: "Many of our necklaces come with adjustable chains, typically offering 2-3 inches of adjustment. Product descriptions specify whether a piece is adjustable.",
        },
        {
          q: "What if my jewelry doesn't fit?",
          a: "We offer free resizing on most rings within 30 days of purchase. For other items, we'll work with you to find the perfect fit through our exchange program.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-display tracking-tight md:text-5xl">Frequently Asked Questions</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Find answers to common questions about our products, shipping, returns, and more
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          {faqs.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-display">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-display">Still Have Questions?</h2>
              <p className="mb-6 text-muted-foreground">
                Can't find the answer you're looking for? Our customer support team is here to help.
              </p>
              <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:support@miruna.io"
                  className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-medium transition-colors hover:bg-muted"
                >
                  Email Support
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
