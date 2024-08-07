import axios from 'axios';
import { createContext, useState } from 'react';

export const RoomContext = createContext();

export function RoomProvider({ children }) {
  const [rooms, setRooms] = useState([]);
  const [duplicateRooms, setDuplicateRooms] = useState([]);
  const [room, setRoom] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [duplicatedUserBookings, setDuplicatedUserBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getAllRooms = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/rooms');
      setRooms(response.data);
      setDuplicateRooms(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const getRoom = async (roomid) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/rooms/${roomid}`);
      setRoom(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const bookRoom = async (
    room,
    roomid,
    userid,
    fromDate,
    toDate,
    totalAmount,
    totalDays,
    token
  ) => {
    const bookingData = {
      room,
      roomid,
      userid,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      token,
    };

    try {
      setLoading(true);
      await axios.post('/api/books', bookingData);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const getUserBookings = async (userid) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/books/${userid}`);
      setUserBookings(response.data);
      setDuplicatedUserBookings(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const cancelBooking = async (bookingid, roomid) => {
    try {
      setLoading(true);
      await axios.put(`/api/books/${roomid}/${bookingid}`);
      setLoading(false);
      location.reload();
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <RoomContext.Provider
      value={{
        getAllRooms,
        getRoom,
        getUserBookings,
        bookRoom,
        cancelBooking,
        error,
        loading,
        rooms,
        setRooms,
        room,
        duplicateRooms,
        userBookings,
        setUserBookings,
        duplicatedUserBookings,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
