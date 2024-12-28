import React from 'react';

const reasons = [
  { title: 'Stories tailored to your taste', icon: '📖' },
  { title: 'Cancel or switch plans anytime', icon: '🔄' },
  { title: 'A place just for kids', icon: '❤️' },
  { title: 'For your phone, tablet, laptop and TV', icon: '📱' },
];

const ReasonsToJoin = () => {
  return (
    <div className="my-12 px-8">
      <h2 className="text-2xl font-semibold mb-4 font-montserrat ">More reasons to join</h2>
      <div className="grid grid-cols-4 gap-4">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-gray-800 p-10  rounded text-center">
            <span className="text-3xl font-montserrat ">{reason.icon}</span>
            <p className="mt-2 font-montserrat ">{reason.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsToJoin;
