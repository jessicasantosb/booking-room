import axios from 'axios';
import { createContext, useState } from 'react';

export const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [allBookings, setAllBookings] = useState([]);
  const [allRooms, setAllRooms] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
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

  const getAllUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/admin/getallusers');
      setAllUsers(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const createRoom = async (newroom) => {
    try {
      setLoading(true);
      await axios.post('/api/admin/createroom', newroom);
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
        getAllUsers,
        createRoom,
        allBookings,
        allRooms,
        allUsers,
        error,
        loading,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
