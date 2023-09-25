import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import BaseLayout from './components/Base'; // Import your BaseLayout component

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <BaseLayout>
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              </BaseLayout>
            }
          />
          <Route
            path="/1"
            element={
              <BaseLayout>
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              </BaseLayout>
            }
          />
          <Route
            path="/2"
            element={
              <BaseLayout>
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              </BaseLayout>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
