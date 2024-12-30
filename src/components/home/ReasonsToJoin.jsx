import React from 'react';

const reasons = [
  { title: 'Stories tailored to your taste', icon: '📖' },
  { title: 'Cancel or switch plans anytime', icon: '🔄' },
  { title: 'A place just for kids', icon: '❤️' },
  { title: 'For your phone, tablet, laptop and TV', icon: '📱' },
];

const ReasonsToJoin = () => {
  return (
    <div className=" py-10 px-8  ">
      <h2 className="text-2xl font-semibold mb-4 font-montserrat ">More reasons to join</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-gray-800 md:p-10 p-5  rounded text-center">
            <span className="text-3xl font-montserrat ">{reason.icon}</span>
            <p className="mt-2 font-montserrat ">{reason.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsToJoin;
