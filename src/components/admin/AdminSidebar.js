"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

const menu = [
	{
		name: "Dashboard",
		link: "/admin/dashboard",
	},
	{
		name: "Blogs",
		children: [
			{
				name: "Categories",
				link: "/admin/blog-categories",
			},
			{
				name: "Blogs",
				link: "/admin/blogs",
			},
			{
				name: "Comments",
				link: "/admin/blog-comments",
			},
		],
	},
	{
		name: "Notices",
		children: [
			{
				name: "Categories",
				link: "/admin/notice-categories",
			},
			{
				name: "Notices",
				link: "/admin/notices",
			},
		],
	},
	{
		name: "Education",
		children: [
			{
				name: "Universities",
				link: "/admin/universities",
			},
			{
				name: "Institutes",
				link: "/admin/institutes",
			},
			{
				name: "Counsellings",
				link: "/admin/counsellings",
			},
			{
				name: "Courses",
				link: "/admin/courses",
			},
		],
	},
	{
		name: "Packages",
		children: [
			{
				name: "Packages",
				link: "/admin/packages",
			},
			{
				name: "Student Packages",
				link: "/admin/student-packages",
			},
		],
	},
	{
		name: "Announcements",
		link: "/admin/announcements",
	},
	{
		name: "Events",
		link: "/admin/events",
	},
	{
		name: "Testimonials",
		link: "/admin/testimonials",
	},
	{
		name: "Videos",
		link: "/admin/videos",
	},
	{
		name: "Students",
		link: "/admin/students",
	},
];

export default function AdminSidebar() {
	const pathname = usePathname();

	const [openMenu, setOpenMenu] = useState(null);

	// Automatically open the parent menu for the current page
	useEffect(() => {
		const activeMenu = menu.find(
			(item) =>
				item.children &&
				item.children.some((child) => pathname.startsWith(child.link))
		);

		if (activeMenu) {
			setOpenMenu(activeMenu.name);
		}
	}, [pathname]);

	return (
		<>
			{/* Desktop Sidebar */}
			<div
				className="bg-dark text-white p-3 d-none d-lg-block flex-shrink-0"
				style={{
					width: "250px",
					minWidth: "250px",
					maxWidth: "250px",
					height: "100vh",
					overflowY: "auto",
					position: "sticky",
					top: 0,
				}}
			>
				<h3 className="mb-4">Admin Panel</h3>

				<ul className="nav flex-column">
					{menu.map((item) => (
						<MenuItem
							key={item.name}
							item={item}
							openMenu={openMenu}
							setOpenMenu={setOpenMenu}
						/>
					))}
				</ul>
			</div>

			{/* Mobile Sidebar */}
			<div
				className="offcanvas offcanvas-start bg-dark text-white"
				tabIndex={-1}
				id="adminSidebar"
			>
				<div className="offcanvas-header">
					<h5 className="offcanvas-title">Admin Panel</h5>

					<button
						type="button"
						className="btn-close btn-close-white"
						data-bs-dismiss="offcanvas"
					></button>
				</div>

				<div className="offcanvas-body">
					<ul className="nav flex-column">
						{menu.map((item) => (
							<MenuItem
								key={item.name}
								item={item}
								openMenu={openMenu}
								setOpenMenu={setOpenMenu}
							/>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}