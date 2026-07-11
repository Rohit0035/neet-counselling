"use client";

import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import CounsellingForm from "./CounsellingForm";
import { useLoader } from "@/context/LoaderContext";

export default function CounsellingsTable({
  show,
  setShow,
  editData,
  setEditData,
}) {
  const [search, setSearch] = useState("");
  const [counsellings, setCounsellings] =
    useState([]);
  const [filteredCounsellings, setFilteredCounsellings] =
    useState([]);
  const { setLoading } = useLoader();
  useEffect(() => {
    fetchCounsellings();
  }, []);

  useEffect(() => {
    const result = counsellings.filter((item) => {
      return (
        item.name?.toLowerCase()
          .includes(search.toLowerCase()) ||
        item.counsellingType?.toLowerCase()
          .includes(search.toLowerCase())
      );
    });

    setFilteredCounsellings(result);
  }, [search, counsellings]);

  const fetchCounsellings = async () => {
    try{
      setLoading(true);
      const res = await axios.get("/api/counsellings");
      const data = res.data;
  
      setCounsellings(data);
      setFilteredCounsellings(data);

    }catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }
  };

  const toggleStatus = async (id, status) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `You want to ${status ? "deactivate" : "activate"
        } this counselling?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    });

    if (!result.isConfirmed) return;

    try {
      setLoading(true);
      await axios.put(`/api/counsellings/status/${id}`, {
        status: !status,
      });

      toast.success("Counselling updated successfully");
      fetchCounsellings();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }finally{
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditData(item);
    setShow(true);
  };

  const handleDelete = async (item) => {
    const result = await Swal.fire({
      title: "Delete Notice?",
      text: `You are about to delete "${item.title}". This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      setLoading(true);
      await axios.delete(
        `/api/counsellings/${item._id}`
      );

      toast.success("Counselling deleted successfully");

      fetchCounsellings();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }finally{
      setLoading(false);
    }
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
      name: "Counselling Type",
      selector: (row) => row.counsellingType,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
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
        <>
          <button
            className="btn btn-warning btn-sm me-2"
            onClick={() => handleEdit(row)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(row)}
          >
            Delete
          </button>
        </>
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
        data={filteredCounsellings}
        pagination
        highlightOnHover
        responsive
      />

      <CounsellingForm
        show={show}
        setShow={setShow}
        fetchCounsellings={fetchCounsellings}
        editData={editData}
        setEditData={setEditData}
      />
    </>
  );
}