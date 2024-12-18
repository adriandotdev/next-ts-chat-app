"use client";

import Response from "@/types/Response";
import axios, { AxiosError } from "axios";
import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpInput } from "@/types/Inputs";

function RegisterForm() {
	const {
		register,
		handleSubmit,
		watch,
		setError,
		formState: { errors, isSubmitting },
		reset,
		setFocus,
	} = useForm<SignUpInput>();

	const API_URL = String(process.env.NEXT_PUBLIC_API_URL);

	const OnSubmit: SubmitHandler<SignUpInput> = async (data) => {
		try {
			const result = await axios.post(`${API_URL}/api/v1/accounts/register`, {
				given_name: data.givenName,
				middle_name: data.middleName,
				last_name: data.lastName,
				username: data.username,
				password: data.password,
			});

			reset();
		} catch (err) {
			let error = err as AxiosError;

			let data = error.response?.data as Response;

			if (data.message === "USERNAME_EXISTS") {
				setError("username", { message: "Username already exists" });
				setFocus("username", { shouldSelect: true });

				alert("Username exists");
			}
		}
	};

	console.log(errors);

	const password = watch("password");

	return (
		<form
			onSubmit={handleSubmit(OnSubmit)}
			className="flex flex-col max-w-[30rem] w-full justify-center items-center gap-2 mt-4"
		>
			{/* Given Name */}
			<section className="w-full">
				<label
					className="label label-text text-base font-semibold"
					htmlFor="given-name"
				>
					Given Name
				</label>
				<input
					className={`w-full input input-primary ${
						errors.givenName?.message && "input-error"
					}`}
					type="text"
					id="given-name"
					placeholder="Please enter your given name"
					{...register("givenName", {
						required: "Please provide your given name",
					})}
				/>
				<small className="text-red-700">
					{errors.givenName?.message && errors.givenName.message}
				</small>
			</section>

			{/* Middle Name */}
			<section className="w-full">
				<label
					className="label label-text text-base font-semibold"
					htmlFor="middle-name"
				>
					Middle Name
				</label>
				<input
					className={`w-full input input-primary ${
						errors.middleName?.message && "input-error"
					}`}
					type="text"
					id="middle-name"
					placeholder="Please enter your middle name"
					{...register("middleName", {
						required: "Please provide your middle name",
					})}
				/>
				<small className="text-red-700">
					{errors.middleName?.message && errors.middleName.message}
				</small>
			</section>

			{/* Last Name */}
			<section className="w-full">
				<label
					className="label label-text text-base font-semibold"
					htmlFor="last-name"
				>
					Last Name
				</label>
				<input
					className={`w-full input input-primary ${
						errors.lastName?.message && "input-error"
					}`}
					type="text"
					id="last-name"
					placeholder="Please enter your last name"
					{...register("lastName", {
						required: "Please provide your last name",
					})}
				/>

				<small className="text-red-700">
					{errors.lastName?.message && errors.lastName.message}
				</small>
			</section>

			{/* Username Field */}
			<section className="w-full">
				<label
					className="label label-text text-base font-semibold"
					htmlFor="username"
				>
					Username
				</label>
				<input
					className={`w-full input input-primary ${
						errors.username?.message && "input-error"
					}`}
					type="text"
					id="username"
					placeholder="Please enter your username"
					{...register("username", {
						required: "Please provide your username",
						minLength: {
							value: 8,
							message: "Username must be at least 8 characters",
						},
					})}
				/>
				<small className="text-red-700">
					{errors.username?.message && errors.username.message}
				</small>
			</section>

			{/* Password Field */}
			<section className="w-full">
				<label
					className="label label-text text-base font-semibold"
					htmlFor="password"
				>
					Password
				</label>
				<input
					className={`w-full input input-primary ${
						errors.password?.message && "input-error"
					}`}
					type="password"
					id="password"
					placeholder="Please enter your password"
					{...register("password", {
						required: "Please provide your password",
						minLength: {
							value: 8,
							message: "Password must be at least 8 characters",
						},
					})}
				/>
				<small className="text-red-700">
					{errors.password?.message && errors.password.message}
				</small>
			</section>

			{/* Confirm Password Field */}
			<section className="w-full">
				<label
					className="label label-text text-base font-semibold"
					htmlFor="password"
				>
					Confirm your password
				</label>
				<input
					className={`w-full input input-primary ${
						errors.confirmPassword?.message && "input-error"
					}`}
					type="password"
					id="password"
					placeholder="Please confirm your password"
					{...register("confirmPassword", {
						required: "Please confirm your password",
						validate: (value) => value === password || "Password do not match",
					})}
				/>
				<small className="text-red-700">
					{errors.confirmPassword?.message && errors.confirmPassword.message}
				</small>
			</section>

			<button className="btn btn-primary w-full mt-3">
				{isSubmitting ? "Loading..." : "Sign Up"}
			</button>
		</form>
	);
}

export default RegisterForm;
