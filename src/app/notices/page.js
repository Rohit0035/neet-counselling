// ==========================================
// app/notice/page.jsx
// ==========================================

"use client";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import NoticeHero from "@/components/noticecomponent/NoticeHero";
import NoticeStats from "@/components/noticecomponent/NoticeStats";
import NoticeList from "@/components/noticecomponent/NoticeList";
import NoticeCTA from "@/components/noticecomponent/NoticeCTA";

const Notice = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    return (
        <>
            <NoticeHero/>
            {/* <NoticeStats /> */}
            <NoticeList />
            {/* <NoticeCTA /> */}
        </>
    );
};

export default Notice;