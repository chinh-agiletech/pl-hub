import { Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import type { Language } from "../types";

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  programmingLanguages: Language[];
}

export function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedLanguage,
  setSelectedLanguage,
  programmingLanguages,
}: SearchFilterProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search programming languages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
        />
      </div>
      <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
        <SelectTrigger className="w-full md:w-[200px] bg-white/10 border-white/20 text-white">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Languages</SelectItem>
          {programmingLanguages.map((lang) => (
            <SelectItem key={lang.id} value={lang.id}>
              {lang.icon} {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
