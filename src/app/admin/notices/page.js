"use client";
import NoticesTable from "@/components/admin/Notice/NoticesTable";
import { useState } from "react";

export default function NoticesPage() {
	const [editData, setEditData] = useState(null);
	const [show, setShow] = useState(false);

	return (
		<div className="container-fluid py-3">
			<div className="card shadow-lg border-0">
				<div className="card-header bg-white d-flex justify-content-between align-items-center">
					<h4 className="mb-0">Notices</h4>

					<button
						className="btn btn-primary"
						onClick={() => setShow(true)}
					>
						<i className="bi bi-plus-lg me-2"></i>
						Add New
					</button>
				</div>

				<div className="card-body">
					<NoticesTable
						show={show}
						setShow={setShow}
						editData={editData}
						setEditData={setEditData}
						fetchNotices={() => { }}
					/>
				</div>
			</div>
		</div>
	);
}