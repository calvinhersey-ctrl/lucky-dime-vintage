import { useState } from 'react';
import { Instagram, ShoppingBag, Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-cream bg-linen-texture min-h-screen">
      {/* Hero */}
      <section className="bg-charcoal text-cream py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-accent text-gold-light text-xl mb-2">Say Hello</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Contact Us</h1>
          <p className="text-cream/70 text-sm mt-3 max-w-lg mx-auto">
            Have a question about a piece? Looking for something specific? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Send a Message</h2>
            {submitted ? (
              <div className="bg-olive/10 rounded-lg p-8 text-center">
                <CheckCircle size={48} className="text-olive mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Message Sent!</h3>
                <p className="text-charcoal-light text-sm">
                  Thanks for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-olive/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-olive/30"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-1.5">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-olive/30"
                  >
                    <option>General Inquiry</option>
                    <option>Question About a Product</option>
                    <option>Custom / Commission Request</option>
                    <option>Shipping Question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-cream-dark bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-olive hover:bg-olive-dark text-cream px-8 py-3 rounded-full font-medium text-sm uppercase tracking-wider transition-colors"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:pl-8">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Find Us</h2>
            <div className="space-y-6">
              {/* Social Links */}
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/luckydimevintage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-cream-dark/50 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-olive/10 rounded-full flex items-center justify-center">
                    <Instagram size={20} className="text-olive" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">Instagram</p>
                    <p className="text-xs text-warm-gray">@luckydimevintage &middot; 768 followers</p>
                  </div>
                </a>

                <a
                  href="https://www.ebay.com/usr/giddy_throng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-cream-dark/50 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-olive/10 rounded-full flex items-center justify-center">
                    <ShoppingBag size={20} className="text-olive" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">eBay Store</p>
                    <p className="text-xs text-warm-gray">giddy_throng &middot; 100% Positive Feedback</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-cream-dark/50">
                  <div className="w-10 h-10 bg-olive/10 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-olive" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">Email</p>
                    <p className="text-xs text-warm-gray">Use the contact form to reach us</p>
                  </div>
                </div>
              </div>

              {/* Trust Box */}
              <div className="bg-olive/5 rounded-lg p-6 border border-olive/10">
                <h3 className="font-display text-lg font-semibold text-charcoal mb-3">Why Buy From Us?</h3>
                <ul className="space-y-2">
                  {[
                    '100% positive eBay feedback — 190+ reviews',
                    'Selling quality vintage since 2013',
                    '126+ items sold to happy collectors',
                    'Expert packing — every piece ships safe',
                    'Authentic, hand-selected pieces only',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-charcoal-light">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Custom Request Note */}
              <div className="bg-white rounded-lg p-6 border border-cream-dark/50">
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">Looking for Something Special?</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  If you're searching for a specific piece, designer, or era — let us know. We're always on the hunt
                  and may be able to source what you're looking for through our extensive network of dealers and estate
                  connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
