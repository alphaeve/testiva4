import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { Branch, BranchOption } from '../../types/branch';

interface BranchSelectionProps {
  onSelectBranch: (branch: Branch) => void;
}

const BranchSelection: React.FC<BranchSelectionProps> = ({ onSelectBranch }) => {
  const branches: BranchOption[] = [
    // {
    //   id: 'current',
    //   name: 'Current Tests',
    //   description: 'Practice tests for your current academic curriculum',
    //   image: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg'
    // },
    {
      id: 'jee',
      name: 'JEE Preparation',
      description: 'Comprehensive test series for JEE Main and Advanced',
      image: 'https://images.pexels.com/photos/6238048/pexels-photo-6238048.jpeg'
    },
    {
      id: 'neet',
      name: 'NEET Preparation',
      description: 'Medical entrance examination preparation tests',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="Choose Your Branch"
          subtitle="Select your preferred test series to begin your preparation journey"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
              onClick={() => onSelectBranch(branch.id)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{branch.name}</h3>
                <p className="text-gray-600 mb-4">{branch.description}</p>
                <button
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                  onClick={() => onSelectBranch(branch.id)}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BranchSelection;