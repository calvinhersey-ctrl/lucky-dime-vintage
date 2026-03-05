import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Package, Clock } from 'lucide-react';
import { products, categories, testimonials } from '../data/products';
import ProductCard from '../components/ProductCard';

const featuredProducts = products.filter((p) => p.isNew).slice(0, 4);
const shopCategories = categories.filter((c) => c.id !== 'all');

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&h=900&fit=crop"
            alt="Curated vintage interior"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-charcoal/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="font-accent text-gold-light text-2xl sm:text-3xl mb-4">
              Curated with care since 2013
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
              Vintage Modern &<br />
              Retro Inspired
            </h1>
            <p className="text-lg sm:text-xl text-cream/80 leading-relaxed mb-8 max-w-lg">
              Discover curated mid-century modern and vintage home goods — lighting, art, pottery, and collectibles chosen for their story and soul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-cream px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider transition-colors"
              >
                Shop the Collection <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 border border-cream/30 hover:border-cream/60 text-cream px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="bg-olive text-cream py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-display text-lg sm:text-xl tracking-wide italic">
            "Restore, Repurpose, Reimagine and Reuse."
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-cream-dark py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: ShieldCheck, label: '100% Positive', sub: 'eBay Feedback' },
              { icon: Star, label: '190+', sub: 'Reviews' },
              { icon: Package, label: '126+', sub: 'Items Sold' },
              { icon: Clock, label: 'Since 2013', sub: 'Trusted Seller' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon size={24} className="text-olive mb-1" />
                <span className="font-display text-xl font-semibold text-charcoal">{label}</span>
                <span className="text-xs text-warm-gray uppercase tracking-wider">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 sm:py-20 bg-cream bg-linen-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-accent text-gold text-xl mb-2">Just Listed</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">New Arrivals</h2>
            <div className="gold-divider w-24 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-olive hover:text-olive-dark font-medium text-sm uppercase tracking-wider transition-colors"
            >
              View All Items <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 sm:py-20 bg-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-accent text-gold text-xl mb-2">Browse By</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">Categories</h2>
            <div className="gold-divider w-24 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {shopCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md border border-cream-dark/50 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-display text-lg font-semibold text-charcoal group-hover:text-olive transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-warm-gray mt-1">
                  {products.filter((p) => p.category === cat.id).length} items
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 sm:py-20 bg-cream bg-linen-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
                alt="Curated vintage collection"
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-accent text-gold text-xl mb-2">The Story</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Curated With Passion
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Lucky Dime Vintage and Design is more than a shop — it's a labor of love. Every piece in our collection has been hand-selected for its design merit, quality craftsmanship, and the story it tells.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-6">
                From Scandinavian enamelware to Italian lighting, California ceramics to English stoneware — we seek out the pieces that defined their era and still elevate a space today.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-olive hover:text-olive-dark font-medium text-sm uppercase tracking-wider transition-colors"
              >
                Read Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-olive text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-accent text-gold-light text-xl mb-2">What Buyers Say</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream">Trusted by Collectors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-gold-light text-gold-light" />
                  ))}
                </div>
                <p className="font-display text-lg italic text-cream/90 mb-3">"{t.text}"</p>
                <p className="text-xs text-cream/60 uppercase tracking-wider">— {t.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 bg-cream-dark">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-accent text-gold text-xl mb-2">Stay in the Loop</p>
          <h2 className="font-display text-3xl font-bold text-charcoal mb-4">New Inventory Alerts</h2>
          <p className="text-charcoal-light text-sm mb-6">
            Be the first to know when new pieces arrive. No spam — just rare finds delivered to your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full border border-cream-dark bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-olive/30"
            />
            <button
              type="submit"
              className="bg-olive hover:bg-olive-dark text-cream px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wider transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
