import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { subject, branch, duration, questions } = state || {};

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
      amount: 49900, // ₹499
      currency: 'INR',
      name: 'Testiva',
      description: `${branch.toUpperCase()} - ${subject} Test Payment`,
      handler: function (response: any) {
        console.log(response);

        // ✅ SAVE this paid subject in Firestore against the user
        // Example: savePaidTest(userId, subject);

        alert('Payment successful!');
        navigate('/'); // Redirect after success
      },
      prefill: {
        name: 'Student Name',
        email: 'student@example.com',
      },
      theme: {
        color: '#0f172a',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Payment for {subject}</h2>
        <p className="mb-2 text-gray-600">Branch: {branch}</p>
        <p className="mb-2 text-gray-600">Duration: {duration}</p>
        <p className="mb-4 text-gray-600">Questions: {questions}</p>
        <button
          onClick={handlePayment}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Pay ₹499 to Unlock
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
