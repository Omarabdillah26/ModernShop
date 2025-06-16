import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { ShopView } from './components/shop/ShopView';
import { AdminView } from './components/admin/AdminView';

function AppContent() {
  const { state } = useApp();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {state.currentView === 'shop' && <ShopView />}
        {state.currentView === 'admin' && <AdminView />}
      </main>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;