"use client";

import * as React from "react";
import {
  Header,
  SearchFilter,
  LanguageGrid,
  LanguageDetails,
  CodeExampleModal,
  Footer,
  Tutorial,
  Quiz,
} from "../components";
import { programmingLanguages } from "../data/languages";
import type { SelectedExample, CurrentTutorial, CurrentQuiz } from "../types";

export function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>("all");
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [selectedExample, setSelectedExample] =
    React.useState<SelectedExample | null>(null);
  const [currentTutorial, setCurrentTutorial] =
    React.useState<CurrentTutorial | null>(null);
  const [currentQuiz, setCurrentQuiz] = React.useState<CurrentQuiz | null>(
    null
  );

  const filteredLanguages = programmingLanguages.filter(
    (lang) =>
      (lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lang.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedLanguage === "all" || lang.id === selectedLanguage)
  );

  const currentLanguage =
    selectedLanguage !== "all"
      ? programmingLanguages.find((lang) => lang.id === selectedLanguage)
      : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          programmingLanguages={programmingLanguages}
        />

        <LanguageGrid
          languages={filteredLanguages}
          onLanguageSelect={setSelectedLanguage}
        />

        {currentLanguage && (
          <LanguageDetails
            language={currentLanguage}
            onTutorialStart={setCurrentTutorial}
            onQuizStart={setCurrentQuiz}
            onExampleView={setSelectedExample}
          />
        )}

        {/* Tutorial Component */}
        {currentTutorial && (
          <Tutorial
            language={
              programmingLanguages.find((l) => l.id === currentTutorial.lang)
                ?.name || ""
            }
            title={
              programmingLanguages.find((l) => l.id === currentTutorial.lang)
                ?.tutorials[currentTutorial.tutorial].title || ""
            }
            steps={
              programmingLanguages.find((l) => l.id === currentTutorial.lang)
                ?.tutorials[currentTutorial.tutorial].steps || []
            }
            onClose={() => setCurrentTutorial(null)}
          />
        )}

        {/* Quiz Component */}
        {currentQuiz && (
          <Quiz
            language={
              programmingLanguages.find((l) => l.id === currentQuiz.lang)
                ?.name || ""
            }
            title={
              programmingLanguages.find((l) => l.id === currentQuiz.lang)
                ?.quizzes[currentQuiz.quiz].title || ""
            }
            questions={
              programmingLanguages.find((l) => l.id === currentQuiz.lang)
                ?.quizzes[currentQuiz.quiz].questions || []
            }
            onClose={() => setCurrentQuiz(null)}
          />
        )}

        {/* Code Example Modal */}
        {selectedExample && (
          <CodeExampleModal
            selectedExample={selectedExample}
            languages={programmingLanguages}
            onClose={() => setSelectedExample(null)}
          />
        )}

        <Footer />
      </div>
    </div>
  );
}
