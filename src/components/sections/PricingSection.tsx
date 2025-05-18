import React from 'react';
import { Check } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'outline';
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  buttonText,
  buttonVariant,
}) => {
  return (
    <div className={`
      bg-white rounded-xl shadow-md overflow-hidden
      transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg
      flex flex-col
      ${isPopular ? 'border-2 border-blue-600 relative' : ''}
    `}>
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
            MOST POPULAR
          </div>
        </div>
      )}
      
      <div className="p-6 md:p-8 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {price !== 'Custom' && <span className="text-gray-600">/month</span>}
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Check className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="px-6 pb-8 md:px-8 md:pb-8">
        <Button variant={buttonVariant} fullWidth>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for trying out Testiva',
      features: [
        'Access to 5 mock tests per month',
        'Basic performance statistics',
        'Limited question bank access',
        'Community forum support',
      ],
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const,
    },
    {
      name: 'Premium',
      price: '$19',
      description: 'Ideal for serious test-takers',
      features: [
        'Unlimited mock tests',
        'Advanced analytics dashboard',
        'Full question bank access',
        'Personalized study plans',
        'Priority email support',
        'Progress tracking across devices',
      ],
      isPopular: true,
      buttonText: 'Start 7-Day Free Trial',
      buttonVariant: 'primary' as const,
    },
    {
      name: 'Institutional',
      price: 'Custom',
      description: 'For schools and educational organizations',
      features: [
        'Bulk student accounts',
        'Administrator dashboard',
        'Group performance analytics',
        'Content customization options',
        'API access for integrations',
        'Dedicated account manager',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary' as const,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <Container>
        <SectionTitle 
          title="Straightforward Pricing"
          subtitle="Choose the plan that fits your needs. All plans include core features to help you improve your test scores."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a custom solution?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer tailored plans for educational institutions, test preparation centers, and enterprise organizations.
            Contact our sales team to discuss your specific requirements.
          </p>
          <Button variant="outline">
            Request Custom Quote
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;