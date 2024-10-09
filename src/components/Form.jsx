import React, { useState, useEffect } from "react";
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
} from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [slot, setSlot] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [slotsFull, setSlotsFull] = useState(false);
  const [slotData, setSlotData] = useState({ slot1: 0, slot2: 0 });
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@somaiya\.edu$/;
    return emailRegex.test(email);
  };

  const checkIfRegistered = async (email) => {
    const slot1RSVPRef = collection(doc(db, "slots", "RSVP"), "slot1RSVPS");
    const slot2RSVPRef = collection(doc(db, "slots", "RSVP"), "slot2RSVPS");
    const querySlot1 = query(slot1RSVPRef, where("email", "==", email));
    const querySlot2 = query(slot2RSVPRef, where("email", "==", email));
    const slot1Snapshot = await getDocs(querySlot1);
    const slot2Snapshot = await getDocs(querySlot2);
    return !slot1Snapshot.empty || !slot2Snapshot.empty;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Email must be @somaiya.edu");
      return;
    }

    setError(""); // Clear any existing errors
    setLoading(true); // Start loading

    try {
      await runTransaction(db, async (transaction) => {
        const slotDocRef = doc(db, "slots", "slotCounts");
        const slotDocSnap = await transaction.get(slotDocRef);
        // Normalize email to lowercase for consistency
        const normalizedEmail = email.toLowerCase();

        // References to both RSVP subcollections
        const slot1RSVPRef = collection(doc(db, "slots", "RSVP"), "slot1RSVPS");
        const slot2RSVPRef = collection(doc(db, "slots", "RSVP"), "slot2RSVPS");

        const userSlot1RSVPRef = doc(slot1RSVPRef, normalizedEmail);
        const userSlot2RSVPRef = doc(slot2RSVPRef, normalizedEmail);
        if (!slotDocSnap.exists()) {
          throw new Error(
            "Slot counts not initialized. Please try again later."
          );
        }

        const slotData = slotDocSnap.data();

        const [userSlot1RSVPSnap, userSlot2RSVPSnap] = await Promise.all([
          transaction.get(userSlot1RSVPRef),
          transaction.get(userSlot2RSVPRef),
        ]);

        // Check if the user has already RSVP'd in either slot
        if (userSlot1RSVPSnap.exists() || userSlot2RSVPSnap.exists()) {
          throw new Error("You have already RSVP’d for this event.");
        }

        // Determine the selected slot and check availability
        let selectedSlot = "";
        let rsvpCollectionRef = null;

        if (slot === "10:30am-1:30pm") {
          if (slotData.slot1 >= 48) {
            throw new Error(
              "The 10:30 am - 01:30 pm slot is full. Please choose another one."
            );
          }
          selectedSlot = "slot1";
          rsvpCollectionRef = slot1RSVPRef;
        } else if (slot === "2pm-5pm") {
          if (slotData.slot2 >= 48) {
            throw new Error(
              "The 02:00 pm - 05:00 pm slot is full. Please choose another one."
            );
          }
          selectedSlot = "slot2";
          rsvpCollectionRef = slot2RSVPRef;
        } else {
          throw new Error("Invalid time slot selected.");
        }

        // Increment the slot count
        const updatedSlotData = {};
        updatedSlotData[selectedSlot] = slotData[selectedSlot] + 1;
        transaction.update(slotDocRef, updatedSlotData);

        // Add the RSVP entry to the appropriate subcollection using email as the document ID
        const userRSVPRef = doc(rsvpCollectionRef, normalizedEmail);
        transaction.set(userRSVPRef, {
          name,
          year,
          email: normalizedEmail,
          slot,
          timestamp: new Date(),
        });
      });

      setShowDialog(true); // Show the success dialog
      setName("");
      setEmail("");
      setYear("");
      setSlot("");
    } catch (error) {
      console.error("Error adding document: ", error);
      setError(error.message);
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    navigate("/");
  };

  const isFormValid = name && email && slot && validateEmail(email);

  return (
    <div>
      <div className="min-h-screen flex flex-col relative items-center justify-center bg-gradient-to-b from-[#17173A] to-[#13131C] p-6">
        <img
          src="./nexus.jpg"
          alt="nexuslogo"
          className="sm:absolute h-20 top-8 left-8 rounded-lg mb-2 sm:h-16"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
          <div className="bg-[#13131C] shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-b from-purple-500 to-purple-100 bg-clip-text text-transparent">
              RSVP Form
            </h2>
            {slotsFull ? (
              <p className="text-red-500 text-center">
                All slots are full. The form is now closed.
              </p>
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
                  <option value="" className="text-black">
                    Select your year
                  </option>
                  <option value="FY" className="text-gray-700">
                    FY
                  </option>
                  <option value="SY" className="text-gray-700">
                    SY
                  </option>
                  <option value="TY" className="text-gray-700">
                    TY
                  </option>
                  <option value="LY" className="text-gray-700">
                    LY
                  </option>
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
                  <option value="" className="text-black">
                    Select a time slot
                  </option>
                  <option
                    value="10:30am-1:30pm"
                    className="text-gray-700"
                    disabled={slotData.slot1 >= 48}
                  >
                    10:30 am to 01:30 pm
                  </option>
                  <option
                    value="2pm-5pm"
                    className="text-gray-700"
                    disabled={slotData.slot2 >= 48}
                  >
                    02:00 pm to 05:00 pm
                  </option>
                </select>
                <button
                  type="submit"
                  disabled={!isFormValid || loading}
                  className={`w-full py-2 rounded-full font-bold transition-colors duration-200 shadow-inner shadow-[#ffffff4f] ${
                    isFormValid && !loading
                      ? "bg-green-700 hover:bg-green-600 text-white"
                      : "bg-gray-500 cursor-not-allowed"
                  }`}
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 mx-auto text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {showDialog && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-[#17173A] p-8 rounded-lg shadow-lg justify-center flex flex-col">
            <h3 className="text-xl font-semibold mb-4 flex justify-center">
              RSVP Successful!
            </h3>
            <p className="mb-1 ">Your RSVP has been successfully submitted.</p>
            <p className="mb-4 flex justify-center text-sm text-gray-400">
              You will receive your e-ticket shortly!
            </p>
            <button
              onClick={handleCloseDialog}
              className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700"
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
