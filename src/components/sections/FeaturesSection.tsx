import React from 'react';
import { 
  LineChart, 
  Brain, 
  BarChart3, 
  Workflow,
  Smartphone 
} from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <Card hoverEffect className="p-6 h-full">
      <div className="flex flex-col h-full">
        <div className="mb-5 p-3 rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </Card>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Adaptive Mock Tests',
      description: 'Tests that adapt to your skill level, focusing on areas where you need the most improvement.',
      icon: <Brain size={28} />
    },
    {
      title: 'Real-Time Performance Analytics',
      description: 'Instant feedback and detailed analytics to understand your strengths and weaknesses.',
      icon: <LineChart size={28} />
    },
    {
      title: 'Smart Recommendations',
      description: 'AI-powered recommendations for study materials and practice questions tailored to your needs.',
      icon: <BarChart3 size={28} />
    },
    {
      title: 'Cross-Device Access',
      description: 'Seamlessly switch between desktop and mobile devices without losing your progress.',
      icon: <Smartphone size={28} />
    },
    {
      title: 'Personalized Progress Tracking',
      description: 'Track your improvement over time with comprehensive progress dashboards and reports.',
      icon: <Workflow size={28} />
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle 
          title="Powerful Features for Smarter Learning"
          subtitle="Our platform combines cutting-edge technology with proven learning methodologies to help you achieve better results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;