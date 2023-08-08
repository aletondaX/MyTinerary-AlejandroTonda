export default function Arrow({ src, alt, fn }) {
  return (
    <div className='p-4 rounded-full bg-white cursor-pointer' onClick={fn}>
      <img className='arrow' src={src} alt={alt} />
    </div>
  )
}