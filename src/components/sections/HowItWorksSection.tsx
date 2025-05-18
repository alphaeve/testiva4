import React from 'react';
import { CheckCircle2, UserPlus, FileSpreadsheet } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white mb-4">
          {icon}
        </div>
        <div className="absolute top-0 -right-2 w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-white text-sm font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Create Account',
      description: 'Sign up and complete your learning profile to help us understand your goals and needs.',
      icon: <UserPlus size={32} />
    },
    {
      number: 2,
      title: 'Take Mock Tests',
      description: 'Complete adaptive tests designed to identify your strengths and areas for improvement.',
      icon: <FileSpreadsheet size={32} />
    },
    {
      number: 3,
      title: 'Get Smart Feedback',
      description: 'Receive detailed analytics and personalized recommendations to improve your performance.',
      icon: <CheckCircle2 size={32} />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full opacity-70"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-50 rounded-full opacity-70"></div>
      
      <Container>
        <SectionTitle 
          title="How Testiva Works"
          subtitle="Our simple 3-step process helps you improve your test scores with minimal effort and maximum results."
        />

        <div className="relative">
          {/* Connecting line between steps */}
          <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-blue-200 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our platform continuously adapts to your learning style and performance, ensuring that you're always practicing at the optimal level of difficulty.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            Learn more about our methodology
            <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;