interface SectionHeaderProps {
  id: string;
  title: string;
  gradientFrom?: "cyber-cyan" | "cyber-pink" | "cyber-lime";
}

export default function SectionHeader({
  id,
  title,
  gradientFrom = "cyber-cyan",
}: SectionHeaderProps) {
  const gradientClasses: Record<string, string> = {
    "cyber-cyan": "from-cyber-cyan",
    "cyber-pink": "from-cyber-pink",
    "cyber-lime": "from-cyber-lime",
  };

  return (
    <div className="flex items-center gap-4">
      <h2
        id={id}
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text"
      >
        {title}
      </h2>
      <div
        className={`flex-1 h-[2px] bg-gradient-to-r ${gradientClasses[gradientFrom]} to-transparent`}
      />
    </div>
  );
}
