// import React, { useState } from 'react';
// import './faq.scss';
// import faqData from "../../fake/fakeFAQData.json"

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const Faq: React.FC<{}> = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const handleMouseEnter = (index: number) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   return (
    
//     <div className="faq-container">
//       <h2>FAQ's</h2>
//       {faqData.map((faq: FAQItem, index: number) => (
//         <div
//           key={index}
//           className="faq-item"
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="faq-question">
//             <h3>{faq.question}</h3>
//             {hoveredIndex === index ? (
//               <span className="arrow up"></span>
//             ) : (
//               <span className="arrow down"></span>
//             )}
//           </div>
//           {hoveredIndex === index && (
//             <p className="faq-answer">{faq.answer}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Faq;


export {}