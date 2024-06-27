import axios from 'axios';
import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserStorage({ children }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
  }

  const userLogin = async (user) => {
    try {
      console.log(user);
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      if (response.data) {
        window.location.href = '/';
        setLoading(false);
        window.localStorage.setItem('token', response.data);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ userLogin, userRegister, error, loading }}>
      {children}
    </UserContext.Provider>
  );
}
