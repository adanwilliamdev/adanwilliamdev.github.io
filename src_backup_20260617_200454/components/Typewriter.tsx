import { useState, useEffect } from "react";

const roles = ["Analista de TI", "Desenvolvedor Full Stack", "Especialista em Observabilidade"];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, reverse ? 50 : 150));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="flex items-center gap-1">
      <span>{roles[index].substring(0, subIndex)}</span>
      <span className="w-1 h-8 bg-cyan-400 animate-pulse"></span>
    </span>
  );
}
