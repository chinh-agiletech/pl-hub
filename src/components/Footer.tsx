import { Users, Trophy, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="text-center mt-16 py-8 border-t border-white/20">
      <div className="flex justify-center items-center gap-8 mb-4">
        <div className="flex items-center gap-2 text-gray-300">
          <Users className="h-5 w-5" />
          <span>Built for Students</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Trophy className="h-5 w-5" />
          <span>Interactive Learning</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Star className="h-5 w-5" />
          <span>Modern Curriculum</span>
        </div>
      </div>
      <p className="text-gray-400">
        © 2025 Programming Language Hub - Empowering the next generation of
        developers
      </p>
    </footer>
  );
}
