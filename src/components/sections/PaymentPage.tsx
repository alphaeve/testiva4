// // import { useLocation, useNavigate } from 'react-router-dom';
// // import { useEffect } from 'react';

// // declare global {
// //   interface Window {
// //     Razorpay: any;
// //   }
// // }

// // const PaymentPage = () => {
// //   const { state } = useLocation();
// //   const navigate = useNavigate();

// //   const { subject, branch, duration, questions } = state || {};

// //   useEffect(() => {
// //     const script = document.createElement('script');
// //     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
// //     script.async = true;
// //     document.body.appendChild(script);

// //     return () => {
// //       document.body.removeChild(script);
// //     };
// //   }, []);

// //   const handlePayment = () => {
// //     const options = {
// //       key: 'rzp_test_g2jEI9g7RvklAf', // Hardcoded test key (replace with your test key)
// //       amount: 49900, // ₹499 in paise
// //       currency: 'INR',
// //       name: 'Testiva',
// //       description: `${branch?.toUpperCase() || ''} - ${subject || ''} Test Payment`,
// //       handler: function (response: any) {
// //         console.log('Payment successful:', response);

// //         alert('Payment successful!');
// //         navigate('/'); // Redirect after success
// //       },
// //       prefill: {
// //         name: 'Student Name',
// //         email: 'student@example.com',
// //       },
// //       theme: {
// //         color: '#0f172a',
// //       },
// //     };

// //     if (!window.Razorpay) {
// //       alert('Razorpay SDK failed to load. Are you online?');
// //       return;
// //     }

// //     const rzp = new window.Razorpay(options);
// //     rzp.open();
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
// //       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
// //         <h2 className="text-2xl font-bold mb-4">Payment for {subject}</h2>
// //         <p className="mb-2 text-gray-600">Branch: {branch}</p>
// //         <p className="mb-2 text-gray-600">Duration: {duration}</p>
// //         <p className="mb-4 text-gray-600">Questions: {questions}</p>
// //         <button
// //           onClick={handlePayment}
// //           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
// //         >
// //           Pay ₹499 to Unlock
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PaymentPage;

// import { useLocation, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const RAZORPAY_KEY = 'rzp_test_g2jEI9g7RvklAf'; // Replace with env var in production

// const PaymentPage = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const [sdkReady, setSdkReady] = useState(false);

//   const { subject, branch, duration, questions } = state || {};

//   useEffect(() => {
//     if (!state) {
//       navigate('/');
//       return;
//     }

//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     script.onload = () => setSdkReady(true);
//     script.onerror = () => alert('Failed to load Razorpay SDK.');
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [state, navigate]);

//   const handlePayment = () => {
//     const options = {
//       key: RAZORPAY_KEY,
//       amount: 49900, // ₹499 in paise
//       currency: 'INR',
//       name: 'Testiva',
//       description: `${branch?.toUpperCase() || ''} - ${subject || ''} Test Payment`,
//       handler: (response: any) => {
//         console.log('Payment successful:', response);
//         alert('Payment successful!');
//         navigate('/');
//       },
//       prefill: {
//         name: 'Student Name',
//         email: 'student@example.com',
//       },
//       theme: {
//         color: '#0f172a',
//       },
//     };

//     if (!window.Razorpay) {
//       alert('Razorpay SDK is not loaded.');
//       return;
//     }

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   if (!subject || !branch || !duration || !questions) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <p className="text-red-600 text-lg">Missing payment information. Redirecting...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Payment for {subject}</h2>
//         <p className="mb-2 text-gray-600">Branch: {branch}</p>
//         <p className="mb-2 text-gray-600">Duration: {duration}</p>
//         <p className="mb-4 text-gray-600">Questions: {questions}</p>
//         <button
//           onClick={handlePayment}
//           disabled={!sdkReady}
//           className={`w-full font-semibold py-2 px-4 rounded ${
//             sdkReady ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-200 cursor-not-allowed'
//           }`}
//         >
//           {sdkReady ? 'Pay ₹499 to Unlock' : 'Loading Payment Gateway...'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;
