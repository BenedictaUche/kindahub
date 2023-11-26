import React from 'react';

const OfferModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-sm">
      <div className="bg-gradient-to-b from-pink-700 to-rose-400 p-8 rounded-md shadow-md relative text-white">
        <button onClick={onClose} className="absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white hover:text-stone-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.293 10L15.146 6.146a.5.5 0 10-.708-.708L10.293 9.293 6.146 5.146a.5.5 0 10-.708.708L9.293 10l-3.147 3.146a.5.5 0 00.708.708L10.293 10l3.146 3.146a.5.5 0 00.708-.708L11.293 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">Offer Help</h2>
        <p className=" mb-4">Please fill out the form below to offer assistance</p>
        <form>
          <label htmlFor="message" className="block text-sm font-medium ">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            className="w-full border rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring focus:border-pink-300"
          ></textarea>
          <div className='inline-flex items-center align-middle'>
          <button
            className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
            type="submit"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfferModal;
