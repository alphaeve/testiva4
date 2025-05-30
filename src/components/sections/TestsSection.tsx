import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Branch } from '../../types/branch';

// Define the prop type for onStart function
type OnStartTest = (test: {
  subject: string;
  duration: string;
  questions: number;
}) => void;

interface TestCardProps {
  subject: string;
  description: string;
  duration: string;
  questions: number;
  icon: React.ReactNode;
  onStart: OnStartTest;
}

const TestCard: React.FC<TestCardProps> = ({
  subject,
  description,
  duration,
  questions,
  icon,
  onStart,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{subject}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={16} className="mr-1" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <BookOpen size={16} className="mr-1" />
          <span>{questions} Questions</span>
        </div>
      </div>
      <Button
        variant="outline"
        fullWidth
        onClick={() => onStart({ subject, duration, questions })}
      >
        Take Test
      </Button>
    </div>
  );
};

interface TestsSectionProps {
  onStartTest: OnStartTest;
  selectedBranch: Branch;
}

const TestsSection: React.FC<TestsSectionProps> = ({
  onStartTest,
  selectedBranch,
}) => {
  const getTests = (branch: Branch) => {
    switch (branch) {
      case 'jee':
        return [
          {
            subject: 'JEE1',
            description:
              'Practice JEE level physics problems covering mechanics, thermodynamics, and more.',
            duration: '60 mins',
            questions: 30,
            icon: <span className="text-xl">⚛</span>,
          },
          {
            subject: 'JEE2',
            description:
              'Test your knowledge of organic, inorganic, and physical chemistry.',
            duration: '60 mins',
            questions: 30,
            icon: <span className="text-xl">⚗️</span>,
          },
          {
            subject: 'JEE3',
            description: 'Solve advanced mathematical problems for JEE preparation.',
            duration: '60 mins',
            questions: 30,
            icon: <span className="text-xl">∑</span>,
          },
          {
            subject: 'JEE4',
            description: 'Complete JEE pattern test covering all subjects.',
            duration: '180 mins',
            questions: 90,
            icon: <span className="text-xl">📝</span>,
          },
        ];
      case 'neet':
        return [
          {
            subject: 'Biology',
            description:
              'Comprehensive biology test covering botany and zoology.',
            duration: '60 mins',
            questions: 30,
            icon: <span className="text-xl">🧬</span>,
          },
          {
            subject: 'Physics',
            description: 'NEET-focused physics problems and concepts.',
            duration: '45 mins',
            questions: 25,
            icon: <span className="text-xl">⚛</span>,
          },
          {
            subject: 'Chemistry',
            description: 'Essential chemistry topics for NEET examination.',
            duration: '45 mins',
            questions: 25,
            icon: <span className="text-xl">⚗️</span>,
          },
          {
            subject: 'Full Mock Test',
            description: 'Complete NEET pattern test simulation.',
            duration: '180 mins',
            questions: 180,
            icon: <span className="text-xl">📝</span>,
          },
        ];
      default:
        return [
          {
            subject: 'Mathematics',
            description:
              'Practice advanced mathematical concepts with our comprehensive test series.',
            duration: '30 mins',
            questions: 20,
            icon: <span className="text-xl">∑</span>,
          },
          {
            subject: 'Science',
            description:
              'Test your understanding of scientific principles and theories.',
            duration: '45 mins',
            questions: 25,
            icon: <span className="text-xl">⚛</span>,
          },
          {
            subject: 'Reasoning',
            description:
              'Enhance your logical thinking and problem-solving abilities.',
            duration: '30 mins',
            questions: 20,
            icon: <span className="text-xl">🧩</span>,
          },
          {
            subject: 'English',
            description:
              'Improve your language proficiency and communication skills.',
            duration: '40 mins',
            questions: 30,
            icon: <span className="text-xl">📝</span>,
          },
        ];
    }
  };

  const tests = getTests(selectedBranch);

  return (
    <section id="tests" className="py-20 bg-gray-50">
      <SectionTitle
        title={`${
          selectedBranch
            ? selectedBranch.charAt(0).toUpperCase() + selectedBranch.slice(1)
            : 'All'
        } Tests`}
        subtitle="Choose from our collection of carefully crafted tests designed to help you excel"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tests.map((test, index) => (
          <TestCard
            key={index}
            {...test}
            onStart={onStartTest}
          />
        ))}
      </div>
    </section>
  );
};

export default TestsSection;




// import React, { useState } from 'react';
// import { Clock, BookOpen } from 'lucide-react';
// import SectionTitle from '../ui/SectionTitle';
// import Button from '../ui/Button';
// import { Branch } from '../../types/branch';

// interface TestCardProps {
//   subject: string;
//   description: string;
//   duration: string;
//   questions: number;
//   icon: React.ReactNode;
//   onStart: () => void;
//   disabled: boolean;
// }

