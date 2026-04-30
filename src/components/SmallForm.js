// "use client";
// import React, { useEffect, useState } from "react";
// import { Button, Form, Input } from "reactstrap";
// import { FaTimes } from "react-icons/fa";
// import eqform from "../assets/images/eq-frm.png"
// import Image from "next/image";
// const SmallForm = () => {
//   const [visible, setVisible] = useState(true); // ✅ show by default
//   const [animate, setAnimate] = useState(false);
//   let timeoutRef = null;

//   // Show popup with slide-up animation
//   const showPopup = () => {
//     setVisible(true);
//     setAnimate(true);
//     setTimeout(() => setAnimate(false), 600);
//   };

//   // Close popup and set timer to reopen after 10s
//   const handleClose = () => {
//     setVisible(false);
//     // clear any existing timer before setting a new one
//     if (timeoutRef) clearTimeout(timeoutRef);
//     timeoutRef = setTimeout(showPopup, 10000);
//   };

//   useEffect(() => {
//     return () => {
//       if (timeoutRef) clearTimeout(timeoutRef);
//     };
//   }, []);

//   if (!visible) return null;

//   return (
//     <div
//       className={`popup-form position-fixed bottom-0 end-0 m-3 p-2  shadow-lg border rounded bg-info ${
//         animate ? "slide-up" : ""
//       }`}
//       style={{
//         width: "180px",
//         zIndex: 1050,
//         transition: "transform 0.6s ease",
//       }}
//     >
//       <div className="d-flex justify-content-between align-items-center mb-2">
//         <Image src={eqform} alt="smartmind" className="w-100 objectfit-cover" style={{height:'100px'}} />
//         <Button
//           color="link"
//           className="text-muted p-0 position-absolute top-0"
//           onClick={handleClose}
//           style={{ fontSize: "1.2rem" }}
//         >
//           <FaTimes />
//         </Button>
//       </div>

//       <Form>
//         <Input type="text" placeholder="Your Name" className="mb-2" bsSize="sm" />
//         <Input type="email" placeholder="Your Email" className="mb-2" bsSize="sm" />
//         <Input
//           type="textarea"
//           placeholder="Your Message"
//           className="mb-2"
//           rows="2"
//           bsSize="sm"
//         />
//         <Button color="danger" size="sm" className="w-100">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default SmallForm;
