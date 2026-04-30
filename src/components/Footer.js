"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-5 pb-3 st-sec-bg text-white">

      <div className="container">
        <div className="row gy-4">

          {/* LEFT - LOGO SECTION */}
          <div className="col-lg-4 col-md-6">

            {/* LOGO + TEXT */}
            <div className="d-flex align-items-center mb-3">
              <h4 className="fw-bold mb-0">LOGO</h4>
            </div>

            <p className="text-white">
              Your trusted platform for NEET guidance, counselling, and exam preparation resources.
            </p>

            {/* <div className="d-flex gap-2 mt-3">
              <img src="/google-play.png" alt="Google Play" height="40" />
              <img src="/app-store.png" alt="App Store" height="40" />
            </div> */}

          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="fw-bold mb-3">QUICK LINKS</h4>
            <div className="d-flex flex-column gap-2 ">
              <Link href="#" className="footer-link text-white">Packages</Link>
              <Link href="#" className="footer-link text-white">Blogs & News</Link>
              <Link href="#" className="footer-link text-white">About us</Link>
              <Link href="#" className="footer-link text-white">Careers</Link>
              <Link href="#" className="footer-link text-white">Testimonials</Link>
              <Link href="#" className="footer-link text-white">Contact us</Link>
            </div>
          </div>

          {/* EXAMS */}
          <div className="col-lg-3 col-md-6 col-6">
            <h4 className="fw-bold mb-3 ">EXAMS</h4>
            <div className="d-flex flex-column gap-2">
              <Link href="#" className="footer-link text-white">NEET UG</Link>
              <Link href="#" className="footer-link text-white">NEET PG</Link>
              <Link href="#" className="footer-link text-white">NEET MDS</Link>
              <Link href="#" className="footer-link text-white">INICET</Link>
              <Link href="#" className="footer-link text-white">DNB PDCET</Link>
              <Link href="#" className="footer-link text-white">NEET SS</Link>
            </div>
          </div>

          {/* LEGAL */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fw-bold mb-3">LEGAL</h4>
            <div className="d-flex flex-column gap-2">
              <Link href="#" className="footer-link text-white">Privacy Policy</Link>
              <Link href="#" className="footer-link text-white">Package Policy</Link>
              <Link href="#" className="footer-link text-white">Fair Use & Access Policy</Link>
              <Link href="#" className="footer-link text-white">Terms & Conditions</Link>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <hr className="my-4 border-light opacity-25" />

        <div className="text-center small text-light opacity-75">
          © 2026 Private Limited
        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .footer-link {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
        }
        .footer-link:hover {
          color: #ffffff;
        }
      `}</style>

    </footer>
  );
};

export default Footer;