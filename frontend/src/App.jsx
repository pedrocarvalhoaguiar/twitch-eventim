import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import BaseLayout from './components/Base';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './utils/PrivateRoute';
import EventAdd from './pages/EventAdd'
import MyEvents from './pages/MyEvents';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <BaseLayout>
                <HomePage />
              </BaseLayout>
            }
          />
          <Route path="/register"
            element=
            {<BaseLayout>
              <RegisterPage />
            </BaseLayout>} />
          <Route path="/event/add"
            element=
            {<BaseLayout>
              <PrivateRoute>
                <EventAdd />
              </PrivateRoute>
            </BaseLayout>} />
          <Route path="/login"
            element={
              <BaseLayout>
                <LoginPage />
              </BaseLayout>} />
          <Route
            path="/my-events"
            element={
              <BaseLayout>
                <PrivateRoute>
                  <MyEvents />
                </PrivateRoute>
              </BaseLayout>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
