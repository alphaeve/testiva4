import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Smart Test Series for <span className="text-blue-600">Smarter Learners</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Practice. Analyze. Improve.
            </p>
            <Button size="lg">
              Explore Tests Now
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
                alt="Student studying"
                className="relative rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;