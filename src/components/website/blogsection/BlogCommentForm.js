"use client";

import React, { useState } from "react";

import {
  Card,
  CardBody,
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

import {
  FaComments,
  FaPaperPlane,
  FaTimes,
  FaClock,
  FaUserCircle,
} from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

const defaultComments = [
  {
    id: 1,
    name: "Rahul Sharma",
    date: "24 July 2026",
    message:
      "Amazing blog! The NEET preparation roadmap is very helpful for students.",
  },

  {
    id: 2,
    name: "Priya Mehta",
    date: "25 July 2026",
    message:
      "Loved the revision strategy section. Waiting for more medical career blogs.",
  },

  {
    id: 3,
    name: "Aman Verma",
    date: "26 July 2026",
    message:
      "This article explained everything in a simple and professional way.",
  },

  {
    id: 4,
    name: "Sneha Patel",
    date: "27 July 2026",
    message:
      "One of the best NEET blogs I have read recently. Very informative content.",
  },
];

const BlogCommentForm = ({comments = [], slug,fetchBlogComments}) => {
  const [showForm, setShowForm] = useState(false);

  // const [comments, setComments] =
  //   useState(defaultComments);

  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.comment) {
      toast.error(
        "Please fill all the fields"
      );
      return;
    };

    try {
        await axios.post(
          `/api/website/blogs/${slug}/comments`,
          formData
        );
        toast.success(
          "Comment posted successfully"
        );
        fetchBlogComments();
      setShowForm(false);

    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
        "Something went wrong"
      );
    }

  };

  return (
    <Card className="border-0 shadow-lg rounded-5 overflow-hidden">
      <div className="st-bg text-white p-4 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <div>
            <h3 className="fw-bold mb-0">
               Comments
            </h3>
            <small className="text-light">
              {comments.length} Comments Available
            </small>
          </div>
        </div>
        <Button
          className="rounded-pill btn btn-primary px-4 fw-semibold btn-sm" 
          onClick={() => setShowForm(true)}
        >
          Write Comment
        </Button>
      </div>
      <CardBody className="p-4">
        <div
          className="overflow-auto pe-2"
          style={{
            maxHeight: "500px",
          }}
        >
          <ListGroup flush>

            {comments.map((comment) => (
              <ListGroupItem
                key={comment.id}
                className="border-0 border-bottom py-4 px-0"
              >
                <div className="d-flex gap-3">
                  <div
                    className="rounded-circle st-bg-two text-white fw-bold d-flex align-items-center justify-content-center flex-shrink-0 shadow"
                    style={{
                      width: "60px",
                      height: "60px",
                      fontSize: "22px",
                    }}
                  >
                    {comment.name.charAt(0)}
                  </div>
                  <div className="w-100">
                    <div className="d-flex flex-wrap align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <h5 className="fw-bold mb-0">
                          {comment.name}
                        </h5>
                        <FaUserCircle className="text-secondary" />

                      </div>

                      <div className="d-flex align-items-center gap-2 text-secondary small">
                        <FaClock />
                        <span>
                          {formatDistanceToNow(new Date(comment.createdAt), {
                            addSuffix: true,
                          })}
                        </span>
                      </div>
                    </div>
                    <p className="text-secondary mb-0 small">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              </ListGroupItem>
            ))}

          </ListGroup>
        </div>
        {showForm && (
          <Card className="border-0 bg-light rounded-5 shadow-sm mt-4">
            <CardBody className="p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h4 className="fw-bold mb-0">
                  Add Your Comment
                </h4>
                <Button
                  color="danger"
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={() => setShowForm(false)}
                >
                  <FaTimes />
                </Button>
              </div>
              <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-4">
                  <Label className="fw-semibold">
                    Your Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="rounded-4 py-3 border-0 shadow-sm"
                  />
                </FormGroup>

                <FormGroup className="mb-4">
                  <Label className="fw-semibold">
                    Your Comment
                  </Label>

                  <Input
                    type="textarea"
                    rows="5"
                    placeholder="Write your comment..."
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        comment: e.target.value,
                      })
                    }
                    className="rounded-4 border-0 shadow-sm"
                  />
                </FormGroup>

                <Button
                  type="submit"
                  color="dark"
                  className="rounded-pill px-5 py-3 fw-semibold d-flex align-items-center gap-2"
                >
                  Post Comment

                  <FaPaperPlane />
                </Button>

              </Form>

            </CardBody>
          </Card>
        )}

      </CardBody>
    </Card>
  );
};

export default BlogCommentForm;