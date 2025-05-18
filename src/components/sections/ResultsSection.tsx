import React, { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import { CheckCircle2, XCircle, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { TestResult, QuestionResult } from '../../types/questions';

interface ResultsSectionProps {
  results: TestResult[];
}

const QuestionResultCard: React.FC<{ question: QuestionResult }> = ({ question }) => (
  <div className={`p-4 rounded-lg ${question.isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
    <div className="flex items-start">
      {question.isCorrect ? (
        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
      )}
      <div>
        <p className="text-gray-900 font-medium mb-2">{question.questionText}</p>
        <div className="space-y-2">
          <div className="text-sm">
            <span className="text-gray-600">Your answer: </span>
            <span className={question.isCorrect ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
              Option {String.fromCharCode(65 + question.selectedAnswer)}
            </span>
          </div>
          {!question.isCorrect && (
            <div className="text-sm">
              <span className="text-gray-600">Correct answer: </span>
              <span className="text-green-600 font-medium">
                Option {String.fromCharCode(65 + question.correctAnswer)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ResultsSection: React.FC<ResultsSectionProps> = ({ results }) => {
  const [expandedTest, setExpandedTest] = useState<number | null>(null);

  const performanceData = results.map(result => ({
    subject: result.subject,
    score: Math.round((result.score / result.totalQuestions) * 100)
  }));

  const totalQuestions = results.reduce((sum, result) => sum + result.totalQuestions, 0);
  const totalCorrect = results.reduce((sum, result) => sum + result.score, 0);
  const totalWrong = totalQuestions - totalCorrect;
  
  const accuracyData = [
    { id: 'Correct', value: totalCorrect, color: 'rgb(34, 197, 94)' },
    { id: 'Incorrect', value: totalWrong, color: 'rgb(239, 68, 68)' }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Your Performance Analytics"
          subtitle="Track your progress and identify areas for improvement"
        />
        
        {results.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <Card className="col-span-2 p-6 h-[400px]">
                <h3 className="text-lg font-semibold mb-4">Subject-wise Performance</h3>
                <div className="h-[320px]">
                  <ResponsiveBar
                    data={performanceData}
                    keys={['score']}
                    indexBy="subject"
                    margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                    padding={0.3}
                    colors={{ scheme: 'blues' }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Score (%)',
                      legendPosition: 'middle',
                      legendOffset: -40
                    }}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: -45
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="#ffffff"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                  />
                </div>
              </Card>
              
              <Card className="p-6 h-[400px]">
                <h3 className="text-lg font-semibold mb-4">Overall Accuracy</h3>
                <div className="h-[320px]">
                  <ResponsivePie
                    data={accuracyData}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    innerRadius={0.6}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ datum: 'data.color' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    enableArcLinkLabels={false}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor="#ffffff"
                  />
                </div>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <StatCard 
                title="Tests Taken" 
                value={results.length.toString()} 
              />
              <StatCard 
                title="Avg. Score" 
                value={`${Math.round((totalCorrect / totalQuestions) * 100)}%`} 
              />
              <StatCard 
                title="Total Questions" 
                value={totalQuestions.toString()} 
              />
              <StatCard 
                title="Correct Answers" 
                value={totalCorrect.toString()} 
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Detailed Test Results</h3>
              {results.map((result, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{result.subject}</h4>
                      <p className="text-sm text-gray-500">
                        {new Date(result.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="text-2xl font-bold text-blue-600">
                        {Math.round((result.score / result.totalQuestions) * 100)}%
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center p-4 bg-green-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                      <div>
                        <div className="text-sm text-green-800">Correct</div>
                        <div className="text-lg font-semibold text-green-600">{result.score}</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-red-50 rounded-lg">
                      <XCircle className="w-5 h-5 text-red-600 mr-2" />
                      <div>
                        <div className="text-sm text-red-800">Wrong</div>
                        <div className="text-lg font-semibold text-red-600">
                          {result.totalQuestions - result.score}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <div>
                        <div className="text-sm text-blue-800">Time Taken</div>
                        <div className="text-lg font-semibold text-blue-600">
                          {Math.floor(result.timeTaken / 60)}m {result.timeTaken % 60}s
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded-full h-2 mb-4">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: `${(result.score / result.totalQuestions) * 100}%`,
                      }}
                    />
                  </div>

                  <button
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    onClick={() => setExpandedTest(expandedTest === index ? null : index)}
                  >
                    {expandedTest === index ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-1" />
                        Hide Questions
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-1" />
                        Show Questions
                      </>
                    )}
                  </button>

                  {expandedTest === index && (
                    <div className="mt-4 space-y-4">
                      {result.questions.map((question, qIndex) => (
                        <QuestionResultCard key={qIndex} question={question} />
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </>
        ) : (
          <Card className="p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">No Test Results Yet</h3>
            <p className="text-gray-600">
              Take some tests to see your performance analytics here.
            </p>
          </Card>
        )}
      </Container>
    </section>
  );
};

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => (
  <Card className="p-6">
    <h4 className="text-sm font-medium text-gray-600 mb-2">{title}</h4>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
  </Card>
);

export default ResultsSection;