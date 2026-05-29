// ==========================================
// app/notice/page.jsx
// ==========================================

"use client";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import NoticeHero from "@/components/website/noticecomponent/NoticeHero";
import NoticeStats from "@/components/website/noticecomponent/NoticeStats";
import NoticeList from "@/components/website/noticecomponent/NoticeList";
import NoticeCTA from "@/components/website/noticecomponent/NoticeCTA";

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