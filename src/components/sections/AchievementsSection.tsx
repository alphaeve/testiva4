import React from 'react';
import { Award, Target, Zap } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  date: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  icon,
  date
}) => {
  return (
    <Card className="p-6">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </Card>
  );
};

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      title: 'Top Scorer',
      description: 'Achieved highest score in Mathematics test series',
      icon: <Award size={24} />,
      date: 'March 15, 2024'
    },
    {
      title: 'Accuracy Champ',
      description: 'Maintained 95% accuracy across all tests',
      icon: <Target size={24} />,
      date: 'March 12, 2024'
    },
    {
      title: '7-Day Streak',
      description: 'Completed tests for 7 consecutive days',
      icon: <Zap size={24} />,
      date: 'March 10, 2024'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="Your Achievements"
          subtitle="Celebrate your milestones and progress on your learning journey"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AchievementsSection;