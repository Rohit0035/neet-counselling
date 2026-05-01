// components/menuData.js
"use client";

const menuData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About ",
    path: "/about",
  },
  {
    name: "Courses",
    path: "/",
    submenu: [
      {
        title: " Counsellings",
        items: [
          { label: "NEET UG", path: "/neet-ug" },
          { label: "NEET PG", path: "/neet-pg" },
          { label: "NEET MDS", path: "/neet-mds" },
          { label: "INICET", path: "/inicet" },
          { label: "DNB PDCET", path: "/dnb-pdcet" },
          { label: "NEET SS", path: "/neet-ss" },
        ],
      },

    ],
  },
  // {
  //   name: "Rent",
  //   path: "/rent",
  //   submenu: [
  //     {
  //       title: "Popular Choices",
  //       items: [
  //         { label: "Owner Properties", path: "/property" },
  //         { label: "Verified Properties", path: "/property" },
  //         { label: "Furnished Homes", path: "/property" },
  //         { label: "Bachelor Friendly Homes", path: "/property" },
  //         { label: "Immediately Available", path: "/property" },
  //       ],
  //     },
  //     {
  //       title: "Property Types",
  //       items: [
  //         { label: "Flat for rent in Indore", path: "/property" },
  //         { label: "House for rent in Indore", path: "/property" },
  //         { label: "Villa for rent in Indore", path: "/property" },
  //         { label: "Office Space in Indore", path: "/property" },
  //         { label: "Commercial Space in Indore", path: "/property" },
  //       ],
  //     },
  //     {
  //       title: "Budget",
  //       items: [
  //         { label: "Under ₹10,000", path: "/property" },
  //         { label: "₹10,000 – ₹15,000", path: "/property" },
  //         { label: "₹15,000 – ₹25,000", path: "/property" },
  //         { label: "Above ₹25,000", path: "/property" },
  //       ],
  //     },
  //     {
  //       title: "Explore",
  //       items: [
  //         { label: "Localities", path: "/property" },
  //         { label: "Buy vs Rent", path: "/buy-vs-rent" },
  //         { label: "Find an Agent", path: "/agents" },
  //         { label: "Share Requirement", path: "/share-requirement" },
  //         { label: "Property Services", path: "/property-services" },
  //         // { label: "Rent Agreement", path: "/rent-agreement" },
  //       ],
  //     },
  //   ],
  // },

  {
    name: "Package",
    path: "/package",
  },
  {
    name: "Blog",
    path: "/",
  },
  {
    name: "Notice",
    path: "/",
  },
  {
    name: "Gallery",
    path: "/",
  },
  {
    name: "Review",
    path: "/",
  },
  {
    name: "Contact Us",
    path: "/",
  },
];

export default menuData;
