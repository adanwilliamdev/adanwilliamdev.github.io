import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  featured?: boolean;
}

export default function ProjectCard({ title, description, tech, link, featured }: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.03, y: -8 }}
      className={`block p-6 rounded-2xl border transition-all duration-300 backdrop-blur-sm group relative overflow-hidden ${
        featured
          ? "bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 border-cyan-400/30 hover:border-cyan-400"
          : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-600"
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-l from-cyan-500 to-purple-500 text-xs font-bold rounded-bl-xl">
          DESTAQUE
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-zinc-400 my-4 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-xs font-mono text-cyan-300 bg-cyan-950/30 rounded-full border border-cyan-800/50"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
