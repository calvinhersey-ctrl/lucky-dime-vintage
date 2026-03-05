import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, ShoppingBag } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center group">
            <span className="font-display text-2xl sm:text-3xl font-semibold text-charcoal tracking-wide group-hover:text-olive transition-colors">
              Lucky Dime
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-warm-gray font-medium -mt-1">
              Vintage & Design
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide uppercase font-medium transition-colors relative
                  ${isActive(link.to) ? 'text-olive' : 'text-charcoal-light hover:text-olive'}
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300
                  ${isActive(link.to) ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/luckydimevintage/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-light hover:text-olive transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.ebay.com/usr/giddy_throng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-light hover:text-olive transition-colors"
              aria-label="eBay Store"
            >
              <ShoppingBag size={20} />
            </a>
            <button
              className="md:hidden text-charcoal p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Gold accent line */}
      <div className="gold-divider" />

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-b border-cream-dark">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm tracking-wide uppercase font-medium py-2 transition-colors
                  ${isActive(link.to) ? 'text-olive' : 'text-charcoal-light hover:text-olive'}
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
