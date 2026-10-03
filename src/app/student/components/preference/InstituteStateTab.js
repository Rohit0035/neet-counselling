"use client";

import { useMemo, useState } from "react";
import { Input } from "reactstrap";
import { FiSearch } from "react-icons/fi";

const instituteStates = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const InstituteStateTab = ({ onSelectionChange }) => {
  const [search, setSearch] = useState("");
  const [selectedStates, setSelectedStates] = useState([]);

  const filteredStates = useMemo(() => {
    return instituteStates.filter((state) =>
      state.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleSelectAll = () => {
    const updated =
      selectedStates.length === filteredStates.length
        ? []
        : filteredStates;

    setSelectedStates(updated);
    onSelectionChange?.(updated);
  };

  const handleStateChange = (state) => {
    const updated = selectedStates.includes(state)
      ? selectedStates.filter((item) => item !== state)
      : [...selectedStates, state];

    setSelectedStates(updated);
    onSelectionChange?.(updated);
  };

  return (
    <div className="p-3">
      <h4 className="fw-bold mb-3">Institute States</h4>

      <div className="position-relative mb-4">
        <FiSearch
          className="position-absolute"
          style={{
            left: 15,
            top: 14,
            color: "#777",
            fontSize: 18,
          }}
        />

        <Input
          type="text"
          placeholder="Search Institute States"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ps-5 rounded-pill"
          style={{ height: "48px" }}
        />
      </div>

      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="selectAll"
          checked={
            filteredStates.length > 0 &&
            selectedStates.length === filteredStates.length
          }
          onChange={handleSelectAll}
        />
        <label className="form-check-label" htmlFor="selectAll">
          Select All
        </label>
      </div>

      <hr />

      {filteredStates.map((state) => (
        <div className="form-check mb-3" key={state}>
          <input
            className="form-check-input"
            type="checkbox"
            id={state}
            checked={selectedStates.includes(state)}
            onChange={() => handleStateChange(state)}
          />

          <label className="form-check-label" htmlFor={state}>
            {state}
          </label>
        </div>
      ))}
    </div>
  );
};

export default InstituteStateTab;