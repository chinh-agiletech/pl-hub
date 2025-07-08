import { Button } from "./ui/button";
import logo from "../logo.svg";
import { ScrollingTech } from "./ScrollingTech";

export function Header() {
  return (
    <header className="mb-12">
      {/* Navigation bar */}
      <nav className="flex items-center justify-between p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg mb-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-white">PL Hub</span>
        </div>

        {/* Login */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-blue-400">
            Login
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Sign Up
          </Button>
        </div>
      </nav>

      <ScrollingTech />

      {/* Hero section */}
      <div className="text-center mt-8">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Programming Language Hub
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Master programming languages with interactive tutorials, examples, and
          comprehensive guides designed for university students.
        </p>
      </div>
    </header>
  );
}
