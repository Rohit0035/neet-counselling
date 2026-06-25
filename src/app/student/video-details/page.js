"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Input,
  Badge,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";

import {
  FaThumbsUp,
  FaBookmark,
  FaShareAlt,
  FaEye,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import StudentLayoutWrapper from "../components/StudentLayout";

const VideoDetailsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  const videos = [
    {
      id: 1,
      title: "INICET Jan 2026 Rules",
      views: "12K",
      date: "Jun 16, 2026",
      videoUrl:
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumb:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
      description:
        "Complete Guide for INICET 2026 Counselling Process, Eligibility, Allotment, Reporting and Important Instructions.",
    },
    {
      id: 2,
      title: "Round Wise Counselling",
      views: "8K",
      date: "Jun 12, 2026",
      videoUrl:
        "https://www.youtube.com/embed/ysz5S6PUM-U",
      thumb:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
      description:
        "Learn round wise counselling strategy and seat allotment process.",
    },
    {
      id: 3,
      title: "Seat Matrix Guide",
      views: "20K",
      date: "Jun 10, 2026",
      videoUrl:
        "https://www.youtube.com/embed/tgbNymZ7vqY",
      thumb:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600",
      description:
        "Detailed explanation of seat matrix and category distribution.",
    },
    {
      id: 4,
      title: "Choice Filling Strategy",
      views: "15K",
      date: "Jun 08, 2026",
      videoUrl:
        "https://www.youtube.com/embed/jNQXAC9IVRw",
      thumb:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
      description:
        "Master choice filling strategy to maximize your chances.",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(
    videos[0]
  );

  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Dhanu",
      message: "Very helpful video. Thanks.",
    },
    {
      id: 2,
      name: "Rahul",
      message:
        "Excellent counselling explanation.",
    },
  ]);

  const handleComment = () => {
    if (!comment.trim()) return;

    setComments([
      {
        id: Date.now(),
        name: "You",
        message: comment,
      },
      ...comments,
    ]);

    setComment("");
  };

  return (
    <StudentLayoutWrapper>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem >
          Video
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Video Details
        </BreadcrumbItem>
      </Breadcrumb>
      <Container fluid className="py-4">
        <Row>

          <Col lg="8">

            <Card
              className="border-0 shadow"
              style={{
                borderRadius: "18px",
                overflow: "hidden",
              }}
              data-aos="zoom-in"
            >
              <div className="ratio ratio-16x9">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  allowFullScreen
                />
              </div>
            </Card>

            <Card
              className="border-0 shadow-sm mt-3"
              style={{
                borderRadius: "18px",
              }}
              data-aos="zoom-in"
            >
              <CardBody>
                <Badge
                  color="warning"
                  pill
                  className="px-3 py-2"
                >
                  PREMIUM
                </Badge>

                <h3 className="fw-bold mt-3">
                  {selectedVideo.title}
                </h3>

                <div className="d-flex flex-wrap justify-content-between align-items-center mt-3">
                  <div className="d-flex gap-4 text-muted">
                    <span>
                      <FaEye className="me-1" />
                      {selectedVideo.views}
                    </span>

                    <span>
                      <FaClock className="me-1" />
                      {selectedVideo.date}
                    </span>
                  </div>

                  <div className="d-flex gap-2 mt-2 mt-md-0">
                    <Button
                      color="light"
                      className="rounded-pill p-1"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '100px'
                      }}
                    >
                      <FaThumbsUp />
                    </Button>

                    <Button
                      color="light"
                      className="rounded-pill p-1"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '100px'
                      }}
                    >
                      <FaBookmark />
                    </Button>

                    <Button
                      color="light"
                      className="rounded-pill p-1"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '100px'
                      }}
                    >
                      <FaShareAlt />
                    </Button>
                  </div>
                </div>

                <hr />

                <div
                  style={{
                    background: "#f8f9fa",
                    borderRadius: "14px",
                    padding: "15px",
                  }}
                >
                  <h6 className="fw-bold">
                    Description
                  </h6>

                  <p className="mb-0  small text-secondary">
                    {selectedVideo.description}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card
              className="border-0 shadow-sm mt-4"
              style={{
                borderRadius: "18px",
              }}
              data-aos="zoom-in"
            >
              <CardBody>
                <h4 className="fw-bold mb-4">
                  Comments ({comments.length})
                </h4>


                <div className="d-flex gap-3 mb-4">
                  <div
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: "50%",
                      background: "#4F46E5",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Y
                  </div>

                  <div className="flex-grow-1">
                    <Input
                      value={comment}
                      onChange={(e) =>
                        setComment(
                          e.target.value
                        )
                      }
                      placeholder="Add a public comment..."
                    />

                    <div className="text-end mt-3">
                      <Button
                        color="primary"
                        onClick={handleComment}
                      >
                        <FaPaperPlane className="me-2" />
                        Comment
                      </Button>
                    </div>
                  </div>
                </div>


                {comments.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex gap-3 mb-4"
                  >
                    <div
                      style={{
                        width: 45,
                        height: 45,
                        borderRadius: "50%",
                        background: "#E5E7EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent:
                          "center",
                        fontWeight: 700,
                      }}
                    >
                      {item.name
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1">
                        {item.name}
                      </h6>

                      <p className="text-muted mb-2">
                        {item.message}
                      </p>

                      <Button
                        size="sm"
                        color="link"
                        className="text-decoration-none p-0"
                      >
                        👍 Like
                      </Button>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Col>


          <Col lg="4">
            <Card
              className="border-0 shadow-sm"
              style={{
                borderRadius: "18px",
                position: "sticky",
                top: "90px",
              }}
              data-aos="zoom-in"
            >
              <CardBody>
                <h5 className="fw-bold mb-4">
                  Related Videos
                </h5>

                {videos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() =>
                      setSelectedVideo(video)
                    }
                    className="d-flex mb-3 p-2"
                    style={{
                      cursor: "pointer",
                      borderRadius: "14px",
                      background:
                        selectedVideo.id ===
                          video.id
                          ? "#EEF2FF"
                          : "#fff",
                      transition: "0.3s",
                    }}
                  >
                    <img
                      src={video.thumb}
                      alt={video.title}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />

                    <div className="ms-3">
                      <h6
                        className=" mb-1 st-txt-o"
                        style={{
                          fontSize: '15px'
                        }}

                      >
                        {video.title}
                      </h6>

                      <small className="text-muted">
                        {video.views} views
                      </small>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </StudentLayoutWrapper>
  );
};

export default VideoDetailsPage;