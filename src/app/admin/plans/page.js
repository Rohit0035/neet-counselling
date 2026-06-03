"use client";

import { useState } from "react";
import PlanTable from "@/components/admin/Blog/PlanTable";

export default function PlansPage() {
  const [editData, setEditData] = useState(null);
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Plans</h2>

        <button
          className="btn btn-primary"
          onClick={() => setShow(true)}
        >
          Add Plan
        </button>
      </div>

      <PlanTable
        show={show}
        setShow={setShow}
        editData={editData}
        setEditData={setEditData}
        fetchData={() => {}}
      />
    </div>
  );
}