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
      navigate('/');
    } else {
      alert('Something went wrong while logging in the user!');
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('authTokens');
    setAuthTokens(null);
    setUser(null);
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

    const REFRESH_INTERVAL = 10000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  useEffect(() => {
    if (user?.userId) {
      getProfile();
    }
  }, []);

  const getProfile = async () => {
    if (!user?.userId) return;
    try {
      const response = await fetch(`http://localhost:3000/${user.userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: String(authTokens.accessToken),
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setProfile(data);
      } else if (response.status === 401) {
        logoutUser();
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const contextData = {
    user: user,
    profile: profile,
    getProfile: getProfile,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};