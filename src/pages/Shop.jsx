import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useTranslation } from 'react-i18next';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p className="text-red-600 text-center">Something went wrong with this product.</p>;
    }
    return this.props.children;
  }
}

function Shop() {
  const { t } = useTranslation();
  const [category, setCategory] = useState('All');
  const [displayedProducts, setDisplayedProducts] = useState(products.slice(0, 6));
  const [hasMore, setHasMore] = useState(true);

  const filteredProducts =
    category === 'All' ? products : products.filter((p) => p.category === category);

  const loadMore = () => {
    const nextProducts = filteredProducts.slice(
      displayedProducts.length,
      displayedProducts.length + 6
    );
    if (nextProducts.length === 0) {
      setHasMore(false);
    } else {
      setDisplayedProducts([...displayedProducts, ...nextProducts]);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setDisplayedProducts(
      (e.target.value === 'All' ? products : products.filter((p) => p.category === e.target.value)).slice(0, 6)
    );
    setHasMore(true);
  };

  return (
    <div className="relative w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('Shop')}</h1>
      <div className="mb-4">
        <select
          onChange={handleCategoryChange}
          value={category}
          className="filter-select"
        >
          <option value="All">{t('All')}</option>
          <option value="Earrings">{t('Earrings')}</option>
          <option value="Keychains">{t('Keychains')}</option>
        </select>
      </div>
      <div className="absolute top-10 left-10 opacity-10 pointer-events-none">
        <span className="text-6xl">✨</span> {/* Updated to a sparkle emoji for a youthful vibe */}
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none">
        <span className="text-6xl">🌟</span>
      </div>
      <div className="absolute top-1/3 left-1/4 opacity-10 pointer-events-none">
        <span className="text-6xl">💎</span>
      </div>
      <InfiniteScroll
        dataLength={displayedProducts.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4 className="text-center my-4">{t('Loading')}</h4>}
        endMessage={<p className="text-center my-4">{t('No more products')}</p>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto items-start">
          {displayedProducts.map((product) => (
            <ErrorBoundary key={product.id}>
              <ProductCard product={product} />
            </ErrorBoundary>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Shop;