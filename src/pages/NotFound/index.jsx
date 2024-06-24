import { Link } from 'react-router-dom';
import './index.scss'

export default function NotFound() {
  return (
    <section className='notfound'>
      <h1 className='notfound__title'>404</h1>
      <p>something went wrong!</p>
      <Link to={'/'} className='notfound__link'>Go back to home page</Link>      
    </section>
  )
}
