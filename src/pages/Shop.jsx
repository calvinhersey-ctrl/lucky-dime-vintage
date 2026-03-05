import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A to Z' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q) ||
          p.designer?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [activeCategory, sortBy, searchQuery]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const priceRange = useMemo(() => {
    if (filteredProducts.length === 0) return null;
    const prices = filteredProducts.map((p) => p.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }, [filteredProducts]);

  return (
    <div className="bg-cream bg-linen-texture min-h-screen">
      {/* Page Header */}
      <section className="bg-charcoal text-cream py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-accent text-gold-light text-xl mb-2">The Collection</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Shop</h1>
          <p className="text-cream/70 text-sm mt-3 max-w-lg mx-auto">
            Each piece hand-selected for its design, craftsmanship, and story.
            {priceRange && ` Prices range from $${priceRange.min} to $${priceRange.max}.`}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search & Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name, designer, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 rounded-full border border-cream-dark bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-olive/30"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 rounded-full border border-cream-dark bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-olive/30"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2.5 rounded-full border border-cream-dark bg-white text-charcoal text-sm"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Categories — Desktop */}
          <aside className="hidden md:block w-56 shrink-0">
            <h3 className="font-display text-lg font-semibold text-charcoal mb-4">Categories</h3>
            <nav className="flex flex-col gap-1">
              {categories.map((cat) => {
                const count = cat.id === 'all'
                  ? products.length
                  : products.filter((p) => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`text-left text-sm py-2 px-3 rounded-lg transition-colors flex justify-between items-center
                      ${activeCategory === cat.id
                        ? 'bg-olive text-cream font-medium'
                        : 'text-charcoal-light hover:bg-cream-dark'
                      }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-xs ${activeCategory === cat.id ? 'text-cream/70' : 'text-warm-gray'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Mobile Category Drawer */}
          {showFilters && (
            <div className="md:hidden fixed inset-0 z-50 bg-charcoal/50" onClick={() => setShowFilters(false)}>
              <div
                className="absolute right-0 top-0 bottom-0 w-72 bg-cream p-6 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-display text-lg font-semibold text-charcoal">Categories</h3>
                  <button onClick={() => setShowFilters(false)} className="text-charcoal">
                    <X size={20} />
                  </button>
                </div>
                <nav className="flex flex-col gap-1">
                  {categories.map((cat) => {
                    const count = cat.id === 'all'
                      ? products.length
                      : products.filter((p) => p.category === cat.id).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          handleCategoryChange(cat.id);
                          setShowFilters(false);
                        }}
                        className={`text-left text-sm py-2 px-3 rounded-lg transition-colors flex justify-between items-center
                          ${activeCategory === cat.id
                            ? 'bg-olive text-cream font-medium'
                            : 'text-charcoal-light hover:bg-cream-dark'
                          }`}
                      >
                        <span>{cat.name}</span>
                        <span className={`text-xs ${activeCategory === cat.id ? 'text-cream/70' : 'text-warm-gray'}`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Active filter pill */}
            {activeCategory !== 'all' && (
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-warm-gray uppercase tracking-wider">Filtered by:</span>
                <button
                  onClick={() => handleCategoryChange('all')}
                  className="inline-flex items-center gap-1 bg-olive/10 text-olive text-xs font-medium px-3 py-1 rounded-full"
                >
                  {categories.find((c) => c.id === activeCategory)?.name}
                  <X size={12} />
                </button>
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-display text-2xl text-charcoal mb-2">No items found</p>
                <p className="text-warm-gray text-sm">Try adjusting your search or filters.</p>
              </div>
            ) : (
              <>
                <p className="text-xs text-warm-gray mb-4">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
