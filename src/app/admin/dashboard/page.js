import DashboardCards from '@/components/admin/DashboardCards'

export default function DashboardPage() {
	return (
		<div className="container-fluid py-3">
			<div className="card shadow-lg border-0">
				<div className="card-header bg-white d-flex justify-content-between align-items-center">
					<h4 className="mb-0">Dashboard</h4>
				</div>

				<div className="card-body">
					<DashboardCards />
				</div>
			</div>
		</div>
	)
}