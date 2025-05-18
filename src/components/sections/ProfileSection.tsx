
import React from 'react';
import { Calendar, Clock, Award, BarChart2 } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';

const ProfileSection: React.FC = () => {
  return (
    <section id="profile" className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Sarah Johnson</h2>
              <p className="text-gray-600 mb-6">Medical Student · Third Year</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatBox icon={<Calendar size={20} />} label="Member Since" value="6 months" />
                <StatBox icon={<Clock size={20} />} label="Study Time" value="120 hrs" />
                <StatBox icon={<Award size={20} />} label="Tests Taken" value="48" />
                <StatBox icon={<BarChart2 size={20} />} label="Avg. Score" value="85%" />
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <ActivityItem
                  title="Completed Science Test"
                  description="Scored 92% in Biology Module"
                  time="2 hours ago"
                />
                <ActivityItem
                  title="Achievement Unlocked"
                  description="Earned 'Perfect Score' badge"
                  time="1 day ago"
                />
                <ActivityItem
                  title="Started New Series"
                  description="Enrolled in Advanced Mathematics"
                  time="3 days ago"
                />
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Learning Streak</h3>
              <div className="grid grid-cols-7 gap-2">
                {[...Array(28)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 rounded ${
                      i % 3 === 0 ? 'bg-blue-500' : 'bg-gray-100'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Current Streak: 7 days · Longest Streak: 14 days
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

interface StatBoxProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const StatBox: React.FC<StatBoxProps> = ({ icon, label, value }) => (
  <div className="text-center p-3 bg-gray-50 rounded-lg">
    <div className="text-blue-600 mb-1 flex justify-center">{icon}</div>
    <div className="text-sm text-gray-600">{label}</div>
    <div className="font-semibold text-gray-900">{value}</div>
  </div>
);

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ title, description, time }) => (
  <div className="border-l-2 border-blue-200 pl-4">
    <h4 className="text-sm font-medium text-gray-900">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
    <p className="text-xs text-gray-500 mt-1">{time}</p>
  </div>
);

export default ProfileSection;