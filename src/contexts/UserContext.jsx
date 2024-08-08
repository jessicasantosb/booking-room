import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import googleOneTap from 'google-one-tap';
import { createContext, useCallback, useEffect, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [googleUser, setGoogleUser] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    const options = {
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      auto_select: false,
      cancel_on_tap_outside: false,
      context: 'signin',
    };

    const googleLogin = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${googleUser.access_token}`,
              Accept: 'application/json',
            },
          }
        );

        localStorage.setItem('currentUser', JSON.stringify(response.data));
        location.href = '/';
      } catch (error) {
        console.error(error);
      }
    };

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

    if (user) setUser(user);
    if (googleUser) googleLogin();
  }, [googleUser]);

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

  const userGoogleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setGoogleUser(codeResponse);
    },
    onError: (error) => console.error('Login Failed:', error),
  });

  const userLogout = useCallback(async () => {
    setUser(null);
    setError(null);
    setLoading(false);
    googleLogout();
    localStorage.removeItem('currentUser');
    location.href = '/login';
  }, []);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegister,
        userGoogleLogin,
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
