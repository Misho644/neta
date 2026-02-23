import React from "react";

type Props = {
  a: string;
  b: string;
  op: "+" | "-" | "*" | "/";
  onAChange: (value: string) => void;
  onBChange: (value: string) => void;
  onOpChange: (value: "+" | "-" | "*" | "/") => void;
};

export default function InputComponent({
  a,
  b,
  op,
  onAChange,
  onBChange,
  onOpChange,
}: Props) {
  return (
    <div className="panel">
      <label className="field">
        <span>Първо число</span>
        <input
          type="number"
          value={a}
          onChange={(e) => onAChange(e.target.value)}
          placeholder="напр. 5"
        />
      </label>

      <label className="field">
        <span>Второ число</span>
        <input
          type="number"
          value={b}
          onChange={(e) => onBChange(e.target.value)}
          placeholder="напр. 5"
        />
      </label>

      <label className="field">
        <span>Операция</span>
        <select
          value={op}
          onChange={(e) => onOpChange(e.target.value as Props["op"])}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </label>
    </div>
  );
}