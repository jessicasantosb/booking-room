import { Outlet } from 'react-router-dom';
import Header from '../Header';

export default function inde() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
