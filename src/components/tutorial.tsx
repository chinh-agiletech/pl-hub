import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  CheckCircle,
  Circle,
  Play,
  Code,
  BookOpen,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Progress } from "@radix-ui/react-progress";
import type { TutorialStep, TutorialProps } from "../types/index";

export function Tutorial({ language, title, steps, onClose }: TutorialProps) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState<Set<number>>(
    new Set()
  );

  const progress = (completedSteps.size / steps.length) * 100;

  const handleStepComplete = () => {
    setCompletedSteps((prev) => {
      const newSet = new Set(prev);
      newSet.add(currentStep);
      return newSet;
    });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-hidden bg-gray-900 border-gray-700">
        <CardHeader className="border-b border-gray-700">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-white text-xl">{title}</CardTitle>
              <CardDescription className="text-gray-400">
                {language} Tutorial
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
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">
                Step {currentStep + 1} of {steps.length}
              </span>
              <span className="text-sm text-gray-400">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>

        <CardContent className="p-6 overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              {steps[currentStep].title}
            </h3>
            <p className="text-gray-300 mb-4">
              {steps[currentStep].description}
            </p>
          </div>

          {steps[currentStep].code && (
            <div className="mb-6">
              <h4 className="text-md font-semibold text-white mb-2 flex items-center gap-2">
                <Code className="h-4 w-4" />
                Code Example
              </h4>
              <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  <code>{steps[currentStep].code}</code>
                </pre>
              </div>
            </div>
          )}

          {steps[currentStep].output && (
            <div className="mb-6">
              <h4 className="text-md font-semibold text-white mb-2 flex items-center gap-2">
                <Play className="h-4 w-4" />
                Expected Output
              </h4>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="text-blue-400 text-sm">
                  <code>{steps[currentStep].output}</code>
                </pre>
              </div>
            </div>
          )}

          <div className="mb-6">
            <h4 className="text-md font-semibold text-white mb-2">
              Explanation
            </h4>
            <p className="text-gray-300">{steps[currentStep].explanation}</p>
          </div>

          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={goToPrevious}
              disabled={currentStep === 0}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 disabled:opacity-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {completedSteps.has(currentStep) ? (
                <CheckCircle className="h-5 w-5 text-green-400" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400" />
              )}
              <span className="text-sm text-gray-400">
                {completedSteps.has(currentStep)
                  ? "Completed"
                  : "Mark as Complete"}
              </span>
            </div>

            {currentStep < steps.length - 1 ? (
              <Button
                onClick={
                  completedSteps.has(currentStep)
                    ? goToNext
                    : handleStepComplete
                }
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                {completedSteps.has(currentStep) ? "Next" : "Complete & Next"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleStepComplete}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
              >
                {completedSteps.has(currentStep)
                  ? "Tutorial Complete!"
                  : "Complete Tutorial"}
                <CheckCircle className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
