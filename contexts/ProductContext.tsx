'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  medium: string;
  size: string;
  isAvailable: boolean;
  createdAt: string;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const initialProducts: Product[] = [
  {
    id: '1',
    title: "Realistic Portrait Study",
    description: "Detailed pencil portrait capturing natural expressions and emotions with exceptional attention to detail.",
    price: 2500,
    image: "/IMG_20250315_124536.jpg",
    category: "Pencil Art",
    medium: "Graphite on Paper",
    size: "16x20 inches",
    isAvailable: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: "Charcoal Portrait",
    description: "Professional charcoal artwork with dramatic lighting and deep contrasts.",
    price: 1800,
    image: "/IMG-20250624-WA0024.jpg",
    category: "Charcoal Art",
    medium: "Charcoal on Paper",
    size: "14x18 inches",
    isAvailable: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    title: "Contemporary Portrait",
    description: "Modern artistic interpretation with fine details and contemporary styling.",
    price: 2200,
    image: "/IMG-20250624-WA0027.jpg",
    category: "Mixed Media",
    medium: "Pencil & Charcoal",
    size: "18x24 inches",
    isAvailable: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    title: "Digital Portrait",
    description: "Digital artwork with traditional art influence and modern techniques.",
    price: 2000,
    image: "/IMG-20250624-WA0023.jpg",
    category: "Digital Art",
    medium: "Digital",
    size: "Print Ready",
    isAvailable: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '5',
    title: "Digital Portrait",
    description: "Digital artwork with traditional art influence and modern techniques.",
    price: 2000,
    image: "/IMG-20250624-WA0023.jpg",
    category: "Digital Art",
    medium: "Digital",
    size: "Print Ready",
    isAvailable: true,
    createdAt: new Date().toISOString()
  }

  
];

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setProducts(prev => [newProduct, ...prev]);
  };

  const updateProduct = (id: string, productData: Partial<Product>) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id ? { ...product, ...productData } : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      selectedProduct,
      setSelectedProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}