// const TestCard: React.FC<TestCardProps> = ({
//   subject,
//   description,
//   duration,
//   questions,
//   icon,
//   onStart,
//   disabled,
// }) => {
//   return (
//     <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
//       <div className="flex items-center mb-4">
//         <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mr-3">
//           {icon}
//         </div>
//         <h3 className="text-xl font-semibold text-gray-900">{subject}</h3>
//       </div>
//       <p className="text-gray-600 mb-6">{description}</p>
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex items-center text-sm text-gray-500">
//           <Clock size={16} className="mr-1" />
//           <span>{duration}</span>
//         </div>
//         <div className="flex items-center text-sm text-gray-500">
//           <BookOpen size={16} className="mr-1" />
//           <span>{questions} Questions</span>
//         </div>
//       </div>
//       <Button variant="outline" fullWidth onClick={onStart} disabled={disabled}>
//         {disabled ? 'Locked - Pay to Unlock' : 'Take Test'}
//       </Button>
//     </div>
//   );
// };

// const getTests = (branch: Branch) => {
//   switch (branch) {
//     case 'jee':
//       return [
//         {
//           subject: 'JEE1',
//           description: 'Practice JEE level physics problems covering mechanics, thermodynamics, and more.',
//           duration: '60 mins',
//           questions: 30,
//           icon: <span className="text-xl">⚛</span>,
//         },
//         {
//           subject: 'JEE2',
//           description: 'Test your knowledge of organic, inorganic, and physical chemistry.',
//           duration: '60 mins',
//           questions: 30,
//           icon: <span className="text-xl">⚗️</span>,
//         },
//         {
//           subject: 'JEE3',
//           description: 'Solve advanced mathematical problems for JEE preparation.',
//           duration: '60 mins',
//           questions: 30,
//           icon: <span className="text-xl">∑</span>,
//         },
//         {
//           subject: 'JEE4',
//           description: 'Complete JEE pattern test covering all subjects.',
//           duration: '180 mins',
//           questions: 90,
//           icon: <span className="text-xl">📝</span>,
//         },
//       ];
//     case 'neet':
//       return [
//         {
//           subject: 'Biology',
//           description: 'Comprehensive biology test covering botany and zoology.',
//           duration: '60 mins',
//           questions: 30,
//           icon: <span className="text-xl">🧬</span>,
//         },
//         {
//           subject: 'Physics',
//           description: 'NEET-focused physics problems and concepts.',
//           duration: '45 mins',
//           questions: 25,
//           icon: <span className="text-xl">⚛</span>,
//         },
//         {
//           subject: 'Chemistry',
//           description: 'Essential chemistry topics for NEET examination.',
//           duration: '45 mins',
//           questions: 25,
//           icon: <span className="text-xl">⚗️</span>,
//         },
//         {
//           subject: 'Full Mock Test',
//           description: 'Complete NEET pattern test simulation.',
//           duration: '180 mins',
//           questions: 180,
//           icon: <span className="text-xl">📝</span>,
//         },
//       ];
//     default:
//       return [
//         {
//           subject: 'Mathematics',
//           description: 'Practice advanced mathematical concepts with our comprehensive test series.',
//           duration: '30 mins',
//           questions: 20,
//           icon: <span className="text-xl">∑</span>,
//         },
//       ];
//   }
// };

// const loadRazorpayScript = () => {
//   return new Promise<boolean>((resolve) => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// };

// interface TestsSectionProps {
//   selectedBranch: Branch;
//   paid: boolean;
//   setPaid: (paid: boolean) => void;
// }

// const TestsSection: React.FC<TestsSectionProps> = ({ selectedBranch, paid, setPaid }) => {
//   const [loading, setLoading] = useState(false);
//   const tests = getTests(selectedBranch);

//   const handlePayment = async () => {
//     setLoading(true);
//     const res = await loadRazorpayScript();

//     if (!res) {
//       alert('Failed to load Razorpay SDK. Please check your internet connection.');
//       setLoading(false);
//       return;
//     }

//     const options = {
//       key: 'rzp_test_g2jEI9g7RvklAf', // Replace with your Razorpay Key ID (test/live)
//       amount: 100, // Amount in paise (e.g., 10000 paise = ₹100)
//       currency: 'INR',
//       name: 'TESTIVA',
//       description: 'Unlock All Tests',
//       handler: function (response: any) {
//         alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
//         setPaid(true);
//       },
//       prefill: {
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         contact: '9999999999',
//       },
//       theme: {
//         color: '#3399cc',
//       },
//     };

//     const paymentObject = new (window as any).Razorpay(options);
//     paymentObject.open();
//     setLoading(false);
//   };

//   return (
//     <section id="tests" className="py-20 bg-gray-50">
//       <SectionTitle
//         title={`${selectedBranch ? selectedBranch.charAt(0).toUpperCase() + selectedBranch.slice(1) : 'All'} Tests`}
//         subtitle="Choose from our collection of carefully crafted tests designed to help you excel"
//       />

//       {!paid && (
//         <div className="max-w-md mx-auto mb-8 p-6 bg-white rounded shadow text-center">
//           <h2 className="text-xl font-semibold mb-4">Unlock All Tests</h2>
//           <p className="mb-4">Please pay to unlock access to all tests.</p>
//           <Button onClick={handlePayment} disabled={loading}>
//             {loading ? 'Processing...' : 'Pay Now'}
//           </Button>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {tests.map((test, index) => (
//           <TestCard
//             key={index}
//             {...test}
//             onStart={() => alert('Start test: ' + test.subject)}
//             disabled={!paid}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TestsSection;
