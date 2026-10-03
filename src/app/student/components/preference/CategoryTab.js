"use client";

import { useMemo, useState } from "react";
import { Input } from "reactstrap";
import { FiSearch } from "react-icons/fi";

const categories = [
  "EWS",
  "EWS-PwD",
  "OBC",
  "OBC-PwD",
  "Open",
  "Open-PwD",
  "SC",
  "SC-PwD",
  "ST",
  "ST-PwD",
];

const CategoryTab = ({ onSelectionChange }) => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const allSelected =
    filteredCategories.length > 0 &&
    filteredCategories.every((item) =>
      selectedCategories.includes(item)
    );

  const handleSelectAll = () => {
    let updated = [];

    if (allSelected) {
      updated = selectedCategories.filter(
        (item) => !filteredCategories.includes(item)
      );
    } else {
      updated = [...new Set([...selectedCategories, ...filteredCategories])];
    }

    setSelectedCategories(updated);
    onSelectionChange?.(updated);
  };

  const handleCategoryChange = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updated);
    onSelectionChange?.(updated);
  };

  return (
    <div className="p-3">
      <h4 className="fw-bold mb-3">Category</h4>

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
          placeholder="Search Category"
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
          id="selectAllCategory"
          checked={allSelected}
          onChange={handleSelectAll}
        />

        <label
          className="form-check-label"
          htmlFor="selectAllCategory"
        >
          Select All
        </label>
      </div>

      <hr />
      <div style={{ maxHeight: "420px", overflowY: "auto" }}>
        {filteredCategories.map((category) => (
          <div className="form-check mb-3" key={category}>
            <input
              className="form-check-input"
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />

            <label
              className="form-check-label"
              htmlFor={category}
            >
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTab;