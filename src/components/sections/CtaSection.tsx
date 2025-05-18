import React from 'react';
import { Users } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-violet-600 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
              <Users className="h-8 w-8" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Thousands of Learners Preparing Smarter with Testiva
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Stop wasting time on ineffective study methods. Get personalized practice,
            real-time feedback, and watch your scores improve.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-12 text-blue-100 text-sm">
            <p>No credit card required. Start with a free account today.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;