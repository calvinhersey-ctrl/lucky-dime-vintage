import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ShieldCheck, Package, Truck } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-cream bg-linen-texture min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-warm-gray hover:text-olive transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div>
            <div className="relative bg-white rounded-lg overflow-hidden shadow-sm border border-cream-dark/50 aspect-square">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-olive text-cream text-xs tracking-wider uppercase font-semibold px-4 py-1.5 rounded-full">
                  New Arrival
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-2">
              <span className="text-xs text-warm-gray uppercase tracking-wider">
                {product.category.replace('-', ' & ').replace(/(^|\s)\S/g, (l) => l.toUpperCase())}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-2">
              {product.name}
            </h1>
            {product.subtitle && (
              <p className="text-warm-gray text-lg mb-4">{product.subtitle}</p>
            )}

            <div className="gold-divider my-6" />

            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-display text-4xl font-bold text-olive">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Buy Button */}
            <a
              href={product.ebayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-cream px-8 py-4 rounded-full font-medium text-sm uppercase tracking-wider transition-colors mb-4"
            >
              Purchase on eBay <ExternalLink size={16} />
            </a>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: ShieldCheck, label: '100% Positive Feedback' },
                { icon: Package, label: 'Expert Packing' },
                { icon: Truck, label: 'Secure Shipping' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center p-3 bg-cream-dark/50 rounded-lg">
                  <Icon size={18} className="text-olive mb-1" />
                  <span className="text-[10px] text-warm-gray leading-tight">{label}</span>
                </div>
              ))}
            </div>

            <div className="gold-divider my-6" />

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">Description</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {product.designer && (
                  <div>
                    <span className="text-xs text-warm-gray uppercase tracking-wider">Designer</span>
                    <p className="text-sm text-charcoal font-medium">{product.designer}</p>
                  </div>
                )}
                {product.era && (
                  <div>
                    <span className="text-xs text-warm-gray uppercase tracking-wider">Era</span>
                    <p className="text-sm text-charcoal font-medium">{product.era}</p>
                  </div>
                )}
                {product.origin && (
                  <div>
                    <span className="text-xs text-warm-gray uppercase tracking-wider">Origin</span>
                    <p className="text-sm text-charcoal font-medium">{product.origin}</p>
                  </div>
                )}
                {product.condition && (
                  <div>
                    <span className="text-xs text-warm-gray uppercase tracking-wider">Condition</span>
                    <p className="text-sm text-charcoal font-medium">{product.condition}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Items */}
        {related.length > 0 && (
          <section className="mt-16 sm:mt-20">
            <div className="text-center mb-10">
              <p className="font-accent text-gold text-xl mb-2">You Might Also Like</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">Related Pieces</h2>
              <div className="gold-divider w-24 mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
