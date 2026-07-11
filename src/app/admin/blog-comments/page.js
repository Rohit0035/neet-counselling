import BlogCommentsTable from "@/components/admin/Blog/BlogCommentsTable";

export default function BlogCommentsPage() {
	return (
		<div className="container-fluid py-3">
			<div className="card shadow-lg border-0">
				<div className="card-header bg-white d-flex justify-content-between align-items-center">
					<h4 className="mb-0">Blog Comments</h4>

					{/* <button
            className="btn btn-primary"
            onClick={() => setShow(true)}
          >
            <i className="bi bi-plus-lg me-2"></i>
            Add Counselling
          </button> */}
				</div>

				<div className="card-body">

					<BlogCommentsTable />
				</div>
			</div>
		</div>
	);
}