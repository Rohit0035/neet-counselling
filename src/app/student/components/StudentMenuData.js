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
    ],
  },

  {
    title: "Explore",
    icon: FiCompass,
    children: [
      {
        title: "Institutes",
        icon: FiHome,
        link: "/student/institutes",
      },
      {
        title: "Universities",
        icon: FiHome,
        link: "/student/universities",
      },
      {
        title: "Courses",
        icon: FiBookOpen,
        link: "/student/courses",
      },
    ],
  },

  {
    title: "Resources",
    icon: FiFileText,
    link: "/student/resources",
  },

];

export default StudentMenuData;