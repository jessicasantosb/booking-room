import axios from 'axios';
import googleOneTap from 'google-one-tap';
import { createContext, useCallback, useEffect, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const options = {
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    auto_select: false,
    cancel_on_tap_outside: false,
    context: 'signin',
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user) setUser(user);

    if (!user) {
      googleOneTap(options, async (response) => {
        const token = {
          token: response.credential,
        };
        const res = await axios.post('/api/users/google-login', token);
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        location.href = '/';
      });
    }
  }, []);

  const userRegister = async (user) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/register', user);

      if (response.data) {
        location.href = '/login';
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const userLogin = async (user) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      if (response.data) {
        setLoading(false);
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        location.href = '/';
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = useCallback(async () => {
    setUser(null);
    setError(null);
    setLoading(false);
    localStorage.removeItem('currentUser');
    location.href = '/login';
  }, []);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegister,
        userLogout,
        error,
        loading,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
