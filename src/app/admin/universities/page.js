"use client";

import { useState } from "react";
import UniversityTable from "@/components/admin/University/UniversityTable";

export default function UniversitiesPage() {
	const [editData, setEditData] = useState(null);
	const [show, setShow] = useState(false);

	return (
		<div className="container-fluid py-3">
			<div className="card shadow-lg border-0">
				<div className="card-header bg-white d-flex justify-content-between align-items-center">
					<h4 className="mb-0">Universities</h4>

					<button
						className="btn btn-primary"
						onClick={() => setShow(true)}
					>
						<i className="bi bi-plus-lg me-2"></i>
						Add New
					</button>
				</div>

				<div className="card-body">

					<UniversityTable
						show={show}
						setShow={setShow}
						editData={editData}
						setEditData={setEditData}
						fetchData={() => { }}
					/>
				</div>
			</div>
		</div>
	);
}