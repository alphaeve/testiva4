import React from 'react';
import { Users, Target, Clock, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="About Testiva"
          subtitle="A modern, student-first platform built to empower learners"
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-600 text-lg">
            Testiva is designed to help students achieve their academic goals through powerful mock tests,
            instant feedback, and data-driven improvement strategies. Trusted by thousands of students every day,
            we're committed to making learning more effective and accessible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="10,000+"
            subtitle="Active Students"
          />
          <FeatureCard
            icon={<Target className="h-6 w-6" />}
            title="95%"
            subtitle="Success Rate"
          />
          <FeatureCard
            icon={<Clock className="h-6 w-6" />}
            title="24/7"
            subtitle="Learning Access"
          />
          <FeatureCard
            icon={<Sparkles className="h-6 w-6" />}
            title="500+"
            subtitle="Practice Tests"
          />
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
  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{subtitle}</p>
  </div>
);

export default AboutSection;