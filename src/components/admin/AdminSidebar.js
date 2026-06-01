"use client";

import Link from "next/link";

export default function AdminSidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className="bg-dark text-white p-3 d-none d-lg-block"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h3 className="mb-4">Admin Panel</h3>

        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link
              href="/admin/dashboard"
              className="nav-link text-white"
            >
              Dashboard
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              href="/admin/blog-categories"
              className="nav-link text-white"
            >
              Blog Categories
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              href="/admin/blogs"
              className="nav-link text-white"
            >
              Blogs
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              href="/admin/blog-comments"
              className="nav-link text-white"
            >
              Blog Comments
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              href="/admin/notice-categories"
              className="nav-link text-white"
            >
              Notice Categories
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              href="/admin/notices"
              className="nav-link text-white"
            >
              Notices
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
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
            <li className="nav-item mb-2">
              <Link
                href="/admin/dashboard"
                className="nav-link text-white"
              >
                Dashboard
              </Link>
            </li>

            <li className="nav-item mb-2">
            <Link
              href="/admin/blog-categories"
              className="nav-link text-white"
            >
              Blog Categories
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              href="/admin/blogs"
              className="nav-link text-white"
            >
              Blogs
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              href="/admin/blog-comments"
              className="nav-link text-white"
            >
              Blog Comments
            </Link>
          </li>
          </ul>
        </div>
      </div>
    </>
  );
}