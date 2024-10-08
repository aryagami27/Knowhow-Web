import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [slot, setSlot] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@somaiya\.edu$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError('Email must be @somaiya.edu');
      return;
    }

    setError('');
    
    try {
      const slotDocRef = doc(db, 'slots', 'slotCounts');
      const slotDocSnap = await getDoc(slotDocRef);

      if (slotDocSnap.exists()) {
        const slotData = slotDocSnap.data();
        let selectedSlot = '';

        // Check if the chosen slot is available (less than 50)
        if (slot === '10:30am-1:30pm' && slotData.slot1 < 50) {
          selectedSlot = 'slot1RSVPs';
          // Update the slot count
          await updateDoc(slotDocRef, { slot1: slotData.slot1 + 1 });
        } else if (slot === '2pm-5pm' && slotData.slot2 < 50) {
          selectedSlot = 'slot2RSVPs';
          // Update the slot count
          await updateDoc(slotDocRef, { slot2: slotData.slot2 + 1 });
        } else {
          setError('This slot is full. Please choose another one.');
          return;
        }

        // Add RSVP data to the specific slot collection
        await addDoc(collection(db, 'slots', selectedSlot), { name, email });
        alert('RSVP submitted! You will receive an email with details.');

      } else {
        console.error('No slot data found!');
      }

    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const isFormValid = name && email && slot && validateEmail(email);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#17173A] to-[#13131C] p-6">
      <div className="bg-[#13131C] shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-b from-purple-500 to-purple-100 bg-clip-text text-transparent">
          RSVP Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-700 bg-transparent rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3954DF]"
          />
          <input
            type="email"
            placeholder="Email (@somaiya.edu)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-700 bg-transparent rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3954DF]"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <select
            value={slot}
            onChange={(e) => setSlot(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-700 bg-transparent rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#3954DF]"
          >
            <option value="" className="text-black">Select a time slot</option>
            <option value="10:30am-1:30pm" className='text-gray-700'>10:30 am to 01:30 pm</option>
            <option value="2pm-5pm" className='text-gray-700'>02:00 pm to 05:00 pm</option>
          </select>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded-full font-bold transition-colors duration-200 shadow-inner shadow-[#ffffff4f] ${
              isFormValid ? 'bg-green-700 hover:bg-green-600 text-white' : 'bg-gray-500 cursor-not-allowed'
            }`}
          >
            RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

export default RSVPForm;
