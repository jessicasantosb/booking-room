import axios from 'axios';
import { createContext, useState } from 'react';

export const RoomContext = createContext();

export function RoomProvider({ children }) {
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getAllRooms = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/rooms/getallrooms');
      setRooms(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const getRoom = async (roomid) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/rooms/getroombyid', {
        roomid: roomid,
      });
      setRoom(response.data);
      setLoading(false);
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
        error,
        loading,
        rooms,
        room,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
