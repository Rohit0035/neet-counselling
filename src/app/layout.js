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
  title: {
    default:
      "Iknowledge Education | NEET UG, PG & DNB Counselling Platform",
    template: "%s | Iknowledge Education",
  },

  description:
    "Iknowledge Education provides expert guidance for NEET UG, NEET PG, and DNB counselling. Access real-time cutoff data, seat matrix, college insights, and personalized support to secure your medical admission in India.",

  keywords: [
    "Iknowledge Education Pvt Ltd",
    "NEET counselling India",
    "NEET UG counselling",
    "NEET PG counselling",
    "DNB PDCET counselling",
    "MBBS admission India",
    "medical college admission guidance",
    "NEET cutoff trends",
    "NEET seat matrix",
    "college predictor NEET",
    "AIQ counselling",
    "state quota counselling",
    "medical admission consultancy India",
  ],

  authors: [{ name: "Iknowledge Education Pvt. Ltd." }],
  creator: "Iknowledge Education Pvt. Ltd.",
  publisher: "Iknowledge Education Pvt. Ltd.",

  metadataBase: new URL("https://yourdomain.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Iknowledge Education Pvt. Ltd. | NEET Counselling Experts",
    description:
      "Get expert NEET counselling support with Iknowledge Education. Explore colleges, cutoffs, and secure your admission with confidence.",
    url: "https://yourdomain.com",
    siteName: "Iknowledge Education",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iknowledge Education Counselling Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Iknowledge Education | NEET Counselling",
    description:
      "Smart guidance for NEET UG, PG & DNB admissions in India.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "education",
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
