import React  from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate
import { useAuth } from '../context/AuthContext';
import Register from '../components/Register';
import Logo from '../components/Logo';

const RegisterPage = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Logo/>
        <Register />
      </div>
    </div>
  );
};

export default RegisterPage;