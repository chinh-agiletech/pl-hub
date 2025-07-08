export interface Language {
  id: string;
  name: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  icon: string;
  color: string;
  topics: string[];
  examples: { title: string; code: string; description: string }[];
  tutorials: { title: string; steps: TutorialStep[] }[];
  quizzes: { title: string; questions: QuizQuestion[] }[];
}

export interface TutorialStep {
  id: string;
  title: string;
  description: string;
  code?: string;
  explanation: string;
  output?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizProps {
  language: string;
  title: string;
  questions: QuizQuestion[];
  onClose: () => void;
}

export interface SelectedExample {
  lang: string;
  example: number;
}

export interface CurrentTutorial {
  lang: string;
  tutorial: number;
}

export interface CurrentQuiz {
  lang: string;
  quiz: number;
}
