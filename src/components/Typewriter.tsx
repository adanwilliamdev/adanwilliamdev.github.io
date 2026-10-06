import { useEffect, useState } from "react";

const roles = [
  "Backend Developer",
  "Python & FastAPI",
  "Next.js & TypeScript",
  "Ex-Infra & NOC",
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (still) return;
    const word = roles[index];
    if (!deleting && sub === word.length) {
      const t = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(t);
    }
    if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
      return;
    }
    const t = setTimeout(() => setSub((s) => s + (deleting ? -1 : 1)), deleting ? 35 : 80);
    return () => clearTimeout(t);
  }, [sub, index, deleting, still]);

  const text = still ? roles[0] : roles[index].slice(0, sub);
  return (
    <span className="inline-flex items-center gap-1" aria-label={roles.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="w-[2px] h-[1.1em] bg-signal animate-pulse" />
    </span>
  );
}
