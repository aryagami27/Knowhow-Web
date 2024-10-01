function Events() {
  return (
    <div className="mt-20 mb-24">
      <h1 className="sm:text-4xl text-3xl font-bold">
        Upcoming <span style={{ color: '#AF66DF' }}>Events</span>
      </h1>
      <div className="sm:mt-8 mt-4 w-full flex flex-wrap gap-4">
        <div className="flex justify-between items-center sm:p-6 p-4 bg-[rgba(43,43,51,0.7)] rounded-lg shadow-md w-full flex-row sm:max-w-[49%]">
          <div>
            <h2 className="sm:text-xl text-lg font-bold text-white">Event Title</h2>
            <p className="text-gray-400 text-xs sm:text-base">October 10th - October 12th, 2024</p>
          </div>
          <button className="bg-[#03A21C] shadow-[#ffffff4f] shadow-inner text-white px-4 py-2 rounded-full hover:bg-green-500 transition-colors duration-200">
            Enroll
          </button>
        </div>
        <div className="flex justify-between items-center sm:p-6 p-4 bg-[rgba(43,43,51,0.7)] rounded-lg shadow-md w-full sm:max-w-[49%]">
          <div>
            <h2 className="sm:text-xl text-lg font-bold text-white">Another Event</h2>
            <p className="text-gray-400 text-xs sm:text-base ">November 15th - November 17th, 2024</p>
          </div>
          <button className="bg-[#03A21C] shadow-[#ffffff4f] shadow-inner text-white px-4 py-2 rounded-full hover:bg-green-600">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;
