import React from 'react';
import Header from '../components/Header'
import { useAuth } from '../context/AuthContext';

function BaseLayout({ children }) {
  // const { user } = useAuth()
  return (
    <div className="App">
      <Header />
      {children}
      {/* You can add a footer here if needed */}
    </div>
  );
}

export default BaseLayout;
