"use client";

import React, { useState } from "react";

import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	Input,
	Button,
	Form,
	FormGroup,
	Label,
	InputGroup,
} from "reactstrap";

import {
	Swiper,
	SwiperSlide,
} from "swiper/react";

import {
	Navigation,
	Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/images/logo-dark.png";
import AuthA from "@/assets/images/auth-a.jpg"
import AuthB from "@/assets/images/auth-b.jpg"
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
const slides = [
	{
		title: "Reset Your Password",
		desc: "Recover your account securely and continue your preparation journey.",
		img: AuthA,
	},
	{
		title: "Stay Connected",
		desc: "Access NEET, PG and INI CET resources anytime after resetting your password.",
		img: AuthB,
	},
];

const ResetPassword = () => {
	const { token } = useParams();
	const router = useRouter();
	const [formData, setFormData] = useState({
		password: "",
		confirmPassword: "",
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState("");
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

		// remove error while typing
		setErrors({
			...errors,
			[e.target.name]: "",
			general: "",
		});
	};
	const validate = () => {
		let newErrors = {};

		if (!formData.password) {
			newErrors.password = "Password is required";
		}

		if (!formData.confirmPassword) {
			newErrors.confirmPassword = "Confirm Password is required";
		}

		if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	};

	const handleResetPassword = async () => {
		try {
			if (!validate()) return;

			setLoading(true);

			await axios.post(
				`/api/auth/reset-password/${token}`,
				{
					password: formData.password,
				}
			);

			toast.success("Password reset successfully, please login");

			router.push("/student/auth/login");
		} catch (error) {
			setErrors({
				general:
					error?.response?.data?.error ||
					"Something went wrong",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			className="min-vh-100 d-flex align-items-center py-5"
			style={{
				background:
					"linear-gradient(to right,#f8fafc,#eef4ff)",
			}}
		>
			<Container>
				<Row className="align-items-stretch g-4">

					{/* Left Slider */}
					<Col lg="6" className="d-flex d-none d-sm-block">
						<Swiper
							className="w-100 h-100"
							modules={[Navigation, Autoplay]}
							navigation
							autoplay={{ delay: 3000 }}
							loop
						>
							{slides.map((item, index) => (
								<SwiperSlide key={index} className="h-100">

									<Card className="border-0 h-100 rounded-4">

										<CardBody className="p-5 d-flex flex-column justify-content-between h-100">

											<div>
												<h2 className="fw-bold mb-2">
													{item.title}
												</h2>

												<p className="text-muted">
													{item.desc}
												</p>
											</div>

											<div className="text-center">
												<Image
													src={item.img}
													alt="forgot-password"
													width={250}
													height={250}
													className="w-100"
												//   style={{ maxHeight: "230px" }}
												/>
											</div>

										</CardBody>
									</Card>

								</SwiperSlide>
							))}
						</Swiper>
					</Col>
					<Col lg="6" className="d-flex">
						<Card className="border-0 w-100 h-100 rounded-4">
							<CardBody className="p-5 d-flex flex-column justify-content-center">
								<div className="text-center mb-4">
									<Image
										src={Logo}
										alt="logo"
										width={300}
										// height={280}
										className="st-logo mx-auto"
									/>
									<h4 className="text-muted mt-3">
										Reset Password
									</h4>
									<p className="text-muted small">
										Create a new password for your account
									</p>
								</div>
								{errors.general && (
									<div className="alert alert-danger mt-3">
										{errors.general}
									</div>
								)}
								<Form>
									<Row>
										<Col md="12" lg="12">
											<FormGroup className="mb-4">
												<Label>New Password</Label>
												<InputGroup>
													<Input
														type={showPassword ? "text" : "password"}
														placeholder="Enter New Password"
														style={{
															height: "58px",
															borderRadius: "16px",
														}}
														name="password"
														value={formData.password}
														onChange={handleChange}
														className={errors.password ? "is-invalid" : ""}
													/>
													<Button color="link" onClick={() => setShowPassword(!showPassword)}>
														{showPassword ? <FaEyeSlash /> : <FaEye />}
													</Button>
												</InputGroup>
												{errors.password && (
													<span className="text-danger">{errors.password}</span>
												)}
											</FormGroup>
										</Col>
										<Col md="12" lg="12">
											<FormGroup className="mb-4">
												<Label>Confirm Password</Label>
												<InputGroup>
													<Input
														type={showConfirmPassword ? "text" : "password"}
														placeholder="Enter Confirm Password"
														style={{
															height: "58px",
															borderRadius: "16px",
														}}
														name="confirmPassword"
														value={formData.confirmPassword}
														onChange={handleChange}
														className={errors.confirmPassword ? "is-invalid" : ""}
													/>
													<Button color="link" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
														{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
													</Button>
												</InputGroup>
												{errors.confirmPassword && (
													<span className="text-danger">{errors.confirmPassword}</span>
												)}
											</FormGroup>
										</Col>
									</Row>
									<div className="d-grid gap-3">
										<Button
											className="border-0 fw-bold"
											style={{
												height: "58px",
												borderRadius: "16px",
												background: "#f97316",
											}}
											onClick={handleResetPassword}
											disabled={loading}
											color="primary"
											block
										>
											{loading ? "Submitting..." : 
												"Reset Password"}
										</Button>
									</div>

									{message && (
										<div className="alert alert-success mt-3">
											{message}
										</div>
									)}

									<div className="d-flex justify-content-center mt-3">
										<Link
											href="/student/auth/login"
											className="text-decoration-none fw-semibold text-st small"
										>
											Back to Login
										</Link>
									</div>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ResetPassword;