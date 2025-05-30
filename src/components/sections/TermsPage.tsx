// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const TermsPage: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12">
//       <br />
//       <br />
//       <br />
//       <button
//         onClick={() => navigate('/')}
//         onKeyDown={(e) => {
//           if (e.key === 'Enter' || e.key === ' ') {
//             e.preventDefault();
//             navigate('/');
//           }
//         }}
//         className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
//         aria-label="Back to Home"
//       >
//         ← Back to Home
//       </button>

//       <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>

//       <p className="mb-4">
//         Welcome to Testiva! These terms and conditions govern your use of our website and services. By using Testiva, you agree to comply with these terms.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">1. Account & Access</h2>
//       <p className="mb-4">
//         You must provide accurate and complete information during registration. You are responsible for maintaining the confidentiality of your account.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">2. Use of Service</h2>
//       <p className="mb-4">
//         Our content is for educational purposes only. Any misuse, including cheating, plagiarism, or commercial use without permission, is prohibited.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">3. Payment & Refund Policy</h2>
//       <p className="mb-4">
//         Paid test plans are non-refundable unless stated otherwise. All transactions are secure and handled via trusted gateways.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">4. Intellectual Property</h2>
//       <p className="mb-4">
//         All content, including questions, analytics, and UI design, is owned by Testiva. You may not reuse or reproduce without permission.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">5. Termination</h2>
//       <p className="mb-4">
//         We reserve the right to suspend or terminate your account for violations of these terms or any misuse of the platform.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">6. Governing Law</h2>
//       <p className="mb-4">
//         These terms are governed by the laws of India. Any disputes arising from these terms will be subject to the jurisdiction of the courts in India.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">7. Changes to Terms</h2>
//       <p className="mb-4">
//         We reserve the right to modify these terms at any time. Any changes will be posted on this page, and we encourage you to review them periodically.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contact Us</h2>
//       <p className="mb-4">
//         For any questions or concerns, please contact us at support@testiva.in.
//       </p>

//       <p className="text-sm text-gray-500 mt-8">
//         Last updated: {new Date().toLocaleDateString()}
//       </p>
//     </div>
//   );
// };

// export default TermsPage;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <br />
      <br />
      <br />
      <button
        onClick={() => navigate('/')}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back to Home
      </button>

      <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        Welcome to Testiva! These terms and conditions govern your use of our website and services. By using Testiva, you agree to comply with these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Account & Access</h2>
      <p className="mb-4">
        You must provide accurate and complete information during registration. You are responsible for maintaining the confidentiality of your account.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Use of Service</h2>
      <p className="mb-4">
        Our content is for educational purposes only. Any misuse, including cheating, plagiarism, or commercial use without permission, is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Payment & Refund Policy</h2>
      <p className="mb-4">
        Paid test plans are non-refundable unless stated otherwise. All transactions are secure and handled via trusted gateways.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All content, including questions, analytics, and UI design, is owned by Testiva. You may not reuse or reproduce without permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your account for violations of these terms or any misuse of the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Governing Law</h2>
      <p className="mb-4">
        These terms are governed by the laws of India. Any disputes arising from these terms will be subject to the jurisdiction of the courts in India.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these terms at any time. Any changes will be posted on this page, and we encourage you to review them periodically.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        For any questions or concerns, please contact us at support@testiva.in.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default TermsPage;
