"use client";

import { Badge, UncontrolledPopover, PopoverBody } from "reactstrap";

const options = ["Safe", "Moderate", "Aspirational"];

const ChanceLevelDropdown = ({
  id,
  value = "Moderate",
  onChange,
}) => {
  return (
    <>
      <Badge
        id={`chance-popover-${id}`}
        pill
        style={{
          cursor: "pointer",
          background: "#F4F0FF",
          color: "#fff",
          border: "1px solid #5B4FE8",
          padding: "6px 12px",
          fontSize: "12px",
          fontWeight: 500,
        }}
      >
        {value}
      </Badge>

      <UncontrolledPopover
        trigger="legacy"
        placement="bottom"
        target={`chance-popover-${id}`}
      >
        <PopoverBody className="p-2">
          {options.map((item) => (
            <div
              key={item}
              onClick={() => onChange?.(item)}
              className="d-flex justify-content-between align-items-center py-2"
              style={{
                cursor: "pointer",
                minWidth: "170px",
              }}
            >
              <span
                style={{
                  color: item === "Moderate" ? "#ff5722" : "#333",
                }}
              >
                {item}
              </span>

              <input
                type="radio"
                checked={value === item}
                readOnly
                style={{
                  accentColor: "#ff5722",
                }}
              />
            </div>
          ))}
        </PopoverBody>
      </UncontrolledPopover>
    </>
  );
};

export default ChanceLevelDropdown;