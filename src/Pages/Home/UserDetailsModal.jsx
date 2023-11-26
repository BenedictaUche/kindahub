import React from "react";

const UserDetailsModal = ({ user, onClose }) => {
  return (
    <div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div
              className="absolute inset-0 bg-gray-500 opacity-75"
              onClick={onClose}
            ></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex flex-col items-center gap-10">
                <img
                  src={user.image}
                  alt={user.title}
                  className="rounded-full object-cover h-60 w-60"
                />
                <h2 className="text-2xl font-medium mb-4 text-[40px] font-['Inter']">
                  {user.name}
                </h2>
              </div>
              <div className="text-pink-500 text-[20px] font-medium">
                <p className="mb-10">{user.location}</p>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-4">
              <button
                type="button"
                className="w-[140px] h-[3em] rounded-[10px] border-2 border-pink-400 text-pink-950 text-lg"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
