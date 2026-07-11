"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function MenuItem({
	item,
	openMenu,
	setOpenMenu,
}) {
	const pathname = usePathname();

	const hasChildren = item.children?.length > 0;

	if (hasChildren) {
		const isOpen = openMenu === item.name;

		return (
			<li className="nav-item mb-2">
				<button
					type="button"
					className="btn btn-link text-decoration-none text-white w-100 text-start d-flex justify-content-between align-items-center"
					onClick={() =>
						setOpenMenu(isOpen ? null : item.name)
					}
				>
					{item.name}

					<span>
						{isOpen ? <FaArrowUp /> : <FaArrowDown />}
					</span>
				</button>

				{isOpen && (
					<ul className="nav flex-column ms-3">
						{item.children.map((child) => (
							<MenuItem
								key={child.name}
								item={child}
								openMenu={openMenu}
								setOpenMenu={setOpenMenu}
							/>
						))}
					</ul>
				)}
			</li>
		);
	}

	const isActive = pathname === item.link;

	return (
		<li className="nav-item mb-2">
			<Link
				href={item.link}
				className={`nav-link ${
					isActive
						? "bg-primary text-white rounded text-decoration-none"
						: "text-white text-decoration-none"
				}`}
			>
				{item.name}
			</Link>
		</li>
	);
}