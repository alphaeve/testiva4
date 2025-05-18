import React, { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { Question, QuestionResult } from '../../types/questions';
import { getQuestionsByBranch } from '../../data/questions';
import { Branch } from '../../types/branch';

interface TestInterfaceProps {
  subject: string;
  duration: string;
  totalQuestions: number;
  branch: Branch;
  onClose: () => void;
  onComplete: (result: {
    subject: string;
    score: number;
    totalQuestions: number;
    timeTaken: number;
    date: Date;
    questions: QuestionResult[];
  }) => void;
}

const TestInterface: React.FC<TestInterfaceProps> = ({
  subject,
  duration,
  branch,
  onClose,
  onComplete
}) => {
  const questions = getQuestionsByBranch(branch, subject);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => {
    const [minutes] = duration.split(' ')[0];
    return parseInt(minutes) * 60;
  });
  const [startTime] = useState(new Date());

  useEffect(() => {
    if (!isSubmitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isSubmitted, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (optionIndex: number) => {
    if (isSubmitted) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(curr => curr + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(curr => curr - 1);
    }
  };

  const calculateScore = () => {
    return questions.reduce((score, question, index) => {
      return score + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  const getAnswerSummary = () => {
    const correct = questions.reduce((count, question, index) => 
      count + (selectedAnswers[index] === question.correctAnswer ? 1 : 0), 0);
    const wrong = questions.reduce((count, question, index) => 
      count + (selectedAnswers[index] !== -1 && selectedAnswers[index] !== question.correctAnswer ? 1 : 0), 0);
    const unanswered = questions.length - correct - wrong;
    
    return { correct, wrong, unanswered };
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const score = calculateScore();
    const endTime = new Date();
    const timeTaken = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
    
    const questionResults: QuestionResult[] = questions.map((question, index) => ({
      questionId: question.id,
      questionText: question.text,
      selectedAnswer: selectedAnswers[index],
      correctAnswer: question.correctAnswer,
      isCorrect: selectedAnswers[index] === question.correctAnswer
    }));

    onComplete({
      subject,
      score,
      totalQuestions: questions.length,
      timeTaken,
      date: new Date(),
      questions: questionResults
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Button variant="outline" onClick={onClose} className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Exit Test
              </Button>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{subject} Test</h2>
                <div className="flex items-center mt-2 text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-medium text-blue-600">{formatTime(timeLeft)}</span>
                  <span className="mx-2">•</span>
                  <span>{questions.length} Questions</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <div className="p-6">
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Question {currentQuestion + 1} of {questions.length}</span>
                      <span>{selectedAnswers[currentQuestion] !== -1 ? 'Answered' : 'Not answered'}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">
                      {questions[currentQuestion].text}
                    </h3>
                    <div className="space-y-4">
                      {questions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                            selectedAnswers[currentQuestion] === index
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                          onClick={() => handleAnswerSelect(index)}
                        >
                          <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                    {currentQuestion === questions.length - 1 ? (
                      <Button variant="primary" onClick={handleSubmit}>
                        Submit Test
                      </Button>
                    ) : (
                      <Button variant="outline" onClick={handleNext}>
                        Next
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Test Completed!</h3>
                    <p className="text-gray-600">
                      You scored {calculateScore()} out of {questions.length} questions correctly.
                    </p>
                  </div>

                  <div className="max-w-sm mx-auto mb-8">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {(() => {
                        const summary = getAnswerSummary();
                        return (
                          <>
                            <div className="bg-green-50 p-4 rounded-lg">
                              <div className="text-2xl font-bold text-green-600">{summary.correct}</div>
                              <div className="text-sm text-green-800">Correct</div>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg">
                              <div className="text-2xl font-bold text-red-600">{summary.wrong}</div>
                              <div className="text-sm text-red-800">Wrong</div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <div className="text-2xl font-bold text-gray-600">{summary.unanswered}</div>
                              <div className="text-sm text-gray-800">Unanswered</div>
                            </div>
                          </>
                        );
                      })()}
                    </div>

                    <div className="bg-gray-100 rounded-full h-4 mb-4">
                      <div
                        className="bg-blue-600 h-4 rounded-full transition-all duration-1000"
                        style={{
                          width: `${(calculateScore() / questions.length) * 100}%`,
                        }}
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      {Math.round((calculateScore() / questions.length) * 100)}% Accuracy
                    </p>
                  </div>

                  <Button variant="primary" onClick={onClose}>
                    Return to Tests
                  </Button>
                </div>
              )}
            </div>
          </Card>

          {!isSubmitted && (
            <div className="grid grid-cols-8 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  className={`p-2 rounded ${
                    currentQuestion === index
                      ? 'bg-blue-600 text-white'
                      : selectedAnswers[index] !== -1
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                  onClick={() => setCurrentQuestion(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TestInterface;