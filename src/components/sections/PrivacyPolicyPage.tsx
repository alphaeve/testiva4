import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { Users, Target, Clock, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const PrivacyPolicyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="privacy" className="py-20 bg-gray-50" aria-labelledby="privacy-policy-heading">
      <Container>
        {/* Back Button */}
        {/* <button
        onClick={() => navigate('/')}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back to Home
      </button> */}

        <SectionTitle
          title="Privacy Policy"
          subtitle="Your data is secure with us – transparency and trust are our priority"
        />
        <button
        onClick={() => navigate('/')}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back to Home
      </button>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-600 text-lg">
            Testiva is committed to protecting your privacy. This page outlines how we handle your personal data and ensure it’s used responsibly to support your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard icon={<Users className="h-6 w-6" />} title="10,000+" subtitle="Active Students" />
          <FeatureCard icon={<Target className="h-6 w-6" />} title="95%" subtitle="Success Rate" />
          <FeatureCard icon={<Clock className="h-6 w-6" />} title="24/7" subtitle="Learning Access" />
          <FeatureCard icon={<Sparkles className="h-6 w-6" />} title="500+" subtitle="Practice Tests" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-base leading-relaxed">
          <PrivacySection title="1. Information We Collect">
            We collect basic details such as your name, email, profile photo (optional), chosen academic stream (e.g. JEE/NEET), and your activity within the app like tests taken and scores.
          </PrivacySection>

          <PrivacySection title="2. How We Use Your Information">
            Your data helps us deliver personalized test experiences, track progress, show results, and recommend the right resources. We also use it to ensure platform security and performance.
          </PrivacySection>

          <PrivacySection title="3. Data Storage & Security">
            All information is securely stored using Firebase Authentication and Firestore Database. We encrypt data in transit and at rest to ensure maximum protection.
          </PrivacySection>

          <PrivacySection title="4. Third-Party Access">
            We do not sell or rent your data. We only share it with trusted services like Firebase and payment processors when necessary for functionality.
          </PrivacySection>

          <PrivacySection title="5. Your Control">
            You can request to view, edit, or delete your personal data by contacting us at{' '}
            <a href="mailto:support@testiva.in" className="text-blue-600 hover:underline focus:outline-none focus:ring-1 ring-blue-400">
              support@testiva.in
            </a>.
          </PrivacySection>

          <PrivacySection title="6. Updates to This Policy">
            We may update this policy to reflect improvements or legal requirements. Major updates will be notified on the platform.
          </PrivacySection>
        </div>
      </Container>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle }) => (
  <div
    className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    role="region"
    aria-label={title}
  >
    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{subtitle}</p>
  </div>
);

interface PrivacySectionProps {
  title: string;
  children: React.ReactNode;
}

const PrivacySection: React.FC<PrivacySectionProps> = ({ title, children }) => (
  <section>
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p>{children}</p>
  </section>
);

export default PrivacyPolicyPage;
