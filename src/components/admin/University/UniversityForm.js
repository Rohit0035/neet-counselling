"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { universityTypes } from "@/lib/data";
import { useLoader } from "@/context/LoaderContext";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.string().min(1, "Type is required"),
  status: z.boolean(),
});

export default function UniversityForm({
  fetchData,
  editData,
  setEditData,
  show,
  setShow,
}) {
    const { setLoading } = useLoader();
  
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      type: "",
      status: true,
    },
  });

  useEffect(() => {
    if (editData) {
      setValue("name", editData.name);
      setValue("type", editData.type);
      setValue("status", editData.status);
    } else {
      reset({
        name: "",
        type: "",
        status: true,
      });
    }
  }, [editData, setValue, reset]);

  const handleClose = () => {
    setShow(false);

    setEditData(null);

    reset({
      name: "",
      type: "",
      status: true,
    });
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const payload = {
        ...data,
        slug: data.name.toLowerCase().replaceAll(" ", "-"),
      };

      if (editData) {
        await axios.put(
          `/api/universities/${editData._id}`,
          payload
        );
        toast.success(
          "University updated successfully"
        );
      } else {
        await axios.post(
          "/api/universities",
          payload
        );
        toast.success(
          "University added successfully"
        );
      }

      fetchData();

      handleClose();

    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
        "Something went wrong"
      );
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {editData ? "Edit University" : "Add University"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>

          <Form.Group className="mb-3">
            <Form.Label>University Name</Form.Label>

            <Form.Control
              type="text"
              {...register("name")}
            />

            {errors.name && (
              <span className="text-danger">
                {errors.name.message}
              </span>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>

            <Form.Select {...register("type")}>
              <option value="">Select Type</option>
              {
                universityTypes.map((type) => (
                  <option
                    key={type}
                    value={type}
                  >
                    {type}
                  </option>
                ))
              }
            </Form.Select>

            {errors.type && (
              <span className="text-danger">
                {errors.type.message}
              </span>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>

            <Form.Select
              {...register("status", {
                setValueAs: (v) => v === "true",
              })}
            >
              <option value="true">
                Active
              </option>

              <option value="false">
                Inactive
              </option>
            </Form.Select>

            {errors.status && (
              <span className="text-danger">
                {errors.status.message}
              </span>
            )}
          </Form.Group>

        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>

          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          >
            {editData
              ? "Update"
              : "Save"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}