import { Product, Category } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with active noise cancellation and premium sound quality.',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    stock: 25,
    rating: 4.8,
    reviews: 127,
    featured: true,
    tags: ['wireless', 'audio', 'premium']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and smart notifications.',
    price: 249.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    stock: 18,
    rating: 4.6,
    reviews: 89,
    featured: true,
    tags: ['fitness', 'smart', 'health']
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Sustainable and comfortable organic cotton t-shirt in multiple colors.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion',
    stock: 50,
    rating: 4.4,
    reviews: 203,
    featured: false,
    tags: ['organic', 'cotton', 'sustainable']
  },
  {
    id: '4',
    name: 'Modern Table Lamp',
    description: 'Sleek and modern table lamp with adjustable brightness and USB charging port.',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home',
    stock: 12,
    rating: 4.7,
    reviews: 45,
    featured: false,
    tags: ['modern', 'lighting', 'home']
  },
  {
    id: '5',
    name: 'Professional Camera',
    description: 'High-resolution digital camera perfect for professional photography.',
    price: 1299.99,
    originalPrice: 1499.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    stock: 8,
    rating: 4.9,
    reviews: 67,
    featured: true,
    tags: ['camera', 'professional', 'photography']
  },
  {
    id: '6',
    name: 'Luxury Skincare Set',
    description: 'Complete skincare routine with natural ingredients for radiant skin.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Beauty',
    stock: 30,
    rating: 4.5,
    reviews: 156,
    featured: false,
    tags: ['skincare', 'luxury', 'natural']
  }
];

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 3
  },
  {
    id: '2',
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 1
  },
  {
    id: '3',
    name: 'Home',
    slug: 'home',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 1
  },
  {
    id: '4',
    name: 'Beauty',
    slug: 'beauty',
    image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 1
  }
];