import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await new Promise((res) => setTimeout(res, 1500)); // simulate async call
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    
    <div className="container mx-auto py-12 px-4 max-w-3xl">
      <br />
      <br />
      <br />
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigate('/');
          }
        }}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back to Home
      </button>

      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6 text-gray-700">
        Email us at{' '}
        <a href="mailto:devaharah90@gmail.com" className="text-blue-600 underline">
          devaharah90@gmail.com
        </a>{' '}
        or use the contact form below. We typically respond within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 mt-4">Thank you! Your message has been sent.</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-4">Oops! Something went wrong. Please try again later.</p>
        )}
      </form>

      <div className="mt-12 border-t pt-8 text-gray-600">
        <h2 className="text-xl font-semibold mb-2">Other Ways to Reach Us</h2>
        <p>Phone: <a href="tel:+91 9904559104" className="underline text-blue-600">+91 9904559104</a></p>
        <p>Address: Surat, Gujarat, India</p>
        <p>Business Hours: Mon - Fri, 9:00 AM - 6:00 PM IST</p>
      </div>
    </div>
  );
}

export default ContactPage;
