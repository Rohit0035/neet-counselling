"use client";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import StudentLayoutWrapper from "../components/StudentLayout";
import VideosList from "../components/VideosList";

export default function VideosPage() {
  return (
    <StudentLayoutWrapper>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Videos
        </BreadcrumbItem>
      </Breadcrumb>

      <VideosList />

    </StudentLayoutWrapper>
  );
}