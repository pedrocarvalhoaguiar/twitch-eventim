import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { Link } from 'react-router-dom'; // Import the Link component

const HomePage = () => {
  const { profile, logoutUser } = useAuth();

  return (
    <div style={{backgroundColor: "black"}}>
      <p>You are logged in to the homepage!</p>
      {profile && (
        <>
          <p style={{ color: 'blue' }}>Name: {profile.name} {profile.surname}</p>
          <p>Email: {profile.email}</p>
          <button style={{ color: 'blue' }} onClick={(e) => (logoutUser(e))}>Sair</button>

          {/* Add navigation links */}
          <div>
            <Link to="/1">Go to /1</Link>
          </div>
          <div>
            <Link to="/2">Go to /2</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
