"use client";

import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Select from "react-select";
import {
  Card,
  CardBody,
  Row,
  Col,
  Input,
  Button,
} from "reactstrap";

import {
  FiDownload,
  FiFilter,
  FiTrash2,
} from "react-icons/fi";

import {
  BsArrowDownUp,
  BsThreeDotsVertical,
} from "react-icons/bs";

// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
import AllotmentDetailsModal from "@/app/student/allotment/AllotmentDetailsModal";
import ChanceLevelDropdown from "@/app/student/components/ChanceLevelDropdown";


const tableData = [
  {
    id: 1,
    order: 1,
    state: "Gujarat",
    institute: "Aadicura Superspec Hospital, Vadodara",
    course: "DM Cardiology",
    quota: "AIQ",
    category: "GEN",
    round: 1,
    rank: 245,
    chance: "Moderate",
  },
  {
    id: 2,
    order: 2,
    state: "Gujarat",
    institute: "Aadicura Superspec Hospital, Vadodara",
    course: "DM Cardiac Anaesthesia",
    quota: "AIQ",
    category: "GEN",
    round: 1,
    rank: 310,
    chance: "-",
  },
];

const levelOptions = [
  { value: 1, label: "1 Level" },
  { value: 2, label: "2 Level" },
  { value: 3, label: "3 Level" },
];

const filterOptions = [
  { value: "state", label: "State" },
  { value: "course", label: "Course" },
  { value: "institute", label: "Institute" },
  { value: "quota", label: "Quota" },
  { value: "category", label: "Category" },
];

const ChoiseListTable = () => {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState(null);
  const [filter, setFilter] = useState(null);

  const [modal, setModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const toggleModal = () => setModal(!modal);

  const filteredData = useMemo(() => {
    if (!search) return tableData;

    return tableData.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const exportExcel = () => {
    // const sheet = XLSX.utils.json_to_sheet(filteredData);
    // const workbook = XLSX.utils.book_new();

    // XLSX.utils.book_append_sheet(workbook, sheet, "Allotment");

    // const excelBuffer = XLSX.write(workbook, {
    //   type: "array",
    //   bookType: "xlsx",
    // });

    // saveAs(
    //   new Blob([excelBuffer]),
    //   "Allotment.xlsx"
    // );
  };

  
  const handleChanceChange = (id, chance) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, chance } : item
      )
    );
  };

  const columns = [
    {
      name: "ORDER",
      selector: (row) => row.order,
      width: "80px",
    },
    {
      name: "STATE",
      selector: (row) => row.state,
      sortable: true,
      width: "120px",
    },
    {
      name: "INSTITUTE",
      selector: (row) => row.institute,
      grow: 2,
    },
    {
      name: "COURSE",
      selector: (row) => row.course,
    },
    {
      name: "QUOTA",
      selector: (row) => row.quota,
      center: true,
    },
    {
      name: "CATEGORY",
      selector: (row) => row.category,
      center: true,
    },
    {
      name: "CR 2023 1",
      selector: () => "-",
      center: true,
    },
    {
      name: "CR 2023 2",
      selector: () => "-",
      center: true,
    },
    {
      name: "CR 2023 3",
      selector: () => "-",
      center: true,
    },
    {
      name: "CR 2024 1",
      selector: () => "-",
      center: true,
    },
    {
      name: "CR 2024 2",
      selector: () => "-",
      center: true,
    },
    {
      name: "CR 2024 3",
      selector: () => "-",
      center: true,
    },
    {
      name: "CR 2025 1",
      selector: () => "-",
      center: true,
    },
    {
      name: "CHANCE LEVEL",
      center: true,
      cell: (row) => (
        <ChanceLevelDropdown
          id={row.id}
          value={row.chance}
          onChange={(value) => handleChanceChange(row.id, value)}
        />
      ),
    },
    {
      name: "Action",
      center: true,
      cell: () => (
        <div className="d-flex gap-2">
          <FiTrash2 color="red" />
        </div>
      ),
      width: "80px",
    },
  ];

  return (
    <>
      <Card>
        <CardBody>

          <Row className="mb-3">

            <Col md={3}>
              <Input
                placeholder="Search..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </Col>

            <Col md={2}>
              <Select
                options={levelOptions}
                value={level}
                onChange={setLevel}
                placeholder="Level"
              />
            </Col>

            <Col md={3}>
              <Select
                options={filterOptions}
                value={filter}
                onChange={setFilter}
                placeholder="Select Filter"
              />
            </Col>

            <Col
              md={4}
              className="text-end"
            >
              <Button
                color="light"
                className="me-2"
                onClick={exportExcel}
              >
                <FiDownload /> Download
              </Button>

            </Col>

          </Row>

          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            responsive
            striped
            highlightOnHover
            pointerOnHover
            onRowClicked={(row) => {
              setSelectedRow(row);
              setModal(true);
            }}
          />

        </CardBody>
      </Card>

      <AllotmentDetailsModal
        isOpen={modal}
        toggle={toggleModal}
        data={selectedRow}
      />
    </>
  );
};

export default ChoiseListTable;