import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Recycle, Eye, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Heart,
    title: 'Restore',
    description: 'We breathe new life into vintage treasures, carefully cleaning, repairing, and preserving each piece to honor its original craftsmanship.',
  },
  {
    icon: Recycle,
    title: 'Repurpose',
    description: 'Every item deserves a second chapter. We find new contexts and uses for beautiful objects, keeping them out of landfills and in loving homes.',
  },
  {
    icon: Eye,
    title: 'Reimagine',
    description: 'We see potential where others see the past. Each piece is curated not just for what it was, but for what it can become in your space.',
  },
  {
    icon: Sparkles,
    title: 'Reuse',
    description: 'Sustainability isn\'t a trend — it\'s our foundation. Choosing vintage means choosing quality that lasts and a lighter footprint on the earth.',
  },
];

export default function About() {
  return (
    <div className="bg-cream bg-linen-texture">
      {/* Hero */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1600&h=600&fit=crop"
            alt="Vintage curated interior"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <p className="font-accent text-gold-light text-xl mb-2">Our Story</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-4">About Lucky Dime</h1>
          <p className="text-cream/70 max-w-xl mx-auto">
            A passion project turned trusted vintage destination.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
                alt="Curated vintage display"
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-accent text-gold text-xl mb-2">The Beginning</p>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-6">
                Born from a Love of Design
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Lucky Dime Vintage and Design started the way the best things do — with a passion that couldn't be contained. What began as a personal love of hunting for mid-century modern treasures at estate sales, flea markets, and antique shops naturally evolved into something bigger.
                </p>
                <p>
                  Since 2013, we've been sharing our finds with collectors and design lovers across the country through our eBay store, building a reputation for quality, authenticity, and exceptional care in every transaction. With over 190 reviews and 100% positive feedback, we've earned the trust of a growing community of vintage enthusiasts.
                </p>
                <p>
                  Every piece in our collection is hand-selected — never bulk-sourced. We look for items with genuine design merit, pieces that defined their era and still have the power to transform a space today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-16 sm:py-20 bg-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-accent text-gold text-xl mb-2">Our Philosophy</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
              Restore. Repurpose. Reimagine. Reuse.
            </h2>
            <div className="gold-divider w-24 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-lg p-6 text-center shadow-sm border border-cream-dark/50">
                <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-olive" />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">{title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Collect */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="font-accent text-gold text-xl mb-2">Our Eye</p>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-6">
                What We Look For
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Our collection spans the mid-20th century and beyond, with a focus on pieces that represent the best of their time and place:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    'Scandinavian enamelware — Cathrineholm and beyond',
                    'Italian glass and lighting — Murano, Valenti, and more',
                    'California ceramics — Tye of California, studio pottery',
                    'English stoneware — Denby, and other heritage makers',
                    'French craftsmanship — Maison Jansen, JARS',
                    'American art and sculpture — Bronze, raku, signed pieces',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Whether it's a pair of Hollywood Regency lamps from France or a butterscotch Cathrineholm bowl from Norway, every piece has been chosen because it brings something special to a home.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop"
                alt="Vintage pottery collection"
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-olive text-cream">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="font-accent text-gold-light text-xl mb-2">Ready to Discover?</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-6">
            Browse the Collection
          </h2>
          <p className="text-cream/80 mb-8">
            Every piece in our shop has been hand-selected with care. Find your next treasure.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-cream text-olive hover:bg-cream-dark px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider transition-colors"
          >
            Shop Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
