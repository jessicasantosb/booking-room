import axios from 'axios';
import { createContext, useCallback, useState } from 'react';

export const UserContext = createContext();

export function UserStorage({ children }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(null);
  const [userData, setUserData] = useState(null);

  const userRegister = async (user) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/register', user);

      if (response.data) {
        window.location.href = '/login';
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
        location.href = '/';
        setLoading(false);
        localStorage.setItem(
          'currentUser',
          JSON.stringify(response.data)
        );
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = useCallback(async () => {
    setUserData(null);
    setError(null);
    setLoading(false);
    setIsLogged(false);
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
        isLogged,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
