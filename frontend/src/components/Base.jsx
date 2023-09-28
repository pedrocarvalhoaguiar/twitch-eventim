import React from 'react';
import Header from '../components/Header'

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
