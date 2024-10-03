const Modal = ({ isOpen, onClose, title, image, extraInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 sm:p-12 p-4" onClick={onClose}>
      <div className="bg-gradient-to-b from-[#252536] to-[#363650] p-6 rounded-xl w-full max-w-[1344px] overflow-y-scroll max-h-[90%] no-scrollbar" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <div className="flex flex-col justify-center md:flex-row gap-3 sm:gap-6 items-center mt-4">
          <img src={image} alt={title} className="w-80 h-auto  rounded-lg" />
          <div className="flex-grow text-white">
            <p className="text-sm sm:text-base"><span className='text-[#AF66DF] text-xl font-bold italic'>Our take:</span> <br/>{extraInfo}</p>
          </div>
        </div>
        <button onClick={onClose} className="bg-[#AF66DF] hover:bg-red-600 transition-all duration-500 ease-out text-white border-none px-4 py-2 rounded-md mt-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
