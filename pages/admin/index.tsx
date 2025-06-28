'use client';

import { useState } from 'react';
import { AdminLogin } from './AdminLogin';
import { AdminDashboard } from './AdminDashboard';
import { ProductProvider } from '@/contexts/ProductContext';


export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ProductProvider>
      <div className="min-h-screen bg-gray-50">
        {!isAuthenticated ? (
          <AdminLogin onLogin={() => setIsAuthenticated(true)} />
        ) : (
          <AdminDashboard />
        )}
      </div>
    </ProductProvider>
  );
}