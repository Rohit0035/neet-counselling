"use client";
import NeetUgFeature from "@/components/counsellings/NeetUgFeature";
import NeetUgHero from "@/components/counsellings/CounsellingsHero";
import NeetUgMd from "@/components/counsellings/NeetUgMd";
import NeetUgVideo from "@/components/counsellings/NeetUgVideo";
import { FaUserGraduate } from "react-icons/fa";
import neetImg from "../../assets/images/neetug-h1.png";
import CounsellingsHero from "@/components/counsellings/CounsellingsHero";
export default function NeetPg() {
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
      <NeetUgFeature/>
      <NeetUgMd/>
      <NeetUgVideo/>
    </>
  );
}
