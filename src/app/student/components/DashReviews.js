"use client";

import { useEffect } from "react";
import { Container } from "reactstrap";
import { FaUserCircle, FaStar } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const DashReviews = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  const reviews = [
    {
      name: "Priya Sharma",
      state: "Delhi",
      college: "Delhi University",
      review:
        "IKnowledge helped me understand the admission process clearly. The expert guidance and college recommendations made my journey much easier.",
    },
    {
      name: "Arjun Reddy",
      state: "Hyderabad",
      college: "Osmania University",
      review:
        "The career counselling sessions gave me clarity about my future goals. I was able to choose the right course with confidence. The mentors were knowledgeable and always available to answer questions. Their advice helped me make an informed decision about my future.",
    },
    {
      name: "Sneha Patel",
      state: "Ahmedabad",
      college: "Gujarat University",
      review:
        "From scholarship information to admission updates, everything was available in one place. It saved me a lot of time and effort.",
    },
    {
      name: "Rahul Verma",
      state: "Lucknow",
      college: "University of Lucknow",
      review:
        "The personalized guidance and expert support helped me make informed decisions about my higher education options. I especially appreciated the detailed career roadmap.",
    },
    {
      name: "Ananya Nair",
      state: "Kerala",
      college: "University of Kerala",
      review:
        "I never missed an important deadline thanks to the timely reminders and detailed admission resources provided by IKnowledge.",
    },
    {
      name: "Vikram Singh",
      state: "Rajasthan",
      college: "University of Rajasthan",
      review:
        "The platform is user-friendly and packed with valuable insights. It helped me compare colleges and choose the best fit for my career goals.",
    },
  ];

  return (
    <section className="py-3 bg-white mt-4">
      <Container>
        <div className="text-start mb-3">
          <h4 className="fw-bold">
            Trusted by Students Across India
          </h4>

          <p className="text-secondary mb-0">
            Real success stories from students who achieved their
            academic and career goals with expert guidance,
            counselling, and educational resources from IKnowledge.
          </p>
        </div>

        <Swiper
          navigation
          modules={[Navigation]}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ height: "250px" }}
            >
              <div
                className="bg-white border rounded-4 shadow-sm p-4 d-flex flex-column h-100"
                data-aos="zoom-in"
              >
                <div className="d-flex gap-1 text-warning mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <div
                  className="flex-grow-1 mb-3"
                  style={{
                    minHeight: 0,
                    overflow: "hidden",
                  }}
                >
                  <PerfectScrollbar
                    options={{
                      suppressScrollX: true,
                    }}
                    style={{
                      maxHeight: "100%",
                    }}
                  >
                    <p className="text-secondary small mb-0">
                      "{item.review}"
                    </p>
                  </PerfectScrollbar>
                </div>

                <div className="d-flex align-items-center gap-3 mt-auto">
                  <FaUserCircle
                    size={55}
                    className="text-st flex-shrink-0"
                  />

                  <div>
                    <h6 className="fw-bold mb-0">
                      {item.name}
                    </h6>

                    <small className="text-muted d-block">
                      {item.state}
                    </small>

                    <small className="text-st fw-semibold">
                      {item.college}
                    </small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default DashReviews;