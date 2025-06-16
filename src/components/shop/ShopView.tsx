import React, { useEffect } from 'react';
import { Hero } from './Hero';
import { FeaturedProducts } from './FeaturedProducts';
import { ProductCard } from './ProductCard';
import { CategoryFilter } from './CategoryFilter';
import { Cart } from './Cart';
import { useApp } from '../../context/AppContext';
import { mockProducts } from '../../utils/mockData';

export function ShopView() {
  const { state, dispatch } = useApp();

  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS', payload: mockProducts });
  }, [dispatch]);

  const filteredProducts = state.products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(state.searchQuery.toLowerCase());
    
    const matchesCategory = !state.selectedCategory || product.category === state.selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Hero />
      
      <FeaturedProducts />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <CategoryFilter />
          <Cart />
        </div>
        
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {state.selectedCategory || 'All Products'}
            </h2>
            <span className="text-gray-500">
              {filteredProducts.length} products found
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33.85-.137 1.651-.497 2.335-1.031L10.5 9.5a1.5 1.5 0 011.414-.094l4.95 2.475a1.5 1.5 0 01.136 2.728l-1.75.875.375 1.875A7.962 7.962 0 0112 21z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}