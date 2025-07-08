import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { CheckCircle, XCircle, Trophy, RotateCcw } from "lucide-react";
import { type QuizQuestion, type QuizProps } from "../types";



export function Quiz({ language, title, questions, onClose }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(
    null
  );
  const [showResult, setShowResult] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [answers, setAnswers] = React.useState<number[]>([]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === currentQ.correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz completed
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "text-green-400";
    if (percentage >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const isQuizComplete =
    currentQuestion === questions.length - 1 &&
    answers.length === questions.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-hidden bg-gray-900 border-gray-700">
        <CardHeader className="border-b border-gray-700">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-white text-xl">{title}</CardTitle>
              <CardDescription className="text-gray-400">
                {language} Quiz
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Close
            </Button>
          </div>
          {!isQuizComplete && (
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm text-gray-400">
                  Score: {score}/{questions.length}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </CardHeader>

        <CardContent className="p-6">
          {!isQuizComplete ? (
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {currentQ.question}
              </h3>

              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full p-3 text-left rounded-lg border transition-all duration-200 ${
                      selectedAnswer === index
                        ? showResult
                          ? index === currentQ.correctAnswer
                            ? "bg-green-500/20 border-green-500 text-green-300"
                            : "bg-red-500/20 border-red-500 text-red-300"
                          : "bg-blue-500/20 border-blue-500 text-blue-300"
                        : showResult && index === currentQ.correctAnswer
                        ? "bg-green-500/20 border-green-500 text-green-300"
                        : "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showResult && (
                        <span>
                          {index === currentQ.correctAnswer ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : selectedAnswer === index ? (
                            <XCircle className="h-5 w-5 text-red-400" />
                          ) : null}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">
                    Explanation:
                  </h4>
                  <p className="text-gray-300">{currentQ.explanation}</p>
                </div>
              )}

              <div className="flex justify-between">
                <Button
                  onClick={resetQuiz}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Restart Quiz
                </Button>

                {!showResult ? (
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50"
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <Button
                    onClick={handleNextQuestion}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    {currentQuestion < questions.length - 1
                      ? "Next Question"
                      : "View Results"}
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-6">
                <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Quiz Complete!
                </h3>
                <p className="text-gray-300">
                  You scored{" "}
                  <span className={`font-bold ${getScoreColor()}`}>
                    {score} out of {questions.length}
                  </span>
                </p>
                <p className="text-gray-400 mt-2">
                  ({Math.round((score / questions.length) * 100)}%)
                </p>
              </div>

              <div className="space-y-2 mb-6">
                {questions.map((q, index) => (
                  <div
                    key={q.id}
                    className="flex items-center justify-between p-2 bg-gray-800 rounded"
                  >
                    <span className="text-sm text-gray-300 truncate">
                      {index + 1}. {q.question}
                    </span>
                    {answers[index] === q.correctAnswer ? (
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={resetQuiz}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
                <Button
                  onClick={onClose}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                >
                  Finish
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
