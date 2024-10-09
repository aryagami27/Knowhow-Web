import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  query,
  where,
  getDocs,
  runTransaction,
} from 'firebase/firestore';
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
        if (data.slot1 >= 48 && data.slot2 >= 48) {
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

  const checkIfRegistered = async (email) => {
    const slot1RSVPRef = collection(doc(db, 'slots', 'RSVP'), 'slot1RSVPS');
    const slot2RSVPRef = collection(doc(db, 'slots', 'RSVP'), 'slot2RSVPS');
    const querySlot1 = query(slot1RSVPRef, where('email', '==', email));
    const querySlot2 = query(slot2RSVPRef, where('email', '==', email));
    const slot1Snapshot = await getDocs(querySlot1);
    const slot2Snapshot = await getDocs(querySlot2);
    return !slot1Snapshot.empty || !slot2Snapshot.empty;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Email must be @somaiya.edu');
      return;
    }
    setError('');
    try {
      const isAlreadyRegistered = await checkIfRegistered(email);
      if (isAlreadyRegistered) {
        setError('You have already RSVP’d for this event.');
        return;
      }
      await runTransaction(db, async (transaction) => {
        const slotDocRef = doc(db, 'slots', 'slotCounts');
        const slotDocSnap = await transaction.get(slotDocRef);
        if (!slotDocSnap.exists()) {
          throw new Error('Slot data not found');
        }
        const slotData = slotDocSnap.data();
        let selectedSlot = '';
        let slotCollectionRef = null;
        if (slot === '10:30am-1:30pm' && slotData.slot1 < 48) {
          selectedSlot = 'slot1RSVPS';
          transaction.update(slotDocRef, { slot1: slotData.slot1 + 1 });
          slotCollectionRef = collection(
            doc(db, 'slots', 'RSVP'),
            'slot1RSVPS'
          );
        } else if (slot === '2pm-5pm' && slotData.slot2 < 48) {
          selectedSlot = 'slot2RSVPS';
          transaction.update(slotDocRef, { slot2: slotData.slot2 + 1 });
          slotCollectionRef = collection(
            doc(db, 'slots', 'RSVP'),
            'slot2RSVPS'
          );
        } else {
          throw new Error('This slot is full. Please choose another one.');
        }
        await addDoc(slotCollectionRef, { name, year, email, slot });
      });
      setShowDialog(true);
    } catch (error) {
      console.error('Error adding document: ', error);
      setError(error.message);
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    navigate('/');
  };

  const isFormValid = name && email && slot && validateEmail(email);

  return (
    <div>
      <div className='min-h-screen flex flex-col relative items-center justify-center bg-gradient-to-b from-[#17173A] to-[#13131C] p-6'>
        <img
          src='./nexus.jpg'
          alt='nexuslogo'
          className='sm:absolute h-20 top-8 left-8 rounded-lg mb-2 sm:h-16'
        />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl'>
          <div className='bg-[#13131C] shadow-lg rounded-lg p-8'>
            <h2 className='text-3xl font-bold text-center mb-6 bg-gradient-to-b from-purple-500 to-purple-100 bg-clip-text text-transparent'>
              RSVP Form
            </h2>
            {slotsFull ? (
              <p className='text-red-500 text-center'>
                All slots are full. The form is now closed.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                <input
                  type='text'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className='w-full px-4 py-2 border border-gray-700 bg-transparent rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3954DF]'
                />
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                  className='w-full px-4 py-2 border border-gray-700 bg-transparent rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#3954DF]'
                >
                  <option value='' className='text-black'>
                    Select your year
                  </option>
                  <option value='FY' className='text-gray-700'>
                    FY
                  </option>
                  <option value='SY' className='text-gray-700'>
                    SY
                  </option>
                  <option value='TY' className='text-gray-700'>
                    TY
                  </option>
                  <option value='LY' className='text-gray-700'>
                    LY
                  </option>
                </select>
                <input
                  type='email'
                  placeholder='Email (@somaiya.edu)'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='w-full px-4 py-2 border border-gray-700 bg-transparent rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3954DF]'
                />
                {error && <p className='text-red-500 text-sm'>{error}</p>}
                <select
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  required
                  className='w-full px-4 py-2 border border-gray-700 bg-transparent rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#3954DF]'
                >
                  <option value='' className='text-black'>
                    Select a time slot
                  </option>
                  <option
                    value='10:30am-1:30pm'
                    className='text-gray-700'
                    disabled={slotData.slot1 >= 48}
                  >
                    10:30 am to 01:30 pm
                  </option>
                  <option
                    value='2pm-5pm'
                    className='text-gray-700'
                    disabled={slotData.slot2 >= 48}
                  >
                    02:00 pm to 05:00 pm
                  </option>
                </select>
                <button
                  type='submit'
                  disabled={!isFormValid}
                  className={`w-full py-2 rounded-full font-bold transition-colors duration-200 shadow-inner shadow-[#ffffff4f] ${
                    isFormValid
                      ? 'bg-green-700 hover:bg-green-600 text-white'
                      : 'bg-gray-500 cursor-not-allowed'
                  }`}
                >
                  RSVP
                </button>
              </form>
            )}
          </div>
          <div className='bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-6 text-white space-y-4 lg:order-2 lg:col-span-1'>
            <h3 className='text-2xl font-bold'>Registration Details</h3>
            <ul className='list-disc list-inside space-y-2 '>
              <li>The link will be active until 96 users have registered</li>
              <li>
                You must register using your official Somaiya email address
              </li>
              <li>
                If you cancel, your spot will be made available for others
              </li>
              <li>Each student can only RSVP once</li>
            </ul>
          </div>
        </div>
      </div>
      {showDialog && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 text-center shadow-lg'>
            <h3 className='text-2xl font-bold mb-4'>RSVP Successful!</h3>
            <p>You have successfully RSVP'd for the event.</p>
            <button
              className='mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
              onClick={handleCloseDialog}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RSVPForm;
