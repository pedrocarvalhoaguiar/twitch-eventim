import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import BaseLayout from './components/Base';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
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
          <Route path="/register"
            element=
            {<BaseLayout>
              <RegisterPage />
            </BaseLayout>}/>
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
          <Route path="/login"
            element={
              <BaseLayout>
                <LoginPage />
              </BaseLayout>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
