import { useState, useMemo } from "react";
import { programmingLanguages } from "../data/languages";
import type { SelectedExample, CurrentTutorial, CurrentQuiz } from "../types";

export function useHomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedExample, setSelectedExample] =
    useState<SelectedExample | null>(null);
  const [currentTutorial, setCurrentTutorial] =
    useState<CurrentTutorial | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<CurrentQuiz | null>(null);

  const filteredLanguages = useMemo(() => {
    return programmingLanguages.filter(
      (lang) =>
        (lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lang.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedLanguage === "all" || lang.id === selectedLanguage)
    );
  }, [searchTerm, selectedLanguage]);

  const currentLanguage = useMemo(() => {
    return selectedLanguage !== "all"
      ? programmingLanguages.find((lang) => lang.id === selectedLanguage)
      : null;
  }, [selectedLanguage]);

  return {
    // State
    selectedLanguage,
    searchTerm,
    selectedExample,
    currentTutorial,
    currentQuiz,

    // Computed values
    filteredLanguages,
    currentLanguage,

    // State setters
    setSelectedLanguage,
    setSearchTerm,
    setSelectedExample,
    setCurrentTutorial,
    setCurrentQuiz,
  };
}
