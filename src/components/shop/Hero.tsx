import React from 'react';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl overflow-hidden mb-12">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative px-8 py-16 lg:px-16 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Discover Premium 
            <span className="block text-blue-200">Products</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Curated collection of high-quality products with seamless shopping experience 
            and fast, secure delivery.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2 group">
            <span>Shop Now</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Features */}
      <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="px-8 py-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-white">
              <Zap className="h-6 w-6 text-yellow-400" />
              <span className="font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Shield className="h-6 w-6 text-green-400" />
              <span className="font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Truck className="h-6 w-6 text-blue-400" />
              <span className="font-medium">Free Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}