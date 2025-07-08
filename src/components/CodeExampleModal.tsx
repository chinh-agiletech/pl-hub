import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import type { Language, SelectedExample } from "../types";

interface CodeExampleModalProps {
  selectedExample: SelectedExample;
  languages: Language[];
  onClose: () => void;
}

export function CodeExampleModal({
  selectedExample,
  languages,
  onClose,
}: CodeExampleModalProps) {
  const language = languages.find((l) => l.id === selectedExample.lang);
  const example = language?.examples[selectedExample.example];

  if (!language || !example) {
    return null;
  }

  return (
    <Card className="fixed inset-4 z-50 bg-gray-900 border-gray-700 max-h-[90vh] overflow-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">{example.title}</CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            Close
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <pre className="text-green-400 text-sm">
            <code>{example.code}</code>
          </pre>
        </div>
        <p className="text-gray-300 mt-4">{example.description}</p>
      </CardContent>
    </Card>
  );
}
