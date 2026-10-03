"use client";

import { Input, Label } from "reactstrap";

const RankTab = () => {
  return (
    <>
      <h4 className="fw-bold mb-4">
        What's your NEET Rank?
      </h4>

      <Label>
        Your All India Counselling Rank
      </Label>

      <Input
        placeholder="Enter All India Counselling Rank"
      />
    </>
  );
};

export default RankTab;