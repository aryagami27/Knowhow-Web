import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  doc,
  getDoc,
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
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSlotCounts = async () => {
      try {
        const slotDocRef = doc(db, 'slots', 'slotCounts');
        const slotDocSnap = await getDoc(slotDocRef);
        if (slotDocSnap.exists()) {
          const data = slotDocSnap.data();
          setSlotData(data);
          if (data.slot1 >= 48 && data.slot2 >= 48) {
            setSlotsFull(true);
          }
        } else {
          // Initialize slot counts if the document doesn't exist
          await setDoc(slotDocRef, { slot1: 0, slot2: 0 });
          setSlotData({ slot1: 0, slot2: 0 });
        }
      } catch (err) {
        console.error('Error fetching slot counts:', err);
        setError('Failed to load slot information. Please try again later.');
      }
    };
    fetchSlotCounts();
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@somaiya\.edu$/;
    return emailRegex.test(email);
  };

  const checkIfRegistered = async (email) => {
    try {
      const slot1RSVPRef = collection(doc(db, 'slots', 'RSVP'), 'slot1RSVPS');
      const slot2RSVPRef = collection(doc(db, 'slots', 'RSVP'), 'slot2RSVPS');
      const querySlot1 = query(slot1RSVPRef, where('email', '==', email));
      const querySlot2 = query(slot2RSVPRef, where('email', '==', email));
      const [slot1Snapshot, slot2Snapshot] = await Promise.all([
        getDocs(querySlot1),
        getDocs(querySlot2),
      ]);
      return !slot1Snapshot.empty || !slot2Snapshot.empty;
    } catch (err) {
      console.error('Error checking registration:', err);
      setError('Failed to verify registration. Please try again.');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Email must be @somaiya.edu');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const isAlreadyRegistered = await checkIfRegistered(email);
      if (isAlreadyRegistered) {
        setError('You have already RSVP’d for this event.');
        setLoading(false);
        return;
      }

      await runTransaction(db, async (transaction) => {
        const slotDocRef = doc(db, 'slots', 'slotCounts');
        const slotDocSnap = await transaction.get(slotDocRef);

        if (!slotDocSnap.exists()) {
          transaction.set(slotDocRef, { slot1: 0, slot2: 0 });
        }

        const currentSlotData = slotDocSnap.exists()
          ? slotDocSnap.data()
          : { slot1: 0, slot2: 0 };

        let slotCollectionRef;
        if (slot === '10:30am-1:30pm' && currentSlotData.slot1 < 48) {
          transaction.update(slotDocRef, { slot1: currentSlotData.slot1 + 1 });
          slotCollectionRef = collection(doc(db, 'slots', 'RSVP'), 'slot1RSVPS');
        } else if (slot === '2pm-5pm' && currentSlotData.slot2 < 48) {
          transaction.update(slotDocRef, { slot2: currentSlotData.slot2 + 1 });
          slotCollectionRef = collection(doc(db, 'slots', 'RSVP'), 'slot2RSVPS');
        } else {
          throw new Error('This slot is full. Please choose another one.');
        }

        await addDoc(slotCollectionRef, { name, year, email, slot });
      });

      setShowDialog(true);
    } catch (error) {
      console.error('Error adding document:', error);
      setError(error.message || 'Failed to submit RSVP. Please try again.');
    } finally {
      setLoading(false);
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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mt-8'>
          {/* RSVP Form */}
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
                {/* {error && <p className='text-red-500 text-sm'>{error}</p>} */}
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
                  disabled={!isFormValid || loading}
                  className={`w-full py-2 rounded-full font-bold transition-colors duration-200 shadow-inner shadow-[#ffffff4f] ${
                    isFormValid && !loading
                      ? 'bg-green-700 hover:bg-green-600 text-white'
                      : 'bg-gray-500 cursor-not-allowed'
                  }`}
                >
                  {loading ? (
                    <svg
                      className='animate-spin h-5 w-5 mx-auto text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      />
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      />
                    </svg>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Registration Details */}
          <div className='bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-6 text-white space-y-4 lg:order-2 lg:col-span-1'>
            <h3 className='text-2xl font-bold'>Registration Details</h3>
            <ul className='list-disc list-inside space-y-2'>
              <li>The link will be active until 96 users have registered</li>
              <li>You must register using your official Somaiya email address</li>
              <li>If you cancel, your spot will be made available for others</li>
              <li>Each student can only RSVP once</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Submission Dialog */}
      {showDialog && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50'>
          <div className='bg-[#17173A] p-8 rounded-lg shadow-lg flex flex-col items-center'>
            <h3 className='text-xl font-semibold mb-4 text-center'>RSVP Successful!</h3>
            <p className='mb-1 text-center'>Your RSVP has been successfully submitted.</p>
            <p className='mb-4 text-sm text-gray-400 text-center'>
              You will receive your e-ticket shortly!
            </p>
            <button
              onClick={handleCloseDialog}
              className='px-6 py-2 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700'
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
