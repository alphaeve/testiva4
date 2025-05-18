import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Branch } from '../../types/branch';

interface TestCardProps {
  subject: string;
  description: string;
  duration: string;
  questions: number;
  icon: React.ReactNode;
  onStart: () => void;
}

const TestCard: React.FC<TestCardProps> = ({
  subject,
  description,
  duration,
  questions,
  icon,
  onStart,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{subject}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={16} className="mr-1" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <BookOpen size={16} className="mr-1" />
          <span>{questions} Questions</span>
        </div>
      </div>
      <Button variant="outline" fullWidth onClick={onStart}>Take Test</Button>
    </div>
  );
};

interface TestsSectionProps {
  onStartTest: (test: { subject: string; duration: string; questions: number }) => void;
  selectedBranch: Branch;
}

const TestsSection: React.FC<TestsSectionProps> = ({ onStartTest, selectedBranch }) => {
  const getTests = (branch: Branch) => {
    switch (branch) {
      case 'jee':
        return [
          {
            subject: 'JEE1',
            description: 'Practice JEE level physics problems covering mechanics, thermodynamics, and more.',
            duration: '60 mins',
            questions: 30,
            icon: <span className="text-xl">⚛</span>
          },
          {
            subject: 'JEE2',
            description: 'Test your knowledge of organic, inorganic, and physical chemistry.',
            duration: '60 mins',
            questions: 30,
            icon: <span className="text-xl">⚗️</span>
          },
          {
            subject: 'JEE3',
            description: 'Solve advanced mathematical problems for JEE preparation.',
            duration: '60 mins',
            questions: 30,
            icon: <span className="text-xl">∑</span>
          },
          {
            subject: 'JEE4',
            description: 'Complete JEE pattern test covering all subjects.',
            duration: '180 mins',
            questions: 90,
            icon: <span className="text-xl">📝</span>
          }
        ];
      
      case 'neet':
        return [
          {
            subject: 'Biology',
            description: 'Comprehensive biology test covering botany and zoology.',
            duration: '60 mins',
            questions: 30,
            icon: <span className="text-xl">🧬</span>
          },
          {
            subject: 'Physics',
            description: 'NEET-focused physics problems and concepts.',
            duration: '45 mins',
            questions: 25,
            icon: <span className="text-xl">⚛</span>
          },
          {
            subject: 'Chemistry',
            description: 'Essential chemistry topics for NEET examination.',
            duration: '45 mins',
            questions: 25,
            icon: <span className="text-xl">⚗️</span>
          },
          {
            subject: 'Full Mock Test',
            description: 'Complete NEET pattern test simulation.',
            duration: '180 mins',
            questions: 180,
            icon: <span className="text-xl">📝</span>
          }
        ];
      
      default: // current
        return [
          {
            subject: 'Mathematics',
            description: 'Practice advanced mathematical concepts with our comprehensive test series.',
            duration: '30 mins',
            questions: 20,
            icon: <span className="text-xl">∑</span>
          },
          {
            subject: 'Science',
            description: 'Test your understanding of scientific principles and theories.',
            duration: '45 mins',
            questions: 25,
            icon: <span className="text-xl">⚛</span>
          },
          {
            subject: 'Reasoning',
            description: 'Enhance your logical thinking and problem-solving abilities.',
            duration: '30 mins',
            questions: 20,
            icon: <span className="text-xl">🧩</span>
          },
          {
            subject: 'English',
            description: 'Improve your language proficiency and communication skills.',
            duration: '40 mins',
            questions: 30,
            icon: <span className="text-xl">📝</span>
          }
        ];
    }
  };

  const tests = getTests(selectedBranch);

  return (
    <section id="tests" className="py-20 bg-gray-50">
      {/* <Container>
        <SectionTitle
          title={`${selectedBranch.charAt(0).toUpperCase() + selectedBranch.slice(1)} Tests`}
          subtitle="Choose from our collection of carefully crafted tests designed to help you excel"
        /> */}
        <SectionTitle
          title={`${
            selectedBranch ? selectedBranch.charAt(0).toUpperCase() + selectedBranch.slice(1) : 'All'
          } Tests`}
          subtitle="Choose from our collection of carefully crafted tests designed to help you excel"
        />

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tests.map((test, index) => (
            <TestCard
              key={index}
              {...test}
              onStart={() => onStartTest(test)}
            />
          ))}
        </div>
    </section>
  );
};

export default TestsSection;