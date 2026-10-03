"use client";

import { useState } from "react";
import { Input, Row, Col } from "reactstrap";

const FeeTab = ({ onSelectionChange }) => {
  const [minFee, setMinFee] = useState(750000);
  const [maxFee, setMaxFee] = useState(10000000);

  const handleMinChange = (value) => {
    const val = Number(value);
    if (val <= maxFee) {
      setMinFee(val);
      onSelectionChange?.({ min: val, max: maxFee });
    }
  };

  const handleMaxChange = (value) => {
    const val = Number(value);
    if (val >= minFee) {
      setMaxFee(val);
      onSelectionChange?.({ min: minFee, max: val });
    }
  };

  return (
    <div className="p-3">
      <h4 className="fw-bold mb-4">Fee</h4>

      <Row className="align-items-center mb-3">
        <Col>
          <Input
            type="number"
            value={minFee}
            onChange={(e) => handleMinChange(e.target.value)}
          />
        </Col>

        <Col xs="auto">-</Col>

        <Col>
          <Input
            type="number"
            value={maxFee}
            onChange={(e) => handleMaxChange(e.target.value)}
          />
        </Col>
      </Row>

      <Input
        type="range"
        min={0}
        max={10000000}
        value={minFee}
        onChange={(e) => handleMinChange(e.target.value)}
        className="mb-2"
      />

      <Input
        type="range"
        min={0}
        max={10000000}
        value={maxFee}
        onChange={(e) => handleMaxChange(e.target.value)}
      />
    </div>
  );
};

export default FeeTab;