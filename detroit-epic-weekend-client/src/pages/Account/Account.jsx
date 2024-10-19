// import React from 'react'

// export default function Account() {
//   return (
//     <div className='min-h-screen pt-20'>
//        <h1 className='font-bold text-3xl text-center'>Comming Soon!!!</h1>
//     </div>
//   )
// }

import React from 'react';
import { Card, Avatar } from 'flowbite-react';
import { motion } from 'framer-motion';

const Account = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'Exploring the world, one city at a time. Passionate traveler and foodie.',
    location: 'Detroit, MI',
    joinDate: 'Joined in January 2023',
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 md:pt-20">
      {/* Profile Card */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Card className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-lg shadow-md">
          {/* Profile Picture */}
          <div>
            <Avatar img={user.profilePicture} size="xl" rounded={true} />
          </div>

          {/* Profile Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.location}</p>
            <p className="text-sm text-gray-500">{user.joinDate}</p>
            <p className="mt-4 text-gray-700">{user.bio}</p>
          </div>
        </Card>
      </motion.div>

      {/* Settings / Edit Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Account Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Email Notifications</span>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Profile Visibility</span>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Change Password</span>
              <button className="text-blue-500 hover:text-blue-600 font-medium">
                Edit
              </button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Account;
