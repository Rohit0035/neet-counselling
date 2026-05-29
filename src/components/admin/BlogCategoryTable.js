"use client";

import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import BlogCategoryForm from "./BlogCategoryForm";
import axios from "axios";
import toast from "react-hot-toast";

export default function BlogCategoryTable({
  show,
  setShow,
  editData,
  setEditData,
}) {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCategories, setFilteredCategories] =
    useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const result = categories.filter((item) => {
      return (
        item.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.slug
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });

    setFilteredCategories(result);
  }, [search, categories]);

  const fetchCategories = async () => {
    const res = await fetch("/api/blog-categories");
    const data = await res.json();

    setCategories(data);
    setFilteredCategories(data);
  };

  const toggleStatus = async (id, status) => {
    try {
      const payload = { status: !status };

      await axios.put(
        `/api/blog-categories/${id}`,
        payload
      );

      toast.success(
        "Category updated successfully"
      );

      fetchCategories();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleEdit = (item) => {
    setEditData(item);
    setShow(true);
  };

  const columns = [
    {
      name: "Sr No",
      cell: (row, index) => index + 1,
      width: "100px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            checked={row.status}
            onChange={() =>
              toggleStatus(row._id, row.status)
            }
          />
        </div>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-warning btn-sm"
          onClick={() => handleEdit(row)}
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="form-control mb-3"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <DataTable
        columns={columns}
        data={filteredCategories}
        pagination
        highlightOnHover
        responsive
      />

      <BlogCategoryForm
        show={show}
        setShow={setShow}
        fetchCategories={fetchCategories}
        editData={editData}
        setEditData={setEditData}
      />
    </>
  );
}