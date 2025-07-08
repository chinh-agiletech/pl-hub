import { LanguageCard } from "./LanguageCard";
import type { Language } from "../types";

interface LanguageGridProps {
  languages: Language[];
  onLanguageSelect: (languageId: string) => void;
}

export function LanguageGrid({
  languages,
  onLanguageSelect,
}: LanguageGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {languages.map((language) => (
        <LanguageCard
          key={language.id}
          language={language}
          onSelect={onLanguageSelect}
        />
      ))}
    </div>
  );
}
