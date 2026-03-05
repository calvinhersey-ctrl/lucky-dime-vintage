import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-cream-dark/50">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-square">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-olive text-cream text-[10px] tracking-wider uppercase font-semibold px-3 py-1 rounded-full">
            New Arrival
          </span>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-charcoal text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-full">
            View Details
          </span>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-lg font-semibold text-charcoal leading-tight group-hover:text-olive transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        {product.subtitle && (
          <p className="text-xs text-warm-gray mt-1">{product.subtitle}</p>
        )}
        <div className="flex items-center justify-between mt-3">
          <span className="font-display text-xl font-semibold text-olive">
            ${product.price.toFixed(2)}
          </span>
          <a
            href={product.ebayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-gold-dark hover:text-gold font-medium transition-colors"
          >
            Buy on eBay <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
