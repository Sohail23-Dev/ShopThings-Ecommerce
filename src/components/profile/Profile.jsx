import React from 'react';

const dummyUser = {
  name: 'Dummy Human',
  email: 'abc@example.com',
  phone: '+1 234 567 890',
  address: '123 Main St, Springfield, USA',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  joined: 'January 2023',
  orders: 12,
  membership: 'Premium',
};

const Profile = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
      <img
        src={dummyUser.avatar}
        alt="User Avatar"
        className="w-28 h-28 rounded-full border-4 border-blue-200 shadow mb-4"
      />
      <h2 className="text-2xl font-bold text-blue-700 mb-1">{dummyUser.name}</h2>
      <p className="text-gray-500 mb-4">{dummyUser.email}</p>
      <div className="w-full flex flex-col gap-2 text-gray-700 text-base">
        <div className="flex justify-between border-b py-2">
          <span className="font-semibold">Phone:</span>
          <span>{dummyUser.phone}</span>
        </div>
        <div className="flex justify-between border-b py-2">
          <span className="font-semibold">Address:</span>
          <span>{dummyUser.address}</span>
        </div>
        <div className="flex justify-between border-b py-2">
          <span className="font-semibold">Joined:</span>
          <span>{dummyUser.joined}</span>
        </div>
        <div className="flex justify-between border-b py-2">
          <span className="font-semibold">Orders:</span>
          <span>{dummyUser.orders}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="font-semibold">Membership:</span>
          <span className="text-blue-600 font-bold">{dummyUser.membership}</span>
        </div>
      </div>
      <button className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow transition-all">Edit Profile</button>
    </div>
  );
};

export default Profile;