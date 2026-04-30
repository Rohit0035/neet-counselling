// app/layout.js
import "../assets/styles/globals.css";
import "../assets/styles/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";
import ClientLayout from "./ClientLayout"; 

export const metadata = {
  title: "SmartMind",
  description: "SmartMind official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
