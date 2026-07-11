"use client";

import { useEffect } from "react";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useForm, useFieldArray } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";
import { counsellingTypes, quickLinks, states } from "@/lib/data";
import Select from "react-select";
import { useLoader } from "@/context/LoaderContext";

const schema = z.object({
	name: z.string().min(1, "Name is required"),
	counsellingType: z.string().min(1, "Counselling type is required"),
	state: z.string().min(1, "State is required"),
	websiteGoto: z.string().optional(),
	websitePropectus: z.string().optional(),
	websiteRegistration: z.string().optional(),
	quotas: z.array(
		z.object({
			name: z.string().min(1, "Quota name is required"),
			eligibility: z.string().optional(),
		})
	),
	quickLinks: z.array(z.string()),
});

export default function CounsellingForm({
	fetchCounsellings,
	editData,
	setEditData,
	show,
	setShow,
}) {
	const { setLoading } = useLoader();
	
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			name: "",
			slug: "",
			counsellingType: "",
			state: "",
			websiteGoto: "",
			websitePropectus: "",
			websiteRegistration: "",
			quotas: [
				{
					name: "",
					eligibility: "",
				},
			],
		},
	});

	const {
		fields: quotaFields,
		append: appendQuota,
		remove: removeQuota,
	} = useFieldArray({
		control,
		name: "quotas",
	});

	useEffect(() => {
		if (editData) {
			reset({
				name: editData.name || "",
				slug: editData.slug || "",
				counsellingType: editData.counsellingType || "",
				state: editData.state || "",
				websiteGoto: editData.websiteGoto || "",
				websitePropectus: editData.websitePropectus || "",
				websiteRegistration: editData.websiteRegistration || "",
				quotas:
					editData.quotas?.length > 0
						? editData.quotas
						: [{ name: "", eligibility: "" }],
				quickLinks:
					editData.quickLinks?.length > 0
						? editData.quickLinks
						: [""],
			});
		} else {
			reset({
				name: "",
				slug: "",
				counsellingType: "",
				state: "",
				websiteGoto: "",
				websitePropectus: "",
				websiteRegistration: "",
				quotas: [
					{
						name: "",
						eligibility: "",
					},
				],
				quickLinks: [""],
			});
		}
	}, [editData, reset]);

	const handleClose = () => {
		setShow(false);
		setEditData(null);

		reset({
			name: "",
			slug: "",
			counsellingType: "",
			state: "",
			websiteGoto: "",
			websitePropectus: "",
			websiteRegistration: "",
			quotas: [
				{
					name: "",
					eligibility: "",
				},
			],
			quickLinks: [""],
		});
	};

	const onSubmit = async (data) => {
		try {
			setLoading(true);
			if (editData) {
				await axios.put(`/api/counsellings/${editData._id}`, data);

				toast.success("Counselling updated successfully");
			} else {
				await axios.post("/api/counsellings", data);

				toast.success("Counselling added successfully");
			}

			fetchCounsellings();

			handleClose();
		} catch (error) {
			console.error(error);

			toast.error(
				error?.response?.data?.message ||
				"Something went wrong"
			);
		}finally {
			setLoading(false);
		}
	};

	return (
		<Modal show={show} onHide={handleClose} centered size="lg">
			<Modal.Header closeButton>
				<Modal.Title>
					{editData ? "Edit Counselling" : "Add Counselling"}
				</Modal.Title>
			</Modal.Header>

			<Form onSubmit={handleSubmit(onSubmit)}>
				<Modal.Body>
					{/* Name */}
					<Form.Group className="mb-3">
						<Form.Label>Name</Form.Label>

						<Form.Control {...register("name")} />

						{errors.name && (
							<span className="text-danger">
								{errors.name.message}
							</span>
						)}
					</Form.Group>

					{/* Counselling Type */}
					<Form.Group className="mb-3">
						<Form.Label>Counselling Type</Form.Label>

						<Form.Select
							{...register("counsellingType")}
						>
							<option value="">Select Counselling Type</option>

							{counsellingTypes.map((type) => (
								<option key={type} value={type}>
									{type}
								</option>
							))}
						</Form.Select>
						{errors.counsellingType && (
							<span className="text-danger">
								{errors.counsellingType.message}
							</span>
						)}
					</Form.Group>

					{/* State */}
					<Form.Group className="mb-3">
						<Form.Label>State/Authority</Form.Label>

						<Form.Select {...register("state")}>
							<option value="">Select State</option>
							<option value="Central">Central</option>
							<option value="Sponsored">Sponsored</option>

							{states.map((state) => (
								<option key={state} value={state}>
									{state}
								</option>
							))}
						</Form.Select>
						{errors.state && (
							<span className="text-danger">
								{errors.state.message}
							</span>
						)}
					</Form.Group>

					{/* Website Go To */}
					<Form.Group className="mb-3">
						<Form.Label>Website Go To Link</Form.Label>

						<Form.Control
							{...register("websiteGoto")}
						/>
					</Form.Group>

					{/* Prospectus */}
					<Form.Group className="mb-3">
						<Form.Label>Website Prospectus Link</Form.Label>

						<Form.Control
							{...register("websitePropectus")}
						/>
					</Form.Group>

					{/* Registration */}
					<Form.Group className="mb-3">
						<Form.Label>Website Registration Link</Form.Label>

						<Form.Control
							{...register("websiteRegistration")}
						/>
					</Form.Group>

					{/* Quotas */}
					<hr />

					<h5>Quotas</h5>

					{quotaFields.map((field, index) => (
						<Row key={field.id} className="mb-2">
							<Col md={12} className="mb-2">
								<Form.Label>Quota {index + 1}</Form.Label>
								<Form.Control
									placeholder="Quota Name"
									{...register(`quotas.${index}.name`)}
								/>
								{errors.quotas?.[index]?.name && (
									<span className="text-danger">
										{errors.quotas[index].name.message}
									</span>
								)}
							</Col>

							<Col md={12} className="mb-2">
								<Form.Label>Eligibility</Form.Label>
								<Form.Control
									as="textarea"
									placeholder="Eligibility"
									{...register(
										`quotas.${index}.eligibility`
									)}
								/>
								{errors.quotas?.[index]?.eligibility && (
									<span className="text-danger">
										{errors.quotas[index].eligibility.message}
									</span>
								)}
							</Col>

							<Col md={2}>
								<Button
									variant="danger"
									onClick={() => removeQuota(index)}
								>
									Remove
								</Button>
							</Col>
						</Row>
					))}

					<Button
						variant="success"
						onClick={() =>
							appendQuota({
								name: "",
								eligibility: "",
							})
						}
					>
						Add Quota
					</Button>

					<hr />

					<h5>Quick Links</h5>
					
					<Form.Group className="mb-3">
						<Form.Label>Quick Links</Form.Label>

						<Select
							{...register("quickLinks")}
							options={quickLinks.map((link) => ({
								value: link,
								label: link,
							}))}
							isMulti
						/>
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
						{editData ? "Update" : "Save"}
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
}