import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import type { Language } from "../types";

interface LanguageCardProps {
  language: Language;
  onSelect: (languageId: string) => void;
}

export function LanguageCard({ language, onSelect }: LanguageCardProps) {
  return (
    <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="text-3xl">{language.icon}</div>
          <div>
            <CardTitle className="text-white">{language.name}</CardTitle>
            <CardDescription className="text-gray-300">
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs ${
                  language.level === "Beginner"
                    ? "bg-green-500/20 text-green-300"
                    : language.level === "Intermediate"
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "bg-red-500/20 text-red-300"
                }`}
              >
                {language.level}
              </span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4">{language.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Key Topics:</h4>
          <div className="flex flex-wrap gap-1">
            {language.topics.slice(0, 3).map((topic, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
        <Button
          onClick={() => onSelect(language.id)}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
        >
          Start Learning <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
