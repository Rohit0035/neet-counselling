"use client";

import { useMemo, useState } from "react";
import { Input } from "reactstrap";
import { FiSearch } from "react-icons/fi";

const instituteTypes = [
  "Deemed",
  "Government Institute",
  "INI (Institute of National Importance)",
];

const InstituteTypeTab = ({ onSelectionChange }) => {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);

  const filteredTypes = useMemo(() => {
    return instituteTypes.filter((type) =>
      type.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleSelectAll = () => {
    const updated =
      selectedTypes.length === filteredTypes.length ? [] : filteredTypes;

    setSelectedTypes(updated);
    onSelectionChange?.(updated);
  };

  const handleTypeChange = (type) => {
    const updated = selectedTypes.includes(type)
      ? selectedTypes.filter((item) => item !== type)
      : [...selectedTypes, type];

    setSelectedTypes(updated);
    onSelectionChange?.(updated);
  };

  return (
    <div className="p-3">
      <h4 className="fw-bold mb-3">Institute Types</h4>

      <div className="position-relative mb-3">
        <FiSearch
          className="position-absolute text-secondary"
          style={{
            left: 15,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 18,
          }}
        />

        <Input
          type="text"
          placeholder="Search Institute Types"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-pill ps-5"
        />
      </div>

      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="selectAll"
          checked={
            filteredTypes.length > 0 &&
            selectedTypes.length === filteredTypes.length
          }
          onChange={handleSelectAll}
        />
        <label className="form-check-label" htmlFor="selectAll">
          Select All
        </label>
      </div>

      <hr />

      {filteredTypes.map((type) => (
        <div className="form-check mb-3" key={type}>
          <input
            className="form-check-input"
            type="checkbox"
            id={type}
            checked={selectedTypes.includes(type)}
            onChange={() => handleTypeChange(type)}
          />

          <label className="form-check-label" htmlFor={type}>
            {type}
          </label>
        </div>
      ))}
    </div>
  );
};

export default InstituteTypeTab;