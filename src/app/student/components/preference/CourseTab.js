"use client";

import { useMemo, useState } from "react";
import { Input } from "reactstrap";
import { FiSearch } from "react-icons/fi";

const courseData = [
  "BDS",
  "MBBS",
  "BAMS",
  "BHMS",
  "BUMS",
  "BPT",
];

const CourseTab = ({ onSelectionChange }) => {
  const [search, setSearch] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

  const filteredCourses = useMemo(() => {
    return courseData.filter((course) =>
      course.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleSelectAll = () => {
    if (selectedCourses.length === filteredCourses.length) {
      setSelectedCourses([]);
      onSelectionChange?.([]);
    } else {
      setSelectedCourses(filteredCourses);
      onSelectionChange?.(filteredCourses);
    }
  };

  const handleCourseChange = (course) => {
    let updated;

    if (selectedCourses.includes(course)) {
      updated = selectedCourses.filter((item) => item !== course);
    } else {
      updated = [...selectedCourses, course];
    }

    setSelectedCourses(updated);
    onSelectionChange?.(updated);
  };

  return (
    <div className="p-3">

      <h4 className="fw-bold mb-3">
        Courses
      </h4>

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
          placeholder="Search Courses"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ps-5 rounded-pill"
          style={{
            height: "48px",
          }}
        />

      </div>

      <div className="form-check mb-3">

        <input
          className="form-check-input"
          type="checkbox"
          id="selectAll"
          checked={
            filteredCourses.length > 0 &&
            selectedCourses.length === filteredCourses.length
          }
          onChange={handleSelectAll}
        />

        <label
          className="form-check-label"
          htmlFor="selectAll"
        >
          Select All
        </label>

      </div>

      <hr />

      {filteredCourses.map((course) => (
        <div
          className="form-check mb-3"
          key={course}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id={course}
            checked={selectedCourses.includes(course)}
            onChange={() => handleCourseChange(course)}
          />

          <label
            className="form-check-label"
            htmlFor={course}
          >
            {course}
          </label>

        </div>
      ))}
    </div>
  );
};

export default CourseTab;