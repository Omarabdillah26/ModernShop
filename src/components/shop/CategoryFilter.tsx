import React from 'react';
import { useApp } from '../../context/AppContext';
import { mockCategories } from '../../utils/mockData';

export function CategoryFilter() {
  const { state, dispatch } = useApp();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        <button
          onClick={() => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: '' })}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            state.selectedCategory === ''
              ? 'bg-blue-50 text-blue-600 font-medium'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          All Products
        </button>
        {mockCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category.name })}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
              state.selectedCategory === category.name
                ? 'bg-blue-50 text-blue-600 font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span>{category.name}</span>
            <span className="text-sm text-gray-500">({category.productCount})</span>
          </button>
        ))}
      </div>
    </div>
  );
}