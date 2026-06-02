"use client";

import { signOut } from "next-auth/react";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-slate-800">
          Welcome, Student 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Glad to see you back.
        </p>

        <button
          className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={() => {
            signOut({ callbackUrl: "/student/auth/login" });
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}