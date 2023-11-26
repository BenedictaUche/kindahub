import React, { useState } from 'react';

const Help = () => {
  const [offerHelpFormData, setOfferHelpFormData] = useState({
    fullName: '',
    email: '',
    location: '',
    offeringDetails: '',
  });

  const [seekHelpFormData, setSeekHelpFormData] = useState({
    fullName: '',
    email: '',
    location: '',
    seekingDetails: '',
  });

  const handleOfferHelpSubmit = (e) => {
    e.preventDefault();
    console.log('Offer Help Form Submitted:', offerHelpFormData);
  };

  const handleSeekHelpSubmit = (e) => {
    e.preventDefault();
    console.log('Seek Help Form Submitted:', seekHelpFormData);
  };

  const handleOfferHelpChange = (e) => {
    setOfferHelpFormData({ ...offerHelpFormData, [e.target.name]: e.target.value });
  };

  const handleSeekHelpChange = (e) => {
    setSeekHelpFormData({ ...seekHelpFormData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-pink-400 mb-8">How Can We Help You?</h2>

       <div className='flex justify-center gap-14'>
        {/* Offer Help Form */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">Offer Help</h3>
          <form onSubmit={handleOfferHelpSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  onChange={handleOfferHelpChange}
                  value={offerHelpFormData.fullName}
                  className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleOfferHelpChange}
                  value={offerHelpFormData.email}
                  className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-400"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-600">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                onChange={handleOfferHelpChange}
                value={offerHelpFormData.location}
                className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-400"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="offeringDetails" className="block text-sm font-medium text-gray-600">
                Details of Offering Help
              </label>
              <textarea
                name="offeringDetails"
                id="offeringDetails"
                rows="4"
                onChange={handleOfferHelpChange}
                value={offerHelpFormData.offeringDetails}
                className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
            >
              Submit Offer
            </button>
          </form>
        </div>

        {/* Seek Help Form */}
        <div>
          <h3 className="text-xl font-bold mb-4">Seek Help</h3>
          <form onSubmit={handleSeekHelpSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  onChange={handleSeekHelpChange}
                  value={seekHelpFormData.fullName}
                  className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleSeekHelpChange}
                  value={seekHelpFormData.email}
                  className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-400"
                />
              </div>

            </div>
            <div className="mt-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-600">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                onChange={handleOfferHelpChange}
                value={seekHelpFormData.location}
                className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-400"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="offeringDetails" className="block text-sm font-medium text-gray-600">
                Details of Offering Help
              </label>
              <textarea
                name="offeringDetails"
                id="offeringDetails"
                rows="4"
                onChange={handleOfferHelpChange}
                value={seekHelpFormData.seekingDetails}
                className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-400"
              ></textarea>
            </div>


            <button
              type="submit"
              className="mt-6 bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
            >
              Submit Request
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
