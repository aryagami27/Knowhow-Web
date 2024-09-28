import React from 'react';

function Events() {
  return (
    <div className="mt-20 mb-24">
      {/* Title */}
      <h1 className="text-4xl font-bold">
        Upcoming <span style={{ color: '#AF66DF' }}>Events</span>
      </h1>

      {/* Event Container */}
      <div className="mt-8 space-y-6 w-full ">
        {/* Event Box */}
        <div className="flex justify-between items-center p-6 bg-[rgba(43,43,51,0.7)] rounded-lg shadow-md w-full">
          {/* Event Details */}
          <div>
            <h2 className="text-xl font-bold text-white">Event Title</h2>
            <p className="text-gray-400">October 10th - October 12th, 2024</p>
          </div>

          {/* Enroll Button */}
          <button className="bg-[#03A21C] text-white px-4 py-2 rounded-full hover:bg-green-500 transition-colors duration-200">
            Enroll Now
          </button>
        </div>

        {/* Additional Event Box Example (you can repeat this) */}
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
