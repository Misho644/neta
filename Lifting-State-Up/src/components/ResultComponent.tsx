import React from "react";

type Props = {
  result: number | "";
  error: string;
};

export default function ResultComponent({ result, error }: Props) {
  return (
    <div className="result">
      {error ? (
        <span className="error">{error}</span>
      ) : (
        <span>Резултат: {result}</span>
      )}
    </div>
  );
}