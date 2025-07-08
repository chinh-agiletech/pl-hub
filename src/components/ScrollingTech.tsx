const techStack = [
  { emoji: "⚛️", name: "React" },
  { emoji: "📘", name: "TypeScript" },
  { emoji: "🟨", name: "JavaScript" },
  { emoji: "🐍", name: "Python" },
  { emoji: "☕", name: "Java" },
  { emoji: "🔷", name: "C#" },
  { emoji: "🦀", name: "Rust" },
  { emoji: "🐹", name: "Go" },
  { emoji: "🔥", name: "Firebase" },
  { emoji: "🌐", name: "Node.js" },
  { emoji: "💎", name: "Ruby" },
  { emoji: "🐘", name: "PHP" },
];

const TechItem = ({ emoji, name }: { emoji: string; name: string }) => (
  <div className="flex items-center space-x-2 mx-6 transition-transform duration-300 hover:scale-110">
    <span className="text-2xl">{emoji}</span>
    <span className="text-white font-medium">{name}</span>
  </div>
);

export const ScrollingTech = () => {
  return (
    <div className="relative overflow-hidden bg-gray-800/30 rounded-lg py-4 group">
      <div className="flex animate-scroll-smooth whitespace-nowrap group-hover:pause">
        {/* First set */}
        {techStack.map((tech, index) => (
          <TechItem
            key={`first-${index}`}
            emoji={tech.emoji}
            name={tech.name}
          />
        ))}
        {/* Second set for seamless loop */}
        {techStack.map((tech, index) => (
          <TechItem
            key={`second-${index}`}
            emoji={tech.emoji}
            name={tech.name}
          />
        ))}
      </div>
    </div>
  );
};
