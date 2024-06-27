import './index.scss'
export default function Error({error}) {
  return (
    <div className='error'>
        <p>{error}</p>
    </div>
  )
}
