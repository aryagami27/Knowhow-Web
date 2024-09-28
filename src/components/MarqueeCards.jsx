function MarqueeCards({image}) {
  return (
    <div className='md:w-[300px] w-[200px] h-[150px] rounded-3xl md:h-[200px] md:mx-4 mx-2 shadow-md shadow-black'>
      <img src={image} className='w-full rounded-3xl h-full object-cover' />
    </div>
  )
}

export default MarqueeCards
