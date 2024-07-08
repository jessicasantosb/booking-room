import axios from 'axios';
import { createContext, useState } from 'react';

export const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [allBookings, setAllBookings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAllBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/admin/getallbookings');
      setAllBookings(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <AdminContext.Provider
      value={{getAllBookings, allBookings, error, loading}}
    >
      {children}
    </AdminContext.Provider>
  );
}
