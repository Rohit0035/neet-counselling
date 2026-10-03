"use client";

import { useState } from "react";
import { Input, Row, Col } from "reactstrap";

const BedsTab = ({ onSelectionChange }) => {
  const [minBeds, setMinBeds] = useState(0);
  const [maxBeds, setMaxBeds] = useState(120000);

  const handleMinChange = (value) => {
    const val = Number(value);
    if (val <= maxBeds) {
      setMinBeds(val);
      onSelectionChange?.({ min: val, max: maxBeds });
    }
  };

  const handleMaxChange = (value) => {
    const val = Number(value);
    if (val >= minBeds) {
      setMaxBeds(val);
      onSelectionChange?.({ min: minBeds, max: val });
    }
  };

  return (
    <div className="p-3">
      <h4 className="fw-bold mb-4">Beds</h4>

      <Row className="align-items-center mb-3">
        <Col>
          <Input
            type="number"
            value={minBeds}
            onChange={(e) => handleMinChange(e.target.value)}
          />
        </Col>

        <Col xs="auto">-</Col>

        <Col>
          <Input
            type="number"
            value={maxBeds}
            onChange={(e) => handleMaxChange(e.target.value)}
          />
        </Col>
      </Row>

      <Input
        type="range"
        min={0}
        max={120000}
        value={minBeds}
        onChange={(e) => handleMinChange(e.target.value)}
        className="mb-2"
      />

      <Input
        type="range"
        min={0}
        max={120000}
        value={maxBeds}
        onChange={(e) => handleMaxChange(e.target.value)}
      />
    </div>
  );
};

export default BedsTab;