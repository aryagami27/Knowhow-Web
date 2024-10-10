import React, { useState, useEffect } from "react";
import { collection, addDoc, doc, getDoc, updateDoc, query, where, getDocs, runTransaction, Timestamp } from "firebase/firestore";
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
  const [overlay, setOverlay] = useState(false); // new state for overlay

  const navigate = useNavigate();

  useEffect(() => {
    const checkSlotAvailability = async () => {
      const slotDocRef = doc(db, "slots", "slotCounts");
      const slotDocSnap = await getDoc(slotDocRef);
      if (slotDocSnap.exists()) {
        const slotData = slotDocSnap.data();
        if (slotData.slot1 >= 48 && slotData.slot2 >= 48) {
          setSlotsFull(true);
          setOverlay(true); // show overlay if all slots are full
        }
      }
    };
    checkSlotAvailability();
  }, []);

  // ... rest of the code remains the same ...

  return (
    <div>
      {overlay && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-[#17173A] p-8 rounded-lg shadow-lg justify-center flex flex-col">
            <h3 className="text-xl font-semibold mb-1 flex justify-center text-center">
              Sorry! This form has been closed
            </h3>
            <p className="mb-4 flex justify-center text-sm">
              The event slots have been filled
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700"
            >
              Continue to Home
            </button>
          </div>
        </div>
      )}
      {/* rest of the code remains the same */}
    </div>
  );
};

export default RSVPForm;