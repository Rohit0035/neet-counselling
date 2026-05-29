"use client";

import { useEffect, useState } from "react";

export default function BlogCommentsTable() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const res = await fetch("/api/blog-comments");
    const data = await res.json();

    setComments(data);
  };

  const toggleStatus = async (id, status) => {
    await fetch(`/api/blog-comments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        status: !status,
      }),
    });

    fetchComments();
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Blog</th>
          <th>Name</th>
          <th>Email</th>
          <th>Comment</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {comments.map((item) => (
          <tr key={item._id}>
            <td>{item.blog?.title}</td>

            <td>{item.name}</td>

            <td>{item.email}</td>

            <td>{item.comment}</td>

            <td>
              {item.status
                ? "Active"
                : "Inactive"}
            </td>

            <td>
              <button
                className="btn btn-info btn-sm"
                onClick={() =>
                  toggleStatus(
                    item._id,
                    item.status
                  )
                }
              >
                Toggle Status
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}