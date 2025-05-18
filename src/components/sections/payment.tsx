import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface PaymentPageProps {}

const PaymentPage: React.FC<PaymentPageProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Expect test info passed via state
  const test = location.state as {
    subject: string;
    duration: string;
    questions: number;
  } | null;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!test) {
    return <div>Invalid test information.</div>;
  }

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate payment delay
      await new Promise((r) => setTimeout(r, 2000));

      // TODO: Integrate real payment gateway here and verify success

      // After successful payment:
      // Save paid test info for user (call API or Firebase)
      // For demo, we'll just redirect with success message

      navigate('/tests', { state: { paidTest: test.subject } });
    } catch (e) {
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-12">
      <h2 className="text-2xl font-semibold mb-4">Payment for {test.subject}</h2>
      <p>Duration: {test.duration}</p>
      <p>Questions: {test.questions}</p>
      <p className="my-4 font-semibold">Fee: ₹100</p>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Processing Payment...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default PaymentPage;
