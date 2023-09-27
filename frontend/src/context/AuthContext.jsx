import { createContext, useState, useEffect, useContext } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authTokens, setAuthTokens] = useState(() => {
    const storedTokens = localStorage.getItem('authTokens');
    return storedTokens ? JSON.parse(storedTokens) : null;
  });
  const [error, setError] = useState(""); 
  const [user, setUser] = useState(() => {
    return authTokens ? jwtDecode(authTokens.accessToken) : null;
  });

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: e.target.email.value, password: e.target.password.value }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('authTokens', JSON.stringify(data));
      setAuthTokens(data);
      setUser(jwtDecode(data.accessToken));
      setError("")
      navigate('/');
    } else {
      const data = await response.json()
      setError(data.error)
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: e.target.email.value, password: e.target.password.value, name: e.target.name.value }),
    });

    if (response.ok) {
      navigate('/login');
    } else {
      const data = await response.json()
      setError(data.error)
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('authTokens');
    setAuthTokens(null);
    setUser(null);
    setProfile(null)
    navigate('/login');
  };

  const updateToken = async () => {
    const response = await fetch('http://localhost:3000/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: authTokens?.refreshToken }),
    });

    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.accessToken));
      localStorage.setItem('authTokens', JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading && authTokens) {
      updateToken();
    }

    const REFRESH_INTERVAL = 100 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  const contextData = {
    user: user,
    profile: profile,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
    registerUser, registerUser,
    error: error,
    setError: setError
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};