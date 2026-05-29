"use client";

import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalBody,
} from "reactstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

const CounsellingVideo = ({
  title,
  subtitle,
  videos = [],
  bgClass = "bg-light",
}) => {
  const [modal, setModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const toggle = () => setModal(!modal);

  const openVideo = (videoId) => {
    setActiveVideo(videoId);
    setModal(true);
  };

  return (
    <section className={`${bgClass} py-5`}>
      <Container>

        {/* HEADER */}
        {(title || subtitle) && (
          <Row className="text-center mb-4">
            <Col data-aos="zoom-in">
              {title && <h2 className="fw-bold">{title}</h2>}
              {subtitle && (
                <p className="text-muted">{subtitle}</p>
              )}
            </Col>
          </Row>
        )}

        {/* SLIDER */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <Card
                className="border-0 shadow-sm h-100"
                style={{ cursor: "pointer" }}
                onClick={() => openVideo(video.videoId)}
              >
                {/* THUMBNAIL */}
                <div className="position-relative">
                  <Image
                    src={video.img}
                    alt={video.title}
                    width={400}
                    height={220}
                    className="card-img-top"
                  />

                  <div className="position-absolute top-50 start-50 translate-middle text-white">
                    <FaPlay size={30} />
                  </div>
                </div>

                {/* CONTENT */}
                <CardBody>
                  <h6 className="fw-semibold text-dark">
                    {video.title}
                  </h6>

                  {video.tag && (
                    <span className="badge bg-info text-white mt-2">
                      {video.tag}
                    </span>
                  )}

                  {video.date && (
                    <p className="text-muted small mt-2 mb-0">
                      {video.date}
                    </p>
                  )}
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* MODAL */}
        <Modal isOpen={modal} toggle={toggle} size="lg" centered>
          <ModalBody className="p-0">
            {activeVideo && (
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="YouTube video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </ModalBody>
        </Modal>

      </Container>
    </section>
  );
};

export default CounsellingVideo;