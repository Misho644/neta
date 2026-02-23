import React, { useMemo, useState } from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";
import ResultComponent from "./components/ResultComponent";

type Op = "+" | "-" | "*" | "/";

export default function App() {
  // State в родителя (Lifting State Up)
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [op, setOp] = useState<Op>("+");

  const { result, error } = useMemo((): { result: number | ""; error: string } => {
    const x = Number(a);
    const y = Number(b);

    if (a.trim() === "" || b.trim() === "") return { result: "", error: "Въведете две числа." };
    if (Number.isNaN(x) || Number.isNaN(y)) return { result: "", error: "Невалидни данни." };

    if (op === "/" && y === 0) {
      return { result: "", error: "Грешка: деление на 0 е невъзможно!" };
    }

    let r: number;
    switch (op) {
      case "+":
        r = x + y;
        break;
      case "-":
        r = x - y;
        break;
      case "*":
        r = x * y;
        break;
      case "/":
        r = x / y;
        break;
      default:
        return { result: "", error: "Невалидна операция." };
    }

    return { result: r, error: "" };
  }, [a, b, op]);

  return (
    <div className="container">
      <h1>Калкулатор (Lifting State Up)</h1>

      <InputComponent
        a={a}
        b={b}
        op={op}
        onAChange={setA}
        onBChange={setB}
        onOpChange={setOp}
      />

      <ResultComponent result={result} error={error} />
    </div>
  );
}