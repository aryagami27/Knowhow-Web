function Events() {
  return (
    <div className="mt-20 mb-24">
      <h1 className="text-4xl font-bold">
        Upcoming <span style={{ color: '#AF66DF' }}>Events</span>
      </h1>
      <div className="mt-8 w-full flex flex-row space-x-6">
        <div className="flex justify-between items-center p-6 bg-[rgba(43,43,51,0.7)] rounded-lg shadow-md w-full flex-row">
          <div>
            <h2 className="text-xl font-bold text-white">Event Title</h2>
            <p className="text-gray-400">October 10th - October 12th, 2024</p>
          </div>
          <button className="bg-[#03A21C] text-white px-4 py-2 rounded-full hover:bg-green-500 transition-colors duration-200">
            Enroll Now
          </button>
        </div>
        <div className="flex justify-between items-center p-6 bg-[rgba(43,43,51,0.7)] rounded-lg shadow-md w-full">
          <div>
            <h2 className="text-xl font-bold text-white">Another Event</h2>
            <p className="text-gray-400">November 15th - November 17th, 2024</p>
          </div>
          <button className="bg-[#03A21C] text-white px-4 py-2 rounded-full hover:bg-green-500">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;
