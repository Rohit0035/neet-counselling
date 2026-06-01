// ==========================================
// app/notice/page.jsx
// ==========================================

"use client";

import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import NoticeHero from "@/components/website/noticecomponent/NoticeHero";
import NoticeStats from "@/components/website/noticecomponent/NoticeStats";
import NoticeList from "@/components/website/noticecomponent/NoticeList";
import NoticeCTA from "@/components/website/noticecomponent/NoticeCTA";

const Notice = () => {
    const [categories, setCategories] = useState([]);
    const [notices, setNotices] = useState([]);
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    const fetchCategories = async () => {
        const res = await fetch("/api/website/notice-categories");
        const data = await res.json();

        setCategories([{ name: "All Notices" }, ...data]);
    };

    const fetchNotices = async () => {
        const res = await fetch("/api/website/notices");
        const data = await res.json();

        setNotices(data);
    };

    useEffect(() => {
        fetchCategories();
        fetchNotices();
    }, []);

    return (
        <>
            <NoticeHero categories={categories} notices={notices} />
            {/* <NoticeStats /> */}
            <NoticeList categories={categories} notices={notices}/>
            {/* <NoticeCTA /> */}
        </>
    );
};

export default Notice;