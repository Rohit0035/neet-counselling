"use client";

import { SessionProvider } from "next-auth/react";
import { LoaderProvider } from "@/context/LoaderContext";

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <LoaderProvider>
        {children}
      </LoaderProvider>
    </SessionProvider>
  );
}