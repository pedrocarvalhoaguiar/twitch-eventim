import React from 'react';
import Header from './Header';

function BaseLayout({ children }) {
  return (
    <div className="App">
      <Header />
      {children}
      {/* You can add a footer here if needed */}
    </div>
  );
}

export default BaseLayout;
