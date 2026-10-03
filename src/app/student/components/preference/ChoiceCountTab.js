"use client";

import { useState } from "react";

const choiceOptions = [
  "Top 100 Choices",
  "Top 250 Choices",
  "Top 500 Choices",
];

const ChoiceCountTab = ({ onSelectionChange }) => {
  const [selectedChoice, setSelectedChoice] = useState("Top 100 Choices");

  const handleChange = (choice) => {
    setSelectedChoice(choice);
    onSelectionChange?.(choice);
  };

  return (
    <div className="p-3">
      <h4 className="fw-bold mb-4">Choice Count</h4>

      {choiceOptions.map((choice) => (
        <div
          key={choice}
          className="d-flex justify-content-between align-items-center rounded-3 px-3 py-3 mb-2"
          style={{
            backgroundColor:
              selectedChoice === choice ? "#FFF3EF" : "transparent",
            cursor: "pointer",
          }}
          onClick={() => handleChange(choice)}
        >
          <span>{choice}</span>

          <input
            type="radio"
            name="choiceCount"
            className="form-check-input m-0"
            checked={selectedChoice === choice}
            onChange={() => handleChange(choice)}
            style={{
              accentColor: "#E85D24",
              width: "18px",
              height: "18px",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ChoiceCountTab;