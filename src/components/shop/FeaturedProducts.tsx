import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { useApp } from '../../context/AppContext';

export function FeaturedProducts() {
  const { state } = useApp();
  const featuredProducts = state.products.filter(product => product.featured);

  if (featuredProducts.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="text-gray-600 mt-2">Discover our handpicked selection of premium items</p>
        </div>
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
          <span>View All</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}