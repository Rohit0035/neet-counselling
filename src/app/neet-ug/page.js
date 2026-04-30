"use client";
import NeetUgFeature from "@/components/counsellings/NeetUgFeature";
import NeetUgHero from "@/components/counsellings/CounsellingsHero";
import NeetUgMd from "@/components/counsellings/NeetUgMd";
import NeetUgVideo from "@/components/counsellings/NeetUgVideo";
import neetImg from "../../assets/images/neetug-h1.png";
import CounsellingsHero from "@/components/counsellings/CounsellingsHero";
import {
    FaSearch,
    FaList,
    FaUniversity,
    FaBook,
    FaClipboardCheck,
    FaHospital,
    FaMoneyBill,
    FaMapMarkedAlt,
    FaChartLine,
    FaTrophy,
    FaUserGraduate,
    FaBookOpen,
} from "react-icons/fa";
import Thumbnail from "../../assets/images/neetug-h1.jpg";


import NeetImgVertical from "../../assets/images/neetug-m2.jpg";
import CounsellingFeature from "@/components/counsellings/CounsellingFeature";
import CounsellingOverview from "@/components/counsellings/CounsellingOverview";
import CounsellingVideo from "@/components/counsellings/CounsellingVideo";


const features = [
    { icon: <FaList />, title: "Allotments", desc: "Track multi-year allotments across rounds and quotas in one place." },
    { icon: <FaSearch />, title: "Rank Insights", desc: "Analyze ranks and explore realistic admission possibilities." },
    { icon: <FaClipboardCheck />, title: "Counselling Guide", desc: "Stay updated with key timelines and announcements." },
    { icon: <FaChartLine />, title: "Cutoff Trends", desc: "Understand previous year trends and closing ranks." },
    { icon: <FaMapMarkedAlt />, title: "Seat Matrix", desc: "Check real-time availability across colleges and quotas." },
    { icon: <FaHospital />, title: "Institutions", desc: "Explore hospitals, facilities, and infrastructure." },
    { icon: <FaMoneyBill />, title: "Fees & Bonds", desc: "Compare tuition fees, stipends, and service bonds." },
    { icon: <FaBook />, title: "Courses", desc: "Browse courses with duration and recognition." },
    { icon: <FaUniversity />, title: "Universities", desc: "Discover universities, affiliations, and details." },
];

const sections = [
    {
        icon: <FaTrophy size={32} className="text-st" />,
        title: "Understanding the Exam",
        content:
            "NEET MDS is a national-level entrance exam for postgraduate dental programs across India, offering centralized admission opportunities.",
    },
    {
        icon: <FaUserGraduate size={32} className="text-st" />,
        title: "Eligibility & Authority",
        content:
            "Conducted by NBE, candidates must hold a BDS degree and complete internship to participate in counselling.",
    },
    {
        icon: <FaBookOpen size={32} className="text-st" />,
        title: "Counselling Process",
        list: [
            "MCC handles All India Quota counselling",
            "States conduct separate counselling",
            "Multiple rounds including mop-up",
            "Seat allotment based on rank & preference",
        ],
    },
];

const videos = [
    {
        title: "Karnataka Closing Rank Analysis | NEET MDS",
        img: Thumbnail,
        videoId: "ysz5S6PUM-U",
        tag: "Karnataka Counselling",
        date: "1 year ago",
    },
    {
        title: "Delhi State Rank Strategy | NEET MDS",
        img: Thumbnail,
        videoId: "tgbNymZ7vqY",
        tag: "Delhi Counselling",
        date: "10 months ago",
    },
    {
        title: "Tamil Nadu Counselling Guide",
        img: Thumbnail,
        videoId: "ScMzIvxBSi4",
        tag: "Tamil Nadu",
        date: "8 months ago",
    },
    {
        title: "All India Quota Strategy",
        img: Thumbnail,
        videoId: "dQw4w9WgXcQ",
        tag: "AIQ Counselling",
        date: "6 months ago",
    },
];




export default function NeetUg() {
    return (
        <>
            <CounsellingsHero
                title="Your NEET UG rank has potential."
                highlight="Let’s unlock the right college"
                students="5k+ Students Enrolled"
                description="Find the right medical seat based on your rank. Simplify your counselling journey with smart insights."
                buttonText="Get Started"
                image={neetImg}
                icon={FaUserGraduate}
            />
            <CounsellingFeature
                titleLines={["Explore,", "Choose,", "Succeed"]}
                image={NeetImgVertical}
                features={features}
            />
            <CounsellingOverview
                title="NEET MDS 2025 Overview"
                subtitle="Everything you need to understand before starting your counselling journey"
                sections={sections}
                bgClass="bg-warning bg-opacity-10"
            />
            <CounsellingVideo
                title="Learn Counselling Through Videos"
                subtitle="Watch expert breakdowns, strategies, and real counselling insights"
                videos={videos}
            />
        </>
    );
}
