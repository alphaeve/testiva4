import React from 'react';
import { useNavigate } from 'react-router-dom';

const CancellationPolicyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Cancellation Policy</h1>
      <button
        onClick={() => navigate('/')}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back to Home
      </button>
      <p className="mb-4 text-gray-700">
        At Testiva, we strive to offer the best learning experience for our students. Please review our cancellation policy below to understand your rights and responsibilities when using our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Test Purchases</h2>
      <p className="text-gray-700 mb-4">
        Once a test or test series is purchased, it is considered final. We do not offer cancellations or refunds for completed or partially completed tests.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Subscription Plans</h2>
      <p className="text-gray-700 mb-4">
        If you are subscribed to a monthly or yearly plan and wish to cancel, you may do so at any time. However, your access will remain active until the end of the current billing cycle. No partial refunds will be issued.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Duplicate Transactions</h2>
      <p className="text-gray-700 mb-4">
        In the rare event of a duplicate transaction, please contact our support team within 7 days. After verification, we will issue a refund for the duplicate amount.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Technical Issues</h2>
      <p className="text-gray-700 mb-4">
        If you face any technical issues that prevent you from accessing a purchased test, please reach out to our support team immediately. We'll make every effort to resolve the issue or offer a suitable alternative.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. How to Request a Cancellation</h2>
      <p className="text-gray-700 mb-4">
        To request a cancellation or raise a concern, email us at <span className="text-blue-600 font-medium">support@testiva.in</span> with your registered email ID and transaction details.
      </p>

      <p className="text-gray-600 mt-10 text-sm">
        Last updated: May 28, 2025
      </p>
    </div>
  );
};

export default CancellationPolicyPage;
