export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface QuestionResult {
  questionId: number;
  questionText: string;
  selectedAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
}

export interface TestResult {
  subject: string;
  score: number;
  totalQuestions: number;
  timeTaken: number;
  date: Date;
  questions: QuestionResult[];
}