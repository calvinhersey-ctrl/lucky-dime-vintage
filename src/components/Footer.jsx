import { Link } from 'react-router-dom';
import { Instagram, ShoppingBag, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-charcoal text-cream">
      <div className="gold-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-semibold text-cream mb-2">Lucky Dime</h3>
            <p className="text-xs tracking-[0.3em] uppercase text-warm-gray mb-4">Vintage & Design</p>
            <p className="font-accent text-xl text-gold-light mb-4">
              Restore, Repurpose, Reimagine & Reuse
            </p>
            <p className="text-sm text-warm-gray leading-relaxed">
              Curated vintage and mid-century modern home goods for collectors and design enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-4">Explore</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/shop', label: 'Shop' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-warm-gray hover:text-gold-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/luckydimevintage/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-warm-gray hover:text-gold-light transition-colors"
              >
                <Instagram size={18} />
                @luckydimevintage
              </a>
              <a
                href="https://www.ebay.com/usr/giddy_throng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-warm-gray hover:text-gold-light transition-colors"
              >
                <ShoppingBag size={18} />
                eBay Store
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-3 text-sm text-warm-gray hover:text-gold-light transition-colors"
              >
                <Mail size={18} />
                Get in Touch
              </Link>
            </div>

            {/* Trust badge */}
            <div className="mt-6 p-4 bg-charcoal-light/50 rounded-lg border border-warm-gray/20">
              <p className="text-xs text-gold-light font-medium uppercase tracking-wider mb-1">Trusted Seller</p>
              <p className="text-sm text-cream">100% Positive Feedback</p>
              <p className="text-xs text-warm-gray">190+ Reviews &middot; Selling since 2013</p>
            </div>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-gray">
            &copy; {new Date().getFullYear()} Lucky Dime Vintage and Design. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-warm-gray hover:text-gold-light transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
