"use client";

import { usePathname } from "next/navigation";
import AOSWrapper from "@/components/website/AOSWrapper";
import MainNavbar from "@/components/website/MainNavbar";
import Footer from "@/components/website/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/auth/login" || pathname === "/auth/register" || pathname === "/auth/forgot";

  return (
    <>
      {!hideLayout && <MainNavbar />}
      <AOSWrapper>
        <main>{children}</main>
      </AOSWrapper>
      {!hideLayout && <Footer />}
    </>
  );
}
