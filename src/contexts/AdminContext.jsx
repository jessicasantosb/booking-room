import axios from 'axios';
import { createContext, useState } from 'react';

export const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [allBookings, setAllBookings] = useState([]);
  const [allRooms, setAllRooms] = useState([]);
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

  const getAllRooms = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/admin/getallrooms');
      setAllRooms(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        getAllBookings,
        getAllRooms,
        allBookings,
        allRooms,
        error,
        loading,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
