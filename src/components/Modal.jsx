const Modal = ({ isOpen, onClose, title, image, extraInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-gradient-to-b from-[#252536] to-[#363650] p-6 rounded-xl w-full max-w-[1344px] md:w-11/12 lg:w-3/4 xl:w-2/3" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <div className="flex items-center mt-4">
          <img src={image} alt={title} className="w-80 h-auto mr-4 rounded-lg" />
          <div className="flex-grow text-white">
            <p><span className='text-[#AF66DF] text-xl font-bold italic'>Our take:</span> <br/>{extraInfo}</p>
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
