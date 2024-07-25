import axios from 'axios';
import { createContext, useState } from 'react';

export const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [allBookings, setAllBookings] = useState([]);
  const [duplicateBookings, setDuplicateBookings] = useState([]);
  const [allRooms, setAllRooms] = useState([]);
  const [duplicateRooms, setDuplicateRooms] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [duplicateUsers, setDuplicateUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAllBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/admin/getallbookings');
      setAllBookings(response.data);
      setDuplicateBookings(response.data);
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
      setDuplicateRooms(response.data);
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
      setDuplicateUsers(response.data);
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
        setAllBookings,
        duplicateBookings,
        setAllRooms,
        duplicateRooms,
        setAllUsers,
        duplicateUsers,
        error,
        loading,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
