import './index.scss'
export default function Error({error}) {
  return (
    <section className='error container'>
      <div className='error__content'>
        <p>Something went wrong. Please try again later</p>
        <p>{error}</p>
      </div>
    </section>
  )
}
