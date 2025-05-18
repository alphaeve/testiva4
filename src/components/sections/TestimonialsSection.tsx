import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

interface TestimonialProps {
  content: string;
  name: string;
  title: string;
  image: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, name, title, image, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 h-full flex flex-col">
      <div className="flex-grow">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill={i < rating ? 'currentColor' : 'none'}
            />
          ))}
        </div>
        <blockquote className="text-gray-600 mb-6 italic">"{content}"</blockquote>
      </div>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-medium text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{title}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      content: "Testiva has completely transformed how I prepare for exams. The personalized recommendations helped me focus on the areas I was struggling with, and my scores improved by 18% in just two months!",
      name: "Sarah Johnson",
      title: "Medical Student",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      content: "As a teacher, I've recommended Testiva to dozens of my students. The analytics help me identify common problem areas, and the adaptive tests ensure each student gets practice at the right level of difficulty.",
      name: "Michael Rodriguez",
      title: "High School Teacher",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      content: "I was skeptical about another test prep platform, but Testiva's data-driven approach is the real deal. The time I spend studying is so much more effective now that I know exactly what to focus on.",
      name: "Emily Chen",
      title: "Graduate Student",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    },
    {
      content: "My daughter's confidence has soared since using Testiva. The positive reinforcement and clear progress tracking keeps her motivated, and her test anxiety has significantly decreased.",
      name: "David Wilson",
      title: "Parent",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      content: "Our institution implemented Testiva for standardized test preparation, and the results have been outstanding. The analytics dashboard gives us valuable insights into student progress across the board.",
      name: "Amanda Foster",
      title: "Academic Director",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    }
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle 
          title="What Our Users Say"
          subtitle="Thousands of learners have improved their test scores with Testiva. Here's what some of them have to say."
        />
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-between mt-10">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(testimonials.length - 2)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;