import React from 'react';

const PaymentCancel: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Payment Canceled</h1>
      <p>Your payment was not completed. You can try again anytime.</p>
    </div>
  );
};

export default PaymentCancel;
