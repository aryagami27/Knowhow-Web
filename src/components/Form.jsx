import React, { useState } from 'react';
import { db } from './firebase'; // import Firestore config
import { collection, addDoc } from 'firebase/firestore'; 

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [slot, setSlot] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add RSVP data to Firestore
      await addDoc(collection(db, 'rsvps'), { name, email, slot });
      // Trigger cloud function to send email
      alert('RSVP submitted! You will receive an email with details.');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select value={slot} onChange={(e) => setSlot(e.target.value)} required>
        <option value="">Select a time slot</option>
        <option value="9am-10am">9am - 10am</option>
        <option value="10am-11am">10am - 11am</option>
        <option value="11am-12pm">11am - 12pm</option>
      </select>
      <button type="submit">RSVP</button>
    </form>
  );
};

export default RSVPForm;
