import { FaCog } from "react-icons/fa";
import {
  FiHome,
  FiVideo,
  FiDatabase,
  FiGitBranch,
  FiBarChart2,
  FiCompass,
  FiBookOpen,
  FiFileText,
  FiUser,
  FiAward,
  FiSettings,
  FiList,
  FiDollarSign,
  FiGrid,
  FiFeather,
} from "react-icons/fi";

const StudentMenuData = [
  {
    title: "Dashboard",
    icon: FiHome,
    link: "/student/dashboard",
  },

  {
    title: "Videos",
    icon: FiVideo,
    link: "/student/videos",
  },

  {
    title: "My Choice List",
    icon: FiList,
    link: "/student/choice-list",
  },

  {
    title: "Insights",
    icon: FiDatabase,
    children: [
      {
        title: "Allotments",
        icon: FiGitBranch,
        link: "/student/allotment",
      },
      {
        title: "Closing Ranks",
        icon: FiBarChart2,
        link: "/student/cosingranking",
      },
      {
        title: "Seat Matrix",
        icon: FiGrid,
        link: "/student/seat-matrix",
      },
      {
        title: "Fee, Stipend and Bond",
        icon: FiFeather,
        link: "/student/feestipendbond",
      },
    ],
  },
  {
    title: "Insights",
    icon: FiDatabase,
    children: [
      {
        title: "Allotments",
        icon: FiGitBranch,
        link: "/student/allotment",
      },
      {
        title: "Closing Ranks",
        icon: FiBarChart2,
        link: "/student/cosingranking",
      },
      {
        title: "Seat Matrix",
        icon: FiGrid,
        link: "/student/seat-matrix",
      },
      {
        title: "Fee, Stipend and Bond",
        icon: FiFeather,
        link: "/student/feestipendbond",
      },
    ],
  },


  {
    title: "Tools",
    icon: FaCog,
    children: [
      {
        title: "Allotment Mapping",
        icon: FiHome,
        link: "/student/allotment-mapping",
      },
      {
        title: "Rank Scan",
        icon: FiHome,
        link: "/student/universities",
      },
      {
        title: "Seat Increase",
        icon: FiBookOpen,
        link: "/student/courses",
      },
      {
        title: "Merit List",
        icon: FiBookOpen,
        link: "/student/merit-list",
      },
    ],
  },

  {
    title: "Get a Package",
    icon: FiDollarSign,
    link: "/student/packages",
  },

  {
    title: "Resources",
    icon: FiFileText,
    link: "/student/resources",
  },


];

export default StudentMenuData;