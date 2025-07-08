import { BookOpen, Play, Brain, Code } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import type {
  Language,
  CurrentTutorial,
  CurrentQuiz,
  SelectedExample,
} from "../types";

interface LanguageDetailsProps {
  language: Language;
  onTutorialStart: (tutorial: CurrentTutorial) => void;
  onQuizStart: (quiz: CurrentQuiz) => void;
  onExampleView: (example: SelectedExample) => void;
}

export function LanguageDetails({
  language,
  onTutorialStart,
  onQuizStart,
  onExampleView,
}: LanguageDetailsProps) {
  return (
    <Card className="bg-white/10 border-white/20 mb-8">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="text-4xl">{language.icon}</div>
          <div>
            <CardTitle className="text-2xl text-white">
              {language.name}
            </CardTitle>
            <CardDescription className="text-gray-300">
              {language.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Learning Path */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Learning Path
            </h3>
            <div className="space-y-2">
              {language.topics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-300">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tutorials */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Play className="h-5 w-5" />
              Interactive Tutorials
            </h3>
            <div className="space-y-4">
              {language.tutorials.map((tutorial, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-white">
                      {tutorial.title}
                    </h4>
                    <Button
                      size="sm"
                      onClick={() =>
                        onTutorialStart({
                          lang: language.id,
                          tutorial: index,
                        })
                      }
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Start
                    </Button>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {tutorial.steps.length} steps
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quizzes and Examples */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Test Your Knowledge
            </h3>
            <div className="space-y-4">
              {language.quizzes.map((quiz, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-white">{quiz.title}</h4>
                    <Button
                      size="sm"
                      onClick={() =>
                        onQuizStart({
                          lang: language.id,
                          quiz: index,
                        })
                      }
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      <Brain className="h-4 w-4 mr-2" />
                      Quiz
                    </Button>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {quiz.questions.length} questions
                  </p>
                </div>
              ))}

              <div className="mt-6">
                <h4 className="text-md font-semibold text-white mb-3 flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Code Examples
                </h4>
                <div className="space-y-2">
                  {language.examples.map((example, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <h5 className="font-medium text-white text-sm">
                          {example.title}
                        </h5>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            onExampleView({
                              lang: language.id,
                              example: index,
                            })
                          }
                          className="border-white/20 text-white hover:bg-white/10 text-xs px-2 py-1"
                        >
                          View
                        </Button>
                      </div>
                      <p className="text-gray-300 text-xs">
                        {example.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
