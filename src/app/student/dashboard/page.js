"use client";

import DashAnnouncements from "../components/DashAnnouncements";
import DashboardHero from "../components/DashboardHero";
import DashChoiceList from "../components/DashChoiceList";
import DashCounselling from "../components/DashCounselling";
import DashEvents from "../components/DashEvents";
import DashPackages from "../components/DashPackages";
import DashReviews from "../components/DashReviews";
import DashWebinars from "../components/DashWebinars";
import StudentLayoutWrapper from "../components/StudentLayout";

export default function DashboardPage() {
  return (
    <StudentLayoutWrapper>
       <DashboardHero/>
       <DashCounselling/>
       <DashChoiceList/>
       <DashWebinars/>
       <DashAnnouncements/>
       <DashEvents/>
       <DashReviews/>
       <DashPackages/>
    </StudentLayoutWrapper>
  );
}