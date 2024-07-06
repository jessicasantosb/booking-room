import { Link } from 'react-router-dom';
import './index.scss';

export default function ProfileDasboard() {
  return (
    <div>
      <Link to={'.'}>my profile</Link>
      <Link to={'bookings'}>bookings</Link>
    </div>
  );
}
