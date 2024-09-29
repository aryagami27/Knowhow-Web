import Events from './Events'

function About() {
  return (
    <div>
      <Events />
      <div className="col-span-2 mt-12">
        <h2 className="sm:text-4xl text-3xl font-bold text-white text-center sm:mb-4">
          About <span className="text-[#AF66DF]">KnowHow</span>
        </h2>
        <p className="text-center sm:text-lg text-gray-300 mb-12">
          Learn about the mission and the journey of our community
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="mt-4 sm:flex max-w-[1200px] max-h-[800px] justify-center items-center hidden">
          <div className="grid grid-cols-6 gap-2">
            <div className="bg-[#24242C] rounded-2xl w-full h-full col-span-4 row-span-1 p-5 aspect-[4/1]">
              <p className='font-bold text-2xl'>The Spark</p>
              <p className='text-lg mt-1'>Every idea begins as a spark—fueled by curiosity, shaped by experience, and driven by a desire to learn. KnowHow was born from that very spark, a vision to create a space where knowledge flows freely and solutions take form.</p>
            </div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-1 col-span-2 flex items-center justify-center aspect-[2/1]">
              Animation Maybe
            </div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-1 col-span-2 flex justify-center items-center aspect-[2/1]">Animation Maybe</div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-2 col-span-2 aspect-square">
              <img src='./ai.webp' className='w-full h-full object-cover rounded-2xl' />
            </div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-2 col-span-2 p-5 aspect-square">
              <p className='font-bold text-2xl'>Unlock Your Potential with KnowHow</p>
              <p className='text-lg mt-1'>At KnowHow, we provide the tools, resources, and community to turn your curiosity into action. Whether you're looking to learn, share, or innovate, KnowHow is where your next big idea begins.</p>
            </div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-2 col-span-2 p-5 aspect-square">
              <p className='font-bold text-2xl'>The Journey</p>
              <p className='text-lg mt-1'>Like a path winding through uncharted territory, we guide the seekers—the innovators, the problem solvers—on their quest for answers. With each step, new doors open, leading to discovery, growth, and mastery.</p>
            </div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-1 col-span-1 aspect-square">
              <img src='./appdev.webp' className='w-full h-full object-cover rounded-2xl' />
            </div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-1 col-span-2 flex justify-center items-center">Animation Maybe</div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full col-span-1 row-span-1 aspect-square">
              <img src='./appdev.webp' className='w-full h-full object-cover rounded-2xl' />
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center sm:hidden">
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-[#24242C] rounded-2xl w-full h-full col-span-4 row-span-1 p-2 aspect-[4/1] text-ellipsis">
              <p className='font-bold text-sm'>The Spark</p>
              <p className='text-[10px] text-ellipsis'>Every idea begins as a spark—fueled by curiosity, shaped by experience, and driven by a desire to learn. KnowHow was born from that very spark, a vision to create a space where knowledge flows freely and solutions take form.</p>
            </div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-1 col-span-2 flex items-center justify-center aspect-[2/1]">
              Animation Maybe
            </div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-2 col-span-2 aspect-square">
              <img src='./ai.webp' className='w-full h-full object-cover rounded-2xl' />
            </div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-2 col-span-2 p-2 aspect-square text-ellipsis">
              <p className='font-bold text-sm'>The Journey</p>
              <p className='text-[10px] text-ellipsis'>Like a path winding through uncharted territory, we guide the seekers—the innovators, the problem solvers—on their quest for answers. With each step, new doors open, leading to discovery, growth, and mastery.</p>
            </div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-1 col-span-2 flex justify-center items-center aspect-[2/1]">Animation Maybe</div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-1 col-span-1 aspect-square">
              <img src='./appdev.webp' className='w-full h-full object-cover rounded-2xl' />
            </div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full col-span-1 row-span-1 aspect-square">
              <img src='./appdev.webp' className='w-full h-full object-cover rounded-2xl' />
            </div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-2 col-span-2 p-2 aspect-square text-ellipsis">
              <p className='font-bold text-sm'>Unlock Your Potential with KnowHow</p>
              <p className='text-[10px] text-ellipsis'>At KnowHow, we provide the tools, resources, and community to turn your curiosity into action. Whether you're looking to learn, share, or innovate, KnowHow is where your next big idea begins.</p>
            </div>
            <div className="bg-[#24242C] rounded-2xl w-full h-full row-span-1 col-span-2 flex justify-center items-center">Animation Maybe</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
