import { useEffect, useState } from "react";

const words = [
  "Fullstack Developer",
  "Java Developer",
  "Backend Developer",
  "Coder",
];

export default function TypingEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

useEffect(() => {
    const currentWord = words[wordIndex];

    if (pause) {
        const timer = setTimeout(() => {
        setPause(false);
        setDeleting(true);
        }, 500); // 👈 4 seconds pause

        return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
        if (!deleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text.length + 1 === currentWord.length) {
            setPause(true); // 👈 pause before deleting
        }
        } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text.length === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }
        }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timer);
}, [text, deleting, pause, wordIndex]);

  return (
    <span className="text-[#8245ec]">
      {text}
      <span className="text-[#8245ec]">|</span>
    </span>
  );
}