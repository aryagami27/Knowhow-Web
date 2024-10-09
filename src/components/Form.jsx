import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [slot, setSlot] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');
  const [slotsFull, setSlotsFull] = useState(false);
  const [slotData, setSlotData] = useState({ slot1: 0, slot2: 0 });
  const [showDialog, setShowDialog] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSlotCounts = async () => {
      const slotDocRef = doc(db, 'slots', 'slotCounts');
      const slotDocSnap = await getDoc(slotDocRef);

      if (slotDocSnap.exists()) {
        const data = slotDocSnap.data();
        setSlotData(data);

        if (data.slot1 >= 50 && data.slot2 >= 50) {
          setSlotsFull(true);
        }
      }
    };

    fetchSlotCounts();
  }, []);

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
        let slotCollectionRef = null;

        // Check if the chosen slot is available (less than 50)
        if (slot === '10:30am-1:30pm' && slotData.slot1 < 50) {
          selectedSlot = 'slot1RSVPS';
          // Update the slot count
          await updateDoc(slotDocRef, { slot1: slotData.slot1 + 1 });
          // Reference the subcollection for slot1
          slotCollectionRef = collection(doc(db, 'slots', 'RSVP'), 'slot1RSVPS');
        } else if (slot === '2pm-5pm' && slotData.slot2 < 50) {
          selectedSlot = 'slot2RSVPS';
          // Update the slot count
          await updateDoc(slotDocRef, { slot2: slotData.slot2 + 1 });
          // Reference the subcollection for slot2
          slotCollectionRef = collection(doc(db, 'slots', 'RSVP'), 'slot2RSVPS');
        } else {
          setError('This slot is full. Please choose another one.');
          return;
        }

        await addDoc(slotCollectionRef, { name, year, email, slot });
        setShowDialog(true);

      } else {
        console.error('No slot data found!');
      }

    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    navigate('/'); // Navigate to home on close
  };

  const isFormValid = name && email && slot && validateEmail(email);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#17173A] to-[#13131C] p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* RSVP Form */}
        <div className="bg-[#13131C] shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-b from-purple-500 to-purple-100 bg-clip-text text-transparent">
            RSVP Form
          </h2>
          {slotsFull ? (
            <p className="text-red-500 text-center">All slots are full. The form is now closed.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-700 bg-transparent rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3954DF]"
              />

              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-700 bg-transparent rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#3954DF]"
              >
                <option value="" className="text-black">Select your year</option>
                <option value="FY" className='text-gray-700'>FY</option>
                <option value="SY" className='text-gray-700'>SY</option>
                <option value="TY" className='text-gray-700'>TY</option>
              </select>

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
                <option value="10:30am-1:30pm" className='text-gray-700' disabled={slotData.slot1 >= 48}>10:30 am to 01:30 pm</option>
                <option value="2pm-5pm" className='text-gray-700' disabled={slotData.slot2 >= 48}>02:00 pm to 05:00 pm</option>
              </select>



              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-2 rounded-full font-bold transition-colors duration-200 shadow-inner shadow-[#ffffff4f] ${isFormValid ? 'bg-green-700 hover:bg-green-600 text-white' : 'bg-gray-500 cursor-not-allowed'
                  }`}
              >
                RSVP
              </button>
            </form>
          )}
        </div>

        {/* RSVP Rules */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-6 text-white space-y-4 lg:order-2 lg:col-span-1">
          <h3 className="text-2xl font-bold">Registration Details</h3>
          <ul className="list-disc list-inside space-y-2 ">
            <li>The link will be active until 96 users have registered</li>
            <li>You will be sent an e-ticket a while after your registration</li>
            <li>You will need to show your e-ticket to get admitted to the event.</li>
            <li>Please maintain discipline during your admission to the event.</li>
          </ul>
        </div>
      </div>

      {/* Dialog Box */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#17173A] rounded-lg p-6 w-80 shadow-lg text-center">
            <h3 className="text-lg font-semibold">Thank you for registering!</h3>
            <p className='text-sm'>You will be receiving your e-ticket shortly.</p>
            <button
              onClick={handleCloseDialog}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
            >
              Continue to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RSVPForm;
