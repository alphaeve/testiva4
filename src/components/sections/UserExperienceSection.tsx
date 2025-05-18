import React from 'react';
import { Sparkles, LineChart, BarChart3 } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const UserExperienceSection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-100 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      <Container>
        <SectionTitle 
          title="Exceptional User Experience"
          subtitle="Our platform is designed with you in mind. Clean interfaces, intuitive workflows, and insightful visualizations make learning effective and enjoyable."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-1 lg:col-span-2 overflow-hidden relative p-0 shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-12 bg-gray-100 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="pt-16 pb-8 px-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Interactive Dashboard</h3>
              <p className="text-gray-600 mb-8">
                Track your progress, identify improvement areas, and get personalized recommendations all in one place.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium text-gray-900">Performance Overview</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <div className="text-sm text-gray-500 mb-1">Tests Completed</div>
                    <div className="text-2xl font-bold text-gray-900">24</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <div className="text-sm text-gray-500 mb-1">Avg. Score</div>
                    <div className="text-2xl font-bold text-blue-600">82%</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <div className="text-sm text-gray-500 mb-1">Improvement</div>
                    <div className="text-2xl font-bold text-green-600">+15%</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-100 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-medium text-gray-900">Progress by Subject</div>
                    <LineChart className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Mathematics</span>
                        <span className="font-medium text-gray-900">85%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Science</span>
                        <span className="font-medium text-gray-900">72%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-violet-500 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Language</span>
                        <span className="font-medium text-gray-900">91%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-green-500 rounded-full" style={{ width: '91%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="space-y-8">
            <Card className="p-6">
              <div className="mb-4 p-3 rounded-full bg-violet-100 w-12 h-12 flex items-center justify-center text-violet-600">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Smart Analytics</h3>
              <p className="text-gray-600 mb-6">
                Detailed performance metrics help you understand where you excel and where you need more practice.
              </p>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Accuracy</span>
                    <span className="text-sm font-bold text-blue-600">78%</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full">
                    <div className="h-1.5 bg-blue-600 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Speed</span>
                    <span className="text-sm font-bold text-violet-600">65%</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full">
                    <div className="h-1.5 bg-violet-600 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Retention</span>
                    <span className="text-sm font-bold text-green-600">92%</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full">
                    <div className="h-1.5 bg-green-600 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-blue-600 to-violet-600 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to excel?</h3>
              <p className="mb-6 opacity-90">
                Join thousands of students who are already improving their scores with Testiva's smart learning platform.
              </p>
              <button className="w-full py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UserExperienceSection;