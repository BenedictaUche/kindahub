import React, { useState } from 'react';
import ProfilePicture from './ProfilePicture';

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('profile');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'profile':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>Email: john.doe@example.com</p>
            <p>Location: City, Country</p>
          </div>
        );
      case 'activities':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul>
              <li>Offered help to User A (+50 points)</li>
              <li>Received help from User B (-20 points)</li>
            </ul>
          </div>
        );


      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-pink-400 w-1/4 p-4">
        <div className="flex flex-col items-center mb-6">
          <ProfilePicture />
          <div className="ml-4">
            <h2 className="text-white text-xl font-semibold">John Doe</h2>
            <p className="text-gray-200 text-sm">Points: 500</p>
          </div>
        </div>
        {/* Sidebar Navigation */}
        <nav>
          <ul>
            <li
              className={`cursor-pointer ${
                selectedTab === 'profile' ? 'text-white font-bold' : 'text-gray-200'
              }`}
              onClick={() => handleTabClick('profile')}
            >
              Profile
            </li>
            <li
              className={`cursor-pointer mt-2 ${
                selectedTab === 'activities' ? 'text-white font-bold' : 'text-gray-200'
              }`}
              onClick={() => handleTabClick('activities')}
            >
              Recent Activities
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Profile;
