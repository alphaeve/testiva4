import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Mark paid in localStorage or update user backend
    localStorage.setItem('paid', 'true');

    // Redirect to tests page after short delay (optional)
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="mb-6">Thanks for your payment. You now have full access to all tests.</p>
      <p>Redirecting you to tests page...</p>
    </div>
  );
};

export default PaymentSuccess;
