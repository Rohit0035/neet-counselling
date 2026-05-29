import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Providers from "./providers";
import BootstrapClient from "@/components/BootstrapClient";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Counselling App",
  description: "Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}