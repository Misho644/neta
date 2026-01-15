// src/LogicQuiz.jsx
import React, { useState } from "react";

const QUESTIONS = [
  {
    text: "Кое число логически продължава редицата: 2, 4, 8, 16, ?",
    options: ["18", "24", "32"],
  },
  {
    text: "Кое твърдение е вярно, ако всички котки са животни и всички животни дишат?",
    options: ["Всички котки дишат", "Някои котки не дишат", "Нито една котка не диша"],
  },
  {
    text: "Ако A > B и B > C, кое е вярно?",
    options: ["C > A", "A > C", "A = C"],
  },
];

export default function LogicQuiz() {
  const [screen, setScreen] = useState("start"); // "start" | "question" | "end"
  const [currentIndex, setCurrentIndex] = useState(0);

  const startTest = () => {
    setScreen("question");
    setCurrentIndex(0);
  };

  const restartTest = () => {
    setScreen("start");
    setCurrentIndex(0);
  };

  const answer = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= QUESTIONS.length) setScreen("end");
    else setCurrentIndex(nextIndex);
  };

  if (screen === "start") {
    return (
      <div style={{ maxWidth: 520, margin: "40px auto", fontFamily: "system-ui, sans-serif" }}>
        <h2>Логически тест</h2>
        <button onClick={startTest}>Започни теста</button>
      </div>
    );
  }

  if (screen === "end") {
    return (
      <div style={{ maxWidth: 520, margin: "40px auto", fontFamily: "system-ui, sans-serif" }}>
        <h2>Тестът е завършен!</h2>
        <button onClick={restartTest}>Започни отначало</button>
      </div>
    );
  }

  const q = QUESTIONS[currentIndex];

  return (
    <div style={{ maxWidth: 520, margin: "40px auto", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ marginBottom: 12 }}>
        <strong>
          Въпрос {currentIndex + 1} / {QUESTIONS.length}
        </strong>
      </div>

      <div style={{ marginBottom: 16 }}>{q.text}</div>

      <div style={{ display: "grid", gap: 8 }}>
        <button onClick={answer}>A: {q.options[0]}</button>
        <button onClick={answer}>B: {q.options[1]}</button>
        <button onClick={answer}>C: {q.options[2]}</button>
      </div>
    </div>
  );
}
