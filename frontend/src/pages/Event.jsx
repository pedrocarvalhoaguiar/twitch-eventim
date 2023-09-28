import React  from 'react';
import { useAuth } from '../context/AuthContext';
import EventAdd from '../components/EventAdd';

const LoginPage = () => {
  const { user } = useAuth();

  return (
    <>
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <EventAdd />
      </div>
    </div>
    </>
  );
};

export default LoginPage;