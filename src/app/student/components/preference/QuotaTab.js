"use client";

import { useMemo, useState } from "react";
import { Input } from "reactstrap";
import { FiSearch, FiInfo } from "react-icons/fi";

const quotas = [
  "AIIMS - Foreign Nationals",
  "AIIMS - Open",
  "All India Quota",
  "AMU - Internal",
  "AMU - NRI",
  "AMU - Open",
  "AMU - Self Financing Internal",
  "AMU - Self Financing Open",
  "BHU - Open",
  "Deemed - Jain Minority",
  "Deemed - Muslim Minority",
  "Deemed - NRI",
  "Deemed - Open",
  "ESIC",
  "JIPMER",
  "Management Quota",
  "NRI Quota",
  "Open",
  "State Quota",
];

const QuotaTab = ({ onSelectionChange }) => {
  const [search, setSearch] = useState("");
  const [selectedQuotas, setSelectedQuotas] = useState([]);

  const filteredQuotas = useMemo(() => {
    return quotas.filter((quota) =>
      quota.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const allSelected =
    filteredQuotas.length > 0 &&
    filteredQuotas.every((item) => selectedQuotas.includes(item));

  const handleSelectAll = () => {
    let updated = [];

    if (allSelected) {
      updated = selectedQuotas.filter(
        (item) => !filteredQuotas.includes(item)
      );
    } else {
      updated = [...new Set([...selectedQuotas, ...filteredQuotas])];
    }

    setSelectedQuotas(updated);
    onSelectionChange?.(updated);
  };

  const handleQuotaChange = (quota) => {
    const updated = selectedQuotas.includes(quota)
      ? selectedQuotas.filter((item) => item !== quota)
      : [...selectedQuotas, quota];

    setSelectedQuotas(updated);
    onSelectionChange?.(updated);
  };

  return (
    <div className="p-3">
      <h4 className="fw-bold mb-3">Quota</h4>

      <div className="position-relative mb-3">
        <FiSearch
          className="position-absolute"
          style={{
            left: 15,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#777",
            fontSize: 18,
          }}
        />

        <Input
          type="text"
          placeholder="Search Quota"
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
          id="selectAllQuota"
          checked={allSelected}
          onChange={handleSelectAll}
        />

        <label className="form-check-label ms-2" htmlFor="selectAllQuota">
          Select All
        </label>
      </div>

      <hr />

      <div>
        {filteredQuotas.map((quota) => (
          <div
            key={quota}
            className="d-flex justify-content-between align-items-center mb-3"
          >
            <div className="form-check m-0">
              <input
                className="form-check-input"
                type="checkbox"
                id={quota}
                checked={selectedQuotas.includes(quota)}
                onChange={() => handleQuotaChange(quota)}
              />

              <label className="form-check-label ms-2" htmlFor={quota}>
                {quota}
              </label>
            </div>

            <FiInfo size={14} color="#9ca3af" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotaTab;