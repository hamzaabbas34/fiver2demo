// import React, { useState } from 'react';

// const questions = [
//   { question: 'What is Netflix?', answer: 'Netflix is a streaming service...' },
//   { question: 'How much does Netflix cost?', answer: 'Plans start at...' },
//   { question: 'Where can I watch?', answer: 'You can watch anywhere...' },
//   // Add more questions as needed
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleQuestion = (index) => {
//     setOpenIndex(index === openIndex ? null : index);
//   };

//   return (
//     <div className="my-12 px-8">
//       <h2 className="text-2xl font-semibold mb-4 font-montserrat">Frequently Asked Questions</h2>
//       {questions.map((item, index) => (
//         <div key={index} className="my-2 ">
//           <button
//             className="w-full text-left py-2 bg-gray-800 rounded px-2 "
//             onClick={() => toggleQuestion(index)}
//           >
//             {item.question}
//           </button>
//           {openIndex === index && (
//             <p className="p-4 bg-gray-900 rounded">{item.answer}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FAQ;

import React, { useState } from 'react';

const questions = [
  { question: 'What is Netflix?', answer: 'Netflix is a streaming service...' },
  { question: 'How much does Netflix cost?', answer: 'Plans start at...' },
  { question: 'Where can I watch?', answer: 'You can watch anywhere...' },
  // Add more questions as needed
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="my-12 px-8">
      <h2 className="text-2xl font-semibold mb-4 font-montserrat">Frequently Asked Questions</h2>
      {questions.map((item, index) => (
        <div key={index} className="my-2">
          <button
            className="w-full text-left  bg-gray-800 rounded px-2 py-4 font-montserrat"
            onClick={() => toggleQuestion(index)}
          >
            {item.question}
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {openIndex === index && (
              <p className="p-4 bg-gray-900 rounded font-montserrat">{item.answer}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
